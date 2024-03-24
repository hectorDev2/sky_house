const features = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className=''
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M14 3v4a1 1 0 0 0 1 1h4' />
        <path d='M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5' />
        <path d='M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0' />
        <path d='M18.5 19.5l2.5 2.5' />
      </svg>
    ),
    title: 'Proyectos',
    color: 'gray',
    description:
      'Una busqueda agil y sencilla por los proyectos disponibles en nuetro portal'
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='#e57171'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3' />
        <path d='M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3' />
        <path d='M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
      </svg>
    ),
    title: 'Publica hoy',
    color: 'red',
    description: 'Accede a los planes que tenemos para ti'
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='#e571c6'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
        <path d='M9 17v1a3 3 0 0 0 6 0v-1' />
      </svg>
    ),
    title: 'Confia en nosotros',
    color: 'red',
    description: 'Todo lo que nesecitas saber sobre nuestro portal'
  }
]
export const Features = () => {
  return (
    <div className='flex flex-wrap gap-5 mx-[30px] md:mx-[60px]'>
      {features.map(feature => (
        <div
          key={feature.title}
          className='rounded-md flex p-2 md:w-[30%] gap-2 items-center
 border-rose-300 border-2 hover:shadow-md transition'
        >
          <div
            className={`rounded-full  flex justify-center items-center h-[45px] p-2 border-rose-300 border-2`}
          >
            {feature.icon}
          </div>
          <div>
            <h2 className='text-3xl font-bold'>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
