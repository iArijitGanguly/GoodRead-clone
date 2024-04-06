import React from 'react';
import Logo from 'Assets/Images/logo-color.png';

const Home = () => {
  return (
        <div className='flex flex-col justify-center items-center h-screen gap-20'>
          <div className='w-48 h-48'>
            <img src={Logo} alt='logo' className='w-full h-full' />
          </div>

          <div className='flex justify-around items-center gap-16 text-3xl'>
            <div className='w-2/4 text-center font-semibold basis-1/2'>
              <h1 className='text-white text-5xl tracking-widest leading-normal'>
                BookShelf <br />
                <span className='text-primary'>
                  Your personal library and social network for bookworms
                </span>
              </h1>
            </div>

            <div>
              <button className='btn btn-primary rounded-md px-5 py-2 text-white text-xl uppercase'>Register</button>
              <button className='btn btn-warning mx-3 rounded-md px-5 py-2 text-xl uppercase'>Login</button>
            </div>
          </div>
        </div>
  )
}

export default Home;