'use client'

import axios from 'axios'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Range } from 'react-date-range'
import { useRouter } from 'next/navigation'
import { differenceInDays, eachDayOfInterval } from 'date-fns'

import useLoginModal from '@/app/hooks/useLoginModal'
import { SafeListing, SafeReservation, SafeUser } from '@/app/types'

import Container from '@/app/components/Container'
import { categories } from '@/app/components/navbar/Categories'
import ListingHead from '@/app/components/listings/ListingHead'
import ListingInfo from '@/app/components/listings/ListingInfo'
import ListingReservation from '@/app/components/listings/ListingReservation'
import MyGallery from '@/app/components/listings/Gallery'
import useModelModal from '@/app/hooks/useModelModal'

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
}

interface ListingClientProps {
  reservations?: SafeReservation[]
  listing: SafeListing & {
    user: SafeUser
  }
  currentUser?: SafeUser | null
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  reservations = [],
  currentUser
}) => {
  const loginModal = useLoginModal()
  const modelModal = useModelModal()

  const router = useRouter()

  const disabledDates = useMemo(() => {
    let dates: Date[] = []

    reservations.forEach((reservation: any) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate)
      })

      dates = [...dates, ...range]
    })

    return dates
  }, [reservations])

  const category = useMemo(() => {
    return categories.find(items => items.label === listing.category)
  }, [listing.category])

  const [isLoading, setIsLoading] = useState(false)
  const [totalPrice, setTotalPrice] = useState(listing.price)
  const [dateRange, setDateRange] = useState<Range>(initialDateRange)

  const onRent = useCallback(() => {
    console.log(modelModal)

    modelModal.onOpen()
  }, [modelModal])

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }
    setIsLoading(true)

    axios
      .post('/api/reservations', {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing?.id
      })
      .then(() => {
        toast.success('cita reservada!')
        setDateRange(initialDateRange)
        router.push('/trips')
      })
      .catch(() => {
        toast.error('Algo salio mal')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [totalPrice, dateRange, listing?.id, router, currentUser, loginModal])

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate)

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price)
      } else {
        setTotalPrice(listing.price)
      }
    }
  }, [dateRange, listing.price])

  return (
    <Container>
      <div
        className='
          max-w-screen-lg 
          mx-auto
        '
      >
        <div className='flex flex-col gap-6'>
          <MyGallery images={listing.images} />
          <button onClick={onRent} className='w-[200px] flex gap-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-cube'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z' />
              <path d='M12 22v-10' />
              <path d='M12 12l8.73 -5.04' />
              <path d='M3.27 6.96l8.73 5.04' />
            </svg>
            vista 3d
          </button>
          <div
            className='
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            '
          >
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              locationValue={listing.locationValue}
            />
            <div
              className='
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              '
            >
              <ListingReservation
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={value => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ListingClient
