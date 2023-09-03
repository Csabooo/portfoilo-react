import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem"; // Adj meg a helyes elérési útvonalat

import project_1_large from "../assets/fluffy-veterinary-clinic.jpg";
import project_2_large from "../assets/insure-landing-page.jpg";
import project_3_large from "../assets/sinlge-page-dev-demo.jpg";
import project_4_large from "../assets/newsletter-sign-up-from.jpg";
import project_5_large from "../assets/portfolio-archived.jpg";
import project_6_large from "../assets/age-calculator.jpg";
import project_7_large from "../assets/sunnyside-agency.jpg";
import project_8_large from "../assets/clipboard-landing-page.jpg";
import project_9_large from "../assets/news-homepage.jpg";


function Projects() {
  const [isWindowVisible, setWindowVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        // Csak az "xl" breakpoint felett változtassuk az ablak láthatóságát
        setWindowVisible((prevIsVisible) => prevIsVisible); // Ne változtassuk meg az állapotot
      } else {
        setWindowVisible(false); // "xl" breakpoint alatt az ablak láthatóságát állítsuk hamisra
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Első alkalommal is ellenőrizze az ablak láthatóságát
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <hr className="block" />
      <div className="flex justify-between pt-20 pb-8 md:pb-16 lg:pt-20 lg:pb-24">
        <h1 className="text-left ">Projects</h1>
        <a href="#contact" className="block px-0">
          <p className="relative text-black tracking-[1.29px] decoration_underline md:pt-8 lg:pt-12">
            CONTACT ME
          </p>
        </a>
      </div>

      <div className="md:grid grid-cols-2 gap-8">
        <div>
          <ProjectItem
            largeImage={project_1_large}
            title="FLUFFY VETERINARY CLINIC"
            technologies={["HTML", "CSS", "REACT", "TAILWIND CSS"]}
            view_project={"https://csabooo-veterinary-clinic-react.netlify.app"}
            code={"https://github.com/Csabooo/veterinary-clinic-sample-react"}
          />
        </div>
        <div>
          <ProjectItem
            largeImage={project_2_large}
            title="INSURE LANDING PAGE"
            technologies={["HTML", "CSS", "REACT", "TAILWIND CSS"]}
            view_project={"https://csabooo-insure-landing-page.netlify.app"}
            code={"https://github.com/Csabooo/16-Insure-landing-page-react"}
          />
        </div>
        <div>
          <ProjectItem
            largeImage={project_3_large}
            title="SINGLE PAGE DEV DEMO"
            technologies={["HTML", "CSS", "REACT", "TAILWIND CSS"]}
            view_project={"https://csabooo-single-page-dev-portfolio.netlify.app"}
            code={"https://github.com/Csabooo/forntendmentor-15-single-page-dev-portfolio-react"}
          />
        </div>
        <div>
          <ProjectItem
            largeImage={project_4_large}
            title="NEWSLETTER SIGN UP FORM"
            technologies={["HTML", "CSS", "REACT", "TAILWIND CSS"]}
            view_project={"https://csabooo-newsletter-signup-form.netlify.app"}
            code={"https://github.com/Csabooo/frontendmentor-14-sign-up-form-react-tailwindcss"}
          />
        </div>
        <div>
          <ProjectItem
            largeImage={project_5_large}
            title="PORTFOLIO-OLD VERSION (ARCHIVED)"
            technologies={["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP 5"]}
            view_project={"https://csabooo.github.io/portfolio"}
            code={"https://github.com/Csabooo/portfolio"}
          />
        </div>
        <div>
          <ProjectItem
            largeImage={project_6_large}
            title="AGE CALCULATOR APP"
            technologies={["HTML", "CSS", "JAVASCRIPT", "TAILWIND CSS"]}
            view_project={"https://csabooo-age-calculator-app.netlify.app"}
            code={"https://github.com/Csabooo/frontendmentor-13-age-calculator-app-HTML-TailwindCSS-JS"}
          />
        </div>
        <div>
          <ProjectItem
            largeImage={project_7_large}
            title="SUNNYSIDE AGENCY LANDING PAGE"
            technologies={["HTML", "CSS", "JAVASCRIPT", "TAILWIND CSS"]}
            view_project={"https://csabooo-sunnyside-agency-landing-page.netlify.app"}
            code={"https://github.com/Csabooo/forntendmentor-12-sunnyside-agency-landing-page-main-HTML-TailwindCSS"}
          />
        </div>
        <div>
          <ProjectItem
            largeImage={project_8_large}
            title="CLIPBOARD LANDING PAGE"
            technologies={["HTML", "CSS", "JAVASCRIPT", "TAILWIND CSS"]}
            view_project={"https://csabooo-clipboard-landing-page.netlify.app"}
            code={"https://github.com/Csabooo/frontendmentor-09-Clipboard-landing-page"}
          />
        </div>
        <div>
          <ProjectItem
            largeImage={project_9_large}
            title="NEWS HOMEPAGE"
            technologies={["HTML", "CSS", "JAVASCRIPT", "TAILWIND CSS"]}
            view_project={"https://csabooo-news-homepage.netlify.app"}
            code={"https://github.com/Csabooo/frontendmentor-10-News-homepage-HTML-TailwindCSS"}
          />
        </div>


      </div>
    </div>
  );
}

export default Projects;
