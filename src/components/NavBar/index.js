import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-emerald-600">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href="/" className="font-bold font-mono text-2xl">RzAnimeList</Link>
                <input placeholder="Search Anime" className=""/>
            </div>
        </header>
    )
}

export default Navbar