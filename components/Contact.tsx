import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Mail } from "util/types";
import Form from "./Form";

interface Props {}

const ContactForm: React.FC<Props> = (props) => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm<Mail>();

  const sendMessage = async (data: Mail) => {
    try {
      await axios.post("/api/sendMail", data);
      setMessage("Your message has been sent! \n I'll get back to you soon.");
    } catch (err) {
      console.error(err);
      setMessage("Sorry! An unexpected error occured.");
    }
  };

  return (
    <>
      <div className="mb-20">
        <h3 className="flex items-center text-blue-800 xl:ml-40 lg:mb-12 text-lg md:text-xl ml-6 mr-2 font-medium antialiased">
          <div className="bar bg-blue-800 mr-3"></div>Contact Me
        </h3>
        <div className="flex items-center justify-center mb-4">
          <div className="w-full max-w-lg">
            <form
              id="contact"
              className="bg-white shadow-lg rounded px-8 pt-6 pb-8"
              onSubmit={handleSubmit(sendMessage)}
            >
              {message ? (
                <p className="text-lg py-20 text-center text-gray-600">
                  {message}
                </p>
              ) : (
                <Form register={register} />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
