import { useState } from 'react';
import { Button } from '@mui/material';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <nav>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2 nav-part-1'>
            <div className='cate-wrapper'>
              <Button
                className='all-cate-tab align-items-center'
                onClick={() => setIsOpenSidebar(!isOpenSidebar)}
              >
                <span className='nav-menu-icon mr-2'>
                  <IoIosMenu />
                </span>
                <span className='text'>ALL CATEGORIES</span>
                <span className='nav-arrow-icon ml-2'>
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebar-nav ${
                  isOpenSidebar === true ? 'open' : ''
                }`}
              >
                <ul>
                  <li>
                    <Link to='/'>
                      <Button>
                        Men <FaAngleRight className='ml-auto' />
                      </Button>
                    </Link>
                    <div className='sub-menu'>
                      <Link to='/'>
                        <Button>Clothing</Button>
                      </Link>
                      <Link to='/'>
                        <Button>Footware</Button>
                      </Link>
                      <Link to='/'>
                        <Button>Watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to='/'>
                      <Button>
                        Women <FaAngleRight className='ml-auto' />
                      </Button>
                    </Link>
                    <div className='sub-menu'>
                      <Link to='/'>
                        <Button>Clothing</Button>
                      </Link>
                      <Link to='/'>
                        <Button>Footware</Button>
                      </Link>
                      <Link to='/'>
                        <Button>Watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to='/'>
                      <Button>Watches</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <Button>Fruits & Vegetables</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <Button>Meats & Seafood</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <Button>Breakfast & Dairy</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <Button>Beverages</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
                  <Button>Men</Button> <FaAngleDown />
                </Link>
                <div className='sub-menu shadow'>
                  <Link to='/'>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to='/'>
                    <Button>Footware</Button>
                  </Link>
                  <Link to='/'>
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Women</Button> <FaAngleDown />
                </Link>
                <div className='sub-menu shadow'>
                  <Link to='/'>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to='/'>
                    <Button>Footware</Button>
                  </Link>
                  <Link to='/'>
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Beauty</Button>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Watches</Button>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Kids</Button>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/'>
                  <Button>Gift</Button>
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
