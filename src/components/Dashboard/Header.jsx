"use client"

import { CaretCircleLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ( {title} ) => {
    const router = useRouter()
    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4">
            <button className="text-color-primary text-2xl font-bold hover:text-color-accent" onClick={handleBack}>
                <CaretCircleLeft size={32} />
            </button>
            <h1 className="text-2xl text-color-primary font-bold">{title}</h1>
        </div>
    )
}

export default Header