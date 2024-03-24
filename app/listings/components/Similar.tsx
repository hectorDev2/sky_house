'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'
import ListingCard from '@/app/components/listings/ListingCard'
import getCurrentUser from '@/app/actions/getCurrentUser'
import getListings, { IListingsParams } from '@/app/actions/getListings'
import ClientOnly from '@/app/components/ClientOnly'
import EmptyState from '@/app/components/EmptyState'

interface HomeProps {
  searchParams: IListingsParams
}

const Similar = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='mySwiper'
    >
      <SwiperSlide>hola</SwiperSlide>
    </Swiper>
  )
}

export default Similar
