import { customFetch } from "@/api"

export const rConfirmCode = ({ tel }: { tel: string }) => {
    return customFetch({ method: "POST", path: 'send-code/', data: { phone_number: '+' + tel } })
}
