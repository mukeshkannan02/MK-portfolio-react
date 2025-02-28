import React from 'react'
import { FaReact, FaLaptopCode } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="About me" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        
        <Card
          title="Front-End Development"
          des="I build interactive and responsive user interfaces using React."
          icon={<FaReact />}
        />
        <Card
          title="Back-End Development"
          des="I develop robust and scalable back-end systems with Spring Boot."
          icon={<SiSpring />}
        />
        <Card
          title="Full Stack Development"
          des="I develop web applications using front-end and back-end technologies."
          icon={<FaLaptopCode />}
        />
      </div>
    </section>
  );
}

export default About