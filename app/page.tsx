"use client"
import heroImg from '@/assets/background/hero-img.jpg';
import logo from '@/assets/logo.svg'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [Name, setName] = useState('')
  const router = useRouter()

  const submit = () => {
    if (!Name) return alert("please input your email");

    localStorage.setItem("name", Name )

    router.push(`dashboard/${Name.trim()}/`)
  }

  return (
    <div className='flex flex-col lg:flex-row h-screen bg-zinc-900'>

      <div className='flex flex-col gap-5 justify-between px-3 py-8 lg:p-8 lg:w-1/2'>

        <div className='flex flex-col gap-10'>
          <Image src={logo} alt="logo" className='h-10 w-fit object-contain'  />
          <div className="flex flex-row w-full">
            <h1 className='font-bold text-white sm:text-5xl text-4xl'>Welcome to Avax Gods <br /> a Web Card Game</h1>
          </div>

          <p className='font-thin text-[24px] text-gray-300 t-5 lg:mt-10'>Connect your wallet to start playing <br /> the ultimate Web Battle Card Game</p>

        </div>

        <div className='flex flex-col gap-3 lg:gap-5'>
          <label htmlFor="name" className='font-semibold text-2xl text-white mb-3' >Name</label>
          <input
            type="text"
            placeholder='Name'
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className='bg-zinc-800 text-white outline-none focus:outline-siteViolet p-4 rounded-md sm:max-w-[50%] max-w-full'
          />

          <button onClick={submit} className='px-4 cursor-pointer py-2 rounded-lg bg-purple-600 w-fit text-white font-bold'>Register</button>
        </div>
      </div>

      <div className="flex flex-1">
        <Image src={heroImg} alt="hero-img" className="flex-1 xl:h-full object-cover" />
      </div>
    </div>
  )
}
