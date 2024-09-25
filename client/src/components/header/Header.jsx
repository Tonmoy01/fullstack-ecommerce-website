import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/eshop.png';
// import logo from '../../assets/e-Shop.png';
import CountryDropDown from '../countryDropDown/CountryDropDown';
import { Button } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import SearchBox from '../searchBox/searchBox';
import Navigation from '../navigation/Navigation';
import CountryContext from '../../context/Context';

const Header = () => {
  const { countryList } = useContext(CountryContext);
  // console.log(countryList);

  return (
    <>
      <div className='header-container'>
        {/* TOP STRIPE BAR */}
        <div className='top-stripe bg-blue'>
          <div className='container'>
            <p className='mb-0 mt-0 text-center'>
              Due to the COVID 19 epidemic, orders may be processed with a light
              delay
            </p>
          </div>
        </div>

        {/* MAIN HEADER */}
        <header className='header'>
          <div className='container'>
            <div className='row'>
              <div className='logo-wrapper d-flex align-items-center col-sm-2'>
                <Link to='/'>
                  <img src={logo} alt='' />
                </Link>
              </div>
              <div className='col-sm-10 d-flex align-items-center part-2'>
                {/* COUNTRY DROPDOWN LIST */}
                {countryList.length !== 0 && <CountryDropDown />}

                {/* SEARCH BAR */}
                <SearchBox />

                {/* HEADER RIGHT SIDE WITH ICONS */}
                <div className='part-3 d-flex align-items-center ml-auto'>
                  <Button className='user-circle mr-3'>
                    <FiUser />
                  </Button>
                  <div className='ml-auto cart-tab d-flex align-items-center'>
                    <span className='price'>$3.29</span>
                    <div className='position-relative ml-2'>
                      <Button className='user-circle'>
                        <IoBagOutline />
                      </Button>
                      <span className='count d-flex align-items-center justify-content-center'>
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* VERTICAL CATEGORY (NAV) BAR */}
        <Navigation />
      </div>
    </>
  );
};
export default Header;
