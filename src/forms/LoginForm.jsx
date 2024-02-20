import React from "react";
import { useForm } from "react-hook-form";

import FieldSet from "../components/FieldSet";
import Field from "../components/Field";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Label">
          <Field label="Email">
            <input
              {...register("email", { required: "Email is required." })}
              className="p-1 border box-border w-[300px] rounded-md border-gray-200"
              type="email"
              name="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Password">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters.",
                },
              })}
              className="p-1 border box-border w-[300px] rounded-md border-gray-200"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </Field>
        </FieldSet>
        <Field>
          <button className="text-md text-white text-md cursor-pointer p-1 border rounded-lg, m-auto bg-purple-500">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
}
