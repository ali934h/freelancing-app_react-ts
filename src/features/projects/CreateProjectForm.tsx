import React from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type FormData = {
  name: string;
  email: string;
  age: number;
  terms: boolean;
  gender: string;
  dob: Date;
};

export default function ComplexForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      age: 18,
      terms: false,
      gender: "male",
      dob: new Date(),
    },
  });

  // handle form submit
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-base-100 mx-auto w-full max-w-md space-y-4 p-6 shadow-xl"
    >
      {/* Name */}
      <div className="form-control">
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="input input-bordered w-full"
        />
        {errors.name && (
          <p className="text-error mt-1 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="form-control">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          placeholder="Email"
          className="input input-bordered w-full"
        />
        {errors.email && (
          <p className="text-error mt-1 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Age */}
      <div className="form-control">
        <input
          type="number"
          {...register("age", {
            min: { value: 18, message: "Minimum age is 18" },
          })}
          placeholder="Age"
          className="input input-bordered w-full"
        />
        {errors.age && (
          <p className="text-error mt-1 text-sm">{errors.age.message}</p>
        )}
      </div>

      {/* Gender */}
      <div className="form-control">
        <select
          {...register("gender", { required: true })}
          className="select select-bordered w-full"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Date of Birth */}
      <div className="form-control">
        <Controller
          name="dob"
          control={control}
          rules={{ required: "Date of birth is required" }}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Date of Birth"
              className="input input-bordered w-full"
            />
          )}
        />
        {errors.dob && (
          <p className="text-error mt-1 text-sm">{errors.dob.message}</p>
        )}
      </div>

      {/* Terms and Conditions */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            {...register("terms", { required: "You must accept the terms" })}
            className="checkbox checkbox-primary"
          />
          <span className="label-text ml-2">
            I accept the terms and conditions
          </span>
        </label>
        {errors.terms && (
          <p className="text-error mt-1 text-sm">{errors.terms.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-full">
        Submit
      </button>
    </form>
  );
}
