import { customFetch } from "@/api"

export const rConfirmCode = ({ tel }: { tel: string }) => {
    return customFetch({ method: "POST", path: 'send-code/', data: { phone_number: '+' + tel } })
}
export const rVerifyCode = (data: {
    phone_number: string,
    code: string,
    full_name: string,
    password: string
}) => {
    return customFetch({ method: "POST", path: 'verify-code/', data })
}
export const rLogin = (data: { phone_number: string, password: string }): Promise<{ access: string, refresh: string } | undefined> => {
    return customFetch({ method: "POST", path: 'login/', data })
}
export const rCheckToken = () => {
    return customFetch({ method: "GET", path: 'check-token', withAuth: true })
}
