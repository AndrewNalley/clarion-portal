import { useNavigate, NavigateFunction } from 'react-router-dom'
import supabase from './supabaseClient'
import { User } from '../../types/interfaces'

export const checkAuth = async (navigate: (path: string) => void): Promise<boolean> => {
    try {
        const { data } = await supabase.auth.getUser()
        if (!data.user) {
            console.log(data)
            return false
        } else {
            console.log(data.user)
            return true
        }
    } catch (error) {
        console.error("Error fetching user data:", error)
        return false
    }
}


export const fetchUserData = async () => {
    try {
        const { data } = await supabase.auth.getUser()
        if (!data.user) {
            console.log(data)
            return false
        } else {
            console.log(data.user)
            return data.user.email
        }
    } catch (error) {
        console.error("Error fetching user data:", error)
        return false
    }
}

export const handleLogout = () => {
    const navigate = useNavigate()
    const logout = async () => {
        try {
            const { error } = await supabase.auth.signOut()
            console.log('logout completed')
            navigate('/')
        } catch (error) {
            console.error("Error logging out:", error)
        }
    }
    return logout
}