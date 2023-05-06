import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import NavLeft from '../Header/NavLeft';
import NavRight from '../Header/NavRight';

const Main = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <div>
                <Header />
            </div>
            <div>
                <div className="grid grid-cols-5 gap-8">
                    <div>
                        <NavLeft />
                    </div>

                    <div className="col-span-3 mb-3">
                        <Outlet />
                    </div>
                    <div>
                        <NavRight />
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Main;