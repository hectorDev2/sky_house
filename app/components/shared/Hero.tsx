/* eslint-disable @next/next/no-img-element */
export const Hero = () => {
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        background:
          'url(https://eystone.ng/wp-content/uploads/2022/03/real-estate-investing2.jpg)'
      }}
      className='relative w-full h-[45vh]'
    >
      <div className='absolute w-full h-full bg-black/50'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
        <h1 className='text-5xl font-bold mb-4'>Encuentra tu proximo hogar</h1>
        <p className='text-lg'>
          Explora en muchas opciones en nuestro banco de propiedades.
        </p>
        <button className='bg-white text-black px-4 py-2 rounded mt-4'>
          Encuentra el hogar de tus sueños
        </button>
      </div>
    </div>
  )
}
