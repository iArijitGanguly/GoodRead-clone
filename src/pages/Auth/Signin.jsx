import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-white text-5xl'>Login to your account</h1>
        </div>

        <div className='mt-4'>
            <p className='text-white'>
                Don't have an account ?
                <Link to='/signup'>
                    <button className='btn btn-success rounded-md px-2 mx-5'>
                        Sign Up
                    </button>
                </Link>
            </p>
        </div>

        <div className='w-full'>
            <form className='flex flex-col justify-center items-center w-3/4 mx-auto' autoComplete='off' noValidate>
                <div className='my-5 w-1/3'>
                    <input type='email' placeholder='email...' className='px-8 py-3 bg-white w-full' />
                </div>

                <div className='my-5 w-1/3'>
                    <input type='password' placeholder='password...' className='px-8 py-3 bg-white w-full' />
                </div>

                <div className='my-5 w-1/3'>
                    <button className='btn btn-success rounded-md px-2 py-1 w-full uppercase' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signin;