/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
  var cloudinary: any
}

const uploadPreset = 'b2mmtvnl'

interface ImageUploadProps {
  onChange: (value: string) => void
  value: any
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const [photos, setPhotos] = useState<any>([])
  const handleUpload = useCallback(
    (result: any) => {
      setPhotos((prevPhotos: string[]) => [
        result.info.secure_url,
        ...prevPhotos
      ])
    },
    [setPhotos]
  )

  useEffect(() => {
    onChange(photos)
  }, [photos])

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 4
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className='
              max-w-full
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            '
          >
            {value.length > 0 ? (
              <div className='flex gap-2 justify-between flex-wrap'>
                {value.map((photo: string, index: number) => (
                  <Image
                    width={200}
                    height={100}
                    key={index}
                    src={photo}
                    alt='House'
                  />
                ))}
              </div>
            ) : (
              <>
                <TbPhotoPlus size={50} />
                <div className='font-semibold text-lg'>click para subir</div>
              </>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload
