import React from 'react'
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { Mail } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={Mail}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mukesh Kannan K</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        📩 Drop me a message, and I’ll get back to you as soon as possible.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9025595418</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">kannanmukesh856@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a href="mailto:kannanmukesh856@gmail.com" target="blank">
          <span className="bannerIcon">
            <MdMailOutline />
          </span>
        </a>
      <a href="https://wa.me/919025595418" target="blank">
        <span className="bannerIcon">
          <FaWhatsapp />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/mukesh-kannan-k/" target="blank">
        <span className="bannerIcon">
          <FaLinkedinIn />
        </span>
      </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft