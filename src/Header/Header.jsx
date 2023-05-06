import React from 'react';
import logo from '../assets/logo.png'
import Marquee from "react-fast-marquee";
import moment from 'moment';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
    return (

        <div>
            <div className="text-center">
                <img className="w-[400px] mx-auto mt-8 mb-3" src={logo} alt="" />
                <p className=" py-2">Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="flex items-center rounded text-red-700 mt-4 bg-slate-200 p-3">
                <button className="bg-red-800 p-4 rounded-md text-white">Letest</button>
                <Marquee>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <div className="flex text-center mt-6 items-center mb-20">
                <div className="mx-auto flex gap-4 text-gray-500">
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Career</h1>
                </div>
                <CgProfile className="text-4xl mr-4"></CgProfile>
                <button className="bg-slate-600 px-5 py-2 rounded text-white">Login</button>
            </div>

        </div>
    );
}; 

export default Header;