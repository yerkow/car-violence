import { getFromStorage } from "@/utils";

export const methods = {
    post: "POST",
    patch: "PATCH",
    get: "GET",
    delete: "DELETE",
    put: "PUT",
}
type dataType = Record<string, any> | FormData
interface customFetchProps {
    path: string;
    method: "POST" | "PATCH" | "GET" | "DELETE" | "PUT",
    withAuth?: boolean,
    query?: Record<string, any>
    data?: dataType

}
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
export const customFetch = async <T>({ path, method, query, data, withAuth = false }: customFetchProps): Promise<T | undefined> => {
    let url = new URL(`/api/v1/${path}`, BASE_URL)
    if (query) {
        Object.keys(query).forEach(key => {
            url.searchParams.append(key, query[key])
        })
    }
    const headers = new Headers()
    let fetchBody: BodyInit

    if (data && data instanceof FormData) {
        fetchBody = data
    } else {
        headers.append("Content-Type", "application/json")
        fetchBody = JSON.stringify(data)
    }
    if (withAuth) {
        const token = await getFromStorage('access')
        headers.append("Authorization", `Bearer ${token}`)
    }
    try {
        const response = await fetch(url, { method, headers, body: fetchBody })
        if (!response.ok) {
            throw new Error(`Fetch failed, STATUS:${response.status}, route:${url}`, { cause: response.status })
        }
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
        throw e
    }
}
