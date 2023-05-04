import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required(),
    body: yup.string().required(),
    userId: yup.number().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const PostMethod = () => {
  let [success, setSuccess] = React.useState(false);
  let [loading, setLoading] = React.useState(false);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    let handleSubmit = async () => {
      setLoading(true);
      try {
        // API
        let url = "https://jsonplaceholder.typicode.com/posts";

        // //Dữ liệu cần để gọi API
        // let payload = {
        //   title: "foo",
        //   body: "bar",
        //   userId: 1,
        // };

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

        // trả về thành công hay chưa
        if (!response.ok) {
          const error = new Error("An Error Occured");
          throw error;
        }
        setSuccess(true);
        setLoading(false); // thành công mất loading
        resetField("title");
        resetField("body");
        resetField("userId");
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    handleSubmit();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="title" {...register("title")} />
      <p>{errors.title?.message}</p>

      <input placeholder="body" {...register("body")} />
      <p>{errors.body?.message}</p>

      <input placeholder="userId" {...register("userId")} />
      <p>{errors.userId?.message}</p>

      <input disabled={isSubmitting && loading} type="submit" />
      {loading && <div>Loading...</div>}
      {success && <div>Đã post thành công !...</div>}
    </form>
  );
};

export default PostMethod;
