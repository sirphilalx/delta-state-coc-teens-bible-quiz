import React from "react";

const LogoAppear = ({ pageTitle, message }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-2xl sm:text-4xl font-semibold font-mono">
          {pageTitle}
        </h2>
        <img src="src/assets/images/dstbqLogo.png" alt="" />
        <p className="sm:text-lg text-center">{message}</p>
      </div>
    </>
  );
};

export default LogoAppear;
