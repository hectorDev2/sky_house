import { useSwiper } from 'swiper/react'

const SlideNavButtons = () => {
  const swiper = useSwiper()

  return (
    <div className='border-2 mx-auto border-gray-200 w-fit px-2 py-1 rounded-xl mt-4 space-x-4'>
      <button className=' p-1 rounded-md' onClick={() => swiper.slidePrev()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-arrow-narrow-left'
          width='44'
          height='44'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='#025BC1'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M5 12l14 0' />
          <path d='M5 12l4 4' />
          <path d='M5 12l4 -4' />
        </svg>
      </button>
      <button className=' p-1 rounded-md' onClick={() => swiper.slideNext()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-arrow-right'
          width='44'
          height='44'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='#025BC1'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M5 12l14 0' />
          <path d='M13 18l6 -6' />
          <path d='M13 6l6 6' />
        </svg>
      </button>
    </div>
  )
}

export default SlideNavButtons
