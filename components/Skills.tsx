import React from "react";

interface Props {}

const Skills: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex items-start ml-40 mb-20 justify-center flex-col">
        <h3 className="flex items-center text-blue-800 mb-12 text-xl font-medium antialiased">
          <div className="bar bg-blue-800 mr-3"></div>My Skills
        </h3>
        <h2 className="text-4xl mb-32 font-semibold antialiased">
          <p>I enjoy creating products,</p>
          <p>which are fun and delightful.</p>
        </h2>
      </div>
    </>
  );
};

export default Skills;
