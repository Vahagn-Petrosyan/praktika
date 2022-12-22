import React from 'react'

const Login = () => {
  return (
    <div className='w-full flex flex-row'>
      <div className='w-1/2 flex flex-col gap-y-10 pt-20 items-center'>
        <p className='text-yellow text-[40px] font-black'>EvenTracking</p>
        <h1 className='text-gray-black text-6xl font-bold'>Log In</h1>
        <input type="email" placeholder='Email address' className='outline-none bg-input rounded-lg w-[628px] h-[80px] pl-5 text-base font-bold placeholder: text-loginplaceholder'/>
        <input type="password" placeholder='Password' className='outline-none bg-input rounded-lg w-[628px] h-[80px] pl-5 text-base font-bold placeholder: text-loginplaceholder'/>
        <button className='w-[628px] h-16 bg-yellow text-white rounded-lg'>Log In</button>
        <p className='text-gray-black text-base font-bold'>Dont have account ?</p>
        <p className='text-yellow text-base font-bold'>Sign Up</p>
      </div>
      <div className='w-1/2 bg-login-pattern h-screen'></div>
    </div>
  )
}

export default Login
