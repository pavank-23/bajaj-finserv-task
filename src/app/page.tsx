'use client';

import React, { useState } from 'react';
import InputForm from '../app/components/InputForm';
import ResponseDisplay from '../app/components/ResponseDisplay';
import { BFHLResponse, BFHLRequest } from './types';

const Home: React.FC = () => {
  const [responseData, setResponseData] = useState<BFHLResponse | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['alphabets', 'numbers', 'highest_lowercase_alphabet']);

  return (
    <div>
      <InputForm />
    </div>
  );
};

export default Home;
