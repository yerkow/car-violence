import { customFetch } from "@/api"
import { MediaDTO } from "@/types"
export const rGetMediaList = (): Promise<MediaDTO[] | undefined> => {
    return customFetch({ path: 'mediafiles/list', method: "GET", withAuth: true })
}

export const rGetMediaById = (id: number): Promise<MediaDTO | undefined> => {
    return customFetch({ path: `mediafiles/detail`, method: "GET", withAuth: true, query: { id } })
}
export const rSendViolence = (body: FormData) => {
    return customFetch({ path: 'mediafiles/upload/', method: "POST", data: body, withAuth: true })
}
