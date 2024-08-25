'use client';

interface ResponseDisplayProps {
  response: {
    alphabets: string[];
    numbers: string[];
    highest_lowercase_alphabet: string[];
  };
  selectedOptions: string[];
}

export default function ResponseDisplay({ response, selectedOptions }: ResponseDisplayProps) {
  return (
    <div>
      {selectedOptions.includes('alphabets') && (
        <div>
          <h2>Alphabets</h2>
          <p>{response.alphabets.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('numbers') && (
        <div>
          <h2>Numbers</h2>
          <p>{response.numbers.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('highest_lowercase_alphabet') && (
        <div>
          <h2>Highest Lowercase Alphabet</h2>
          <p>{response.highest_lowercase_alphabet.join(', ')}</p>
        </div>
      )}
    </div>
  );
}
