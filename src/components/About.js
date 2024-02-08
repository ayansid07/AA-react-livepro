import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer HOOK
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="section"
      id="about"
      ref={ref}
      style={{ marginBottom: "50px" }}
    >
      <div className="container mx-auto bg-slate-200 mb-[48rem] ">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center 
        lg:gap-x-20 lg:gap-y-0 h-screen "
        >
          <div className="flex justify-center p-3 -mt-3 flex-col items-center">
            <h1 className="font-bold text-3xl mb-10 mt-4">About us</h1>
            <img
              src="https://i.ytimg.com/vi/w4-uXFJwc1A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcIVpjWPed5e35WDHf7C2Sz0bf0g"
              alt="aboutpic"
              className="rounded-3xl"
            />
          </div>
          <h1 className="text-center text-4xl font-bold">
            Give us a chance to serve you
          </h1>
          <h2 className="p-3 text-lg font-semibold">
            We're passionate team dedicated to delivering delicious meals to
            your doorstep.
          </h2>
          <div className="flex flex-col my-6 space-y-10 md:space-y-0 md:space-x-6 md:flex-row md:my-0  p-3 mt-4 bg-white shadow-2xl  rounded-xl z-10 ">
            <h1 className="text-3xl mt-8 ">Our Story</h1>
            <p className="font-medium">
              Driven by our love for food and the desire to provide convenient
              meal solutions , our tiffin delivery service has grown from small
              startup into a leading provider of tasty and nutritious for
              individuals and families.
            </p>
            <div className="flex flex-col items-center text-2xl ">
              <img
                src="https://images.unsplash.com/31/RpgvvtYAQeqAIs1knERU_vegetables.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw3fHxGb29kJTJDJTIwS2l0Y2hlbiUyQyUyMERlbGl2ZXJ5fGVufDF8fHx8MTcwNjg3MzIzMXww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="aboutpic2"
                className="w-60 rounded-3xl mb-5"
              />
              <hr />
              <h1 className="mb-5">Our Numbers</h1>
              <hr />
              <h1 className="mb-1 font-semibold">Established</h1>
              <p className="mb-5 text-lg">since 2020</p>
              <hr />
              <h1 className="mb-1 font-semibold">Customers</h1>
              <p className="mb-5 text-lg">200+ Happy Customers </p>
            </div>
          </div>
          <div className="bg-green-200 -mt-20 w-full rounded-xl p-3 pb-20">
            <h1 className="text-4xl mt-16 mb-6 font-semibold">
              Try our service
            </h1>
            <p className="text-lg">No credit card required. Start enjoying</p>
            <p className="text-lg">delicious meals with our monthly plans.</p>
            <div className="flex justify-center gap-3">
              <Link
                to="/plans"
                className="inline-block px-10 py-3 my-6 text-center text-white font-bold
                            border border-green-500 rounded-3xl hover:bg-green-800 bg-green-500
                            hover:border-green-800 duration-200"
              >
                {" "}
                Try now
              </Link>
              <Link
                to="#"
                className="inline-block px-10 py-3 my-6 text-center text-white font-bold
                            border border-green-500 rounded-3xl hover:bg-green-800 bg-green-500
                            hover:border-green-800 duration-200"
              >
                {" "}
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;