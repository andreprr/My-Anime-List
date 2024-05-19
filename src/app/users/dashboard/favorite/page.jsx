import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const Page = async () => {
    const user = await authUserSession()
    const favorite = await prisma.favorite.findMany({where: {user_email: user.email}})


    return(
        <section className="mt-4 px-4 w-full">
            <Header title={"My Favorite Anime"}/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {favorite.map((collect, index) => {
                    return (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className=" relative border-2 border-color-accent">
                            <Image src="/" alt="..." className="w-full" width={250} height={250}/>
                            <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                            <h5 className="text-xl text-center"></h5>
                            </div>
                        </Link>
                    )
                })}
                
            </div>
        </section>
    )
}

export default Page