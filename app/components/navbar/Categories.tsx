'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { FaCarSide } from 'react-icons/fa'

import CategoryBox from '../CategoryBox'
import Container from '../Container'

export const categories = [
  {
    label: 'Terrenos',
    icon: TbBeach,
    description: 'los mejores terrenos donde construir'
  },
  {
    label: 'Departamentos',
    icon: GiWindmill,
    description: 'Departamentos de 1,2 y 3 habitaciones'
  },
  {
    label: 'Casas',
    icon: MdOutlineVilla,
    description: 'Casas para tu hogar.'
  },
  {
    label: 'Anticresis',
    icon: TbMountain,
    description: 'intercambio con Anticresis'
  },
  {
    label: 'Vehiculos',
    icon: FaCarSide,
    description: 'This is property has a beautiful pool!'
  }
]

const Categories = () => {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()
  const isMainPage = pathname === '/'

  if (!isMainPage) {
    return null
  }

  return (
    <Container>
      <div
        className='
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        '
      >
        {categories.map(item => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories
