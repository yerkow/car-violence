import { rCheckToken } from "@/api/auth"
import { useEffect, useState } from "react"

export const useAuth = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isSignedIn, setIsSignedIn] = useState(false)
    useEffect(() => {
        const check = async () => {
            console.log('started check')
            rCheckToken().then(() => {

                console.log('success check')
                setIsSignedIn(true)
            }).catch((e) => {
                console.log("error check", e)
            }).finally(() => setIsLoaded(true))
        }
        check()
    }, [])
    return { isLoaded, isSignedIn }
}
