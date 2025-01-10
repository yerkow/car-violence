
export interface RegisterDTO {
    name: string,
    tel: string,
    password: string
}
export interface LoginDTO {
    tel: string,
    password: string
}
export interface MediaDTO {
    city: string
    description: string
    id: number
    street: string
    uploaded_at: string
    user: number
    videos: {
        id: number,
        video_file: string
    }[]
    was_at_date: string
    was_at_time: string

}
