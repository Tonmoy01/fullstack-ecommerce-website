import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);

  const lists = [
    {
      id: 1,
      name: 'Bangladesh',
    },
    {
      id: 2,
      name: 'India',
    },
    {
      id: 3,
      name: 'Pakistan',
    },
    {
      id: 4,
      name: 'Nepal',
    },
    {
      id: 5,
      name: 'Bhutan',
    },
    {
      id: 6,
      name: 'Mayanmar',
    },
    {
      id: 7,
      name: 'MalDives',
    },
    {
      id: 8,
      name: 'Sri Lanka',
    },
    {
      id: 9,
      name: 'China',
    },
    {
      id: 10,
      name: 'Japan',
    },
    {
      id: 11,
      name: 'Thailand',
    },
    {
      id: 12,
      name: 'Laos',
    },
    {
      id: 13,
      name: 'Indoneshia',
    },
  ];

  return (
    <>
      <Button className='country-dropdown' onClick={() => setisOpenModal(true)}>
        <div className='info d-flex flex-column'>
          <span className='lable'>Your Location</span>
          <span className='name'>
            Select <span style={{ textTransform: 'lowercase' }}>a</span>{' '}
            Location
          </span>
        </div>
        <span className='ml-auto icon'>
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className='location-modal'
        TransitionComponent={Transition}
      >
        <h4>Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className='close_' onClick={() => setisOpenModal(false)}>
          <MdClose />
        </Button>

        <div className='header-search w-100'>
          <input type='text' placeholder='Search for area...' />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className='country-list mt-5'>
          {lists?.map((list) => (
            <li key={list.id}>
              <Button onClick={() => setisOpenModal(false)}>{list.name}</Button>
            </li>
          ))}
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropDown;
