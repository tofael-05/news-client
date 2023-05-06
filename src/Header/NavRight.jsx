import React from 'react';
import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'
import bg from '../assets/bg.png'
import { FaGithub, FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const NavRight = () => {
    return (
        <>
            <h1 className="text-xl font-bold mb-3">Login With</h1>
            <div>
                <button className="flex justify-center gap-3 p-3 mb-2 border-2 rounded w-full items-center"><FaGoogle /> <span>Log With Google</span></button>
                <button className="flex justify-center gap-3 p-3 border-2 rounded w-full items-center"><FaGithub /> <span>Log With Github</span></button>
            </div>

            <div>
                <h1 className="text-xl font-bold mt-8 mb-5">Find us on</h1>
                <div>
                    <button className="flex gap-3 p-3 border w-full items-center"><FaFacebookF /> <span>Facebook</span></button>
                    <button className="flex gap-3 p-3 border w-full items-center"><FaTwitter /> <span>Twitter</span></button>
                    <button className="flex gap-3 p-3 border w-full items-center"><FaInstagram /> <span>Instagram</span></button>
                </div>
            </div>

            <div className="bg-slate-200 mt-8 p-4">
                <h1 className="text-2xl font-bold mb-5 mt-3">Q-Zone</h1>
                <img src={qZone1} alt="" />
                <img className="my-4" src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            <div className="mt-6 relative">
                <img className="w-full" src={bg} alt="" />
                <div className="absolute left-0 right-0 top-0 bottom-0">
                    <h1 className="text-white leading-relaxed text-center text-3xl font-bold text pt-4">Create an <br /> Amazing <br /> Newspaper</h1>
                    <p className=" text-white px-4 py-6 text-center leading-relaxed">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="text-white block mx-auto bg-red-700 py-4 px-6">Learn More</button>
                </div>
            </div>
        </>
    );
};

export default NavRight;