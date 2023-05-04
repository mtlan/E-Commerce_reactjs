import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const PostLogin = () => {
  
  let [message1, setMessage] = React.useState('');
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    let handleSubmit = async () => {
      
      try {
        // API
        let url = "https://api.escuelajs.co/api/v1/auth/login";

        const options = {
          method: "POST",
          // đầu vào là json
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }; //convert sang json string

        // Method POST
        const response = await fetch(url, options);
        // kết quả trả về sau khi fetch
        let result = await response.json();
        
        console.log("res",result);
        if(result.statusCode === 401) {
            setMessage(result.message);
        }else {
            setMessage('Đăng nhập thành công');
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleSubmit();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input placeholder="password" {...register("password")} />
      <p>{errors.password?.message}</p>
    
      <input type="submit" />
      {message1 !== '' && <div>{message1}</div>}
      
      
    </form>
  );
};

export default PostLogin;
