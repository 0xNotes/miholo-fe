import axios from "axios";
import { useForm, Resolver } from 'react-hook-form';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CustomConnect from "./customConnect";
import { useAccount } from 'wagmi'


type ShippingResponse = {
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
            { name: inputName, address_line_1: inputAddress1, address_line_2: inputAddress2, city_state_zip: inputCityStateZip, country: inputCountry },
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
    const num = 0;
    const { isConnected } = useAccount();


    return (
        <div className="TextContainer">
            <div className="TopBox" style={{ background: "#ffffff" }}>
                MiHologram Minting
            </div>
            <div className="BottomBox" style={{ background: "#f6cbcb" }}>
                <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>MiHolograms Mint is Open!!!</div>
                <div style={{ borderBottom: "1px solid #707070", marginBottom: "1rem" }} />
                <div>In order to fulfill your order, we need your mailing address. Please input this info before minting: </div>
                <div>
                    <div style={{ marginLeft: "12rem", marginTop: "1.5rem" }}>
                        Mailing Address
                    </div>
                    <form className="ShippingForm">
                        <input className="ShippingInputText" type="text" placeholder="Name" />
                        <input className="ShippingInputText" type="text" placeholder="Address Line 1" />
                        <input className="ShippingInputText" type="text" placeholder="Address Line 2" />
                        <input className="ShippingInputText" type="text" placeholder="Address Line 1" />
                        <div className="ShipingFormBottom">
                            <input className="ShippingInputText" style={{ width: "65%" }} type="text" placeholder="City, State, Zip" />
                            <input className="ShippingInputText" style={{ width: "30%" }} type="text" placeholder="Country" />
                        </div>
                    </form>
                </div>
                <div style={{ borderBottom: "1px solid #707070", marginBottom: "1rem" }} />
                <div>
                    <div>MiHolograms are now Minting!!!</div>
                    <div>MiHolograms Minted: <span style={{ fontWeight: "bold" }}>{num} / 180</span></div>
                    {!isConnected ?
                        <div className="ButtonCenter">
                            <CustomConnect />
                        </div>
                        :
                        <div className="ButtonCenter">
                            <button className="SubmitButton" style={{ marginBottom: "0.25rem" }}> Mint 1 for .18 ETH</button>
                            <button className="SubmitButton" style={{ marginBottom: "0.25rem" }}>Mint 3 for .5 ETH</button>
                            <button className="SubmitButton" style={{ marginBottom: "1.5rem" }}>Mint 10 for 1.5 ETH</button>
                        </div>}


                </div>
            </div>
            {/* <button onClick={() => addShipping("john", "420 Blaze It Lane", "APPT: REAR", "Methton, Kholia, 69696", "USA")}>Ship</button> */}

        </div>

    );
}