import { Button, Rating } from '@mui/material';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';

const ProductItem = () => {
  return (
    <div className='item product-item'>
      <div className='img-wrapper'>
        <img
          src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg'
          alt=''
          className='w-100'
        />

        <div className='badge badge-primary'>20%</div>

        <div className='actions'>
          <Button>
            <AiOutlineFullscreen style={{ fontSize: '20px' }} />
          </Button>
          <Button>
            <FaRegHeart />
          </Button>
        </div>
      </div>
      <div className='info'>
        <h4>Werther’s Original Caramel Hard Candies</h4>
        <span className='text-success d-block'>In Stock</span>
        <Rating
          className='mt-2 mb-2'
          name='read-only'
          value={4.5}
          precision={0.5}
          readOnly
        />
        <div className='d-flex'>
          <span className='old-price'>$20.00</span>
          <span className='net-price text-danger ml-2'>$14.00</span>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
