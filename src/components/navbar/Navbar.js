// import React, { useState } from 'react'
// import { Link } from "react-scroll";
// import { FiMenu } from "react-icons/fi";
// import { MdClose } from "react-icons/md";
// import { FaWhatsapp, FaLinkedinIn, } from "react-icons/fa";
// import { MdMailOutline } from "react-icons/md";
// import {logo} from "../../assets/index"
// import { navLinksdata } from '../../constants';

// const Navbar = () => {
//   const [showMenu, setShowMenu]=useState(false)
//   return (
//     <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
//       <div>
//         <img src={logo} alt="logo" />
//       </div>
//       <div>
//         <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
//           {navLinksdata.map(({ _id, title, link }) => (
//             <li
//               className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
//               key={_id}
//             >
//               <Link
//                 activeClass="active"
//                 to={link}
//                 spy={true}
//                 smooth={true}
//                 offset={-84}
//                 duration={500}
                
//               >
//                 {title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <span
//           onClick={() => setShowMenu(!showMenu)}
//           className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
//         >
//           <FiMenu />
//         </span>
//         {showMenu && (
//           <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
//             <div className="flex flex-col gap-8 py-2 relative">
//               <div>
//                 <img className="w-32" src={logo} alt="logo" />
//                 <p className="text-sm text-gray-400 mt-2">
//                 Coding is my passion. Let’s connect and create something awesome!
//                 </p>
//               </div>
//               <ul className="flex flex-col gap-4">
//                 {navLinksdata.map((item) => (
//                   <li
//                     key={item._id}
//                     className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
//                   >
//                     <Link
//                       onClick={() => setShowMenu(false)}
//                       activeClass="active"
//                       to={item.link}
//                       spy={true}
//                       smooth={true}
//                       offset={-84}
//                       duration={500}
                      
//                     >
//                       {item.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex flex-col gap-4">
//                 <h2 className="text-base uppercase font-titleFont mb-4">
//                   Find me in
//                 </h2>
//                 <div className="flex gap-4">
//                 <a href="mailto:kannanmukesh856@gmail.com" target="blank">
//                   <span className="bannerIcon">
//                     <MdMailOutline />
//                   </span>
//                 </a>
//                 <a href="https://wa.me/919025595418" target="blank">
//                   <span className="bannerIcon">
//                     <FaWhatsapp />
//                   </span>
//                 </a>
//                 <a href="https://www.linkedin.com/in/mukesh-kannan-k/" target="blank">
//                   <span className="bannerIcon">
//                     <FaLinkedinIn />
//                   </span>
//                 </a>
//                 </div>
//               </div>
//               <span
//                 onClick={() => setShowMenu(false)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
//               >
//                 <MdClose />
//               </span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar



import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Store active section

  // Function to handle smooth scrolling
  const handleScroll = (target) => {
    const section = document.getElementById(target);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  // Detect which section is active while scrolling
  useEffect(() => {
    const handleScrollEvent = () => {
      let scrollPosition = window.scrollY;
      navLinksdata.forEach(({ link }) => {
        const section = document.getElementById(link);
        if (section) {
          const offsetTop = section.offsetTop - 120; // Adjust for navbar height
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className={`text-base font-normal tracking-wide cursor-pointer duration-300 ${
                activeSection === link ? "text-white" : "text-gray-400"
              }`}
              key={_id}
            >
              <button onClick={() => handleScroll(link)}>{title}</button>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  Coding is my passion. Let’s connect and create something awesome!
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className={`text-base font-normal tracking-wide cursor-pointer duration-300 ${
                      activeSection === item.link ? "text-white" : "text-gray-400"
                    }`}
                  >
                    <button
                      onClick={() => {
                        setShowMenu(false);
                        handleScroll(item.link);
                      }}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
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
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

