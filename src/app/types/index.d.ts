export interface BFHLResponse {
    is_success: boolean;
    user_id: string;
    email: string;
    roll_number: string;
    numbers: string[];
    alphabets: string[];
    highest_lowercase_alphabet: string[];
  }
  
  export interface BFHLRequest {
    data: string[];
  }
  