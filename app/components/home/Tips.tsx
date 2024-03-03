import React from 'react'

const Tips = () => {
  const tips = [
    {
      title: 'Constructora y antecedentes',
      content:
        'Es importante que averigüe los antecedentes de la constructora y consulte sobre los detalles y calidad de la construcción.'
    },
    {
      title: 'Tiempos de entrega',
      content:
        'Es importante que averigüe los tiempos de entrega de la construcción y consulte sobre los detalles y calidad de la construcción.'
    },
    {
      title: 'Permisos y habilitaciones',
      content:
        'Consulta si la obra cuenta con los permisos correspondientes, planos y es posible escriturar una vez finalizada.'
    },
    {
      title: 'Pagos y compra',
      content:
        'Asesórate sobre los modos de financiamiento, las formas de pago y sobre los costos para comprar y escriturar.'
    }
  ]
  return (
    <div className=' my-[50px] px-[65px] py-[50px]'>
      <h2 className='text-5xl '>Tips para comprar un proyecto</h2>
      <h3>
        Te dejamos unos consejos para que tengas en cuenta a la hora de comprar
        un inmueble para vivir o como inversión.
      </h3>
      <div className='flex my-[10px] gap-4 flex-wrap '>
        {tips.map((tip, index) => (
          <div
            className='bg-white drop-shadow-md
 flex gap-3 justify-between p-4 rounded-md w-[49%]'
            key={index}
          >
            <div className='bg-pink-600 drop-shadow-lg grid place-items-center rounded-full w-[56px] h-[56px]'>
              <h2 className='text-4xl text-white'>{index + 1}</h2>
            </div>
            <div className='text w-[90%]'>
              <h4 className='font-bold'>{tip.title}</h4>
              <p>{tip.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tips
