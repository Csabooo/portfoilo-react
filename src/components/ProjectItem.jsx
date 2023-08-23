import React, { useState } from "react";

function ProjectItem({ largeImage, title, technologies, view_project, code }) {
  const [isWindowVisible, setWindowVisible] = useState(false);

  const buttonHandler = () => {
    if (window.innerWidth >= 1024) {
      setWindowVisible((prevIsVisible) => !prevIsVisible);
    }
  };

  return (
    <div>
      <div
        onClick={buttonHandler}
        className="relative lg:flex justify-center lg:cursor-pointer">
        {isWindowVisible && (
          <div className="absolute lg:flex w-full h-full bg-black opacity-80 z-20 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <a href={view_project} className="lg:px-0">
                <p className="inline  text-white tracking-[1.29px] decoration_underline ">
                  VIEW PROJECT
                </p>
              </a>
              <a href={code} className="lg:pt-10 lg:px-0">
                <p className="inline pl-7 lg:pl-0 text-white tracking-[1.29px] decoration_underline">
                  VIEW CODE
                </p>
              </a>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center">
          <img
            className="block"
            src={largeImage}
            alt={`thumbnail-${title}-large`}
          />
        </div>
      </div>
      <div className="flex flex-col text-left">
        <div>
          <h3 className="pt-5 pb-2">{title}</h3>
          <div className="pb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="inline pr-4">
                {tech}
              </span>
            ))}
          </div>

          <div className="pb-14 lg:hidden">
            <a href={view_project}>
              <p className="inline text-black tracking-[2.29px] decoration_underline ">
                VIEW PROJECT
              </p>
            </a>
            <a href={code}>
              <p className="inline pl-7 text-black tracking-[2.29px] decoration_underline">
                VIEW CODE
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
