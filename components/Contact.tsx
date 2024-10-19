import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bars } from "react-loader-spinner";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formValues.name) newErrors.name = "Name is required";
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formValues.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formValues.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (validateForm()) {
        toast({
          title: "Success",
          description: "Form submitted successfully!",
          variant: "default",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while submitting the form.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setFormValues({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto w-[95%] md:w-[500px] mx-auto px-8 py-16 border flex flex-col gap-6 border-blue-primary rounded-[10px]"
    >
      <div className="flex relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute top-4 left-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

        <Input
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="pl-16 pt-4"
          placeholder="Enter your name"
        />
      </div>
      {errors.name && (
        <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
      )}

      <div className="flex relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute top-4 left-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>

        <Input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="pl-16 pt-4"
          placeholder="Enter your email address"
        />
      </div>
      {errors.name && (
        <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
      )}

      <div className="flex relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute top-4 left-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>

        <Textarea
          cols={12}
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          className="resize-none pl-16 pt-4 rounded-[5px] h-[150px]"
          placeholder="Drop a message"
        />
      </div>
      {errors.name && (
        <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
      )}

      <Button
        disabled={isSubmitting}
        className=" transition-all duration-100 ease-in-out bg-blue-primary !rounded-full text-white mt-4 hover:bg-transparent border border-blue-primary hover:text-blue-primary uppercase font-bold py-6"
      >
        {isSubmitting ? (
          <>
            <Bars height="25" width="25" color="#fff" />
            <span className="ml-4">Submitting</span>
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default Contact;
