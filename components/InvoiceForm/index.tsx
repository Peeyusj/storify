"use client"
import React, { useState } from 'react';

interface InvoiceData {
  clientName: string;
  address: string;
  invoiceNumber: string;
  image: string | null; // Type changed to string to accommodate base64
}

const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    clientName: '',
    address: '',
    invoiceNumber: '',
    image: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceData({
      ...invoiceData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInvoiceData({
          ...invoiceData,
          image: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // ... validation and form submission logic (adapt to your backend)

    console.log("Result---->>", invoiceData);

    // Here you would handle the submission to the backend.
    // Following is commented out as a placeholder for your actual submission logic.
    /* 
    const response = await fetch('your-backend-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoiceData),
    });

    const result = await response.json();
    console.log(result);
    // Reset form if needed
    setInvoiceData({
      clientName: '',
      address: '',
      invoiceNumber: '',
      image: null,
    });
    */
  };

  return (
    <form onSubmit={handleSubmit} className="px-8 py-4 mt-5 w-3/4 mx-auto">
      <h2>Create Invoice</h2>
      <div className="mb-4">
        <label htmlFor="clientName" className="block text-gray-700 mb-2">
          Client Name:
        </label>
        <input
          type="text"
          name="clientName"
          id="clientName"
          value={invoiceData.clientName}
          onChange={handleInputChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 mb-2">
          Client Address:
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={invoiceData.address}
          onChange={handleInputChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="invoiceNumber" className="block text-gray-700 mb-2">
          Invoice Number:
        </label>
        <input
          type="text"
          name="invoiceNumber"
          id="invoiceNumber"
          value={invoiceData.invoiceNumber}
          onChange={handleInputChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 mb-2">
          Invoice Image (as base64):
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex flex-row justify-end items-center mt-4">
        <button
          type="submit"
          className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-700"
        >
          Create Invoice
        </button>
      </div>
    </form>
  );
};

export default InvoiceForm;
