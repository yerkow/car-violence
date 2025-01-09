import { customFetch } from "@/api"

export const rSendViolence = (body: FormData) => {
    return customFetch({ path: 'upload-media/', method: "POST", data: body })
}
