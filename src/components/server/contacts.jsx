import { dbconnect } from "@/utils/db";
import CardContact from "../cardContact";

export default async function Contacts() {
    const {db, client} = await dbconnect()
    
    const contacts = await db.collection('members').find().sort({nama: 1}).toArray()
    console.log("-----------------------------------")
    console.log(contacts)
    client.close()
    return (
        <div className="py-[52px] pb-8 px-3 flex flex-row flex-wrap justify-around w-full border-gray-300/50 dark:border-gray-700/50 text-neutral-800">
            {contacts && contacts.map((contact) => {
                return (
                    <CardContact key={contact._id} nama={contact.nama} prodi={contact.prodi} kampus={contact.kampus} webKampus={contact.webKampus} email={contact.email} noHP={contact.noHP}/>
                )
            })}
        </div>
    )
}
