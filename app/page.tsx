"use client";
import Image from "next/image";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiCoffeeLight } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full font-bold">
        <Image
          src="/introduce-myself/hero.webp"
          alt="bg"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="absolute top-1/3 left-10 md:left-20 lg:left-32 xl:left-40 font-[Inria Serif] text-left leading-tight">
          <div className="text-4xl md:text-5xl lg:text-6xl text-[#FFFBFA] mb-3">
            <p>I’m Thanatsorn</p>
            <p>Phanthanawat</p>
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#FDA1A1]">Front end web developer</p>
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-[#B5ACA0] relative min-h-screen text-[#FFFFFF] py-10 px-5 md:px-10 lg:px-20">
        <p className="text-4xl md:text-6xl text-center font-bold mb-5">About Me</p>
        <p className="text-lg md:text-2xl font-normal text-center md:text-left mb-10">
          I am a lifelong learner who is always eager to expand my knowledge. I have a passion for UI design and enjoy working with HTML and CSS. Currently, I'm also learning TypeScript to enhance my development skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Personal Details */}
          <div>
            <p className="text-3xl md:text-4xl font-semibold mb-5">Personnel Details</p>
            <div className="text-lg md:text-2xl leading-20 font-semibold">
              <p>Name: <span className="font-normal">Thanatsorn Phanthanawat</span></p>
              <p>Date of Birth: <span className="font-normal">24/03/2003</span></p>
              <p>Address: <span className="font-normal">Bangkok, Thailand</span></p>
              <p>Email: <span className="font-normal">thanatsorn.phan@gmail.com</span></p>
              <p>Phone: <span className="font-normal">097-2489834</span></p>
            </div>
          </div>

          {/* Interests Section */}
          <div>
            <p className="text-3xl md:text-4xl font-semibold mb-5 pl-30">My Interests</p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <IoGameControllerOutline className="text-6xl md:text-7xl mx-auto" />
                <p className="text-lg md:text-2xl">Game</p>
              </div>
              <div>
                <PiCoffeeLight className="text-6xl md:text-7xl mx-auto" />
                <p className="text-lg md:text-2xl">Tea</p>
              </div>
              <div>
                <FaRegMoneyBillAlt className="text-6xl md:text-7xl mx-auto" />
                <p className="text-lg md:text-2xl">Money</p>
              </div>
              <div>
                <MdLibraryMusic className="text-6xl md:text-7xl mx-auto" />
                <p className="text-lg md:text-2xl">Music</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-[#DDD2C6] relative min-h-screen text-[#33383A] py-10 px-5 md:px-10 lg:px-20">
        <p className="text-4xl md:text-6xl text-center font-bold mb-10">My Skill</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-80">
          <div>
            <p className="text-3xl md:text-4xl font-semibold mb-5">Technical Skill</p>
            <ul className="list-disc list-inside text-lg md:text-3xl/20">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div >
            <p className="text-3xl md:text-4xl font-semibold mb-5">Tool</p>
            <ul className="list-disc list-inside text-lg md:text-3xl/20">
              <li>VS Code</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
