import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"


const Page = async() => {
    const user = await authUserSession()


    return (
        <div className="flex flex-col mt-8  justify-center items-center text-color-primary">
            <h4 className="text-2xl font-bold">Welcome, {user?.name}</h4>
            <Image src={user?.image} alt="" width={250} height={250} />

            <div className="py-8 flex gap-4 flex-wrap">
                <Link href="/users/dashboard/favorite" 
                className="bg-color-accent text-color-dark px-4 py-3 font-bold text-xl">Favorite</Link>
                <Link href="/users/dashboard/comment" 
                className="bg-color-accent text-color-dark px-4 py-3 font-bold text-xl">My Comment</Link>
            </div>
        </div>
    )
}

export default Page