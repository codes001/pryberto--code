import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact: React.FC = () => {
  return (
    <form
      id="contact"
      className="h-auto w-[70%] mx-auto px-8 py-16 border flex flex-col gap-6 border-blue-primary rounded-[10px]"
    >
      <div>
        <Input placeholder="Enter your name" />
      </div>

      <div>
        <Input placeholder="Enter your email address" />
      </div>

      <div>
        <Textarea
          cols={12}
          className="resize-none rounded-[5px] h-[150px]"
          placeholder="Drop a message"
        >
          {" "}
        </Textarea>
      </div>

      <Button className=" transition-all duration-100 ease-in-out bg-blue-primary !rounded-full text-white mt-4 hover:bg-transparent hover:border hover:border-blue-primary hover:text-blue-primary uppercase font-bold py-6">
        {" "}
        Submit
      </Button>
    </form>
  );
};

export default Contact;
