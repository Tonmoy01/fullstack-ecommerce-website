import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries');
  }, []);

  const getCountry = async (url) => {
    const response = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      // console.log(res.data.data);
    });
  };

  return (
    <CountryContext.Provider
      value={{
        countryList,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
