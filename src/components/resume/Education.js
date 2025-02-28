import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">School & College</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E. in Computer Science and Engineering"
            subTitle="SRM TRP Engineering College - Affiliated to Anna University (2020 - 2024)"
            result="7.7/10 CGPA"
            des="I developed a deep understanding of software development, data structures, systems programming, and emerging technologies."
          />
          <ResumeCard
            title="HSE - Mathematics & ComputerScience"
            subTitle="Rahmania Matriculation Higher Secondary School (2018 - 2020)"
            result="70%"
            des="Focused on Computer Science, gaining a strong foundation in programming, algorithms, and computational thinking."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Course's</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Development"
            subTitle="Greens Technology (2024 - 2025)"
            result="Chennai"
            des="Completed a Full-Stack course using HTML, CSS, JavaScript, React for the front-end, and Java, Spring Boot, and databases for the back-end."
          />
          <ResumeCard
            title="Python Developer"
            subTitle="SoloLearn"
            result="Online"
            des="This course covered Python fundamentals, object-oriented programming, and backend development, and
            enhancing my ability to build scalable applications ."
          />
          <ResumeCard
            title="ChatGPT"
            subTitle="GUVI - (2 Weeks)"
            result="Trichy"
            des="This course covered prompt creation, AI response optimization, and versioning, 
            enhancing my ability to craft effective and structured AI prompts."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
