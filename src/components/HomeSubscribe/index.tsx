import React from "react";
import { FaEnvelope } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().min(4).required(),
    phone: yup.string().min(10).max(10).required(),
    email: yup.string().email().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const HomeSubscribe = () => {
  let [message, setMessage] = React.useState("");
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    setMessage(" Subscribe success");
    resetField("name");
    resetField("phone");
    resetField("email");
  };

  return (
    <section>
      <div className="sections section_form">
        <h2 className="section_title text-center">
          Subscribe to Our Newsletter
        </h2>
        <p className="section_desc text-center">
          Do not want to miss news, updates, note and any offer on our products,
          then please subscriber to our mailling list.
        </p>
        <form
          className="subscribe_form d-flex"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="text" placeholder="Your name" {...register("name")} />
          <p>{errors.name?.message}</p>
          <input
            type="text"
            placeholder="Your Mobile phone"
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>
          <input
            type="email"
            placeholder="Your email address"
            className="input"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <button type="submit" className="button">
            <FaEnvelope /> Subscribe email list
          </button>
          {message !== "" && <div>{message}</div>}
        </form>
      </div>
    </section>
  );
};

export default HomeSubscribe;
