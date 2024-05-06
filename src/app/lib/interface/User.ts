export interface User {
  nameUser: string;
  phone_number: string;
  password: string;
  address: [
    {
      state: string
      city: string
      postal_code: string
      full_address:string
    }
    
  ];
}
