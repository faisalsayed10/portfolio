import React from "react";

const WhatIdo: React.FC = () => {
  return (
    <>
      <div className="flex items-start justify-between flex-col">
        <h3 className="flex items-center text-blue-800 mb-16 text-xl font-medium antialiased">
          <div className="bar bg-blue-800 mr-3"></div>What I Do
        </h3>
        <h2 className="text-4xl mb-32 font-semibold antialiased">
          <p>I enjoy creating products,</p>
          <p>which are fun and delightful.</p>
        </h2>
        <h1 className="text-9xl font-semibold antialiased">
          <p>Think.&nbsp;Make.</p>
          <p>Ship.</p>
        </h1>
      </div>
    </>
  );
};

export default WhatIdo;
