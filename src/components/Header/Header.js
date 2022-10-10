import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-200'>
            <nav className='grid grid-cols-1 gap-3 lg:flex md:grid-cols-2 justify-between mx-6 p-4'>
                <div className='font-semibold'>
                    <NavLink to={'/home'}><span className='text-3xl text-emerald-600'>Back</span> Toppers</NavLink>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 items-center gap-1 lg:gap-4 font-bold'>
                    <NavLink className={({isActive}) => isActive ? 'text-emerald-600 rounded': undefined} to={'/home'}>Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-emerald-600 rounded': undefined} to={'/statistics'}>Statistics</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-emerald-600 rounded': undefined} to={'/blog'}>Blog</NavLink>
                </div>
                <div className='hidden lg:flex'>
                    <NavLink className='' to={'/blog'}>About</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;