'use client'
import Link from "next/link"

export default function CardContactLoader() {
    return (
    <div className='group/container animate-loader mb-5 w-[20rem] h-[11rem] flex flex-col justify-between border border-gray-400/50 rounded-lg bg-gray-300/30 backdrop-blur-lg shadow-lg overflow-hidden'>
      <header className='px-4 py-3 flex justify-between'>
        <div className="py-1">
          <div className="h-4 w-36 rounded-full bg-slate-400 mb-2"></div>
          <div className="h-3 w-56 rounded-full bg-slate-400"></div>
        </div>
        <div className="">
          <a href='#'>
            <svg
              class='text-slate-400 h-[2.5rem]'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
                <circle cx='10' cy='11' r='8' />
            </svg>
          </a>
        </div>
      </header>
      <div id='desc' className='px-4 py-4 duration-300 '>
        <div className="h-3 w-56 rounded-full bg-slate-400"></div>
      </div>
      <footer className='px-4 py-4 bg-slate-400'>
        <div className="h-3 w-24 rounded-full bg-slate-300"></div>
      </footer>
    </div>
    )
}