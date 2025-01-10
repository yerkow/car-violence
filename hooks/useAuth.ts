import { rCheckToken } from "@/api/auth"
import { useEffect, useState } from "react"
const securePaths = [""]
const publicPaths = [""]
export const useAuth = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isSignedIn, setIsSignedIn] = useState(false)
    useEffect(() => {
        const check = async () => {
            console.log('started check')
            rCheckToken().then(() => {
                setIsSignedIn(true)
            }).catch((e) => {
                console.log(e, "STATUS")
            }).finally(() => setIsLoaded(true))
        }
        check()
    }, [])
    return { isLoaded, isSignedIn }
}
