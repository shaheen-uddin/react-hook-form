import React from "react";

import FieldSet from "../components/FieldSet";
import Field from "../components/Field";

export default function LoginForm() {
  return (
    <div>
      <form>
        <FieldSet label="Enter Login Label">
          <Field label="Email">
            <input
              className="p-1 border box-border w-[300px] rounded-md border-gray-200"
              type="email"
              name="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Password">
            <input
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
