'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BFHLResponse, BFHLRequest } from '../types';

export default function Component() {
  const [apiInput, setApiInput] = useState('{"data":["M","1","334","4","B"]}')
  const [filter, setFilter] = useState('Numbers')
  const [filteredResponse, setFilteredResponse] = useState('')  
  const [responseData, setResponseData] = useState<BFHLResponse | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['alphabets', 'numbers', 'highest_lowercase_alphabet']);
    let data : BFHLResponse;

  const handleSubmit = async () => {
    try {
        const res = await fetch('/api/bfhl', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: apiInput,
        });
        data = await res.json();
        setResponseData(data);
    } catch (error) {
    console.error('Error:', error);
    }
    try {
      if (filter === 'Numbers') {
          setFilteredResponse(`Numbers: ${responseData?.numbers.join(',')}`)
      } else if (filter === "Letters") {
        setFilteredResponse(`Letters: ${responseData?.alphabets.join(',')}`)
      } else {
        setFilteredResponse(`Highest Lowercase Alphabet: ${responseData?.highest_lowercase_alphabet}`)
      }
    } catch (error) {
      setFilteredResponse('Invalid JSON input')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label htmlFor="api-input" className="block text-sm font-medium text-gray-700 mb-1">
            API Input
          </label>
          <Input
            id="api-input"
            value={apiInput}
            onChange={(e) => setApiInput(e.target.value)}
            className="w-full"
          />
        </div>

        <Button onClick={handleSubmit} className="w-full">
          Submit
        </Button>

        <div>
          <label htmlFor="multi-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Multi Filter
          </label>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger id="multi-filter" className="w-full">
              <SelectValue>{filter}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Numbers">Numbers</SelectItem>
              <SelectItem value="Letters">Letters</SelectItem>
              <SelectItem value="Highest Lowercase Alphabet">Highest Lowercase Alphabet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Filtered Response</h2>
          <div className="p-3 bg-gray-100 rounded-md">
            {filteredResponse}
          </div>
        </div>
      </div>
    </div>
  )
}