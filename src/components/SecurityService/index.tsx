"use client";
import React from "react";
import NavBar from "../Elements/NavBar";

const SecurityService = () => {
  React.useEffect(() => {
    document.title = "Security as a Service | InfoSight";
  }, []);

  return (
    <div>
      <NavBar />
      <iframe
        src="https://www.mitigatorvm.com/"
        width={"100%"}
        style={{
          height: "calc(100vh - 80px)",
        }}
      ></iframe>
    </div>
  );
};

export default SecurityService;
