import React from 'react'
import Title from '../layouts/Title'
import { weather, license, profilecard, IOT, news, portfolio } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY WORK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Profile Card 💳"
          des="A sleek and modern profile card built using HTML & CSS, showcasing responsive design. 
          Ideal for portfolios and reusable components. 
          Hosted on Netlify for easy deployment. "
          src={profilecard}
          demo="https://mk-profile-card.netlify.app"
          github="https://github.com/mukeshkannan02/MK-profile-card"
        />
        <ProjectsCard
          title="Weather App 🌦️"
          des="A simple and elegant web application that provides real-time weather updates for cities around the world. 
          Built using HTML, CSS, and JavaScript, it leverages the OpenWeather API to fetch live weather data."
          src={weather}
          demo="https://mk-weather-check.netlify.app"
          github="https://github.com/mukeshkannan02/MK-weather-check"
        />
        <ProjectsCard
          title="News App 📰"
          des="A simple React-based News App that fetches and displays the latest news articles. 
          It updates every 15–30 minutes based on API limitations.
          This project is designed to run locally and does not include deployment configurations."
          src={news}
          demo="#"
          github="https://github.com/mukeshkannan02/MK-news-app"
        />
        <ProjectsCard
          title="📌 Personal Portfolio."
          des="A modern and fully responsive portfolio website built with HTML, CSS, and JavaScript.  
          The contact section features an embedded map view for location details and a fully functional contact form
           integrated with a third-party email provider."
          src={portfolio}
          demo="https://mk-mukesh-portfolio.netlify.app"
          github="https://github.com/mukeshkannan02/MK-portfolio-2024"
        />
        <ProjectsCard
          title="🚔 License Validation Based on QR Code."
          des="A system that streamlines traffic police checks using QR code technology. 
          Scanning the QR code instantly retrieves license and vehicle registration details. 
          The QR code is affixed to the vehicle as a sticker for easy access. "
          src={license}
          demo="#"
          github="#"
        />
        <ProjectsCard
          title="🌊 Seamless Safety at Sea."
          des="An IoT-based underwater communication system enhancing fishermen's safety with real-time communication, 
          emergency assistance, and location tracking without GPS."
          src={IOT}
          demo="#"
          github="#"
        />
        
      </div>
    </section>
  );
}

export default Projects