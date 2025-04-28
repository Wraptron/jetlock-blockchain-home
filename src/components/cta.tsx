import React from 'react';

interface MoneyTransferHeroProps {
  onDownloadClick: () => void;
}

const MoneyTransferHero: React.FC<MoneyTransferHeroProps> = ({ onDownloadClick }) => {
  return (
    <section className="bg-blue-900 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        {/* Left column - Text content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Send money online, at home or on the go
          </h1>
          <p className="text-lg mb-8 max-w-lg">
            The JetLock app has everything you need for international money
            transfers. It's easy, secure, and has no surprise fees.
          </p>
          <button 
            onClick={onDownloadClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            Download the app
          </button>
        </div>
        
        {/* Right column - Phone mockup */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Phone frame */}
            <div className="relative w-64 md:w-80 h-auto">
              <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
                {/* Phone status bar */}
                <div className="bg-black text-white py-1 px-6 flex justify-between items-center">
                  <span className="text-xs">9:41</span>
                  <div className="w-16 h-5 bg-black rounded-full flex items-center justify-center">
                    <div className="w-8 h-1 bg-black absolute rounded"></div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full border border-white"></div>
                    <div className="w-3 h-3 rounded-full border border-white"></div>
                    <div className="w-3 h-3 rounded-full border border-white"></div>
                  </div>
                </div>
                
                {/* App screen content */}
                <div className="bg-gray-50 p-4 text-black">
                  {/* App header */}
                  <div className="flex justify-between items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="font-medium">Send money</span>
                    <div className="w-6"></div>
                  </div>
                  
                  {/* Send to dropdown */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500">Send to</div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-blue-500 mr-1">France</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Currency Exchange Section */}
                  <div className="bg-white rounded-lg p-3 mb-4">
                    {/* Send amount */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                          <span className="text-xs">$</span>
                        </div>
                        <span>USD</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">You send</div>
                        <div className="font-bold">$10,000.00</div>
                      </div>
                    </div>
                    
                    {/* Receive amount */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                          <span className="text-xs text-blue-800">€</span>
                        </div>
                        <span>EUR</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">They get</div>
                        <div className="font-bold">€9,200.00</div>
                      </div>
                    </div>
                    
                    {/* Exchange rate */}
                    <div className="text-xs text-blue-500 text-right">
                      Send rate 1 USD = 0.920 EUR
                    </div>
                  </div>
                  
                  {/* Payment methods */}
                  <div className="mb-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <div className="flex items-center">
                        <span>Pay with</span>
                        <span className="ml-1 text-blue-800 font-medium">Debit card</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <div className="flex items-center">
                        <span>Deliver with</span>
                        <span className="ml-1 text-blue-800 font-medium">Bank account</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Summary */}
                  <div className="mb-4">
                    <div className="flex justify-end">
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Arrives within minutes</div>
                        <div className="text-xs text-gray-500">Fee 2.99 USD</div>
                        <div className="font-bold">Total $10,002.99 USD</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Continue button */}
                  <button className="w-full bg-blue-500 text-white rounded-lg py-3 font-medium">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyTransferHero;