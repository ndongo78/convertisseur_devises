import React, {createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { api } from './api';

export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY= 'USD';
const DEFAULT_QUOTE_CURRENCY= 'GBP';

export const ConversionContextProvider = ({children}) => {
    const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
    const [quoteCurrency, setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
    const [date , setDate] = useState();
    const [rates, setRate] = useState({});

    const setBaseCurrency = (currency) => {
      return api(`/latest?base=${currency}`)
          .then((res)=> {
            _setBaseCurrency(currency);
            setDate(res.date);
            setRate(res.rates) 
          })
          .catch((error)=>{
             Alert.alert('Désolé, quelque chose ne vas pas', error.message)
          })
    }

    const swapCurrencies = () => {
        setBaseCurrency(quoteCurrency);
        setQuoteCurrency(baseCurrency);
      }

    const contextValue = {
        baseCurrency,
        quoteCurrency,
        setBaseCurrency,
        setQuoteCurrency,
        swapCurrencies,
        date,
        rates
    }
    
    useEffect(() => { 
      setBaseCurrency('USD')
    },[])

    return (
      <ConversionContext.Provider value={contextValue}>
        {children}
      </ConversionContext.Provider>
    )
}