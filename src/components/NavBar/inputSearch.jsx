"use client"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const inputSearch = () => {
    const searchRef = useRef ()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword) return

        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }
    
    return (
        <div className="relative">
            <input placeholder="Search Anime" className="p-2 rounded w-full" ref={searchRef} onKeyDown={handleSearch}/>
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24}/>
            </button>
        </div>
    )
}

export default inputSearch