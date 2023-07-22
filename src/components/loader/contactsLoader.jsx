'use client'

import CardContactLoader from "../cardContactLoader"

export default function ContactsLoader() {
    const load = []

    for (let i = 1; i <= 30; i++) {
        load.push(
            <CardContactLoader/>
        )
    }

    return (
        <div className="py-[52px] pb-8 px-3 flex flex-row flex-wrap justify-around w-full border-gray-300/50 dark:border-gray-700/50 text-neutral-800">
            {load}
        </div>
    )
}