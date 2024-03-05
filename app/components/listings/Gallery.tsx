import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = ({ images }: { images: string[] }) => (
  <Gallery>
    <div className='flex gap-5'>
      <Item
        original={`${images[0]}`}
        thumbnail={`${images[0]}`}
        width='1200'
        height='750'
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            className='w-[600px] h-[710px]'
            onClick={open}
            src={`${images[0]}`}
          />
        )}
      </Item>
      <div className='grid grid-cols-2 gap-5'>
        <Item
          original={`${images[0]}`}
          thumbnail={`${images[0]}`}
          width='1200'
          height='750'
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              className='w-[340px] h-[340px]'
              onClick={open}
              src={`${images[0]}`}
            />
          )}
        </Item>

        <Item
          original={`${images[1]}`}
          thumbnail={`${images[1]}`}
          width='1200'
          height='460'
        >
          {({ ref, open }) => (
            <img
              className='w-[340px] h-[340px]'
              ref={ref}
              onClick={open}
              src={`${images[1]}`}
            />
          )}
        </Item>
        <Item
          original={`${images[0]}`}
          thumbnail={`${images[0]}`}
          width='1200'
          height='450'
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              className='w-[340px] h-[340px]'
              onClick={open}
              src={`${images[0]}`}
            />
          )}
        </Item>

        <Item
          original={`${images[1]}`}
          thumbnail={`${images[1]}`}
          width='1200'
          height='460'
        >
          {({ ref, open }) => (
            <img
              className='w-[340px] h-[340px]'
              ref={ref}
              onClick={open}
              src={`${images[1]}`}
            />
          )}
        </Item>
      </div>
    </div>
  </Gallery>
)
export default MyGallery
