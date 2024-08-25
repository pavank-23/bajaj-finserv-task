'use client';

import React, { useState } from 'react';
import InputForm from '../app/components/InputForm';
import ResponseDisplay from '../app/components/ResponseDisplay';
import { BFHLResponse, BFHLRequest } from './types';

const Home: React.FC = () => {
  const [responseData, setResponseData] = useState<BFHLResponse | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['alphabets', 'numbers', 'highest_lowercase_alphabet']);

  const handleData = async (jsonData: BFHLRequest) => {
    try {
      const res = await fetch('/api/bfhl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });
      const data: BFHLResponse = await res.json();
      setResponseData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <InputForm onSubmit = {handleData} />
      {responseData && (
        <ResponseDisplay response = {responseData} selectedOptions = {selectedOptions} />
      )}
    </div>
  );
};

export default Home;
