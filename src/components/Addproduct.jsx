import React from "react";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";

export default function AddProduct() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
   const add={
    slug: data.title,
    description: data.description,
    urls : { full : data.image },
    type: data.type,
   }
    reset();
  };

  return (
    <div className="add_p flex justify-center items-center min-h-screen">
      <div className="add_pro drop-shadow-2xl shadow shadow-blue-500/40 flex w-full max-w-[30vw] p-6 justify-center items-center border-2 flex-col rounded-lg border-slate-300 transition-all duration-300 hover:max-w-[35vw]">
        <span><FaRegUser className="w-[10vw] h-[8vw]" /></span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Product title:<br />
            <input {...register('title')} type="text" className="rounded-lg w-full px-3 py-1" />
          </label>
          <br />
          <label>
            Product description:<br />
            <input {...register('description')} type="text" className="rounded-lg w-full px-3 py-1 " />
          </label>
          <br />
          <label>
            Image URL:<br />
            <input {...register('image')} type="text" className="rounded-lg w-full px-3 py-1" />
          </label>
          <br />
          <label htmlFor="cars">
            Choose a type of product:<br />
            <select {...register('type')} id="cars" className="rounded-lg w-full px-3 py-1">
              <option value="Laptop">Laptop</option>
              <option value="Furniture">Furniture</option>
              <option value="Clothes">Clothes</option>
              <option value="Mobile">Mobile</option>
            </select>
          </label>
          <br /><br />
          <input type="submit" className="bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-1 rounded-lg ml-12" />
        </form>
      </div>
    </div>
  );
}
