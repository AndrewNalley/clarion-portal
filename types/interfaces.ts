export interface Student {
    id: any
    created_at: String
    first_name: String
    last_name: String
    pronouns: String
    email: String
    phone: any
    voice_type: String
    payment_history: Array<JSON>
    past_lesson: any
    future_lesson: any
    notes: String
}

export interface User {
    email: String
    password: String
}