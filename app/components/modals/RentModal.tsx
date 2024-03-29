'use client'

import axios from 'axios'
import { toast } from 'react-hot-toast'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import useRentModal from '@/app/hooks/useRentModal'
import Modal from './Modal'
import CategoryInput from '../inputs/CategoryInput'
import CountrySelect from '../inputs/CountrySelect'
import { categories } from '../navbar/Categories'
import ImageUpload from '../inputs/ImageUpload'
import Input from '../inputs/Input'
import Heading from '../Heading'

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  IMAGES = 2,
  DESCRIPTION = 3,
  PRICE = 4
}

const RentModal = () => {
  const router = useRouter()
  const rentModal = useRentModal()

  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(STEPS.CATEGORY)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: {
        country: '',
        city: '',
        lng: 0,
        lat: 0
      },
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      images: [],
      price: 1,
      title: '',
      description: ''
    }
  })

  const location = watch('location')
  const category = watch('category')
  const images = watch('images')

  const Map = useMemo(
    () =>
      dynamic(() => import('../Map'), {
        ssr: false
      }),
    []
  )

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const setImagesValue = (value: any) => {
    setValue('images', value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onBack = () => {
    setStep(value => value - 1)
  }

  const onNext = () => {
    setStep(value => value + 1)
  }

  const clearData = (data: any) => {
    if (data) {
      const { guestCount, bathroomCount, roomCount, location, ...restData } =
        data
      const { lng, lat, ...rest } = location

      return { location: rest, ...restData }
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = data => {
    const dataFormat = clearData(data)

    if (step !== STEPS.PRICE) {
      return onNext()
    }

    setIsLoading(true)

    axios
      .post('/api/listings', dataFormat)
      .then(() => {
        toast.success('Propiedad creada!')
        router.refresh()
        reset()
        setStep(STEPS.CATEGORY)
        rentModal.onClose()
      })
      .catch(() => {
        toast.error('Algo anda mal.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  let bodyContent = (
    <div className='flex flex-col gap-8'>
      <Heading
        title='como consideras tu propiedad?'
        subtitle='Selecciona una categoria'
      />
      <div
        className='
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        '
      >
        {categories.map(item => (
          <div key={item.label} className='col-span-1'>
            <CategoryInput
              onClick={category => setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Crear'
    }

    return 'Siguiente'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Regresar'
  }, [step])

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading title='Donde esta ubicado?' subtitle='Help guests find you!' />
        <CountrySelect
          value={location}
          onChange={value => setCustomValue('location', value)}
        />
        <Map center={location?.latlng} />
      </div>
    )
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Agregar fotos'
          subtitle='Muestra a tus clientes fotos de la propiedad'
        />
        <ImageUpload onChange={value => setImagesValue(value)} value={images} />
      </div>
    )
  }
  // if (step === STEPS.INFO) {
  //   bodyContent = (
  //     <div className='flex flex-col gap-8'>
  //       <Heading
  //         title='Comparte las cordenadas de su '
  //         subtitle='What amenitis do you have?'
  //       />
  //     </div>
  //   )
  // }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Como es mi propiedad?'
          subtitle='una breve descripcion ayuda mucho!'
        />
        <Input
          id='title'
          label='Titulo'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id='description'
          label='Descripcion'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Hora de poner el precio'
          subtitle='Cuanto vale su propiedad?'
        />
        <Input
          id='price'
          label='precio'
          formatPrice
          type='number'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title='Publica alguna propiedad'
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  )
}

export default RentModal
