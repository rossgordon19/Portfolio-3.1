import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000000] text-white flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/024fc0fe-3afa-43d2-8a91-d57ef82bee64"
        method="Post"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8" name="contact">
          <p className="text-5xl font-bold inline">Contact</p>
          <p className="text-xl py-4 border-b">
            Let's work together. Send me an{' '}
            <a
              className="border-b hover:text-[#FCA311]"
              href="mailto:rossagordonstl@gmail.com"
            >
              email
            </a>{' '}
            or use the form below.
          </p>
        </div>
        <input
          type="text"
          className="bg-[#e8e4e6] p-2"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          className="my-4 p-2 bg-[#e8e4e6]"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#e8e4e6] p-2"
          placeholder="Message"
        ></textarea>
        <button className="bg-[#FCA311] text-black font-bold border-2 border-black px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
