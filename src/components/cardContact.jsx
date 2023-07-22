'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CardContact({ nama, prodi, kampus, webKampus, email, noHP }) {

  return (
    <div className='group/container mb-5 w-[20rem] h-[11rem] flex flex-col justify-between border border-gray-400/50 dark:border-gray-500/50 rounded-lg bg-gray-300/30 dark:bg-gray-600/30 backdrop-blur-lg shadow-lg overflow-hidden'>
      <header className='px-4 py-3 flex justify-between '>
        <div>
          <h4 className='font-medium'>{nama}</h4>
          <h6 className='text-sm'>{prodi}</h6>
        </div>
        <div>
          <a href={`${webKampus}`} target='_blank'>
            <img src={`/kampus/${kampus}.webp`}
              className=' h-[2.5rem]'
            />
          </a>
        </div>
      </header>
      <div id='desc' className='px-4 py-3 duration-300 '>
        <p className='text-sm'>{noHP}</p>
      </div>
      <footer className='px-4 py-3 bg-slate-400 dark:bg-slate-500'>
        <Link
          href={`mailto:${email}`}
          className='font-medium text-sm text-slate-200 dark:text-slate-700 hover:text-white dark:hover:text-black duration-300'
        >
          Send Email &rarr;
        </Link>
      </footer>
    </div>
  );
}
