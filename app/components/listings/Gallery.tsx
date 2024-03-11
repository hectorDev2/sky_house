import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

const MyGallery = ({ images }: { images: string[] }) => {
  return (
    <Gallery>
      <div className=' lg:flex  gap-5'>
        <Item
          original={`${images[0]}`}
          thumbnail={`${images[0]}`}
          width='1200'
          height='750'
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              className=' mx-auto w-[600px] lg:w-[500px] rounded-md h-[710px] shadow-lg'
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
                className='w-[300px] rounded-md h-[340px] shadow-lg'
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
                className='w-[300px] h-[340px] rounded-md shadow-lg'
                ref={ref}
                onClick={open}
                src={`${images[1]}`}
              />
            )}
          </Item>
          <Item
            original={`${images[2]}`}
            thumbnail={`${images[2]}`}
            width='1200'
            height='450'
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                className='w-[340px] h-[340px] rounded-md shadow-lg'
                onClick={open}
                src={`${images[2]}`}
              />
            )}
          </Item>

          <Item
            original={`${images[3]}`}
            thumbnail={`${images[3]}`}
            width='1200'
            height='460'
          >
            {({ ref, open }) => (
              <img
                className='w-[340px] h-[340px]  rounded-md shadow-lg'
                ref={ref}
                onClick={open}
                src={`${images[3]}`}
              />
            )}
          </Item>
        </div>
      </div>
    </Gallery>
  )
}
export default MyGallery
