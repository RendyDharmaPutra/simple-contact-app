'use client'

export default function NavContact() {
    return (
        <nav className="sticky top-0 inset-x-0 z-50 px-3 flex flex-row items-center justify-between w-full h-[5rem] bg-gray-300/20 dark:bg-gray-600/20 border-b border-gray-400/50 dark:border-gray-500/50 shadow-lg text-gray-800 dark:text-gray-300 backdrop-blur-md">
            <div className="py-2 px-3 inline-block rounded-xl border border-gray-400/50 dark:border-gray-500/50 bg-gray-300/30 dark:bg-gray-600/30 shadow-lg backdrop-blur-lg">
              <h1 className="text-lg sm:text-xl lg:text-2xl">Contact Member</h1>
            </div>
            <div className="py-2 px-3 hidden rounded-xl border border-gray-400/50 bg-gray-300/30 shadow-lg backdrop-blur-lg">
              <input type="search" placeholder="Search" className="px-2 py-1 w-full rounded-lg outline-none placeholder:text-neutral-500 bg-gray-300/70" />
            </div>
            <div className="py-2 px-1 w-[8.5rem] hidden rounded-xl border border-gray-400/50 bg-gray-300/30 shadow-lg backdrop-blur-lg">
              <select className="p-1 w-full outline-none rounded-lg bg-transparent hover:bg-gray-300/20 duration-200 cursor-pointer">
                <option className="bg-gray-700/30">
                  Ascending
                </option>
                <option className="bg-gray-700/30">
                  Descending
                </option>
              </select>
            </div>
            <div className="py-2 px-3 w-[8rem] hidden rounded-xl border border-gray-400/50 bg-gray-300/30 shadow-lg backdrop-blur-lg">
              <select className="p-1 w-full outline-none rounded-lg bg-transparent hover:bg-gray-300/20 duration-200 cursor-pointer">
                <option className="bg-gray-700/30">UNEJ</option>
                <option className="bg-gray-700/30">Polije</option>
              </select>
            </div>
        </nav>
    )
}