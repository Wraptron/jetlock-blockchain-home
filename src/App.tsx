import { useState, useEffect } from 'react';
import { ArrowDown, Download, Star } from 'lucide-react';
import Card from './components/card';
import CTA from './components/CTA';
// https://www.xe.com/currencyconverter/
// Define types for currencies and exchange rates
type CurrencyCode = 'USD' | 'INR' | 'EUR' | 'GBP';

type ExchangeRates = {
  [key in CurrencyCode]: {
    [key in CurrencyCode]?: number;
  };
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("1000");
  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>('USD');
  const [toCurrency, setToCurrency] = useState<CurrencyCode>('INR');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [isValidInput, setIsValidInput] = useState<boolean>(true);
  
  // Exchange rates (simplified for demo)
  const exchangeRates: ExchangeRates = {
    USD: {
      INR: 83.33,
      EUR: 0.92,
      GBP: 0.79,
      USD: 1
    },
   INR: {
      USD: 0.012,
      INR: 1
    },
    EUR: {
      USD: 1.09,
      INR: 1721.4,
      GBP: 0.86,
      EUR: 1
    },
    GBP: {
      USD: 1.27,
      INR: 2003.7,
      EUR: 1.16,
      GBP: 1
    }
  };

  // Calculate conversion whenever relevant values change
  useEffect(() => {
    if (isValidInput) {
      const numericAmount = parseFloat(amount);
      const rate = exchangeRates[fromCurrency][toCurrency] || 0;
      setConvertedAmount(parseFloat((numericAmount * rate).toFixed(2)));
    }
  }, [amount, fromCurrency, toCurrency, isValidInput]);
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setAmount(value);
    
    // Validate input
    const numericValue = parseFloat(value);
    setIsValidInput(!isNaN(numericValue) && numericValue >= 0);
  };
  
  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newCurrency = e.target.value as CurrencyCode;
    setFromCurrency(newCurrency);
    
    // Prevent same currency selection
    if (newCurrency === toCurrency) {
      setToCurrency(newCurrency === 'USD' ? 'INR' : 'USD');
    }
  };
  
  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newCurrency = e.target.value as CurrencyCode;
    setToCurrency(newCurrency);
    
    // Prevent same currency selection
    if (newCurrency === fromCurrency) {
      setFromCurrency(newCurrency === 'USD' ? 'INR' : 'USD');
    }
  };
  
  // Swap currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat().format(num);
  };
  
  return (
    <>
    <div className="max-w-auto  mt-6 mb-6 flex items-center ">
      {/* Stars */}
      <div className="absolute inset-5">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>
      
      {/* Globe illustration in the background */}
      <div className="absolute bottom-0 left-0 right-7 h-96 bg-blue-600 opacity-20 rounded-full scale-150 translate-y-1" />
      
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 ">Exchange Money 💙</h1>
          {/* <p className="text-blue-100">Join 500,000+ customers sending money globally.</p> */}
        </div>
        
        <div className="bg-blue-900/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-800">
          {/* Tabs */}
          <div className="flex mb-6 bg-blue-950/50 rounded-lg p-1">
            <button className="flex-1 py-2 px-4 rounded-md bg-blue-800 text-white font-medium">
              Rates calculator
            </button>
           
          </div>
          
          {/* Send amount */}
          <div className="mb-6">
            <p className="text-blue-200 mb-2">You send</p>
            <div className={`flex bg-blue-800 rounded-md overflow-hidden p-2 ${!isValidInput ? 'border border-red-500' : ''}`}>
              <div className="relative">
                <select 
                  value={fromCurrency} 
                  onChange={handleFromCurrencyChange}
                  className="appearance-none bg-blue-900 text-white px-2 py-1 pr-6 rounded"
                  aria-label="From Currency"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="NGN">INR</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-blue-300">
                  <span>▼</span>
                </div>
              </div>
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                className="bg-transparent text-white text-right flex-1 focus:outline-none text-xl"
                aria-label="Amount to send"
                inputMode="decimal"
              />
            </div>
            {!isValidInput && <p className="text-red-400 text-xs mt-1">Please enter a valid amount</p>}
          </div>
          
          {/* Exchange rate indicator */}
          <div className="flex justify-center items-center mb-4">
            <button 
              onClick={handleSwapCurrencies}
              className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              aria-label="Swap currencies"
            >
              <ArrowDown size={16} className="text-blue-300" />
            </button>
            <span className="text-blue-200 text-sm ml-2">
              1 {fromCurrency} = {exchangeRates[fromCurrency][toCurrency]?.toFixed(2) || '0.00'} {toCurrency}
            </span>
          </div>
          
          {/* Receive amount */}
          <div className="mb-6">
            <p className="text-blue-200 mb-2">Individual receives</p>
            <div className="flex bg-blue-800 rounded-md overflow-hidden p-2">
              <div className="relative">
                <select 
                  value={toCurrency} 
                  onChange={handleToCurrencyChange}
                  className="appearance-none bg-blue-900 text-white px-2 py-1 pr-6 rounded"
                  aria-label="To Currency"
                >
                  <option value="NGN">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-blue-300">
                  <span>▼</span>
                </div>
              </div>
              <input
                type="text"
                value={isValidInput ? formatNumber(convertedAmount) : '-'}
                readOnly
                className="bg-transparent text-white text-right flex-1 focus:outline-none text-xl"
                aria-label="Amount received"
              />
            </div>
          </div>
          
          {/* Download button */}
          <button 
            className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-md font-medium transition duration-300 flex items-center justify-center mb-4"
            aria-label="Download NALA app"
          >
            <Download size={18} className="mr-2" />
            Download JetLockFX❤️
          </button>
          
          {/* Benefits */}
          <div className="mb-4">
            <div className="flex items-center text-blue-100 mb-1 text-sm">
              <Star size={14} className="text-blue-300 mr-2" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center text-blue-100 text-sm">
              <Star size={14} className="text-blue-300 mr-2" />
              <span>Fast transfers available 24/7</span>
            </div>
          </div>
          
          {/* Footer text */}
          {/* <p className="text-blue-300 text-xs text-center">
            Looking for our business rates? <button className="text-blue-200 underline">Contact sales!</button> We charge fees for certain transactions to cover our cost.
          </p> */}
        </div>
      </div>
     
    </div>
     <Card />
    <CTA />
     </>
  );
};

export default CurrencyConverter;