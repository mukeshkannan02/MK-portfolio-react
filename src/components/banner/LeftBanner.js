import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaWhatsapp, FaLinkedinIn, FaGithub,} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer.", "Back-End Developer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, <br></br>I'm <span className="text-designColor capitalize">Mukesh Kannan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I’m a passionate Full-Stack Developer who enjoys building dynamic and scalable web applications. 
        With experience in both front-end and back-end development, I create seamless user experiences and robust server-side solutions. 
        I love solving problems, learning new technologies, and bringing creative ideas to life through code.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
            <a href="https://github.com/mukeshkannan02" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LeftBanner;
