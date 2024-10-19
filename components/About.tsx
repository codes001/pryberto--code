import React from "react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen w-[95%] sm:w-[90%] md:leading-8 text-justify mx-auto md:w-[80%] flex flex-col items-center justify-center"
    >
      <div className="text-2xl text-center">
        <h2 className="font-bold">ABOUT US</h2>
      </div>

      <div className="flex flex-col mt-4 items-center justify-center">
        <p>
          At Pryberto Code, we are dedicated to delivering innovative and
          tailored technology solutions that empower businesses to thrive in
          today’s digital world. With a passion for problem-solving and a
          commitment to excellence, we specialize in a wide range of services,
          including cloud infrastructure management, cybersecurity, software
          development, and data analytics. Our team of expert engineers and
          consultants work closely with clients to understand their unique
          challenges and develop customized solutions that drive growth, enhance
          efficiency, and secure their digital future. Whether you’re a startup
          or an enterprise, we are here to support your journey through the
          rapidly evolving tech landscape.
        </p>
        <Button className=" transition-all duration-100 ease-in-out bg-blue-primary !rounded-full text-white mt-4 hover:bg-transparent hover:border hover:border-blue-primary hover:text-blue-primary">
          {" "}
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </div>
  );
};

export default About;
