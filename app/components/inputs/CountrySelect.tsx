'use client'
import Select from 'react-select'
import placesPe from '../../database/places-pe.json'
import { dataFormat } from '@/app/database/format'

export type CountrySelectValue = {
  city: string
  label: string
  lat: string
  lng: string
  value: string
  latlng: number[]
  country: string
  iso2: string
  admin_name: string
  capital: string
  population: string
  population_proper: string
}

interface CountrySelectProps {
  value?: CountrySelectValue
  onChange: (value: CountrySelectValue) => void
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const placesFormat = dataFormat(placesPe)
  console.log(placesPe)

  return (
    <div>
      <Select
        placeholder='Sin ubicacion'
        isClearable
        options={placesFormat}
        value={value}
        onChange={value => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div
            className='
          flex flex-row items-center gap-3'
          >
            <div>{option.flag}</div>
            <div>{option.label}</div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={theme => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />
    </div>
  )
}

export default CountrySelect
