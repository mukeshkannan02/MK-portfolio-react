import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Header */}
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 items-center justify-center">
        <p className="text-sm text-designColor tracking-[4px]">View & Download</p>
        <h2 className="text-3xl md:text-4xl font-bold">My Resume</h2>
      </div>

      {/* PDF Viewer using PDF.js */}
      <div className="w-full max-w-3xl h-[800px] sm:h-[500px]">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
          <Viewer fileUrl="/resume.pdf" />
        </Worker>
      </div>

      {/* Download Button Below Preview */}
      <a
        href="/resume.pdf"
        download="Mukesh_Kannan_Resume.pdf"
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
      >
        <AiOutlineDownload size={20} />
        Download CV
      </a>
    </div>
  );
};

export default Experience;
