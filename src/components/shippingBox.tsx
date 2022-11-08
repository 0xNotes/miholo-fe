import axios from "axios";

type ShippingResponse ={
    name: string;
    address_line_1: string;
    address_line_2: string;
    city_state_zip: string;
    country: string;
}



async function addShipping(inputName: string, inputAddress1: string, inputAddress2: string, inputCityStateZip: string, inputCountry: string) {
    try {
      // 👇️ const data: CreateUserResponse
      const { data } = await axios.post<ShippingResponse>(
        'http://127.0.0.1:5000/add_shipping',
        { name: inputName, address_line_1: inputAddress1, address_line_2: inputAddress2, city_state_zip: inputCityStateZip, country: inputCountry},
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // 👇️ error: AxiosError<any, any>
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }


export default function ShippingBox() {
    return(
        <div>
                <button onClick={ () => addShipping("john", "420 Blaze It Lane", "APPT: REAR", "Methton, Kholia, 69696", "USA")}>Ship</button>

        </div>

    );
}