import { Button } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2 nav-part-1'>
            <Button className='all-cate-tab align-items-center'>
              <span className='nav-menu-icon mr-2'>
                <IoIosMenu />
              </span>
              <span className='text'>ALL CATEGORIES</span>
              <span className='nav-arrow-icon ml-2'>
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className='col-sm-10 nav-part-2 d-flex align-items-center'>
            <ul className='list list-inline ml-auto'>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Home</Button>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Fashion</Button>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Electronic</Button>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Bakery</Button>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Grocery</Button>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Blog</Button>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Contact</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
