import { NextRequest, NextResponse } from 'next/server';
import { BFHLResponse, BFHLRequest } from '../../types';

export async function POST(req: NextRequest) {
  const { data }: BFHLRequest = await req.json();
  const numbers = data.filter((item: string) => !isNaN(Number(item)));
  const alphabets = data.filter((item: string) => (item.toUpperCase() != item.toLowerCase()))
  let lowercase_alphabet = data.filter((item: string) => item.match(/[a-z]/));
  lowercase_alphabet.sort();
  const highest_lowercase_alphabet = lowercase_alphabet[lowercase_alphabet.length - 1] != undefined ? lowercase_alphabet[-1] : '[]';

  const response: BFHLResponse = {
    is_success: true,
    user_id: "pavan_k_23102003",
    email: "23pavank@gmail.com",
    roll_number: "21BDS0198",
    numbers,
    alphabets,
    highest_lowercase_alphabet
  };

  return NextResponse.json(response);
}

export async function GET() {
  return NextResponse.json({ operation_code: 1 });
}
