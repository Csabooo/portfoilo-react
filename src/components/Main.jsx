import React from "react";

function Main() {
  return (
    <div className="md:grid grid-cols-2 grid-rows-3 md:justify-items-start md:text-left xl:grid-cols-3 xl:grid-flow-rows-2 xl: pt-4">
      <div>
        <h2 className="technologies">HTML</h2>
        <p>2 Years Experience</p>
      </div>
      <div>
        <h2 className="technologies">CSS</h2>
        <p>2 Years Experience</p>
      </div>
      <div>
        <h2 className="technologies">Javascript</h2>
        <p>1 Years Experience</p>
      </div>
      <div>
        <h2 className="technologies">Accessibility</h2>
        <p>1 Years Experience</p>
      </div>
      <div>
        <h2 className="technologies">React</h2>
        <p>0.5 Years Experience</p>
      </div>
      <div>
        <h2 className="technologies">Tailwind CSS</h2>
        <p>0.5 Years Experience</p>
      </div>

    </div>
  );
}

export default Main;
