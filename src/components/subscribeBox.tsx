import axios from "axios";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from 'react';


type EmailResponse = {
  email: string;
};

type FormValues = {
  Email: string;
};


const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.Email ? values : {},
    errors: !values.Email
      ? {
          Email: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};


export default function SubscribeBox() {


  async function addEmail(inputEmail: string) {
    try {
      // 👇️ const data: CreateUserResponse
      const { data } = await axios.post<EmailResponse>(
        'http://127.0.0.1:5000/add_email',
        { email: inputEmail },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
      setSubscribeText("Subscribed!")
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

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => addEmail(data.Email));
  const [subscribeText, setSubscribeText] = useState("Subscribe");


  //const onSubmit = handleSubmit((data) => console.log(data.Email));
  //console.log(errors);

  return (
    <div className="SubscribeBox">
      <form onSubmit={onSubmit}>
        <input className="InputText" type="text" placeholder="your email..." {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

        <input className="SubmitButton" value={subscribeText} type="submit" />
      </form>
      {/* <div>
                <input className="InputText" type="email" placeholder="your email..." name="name" />
            </div>
            <div>
                <input className="SubmitButton" type="submit" onSubmit={handleSubmit} value="Subscribe" />
                <button onClick={ () => addEmail("fromReact@gmail.com")}>Email</button>

            </div> */}
    </div>
  );
}