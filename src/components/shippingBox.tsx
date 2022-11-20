import axios from "axios";
import { useForm, Resolver } from 'react-hook-form';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CustomConnect from "./customConnect";
import { useAccount, useContractRead, usePrepareSendTransaction, useSendTransaction } from 'wagmi';
import MiHoloABI from "../assets/ABI.json";
import { utils } from 'ethers'
import { useState } from 'react';

//0xBCd71c002e52861051389BC4eE2f2f033eD9eF41


type ShippingResponse = {
    name: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    qty: number;
    txn: string;
    email: string;
}

type FormValues = {
    name: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    email: string;
};



// async function addShipping(inputName: string, inputAddress1: string, inputAddress2: string, inputCity: string, inputState: string, inputZip: string, inputCountry: string, inputQty: number) {
//     try {
//         // 👇️ const data: CreateUserResponse
//         const { data } = await axios.post<ShippingResponse>(
//             'https://sigil.systems/add_shipping',
//             { name: inputName, address_line_1: inputAddress1, address_line_2: inputAddress2, city: inputCity, state: inputState, zip: inputZip, country: inputCountry, qty: inputQty },
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Accept: 'application/json',
//                 },
//             },
//         );

//         console.log(JSON.stringify(data, null, 4));

//         return data;
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.log('error message: ', error.message);
//             // 👇️ error: AxiosError<any, any>
//             return error.message;
//         } else {
//             console.log('unexpected error: ', error);
//             return 'An unexpected error occurred';
//         }
//     }
// }

async function addShipping(inputName: string, inputAddress1: string, inputAddress2: string, inputCity: string, inputState: string, inputZip: string, inputCountry: string, inputQty: number, inputTxn: string, inputEmail: string) {
    try {
        // 👇️ const data: CreateUserResponse
        const { data } = await axios.post<ShippingResponse>(
            'http://localhost:3000/addShipping',
            { name: inputName, address_line_1: inputAddress1, address_line_2: inputAddress2, city: inputCity, state: inputState, zip: inputZip, country: inputCountry, qty: inputQty, txn: inputTxn, email: inputEmail },
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

    const contractRead = useContractRead({
        address: '0xCaDadB2CF60f456B8194E9948cA176b4DB3Aa50d',
        abi: MiHoloABI,
        functionName: 'sold',
        chainId: 5,
        watch: true
      })

    const prep1 = usePrepareSendTransaction({
        request: {
          to: "0xCaDadB2CF60f456B8194E9948cA176b4DB3Aa50d",
          value: utils.parseEther("0.18"),
        },
        onSettled(data) {
            console.log('Success', data)
            console.log("SENDING SHIPPING", name, address_line_1, address_line_2, city, state, zip, country, email)
            addShipping(name, address_line_1, address_line_2, city, state, zip, country, 1, "FIGURE OUT", email);
            console.log("SHIPPING SENT");
            //console.log('Success', data)
          },     
      })

    const prep3 = usePrepareSendTransaction({
        request: {
          to: "0xCaDadB2CF60f456B8194E9948cA176b4DB3Aa50d",
          value: utils.parseEther("0.5"),
        },
        onSuccess(data) {
            console.log('Settled', data)
          },
      })

    
    const prep10 = usePrepareSendTransaction({
        request: {
          to: "0xCaDadB2CF60f456B8194E9948cA176b4DB3Aa50d",
          value: utils.parseEther("1.5"),
        },
      })
    const send1 = useSendTransaction(prep1.config);
    const send3 = useSendTransaction(prep3.config);
    const send10 = useSendTransaction(prep10.config);



    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [salesCount, setSalesCount] = useState(String(contractRead.data))
    const [name, setName] = useState("");
    const [address_line_1, setAddress1] = useState("");
    const [address_line_2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");


    const submit1 = handleSubmit((data) => sell1(data));
    //const submit2 = handleSubmit((data) => sell3(data));
    //const submit3 = handleSubmit((data) => sell10(data));

    function sell1(data: any){
        //console.log(data);
        setName(data.name);
        setAddress1(data.address_line_1);
        setAddress2(data.address_line_2);
        setCity(data.city);
        setState(data.state);
        setZip(data.zip);
        setCountry(data.country);
        setEmail(data.email);
        send1.sendTransaction?.();
        setSalesCount(String(contractRead.data));
    }

    function sell3(data: any){
        //console.log(data);
        //addShipping(data.name, data.address_line_1, data.address_line_2, data.city, data.state, data.zip, data.country, 3);
        send3.sendTransaction?.();
        setSalesCount(String(contractRead.data));
    }

    function sell10(data: any){
        //console.log(data);
        //addShipping(data.name, data.address_line_1, data.address_line_2, data.city, data.state, data.zip, data.country, 10);
        send10.sendTransaction?.();
        setSalesCount(String(contractRead.data));
    }


    

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
                    <form>
                        <div className="ShippingForm">
                            <input className="ShippingInputText" id="nameForm" type="text" placeholder="Name*" {...register("name", { required: "This Field is Required" })} />
                            <input className="ShippingInputText" type="text" placeholder="Address Line 1*" {...register("address_line_1", { required: true })} />
                            <input className="ShippingInputText" type="text" placeholder="Address Line 2" {...register("address_line_2", { required: false })} />
                            <div className="ShipingFormBottom">
                                <input className="ShippingInputText" style={{ width: "25%" }} type="text" placeholder="City*"  {...register("city", { required: true })} />
                                <input className="ShippingInputText" style={{ width: "25%" }} type="text" placeholder="State*" {...register("state", { required: true })} />
                                <input className="ShippingInputText" style={{ width: "20%" }} type="text" placeholder="Zip*" {...register("zip", { required: true })} />
                                <input className="ShippingInputText" style={{ width: "20%" }} type="text" placeholder="Country*" {...register("country", { required: true })} />
                            </div>
                            <input className="ShippingInputText" style={{marginBottom: "2rem"}} type="text" placeholder="Email (optional, used for contact)" {...register("email", { required: false })} />

                        </div>
                        <div style={{ borderBottom: "1px solid #707070", marginBottom: "1rem", width: "100%" }} />
                        <div>MiHolograms are now Minting!!!</div>
                        <div>MiHolograms Minted: <span style={{ fontWeight: "bold"}}>{String(contractRead.data)} / 180</span></div>
                        {!isConnected ?
                        <div className="ButtonCenter">
                            <CustomConnect />
                        </div>
                        :
                        <div className="ButtonCenter">
                            <button className="SubmitButton" onClick={submit1} style={{ marginTop: "1rem", marginBottom: "0.25rem" }}>Mint 1 for .18 ETH</button>
                            {/* <button className="SubmitButton" onClick={submit2} style={{ marginBottom: "0.25rem" }}>Mint 3 for .5 ETH</button>
                            <button className="SubmitButton" onClick={submit3} style={{ marginBottom: "1.5rem" }}>Mint 10 for 1.5 ETH</button> */}
                        </div>}

                    </form>
                </div>
                <div>
                </div>
            </div>
        </div>

    );
}