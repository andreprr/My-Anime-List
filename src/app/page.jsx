import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";



const Page = async () => {

  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)    
  //     const data = await response.json()
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = { data: recommendedAnime.slice(0, 8) }

  return (
    <>
     {/* {Anime terpopuler} */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
        <AnimeList api={topAnime}/>
      </section>
      <section>
        <Header title="Rekomendasi"/>
        <AnimeList api={recommendedAnime}/>
      </section>
    </>
  );
}

export default Page
