import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCardNumberChange = (e) => setCardNumber(e.target.value);
  const handleExpiryDateChange = (e) => setExpiryDate(e.target.value);
  const handleCvvChange = (e) => setCvv(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add logic to process the payment
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>
        <p className="mb-6 text-center">Proceed with your payment here.</p>
        {submitted ? (
          <p className="text-green-600 text-center">Payment submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Card Number:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Expiry Date:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">CVV:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={cvv}
                onChange={handleCvvChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit Payment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Payment;
