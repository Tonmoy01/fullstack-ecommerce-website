import React, { useContext, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import CountryContext from '../../context/Context';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryLists, setCountryLists] = useState('');

  const { countryList } = useContext(CountryContext);

  useEffect(() => {
    setCountryLists(countryList);
  }, [countryList]);

  const selectCountry = (index) => {
    setSelectedTab(index);
    setSelectedCountry(countryList[index].country);
    setIsOpenModal(false);
  };

  // Search Filter
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== '') {
      const list = countryLists.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });

      setCountryLists(list);
    } else {
      setCountryLists(countryList);
    }
  };

  return (
    <>
      <Button className='country-dropdown' onClick={() => setIsOpenModal(true)}>
        <div className='info d-flex flex-column'>
          <span className='lable'>Your Location</span>
          <span className='name'>
            {/* Show the selected country */}
            {selectedCountry ? (
              <>
                {selectedCountry.length > 10
                  ? selectedCountry?.substring(0, 10) + '...'
                  : selectedCountry}
              </>
            ) : (
              'Select a Location'
            )}
          </span>
        </div>
        <span className='ml-auto icon'>
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className='location-modal'
        TransitionComponent={Transition}
      >
        <h4>Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className='close_' onClick={() => setIsOpenModal(false)}>
          <MdClose />
        </Button>

        <div className='header-search w-100'>
          <input
            type='text'
            placeholder='Search for area...'
            onChange={filterList}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className='country-list mt-5'>
          {countryLists?.length !== 0 &&
            countryLists?.map((item, idx) => (
              <li key={idx}>
                <Button
                  onClick={() => selectCountry(idx)}
                  className={`${selectedTab === idx ? 'active' : ''}`}
                >
                  {item.country}
                </Button>
              </li>
            ))}
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropDown;
