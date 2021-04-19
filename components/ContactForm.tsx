import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAt, faCommentAlt, faEnvelope, faEnvelopeOpen, faHeading, faPaperPlane, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {}

const ContactForm: React.FC<Props> = (props) => {
  return (
    <>
      <div className="mb-20">
        <h3 id="contact" className="flex items-center text-blue-800 ml-40 mb-16 text-xl font-medium antialiased">
          <div className="bar bg-blue-800 mr-3"></div>Contact Me
        </h3>
        <div className="flex items-center justify-center mb-4">
          <div className="w-full max-w-lg">
            <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <FontAwesomeIcon icon={faAt} className="mr-2" />
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="johdoe@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <FontAwesomeIcon icon={faHeading} className="mr-2" />
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="subject"
                  placeholder="Defense Against the Dark Arts: ESAPI"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <FontAwesomeIcon icon={faCommentAlt} className="mr-2" />
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={`Hi, \nThis is John Doe! How are you?`}
                  required
                />
              </div>
              <div className="flex items-center justify-center mb-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Send
                </button>
              </div>
              <div className="h-px w-full bg-gray-300 mb-6"></div>
              <div className="flex justify-evenly text-gray-400 text-2xl">
                <a href="mailto:faisal.sayed502@gmail.com" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://twitter.com/faisal_sayed05" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/faisal-sayed-216711152/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
