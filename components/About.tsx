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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio autem
          dolore unde ea neque placeat sapiente officia necessitatibus? Eveniet,
          laudantium! Eum dolore quae odio, quod animi et obcaecati blanditiis
          architecto, iste autem impedit id, ea beatae. Harum inventore ducimus
          fuga veritatis illum veniam est earum. Iure eligendi voluptate
          deleniti. Illo, dolorem inventore ratione hic amet repellendus
          veritatis minus iusto? Veritatis adipisci minima ratione deleniti eius
          blanditiis dolorem. Rerum aut, illum nihil at laudantium enim mollitia
          dicta ducimus cum recusandae, dolores laboriosam ullam voluptatum qui
          in deserunt iusto excepturi ipsum consectetur!
        </p>
        <Button className=" transition-all duration-100 ease-in-out bg-blue-primary !rounded-full text-white mt-4 hover:bg-transparent hover:border hover:border-blue-primary hover:text-blue-primary">
          {" "}
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default About;
