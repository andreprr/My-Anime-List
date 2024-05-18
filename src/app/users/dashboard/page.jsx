import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"


const Page = async() => {
    const user = await authUserSession()


    return (
        <div className="text-color-primary">
            <h3>Dashboard</h3>
            <h4>Welcome, {user.name}</h4>
            <Image src={user.image} alt="" width={250} height={250} />
        </div>
    )
}

export default Page