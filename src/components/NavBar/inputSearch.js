"use client"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value

        router.push(`/search/${keyword}`)
    }
    
    return (
        <form className="relative" onSubmit={handleSearch}>
            <input 
                placeholder="Search Anime" 
                className="p-2 rounded w-full" 
                ref={searchRef}
                type="text"
            />
            <button 
                className="absolute top-2 end-2" 
                type="submit"
            >
                <MagnifyingGlass size={24}/>
            </button>
        </form>
    )
}

export default InputSearch
