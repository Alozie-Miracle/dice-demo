'use client'

import { useState } from 'react'

import one from '@/assets/1.png'
import two from '@/assets/2.png'
import three from '@/assets/3.png'
import four from '@/assets/4.png'
import five from '@/assets/5.png'
import six from '@/assets/6.png'
import Image from 'next/image'

export default function Home() {
  const [dice1, setDice1] = useState(1)
  const [dice2, setDice2] = useState(1)
  const [rolling, setRolling] = useState(false)
  const [message, setMessage] = useState('')

  const images = [one, two, three, four, five, six]

  const rollDice = () => {
    setRolling(true)
    setMessage('')

    const target1 = Math.floor(Math.random() * 6) + 1
    const target2 = Math.floor(Math.random() * 6) + 1

    let current1 = 1
    let current2 = 1

    // Track when both are done
    let done1 = false
    let done2 = false

    const interval1 = setInterval(() => {
      setDice1(current1)
      if (current1 === target1) {
        clearInterval(interval1)
        setDice1(target1) // ensure final value is set
        done1 = true
        if (done1 && done2) checkWin(target1, target2)
      } else {
        current1 += 1
      }
    }, 300)

    const interval2 = setInterval(() => {
      setDice2(current2)
      if (current2 === target2) {
        clearInterval(interval2)
        setDice2(target2) // ensure final value is set
        done2 = true
        if (done1 && done2) checkWin(target1, target2)
      } else {
        current2 += 1
      }
    }, 300)

    
  }

  const checkWin = (d1: number, d2: number) => {
    setRolling(false)
    if (d1 === 6 && d2 === 6) {
      setMessage('🎉 Double Six! You Win! 🎉')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-purple-300 p-5">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">🎲 Roll the Dice</h1>

      <div className="flex gap-5 my-10">
        <div className="text-[8rem] bg-white p-2 rounded-md shadow-2xl font-bold drop-shadow w-full">
          <Image src={images[dice1 -1 ]} alt='dice1' className='h-48 w-48' />
        </div>
        <div className="text-[8rem] bg-white p-2 rounded-md shadow-2xl font-bold drop-shadow w-full">
          <Image src={images[dice2 -1 ]} alt='dice2' className='h-48 w-48' />
        </div>
      </div>

      <button
        onClick={rollDice}
        disabled={rolling}
        className={`px-6 py-3 text-xl font-semibold rounded-2xl shadow-lg transition ${
          rolling
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>

      {message && (
        <p className="mt-8 text-2xl font-semibold text-green-700 animate-pulse">{message}</p>
      )}
    </div>
  )
}
