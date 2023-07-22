import NavContact from "@/components/navigation/contactNav"
import ContactsLoader from "@/components/loader/contactsLoader"
import Contacts from "@/components/server/contacts"
import { Suspense } from "react"

export default function Contact() {
    return (
        <div className="relative flex flex-row flex-wrap w-full h-full overflow-y-scroll border-gray-300/50 dark:border-gray-700/50 text-neutral-800">
            <NavContact/>
            <Suspense fallback={<ContactsLoader/>}>
                <Contacts/>
            </Suspense>
        </div>
    )
}