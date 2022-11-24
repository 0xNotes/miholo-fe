import axios from "axios";
import { useForm, Resolver } from 'react-hook-form';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CustomConnect from "./customConnect";
import { useAccount, useContractRead, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi';
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


async function addShipping(inputName: string, inputAddress1: string, inputAddress2: string, inputCity: string, inputState: string, inputZip: string, inputCountry: string, inputQty: number, inputEmail: string, inputTxn?: any,) {
    try {
        // 👇️ const data: CreateUserResponse
        const { data } = await axios.post<ShippingResponse>(
            'https://sigil.systems/addShipping',
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

async function addPreShipping(inputName: string, inputAddress1: string, inputAddress2: string, inputCity: string, inputState: string, inputZip: string, inputCountry: string, inputQty: number, inputEmail: string, inputTxn?: any,) {
    try {
        // 👇️ const data: CreateUserResponse
        const { data } = await axios.post<ShippingResponse>(
            'https://sigil.systems/addPreShipping',
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
    const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormValues>();
    const contractAddress = "0xF5060182d45260FD72dd52cf79abB3BE4C4f8d01";
    const submit1 = handleSubmit((data) => sell1(data));
    const submit2 = handleSubmit((data) => sell3(data));
    const submit3 = handleSubmit((data) => sell10(data));

    const [name, setName] = useState("");

    const contractRead = useContractRead({
        address: contractAddress,
        abi: MiHoloABI,
        functionName: 'sold',
        chainId: 5,
        watch: true
    })

    const [salesCount, setSalesCount] = useState(String(contractRead.data))

    const prep1 = usePrepareSendTransaction({
        request: {
            to: contractAddress,
            value: utils.parseEther('0.18'),
        },
    })

    const prep3 = usePrepareSendTransaction({
        request: {
            to: contractAddress,
            value: utils.parseEther("0.5"),
        },
    })


    const prep10 = usePrepareSendTransaction({
        request: {
            to: contractAddress,
            value: utils.parseEther("1.5"),
        },
    })

    const send1 = useSendTransaction({
        ...prep1.config,
        onSuccess() {
            const hash = String(send1.data?.hash);
            addPreShipping(getValues("name"), getValues("address_line_1"), getValues("address_line_2"), getValues("city")
                , getValues("state"), getValues("zip"), getValues("country"), 1, getValues("email"), hash);    
        }    
    });


    const send3 = useSendTransaction({
        ...prep3.config,
        onSuccess() {
            const hash = String(send1.data?.hash);
            addPreShipping(getValues("name"), getValues("address_line_1"), getValues("address_line_2"), getValues("city")
                , getValues("state"), getValues("zip"), getValues("country"), 3, getValues("email"), hash);    
        }
    });

    const send10 = useSendTransaction({
        ...prep10.config,
        onSuccess() {
            const hash = String(send1.data?.hash);
            addPreShipping(getValues("name"), getValues("address_line_1"), getValues("address_line_2"), getValues("city")
                , getValues("state"), getValues("zip"), getValues("country"), 10, getValues("email"), hash);    
        }
    });

    function sell1(data: any) {
        send1.sendTransaction?.();
        setSalesCount(String(contractRead.data));
    }

    function sell3(data: any) {
        send3.sendTransaction?.();
        setSalesCount(String(contractRead.data));
    }

    function sell10(data: any) {
        send10.sendTransaction?.();
        setSalesCount(String(contractRead.data));
    }

    const sendWait1 = useWaitForTransaction({
        wait: send1.data?.wait,
        hash: send1.data?.hash,
        onSuccess(data) {
            const hash = String(send1.data?.hash);
            addShipping(getValues("name"), getValues("address_line_1"), getValues("address_line_2"), getValues("city")
                , getValues("state"), getValues("zip"), getValues("country"), 1, getValues("email"), hash);
        }
    })

    const sendWait3 = useWaitForTransaction({
        wait: send3.data?.wait,
        hash: send3.data?.hash,
        onSuccess(data) {
            const hash = String(send1.data?.hash);
            addShipping(getValues("name"), getValues("address_line_1"), getValues("address_line_2"), getValues("city")
                , getValues("state"), getValues("zip"), getValues("country"), 3, getValues("email"), hash);
        }
    })

    const sendWait10 = useWaitForTransaction({
        wait: send10.data?.wait,
        hash: send10.data?.hash,
        onSuccess(data) {
            const hash = String(send1.data?.hash);
            addShipping(getValues("name"), getValues("address_line_1"), getValues("address_line_2"), getValues("city")
                , getValues("state"), getValues("zip"), getValues("country"), 10, getValues("email"), hash);
        }
    })

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
                            {errors.name?.type === 'required' && <div className="ErrorText">Name is required</div>}
                            <input className="ShippingInputText" type="text" placeholder="Address Line 1*" {...register("address_line_1", { required: true })} />
                            {errors.address_line_1?.type === 'required' && <div className="ErrorText">Address Line 1 is required</div>}
                            <input className="ShippingInputText" type="text" placeholder="Address Line 2" {...register("address_line_2", { required: false })} />
                            <div className="ShipingFormBottom">
                                <input className="ShippingInputText" style={{ width: "25%" }} type="text" placeholder="City*"  {...register("city", { required: true })} />
                                <input className="ShippingInputText" style={{ width: "25%" }} type="text" placeholder="State*" {...register("state", { required: true })} />
                                <input className="ShippingInputText" style={{ width: "20%" }} type="text" placeholder="Zip*" {...register("zip", { required: true })} />
                                <input className="ShippingInputText" style={{ width: "20%" }} type="text" placeholder="Country*" {...register("country", { required: true })} />
                            </div>
                            {errors.city?.type === 'required' && <div className="ErrorText">City is required</div>}
                            {errors.state?.type === 'required' && <div className="ErrorText">State is required</div>}
                            {errors.zip?.type === 'required' && <div className="ErrorText">Zip is required</div>}
                            {errors.country?.type === 'required' && <div className="ErrorText">Country is required</div>}

                            <input className="ShippingInputText" style={{ marginBottom: "2rem" }} type="email" placeholder="Email (optional, used for contact)" {...register("email", { required: false })} />

                        </div>
                        <div style={{ borderBottom: "1px solid #707070", marginBottom: "1rem", width: "100%" }} />
                        <div>MiHolograms are now Minting!!!</div>
                        <div>MiHolograms Minted: <span style={{ fontWeight: "bold" }}>{String(contractRead.data)} / 180</span></div>
                        {!isConnected ?
                            <div className="ButtonCenter">
                                <CustomConnect />
                            </div>
                            :
                            <div className="ButtonCenter">
                                <button className="SubmitButton" onClick={submit1} style={{ marginTop: "1rem", marginBottom: "0.25rem" }}>Mint 1 for .18 ETH</button>
                                <button className="SubmitButton" onClick={submit2} style={{ marginBottom: "0.25rem" }}>Mint 3 for .5 ETH</button>
                                <button className="SubmitButton" onClick={submit3} style={{ marginBottom: "1.5rem" }}>Mint 10 for 1.5 ETH</button>
                            </div>}

                    </form>
                    <div style={{textAlign: "center", marginBottom: "1rem"}}>Please leave this page open for up to two minutes after signing while the transaction completes.</div>
                </div>
                <div>
                </div>
            </div>
        </div>

    );
}