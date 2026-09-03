// import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";

const Card = (props) => {
  return (
    <div>
      <div className="w-80 bg-white rounded-3xl shadow-lg overflow-hidden ">
        <div className="bg-blue-600 h-28 h-32"></div>
        <div className="flex justify-center -mt-14 ">
          <img
            className="w-28 h-28 rounded-full border-4 border-white object-cover "
            src="https://img.magnific.com/premium-photo/happy-businessman-png-round-badge-transparent-background_53876-952434.jpg?semt=ais_hybrid&w=740&q=80"
            alt="profile"
          />
        </div>

        <div className="text-center mt-3 ">
          <h2 className="text-xl font-bold text-gray-800">{props.title}</h2>
          <p className="text-sm text-gray-500 font-medium">
            {props.detail}
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-4 ">
          <a
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm bg-blue-700"
            href="#"
          >
            <BsFacebook />
          </a>
          <a
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm bg-sky-400"
            href="#"
          >
            <BsTwitter />
          </a>
          <a
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm bg-pink-600"
            href="#"
          >
            <BsInstagram />
          </a>
          <a
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm bg-red-600"
            href="#"
          >
            <BsYoutube />
          </a>
        </div>

        <div className="flex justify-center gap-3 px-6 mt-4">
          <button className="flex-1 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700">
            Subscribe
          </button>
          <button className="flex-1 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700">
            Message
          </button>
        </div>

        <div className="flex justify-around items-center pt-6 pb-4 px-4 text-gray-600 text-sm">
          <span className="flex items-center gap-1.5">
            <FaRegHeart /> 60.4k
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1.5">
            <FaRegComment /> 20k
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1.5">
            <TbShare3 /> 12.4k
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
