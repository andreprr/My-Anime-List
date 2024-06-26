import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import FavoriteButton from "@/components/AnimeList/FavoriteButton"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const Page = async ({ params: {id} }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const favorite = await prisma.favorite.findFirst({
        where: {user_email: user?.email, anime_mal_id: id}
    })

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary text-2xl">{anime.data.title} - {anime.data.year}</h3>
                {!favorite && user && <FavoriteButton anime_mal_id={id} user_email={user?.email}/> }
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Peringkat</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Skor</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Status</h3>
                    <p>{anime.data.status}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Durasi</h3>
                    <p>{anime.data.duration}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image 
                src={anime.data.images.webp.image_url} 
                alt={anime.data.images.jpg.image_url} 
                width={250} height={250} 
                className="w-full rounded object-cover"/>
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}
export default Page