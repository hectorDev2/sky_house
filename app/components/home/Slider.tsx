'use client' // <===== REQUIRED

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'

import SlideNavButtons from './SlideNavButtons'

import { A11y, Navigation, Pagination } from 'swiper/modules'

const DemoSlider = () => {
  const products = [
    {
      id: 1,
      title: 'Sven Dota 2',
      subtitle: 'Heroe Dota 2',
      tagline: 'Escultura',
      description: 'Description 1'
    },
    {
      id: 2,
      title: 'Jhon Snow',
      subtitle: 'Escultura fantacia',
      tagline: 'Escultura',
      description: 'Description 1'
    },
    {
      id: 3,
      title: 'Parca',
      subtitle: 'Escultura fantacia',
      tagline: 'Escultura',
      description: 'Description 1'
    },
    {
      id: 4,
      title: 'Bowser villano',
      subtitle: 'Escultura fantacia',
      tagline: 'Escultura',
      description: 'Description 1'
    },
    {
      id: 5,
      title: 'Goku',
      subtitle: 'Escultura fantacia',
      tagline: 'Escultura',
      description: 'Description 1'
    },
    {
      id: 6,
      title: 'Naruto',
      subtitle: 'Escultura fantacia',
      tagline: 'Escultura',
      description: 'Description 1'
    }
  ]

  return (
    <>
      <h1 className='text-center'>
        Nuestros <span className='text-[var(--primary)]'>trabajos</span>{' '}
      </h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          480: { slidesPerView: 2 },
          740: { slidesPerView: 3 },
          1275: { slidesPerView: 4 }
        }}
      >
        {products.map(
          (item: {
            id: number
            title: string
            subtitle: string
            tagline: string
            description: string
          }) => (
            <SwiperSlide
              key={item.id}
              className=' !flex justify-center items-center'
            >
              <div className='flex-shrink-0 h-[400px] m-6 relative overflow-hidden border-5  border-[var(--primary)] rounded-xl max-w-xs shadow-lg'>
                <svg
                  className='absolute bottom-0 left-0 mb-8'
                  viewBox='0 0 375 283'
                  fill='none'
                  style={{ transform: 'scale(1.5) opacity: 0.1' }}
                >
                  <rect
                    x='159.52'
                    y='175'
                    width='152'
                    height='152'
                    rx='8'
                    transform='rotate(-45 159.52 175)'
                    fill='white'
                  />
                  <rect
                    y='107.48'
                    width='152'
                    height='152'
                    rx='8'
                    transform='rotate(-45 0 107.48)'
                    fill='white'
                  />
                </svg>
                <div className='relative pt-10 px-10 flex items-center justify-center'>
                  <div
                    className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
                    style={{
                      background:
                        'radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2'
                    }}
                  ></div>
                  <img
                    className='relative w-56 h-[260px] hover:scale-125 transition-all ease-linear hover:rotate-3'
                    src={`http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdb1imtlyp%2Fimage%2Fupload%2Fv1708615066%2Ffvwcsy61jlocbcirjpbn.jpg&w=3840&q=75`}
                    alt=''
                  />
                </div>
                <div className='relative text-white px-6 pb-6 mt-6'>
                  <span className='block opacity-75 -mb-1'>Indoor</span>
                  <div className='flex justify-between'>
                    <span className='block font-semibold text-xl'>
                      {item.title}
                    </span>
                    <span className=' bg-white rounded-full text-[var(--primary)] text-xs font-bold px-3 leading-none flex items-center'>
                      {item.tagline}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}

        <SlideNavButtons />
      </Swiper>
    </>
  )
}

export default DemoSlider
