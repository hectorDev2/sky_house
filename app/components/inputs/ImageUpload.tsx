'use client'

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback, useState } from 'react'
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
      setPhotos([result.info.secure_url, ...photos])
      onChange(photos)
    },

    [onChange, photos]
  )

  console.log(photos, 'photos ')

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
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            '
          >
            <TbPhotoPlus size={50} />
            <div className='font-semibold text-lg'>click para subir</div>
            {value.length > 0 && (
              <div
                className='
              absolute inset-0 w-full h-full'
              >
                {value.map((photo: string, index: number) => (
                  <Image
                    key={index}
                    fill
                    className='w-[45%]'
                    src={photo}
                    alt='House'
                  />
                ))}
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload
