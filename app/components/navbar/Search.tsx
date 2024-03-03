'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import qs from 'query-string'

const Search = () => {
  const [inputSearch, setInputSearch] = useState<any>()
  const params = useSearchParams()
  const router = useRouter()

  const onSubmit = useCallback(async () => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      title: inputSearch
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery
      },
      { skipNull: true }
    )

    router.push(url)
  }, [router, params, inputSearch])

  return (
    <div
      className='
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      '
    >
      <div
        className='
          flex 
          flex-row 
          items-center 
          justify-between
        '
      >
        <div
          className='
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          '
        >
          <input
            onChange={value => setInputSearch(value.target.value)}
            className='focus:outline-none'
            type='text'
          />
          <div
            className='
              p-2 
              bg-rose-500 
              rounded-full 
              text-white 
            '
            onClick={onSubmit}
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
