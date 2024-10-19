import React from "react";

const Services: React.FC = () => {
  return (
    <div id="service" className="h-auto mb-24 w-full">
      <h2 className="text-center font-bold mb-6 text-2xl uppercase">
        What we do
      </h2>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-[90%] mx-auto ">
        <div className="shadow-xl rounded py-8 px-4 text-justify flex flex-col items-center justify-center hover:border hover:border-blue-primary transition-all duration-500 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-center mb-6 mt-4 text-blue-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          <h3 className="mb-2">Software Development & Integration</h3>
          <p>
            From concept to deployment, we build and integrate scalable,
            user-friendly software tailored to your objectives.
          </p>
        </div>

        <div className="shadow-xl rounded py-8 px-4 text-justify flex flex-col items-center justify-center  hover:border hover:border-blue-primary transition-all duration-500 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-center mb-6 mt-4 text-blue-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <h3 className="mb-2">IT Support & Helpdesk </h3>
          <p>
            Reliable troubleshooting, remote assistance, and maintenance to
            ensure your IT systems run smoothly around the clock.
          </p>
        </div>

        <div className="shadow-xl rounded py-8 px-4 text-justify flex flex-col items-center justify-center  hover:border hover:border-blue-primary transition-all duration-500 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-center mb-6 mt-4 text-blue-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
            />
          </svg>
          <h3 className="mb-2">Data Analytics & Business Intelligence</h3>
          <p>
            Leverage data-driven strategies to improve decision-making, optimize
            processes, and drive business growth.
          </p>
        </div>

        <div className="shadow-xl rounded py-8 px-4 text-justify flex flex-col items-center justify-center  hover:border hover:border-blue-primary transition-all duration-500 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-center mb-6 mt-4 text-blue-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <h3 className="mb-2">Mobile App Development</h3>
          <p>
            Develop intuitive and feature-rich mobile applications for Android
            and iOS, tailored to elevate user experience and business impact.
          </p>
        </div>
        <div className="shadow-xl rounded py-8 px-4 text-justify flex flex-col items-center justify-center  hover:border hover:border-blue-primary transition-all duration-500 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-center mb-6 mt-4 text-blue-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
            />
          </svg>
          <h3 className="mb-2">Cybersecurity Solutions</h3>
          <p>
            Safeguard your business against cyber threats with proactive
            monitoring, threat detection, and rapid response services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
