import { NextRequest, NextResponse } from 'next/server';
import { BFHLResponse, BFHLRequest } from '../../types';

export async function POST(req: NextRequest) {
  const { data }: BFHLRequest = await req.json();

  const numbers = data.filter(item => !isNaN(Number(item)));
  const alphabets = data.filter(item => isNaN(Number(item)));
  const highestLowercaseAlphabet = alphabets
    .filter(ch => ch === ch.toLowerCase())
    .sort()
    .pop() || null;

  const response: BFHLResponse = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
  };

  return NextResponse.json(response);
}

export async function GET() {
  return NextResponse.json({ operation_code: 1 });
}
