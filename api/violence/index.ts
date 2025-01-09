import { customFetch } from "@/api"
export const rGetMediaList = () => {
    return customFetch({ path: 'mediafiles/list', method: "GET" })
}
export const rSendViolence = (body: FormData) => {
    return customFetch({ path: 'upload-media/', method: "POST", data: body })
}
