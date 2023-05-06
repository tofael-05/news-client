import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCalendarDay } from 'react-icons/bs';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const NavLeft = () => {
    const [catagories, setCatagories] = useState([])
    // const catagories = useLoaderData()
    fetch(`http://localhost:3000/categories`)
        .then(res => res.json())
        .then(data => setCatagories(data))

    return (
        <>
            <h1 className="text-xl font-bold mb-3">All Caterogy</h1>
            <ul className="">
                {
                    catagories.map(catagory => <li className="p-3 border list-non">
                        <Link to={`/catagories/${catagory.id}`}>{catagory.name}</Link>
                    </li>)
                }
            </ul>
            <div className="mt-8 border rounded p-2">
                <div>
                    <img src={img1} alt="" />
                    <h1 className="text-md font-bold my-6">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex gap-6">
                        <h1>Sports</h1>
                        <div className="flex items-center gap-2">
                            <BsCalendarDay/>
                            <p className="text-gray-400">Jan 4, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 border rounded p-2">
                <div>
                    <img src={img2} alt="" />
                    <h1 className="text-md font-bold my-6">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex gap-6">
                        <h1>Sports</h1>
                        <div className="flex items-center gap-2">
                            <BsCalendarDay/>
                            <p className="text-gray-400">Jan 4, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 border rounded p-2">
                <div>
                    <img src={img3} alt="" />
                    <h1 className="text-md font-bold my-6">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex gap-6">
                        <h1>Sports</h1>
                        <div className="flex items-center gap-2">
                            <BsCalendarDay/>
                            <p className="text-gray-400">Jan 4, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavLeft;


