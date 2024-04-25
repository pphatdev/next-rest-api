
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export type User = {
    id: string
    name: string
    email: string
    created_at: Date
}
