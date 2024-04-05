import { useNavigate, NavigateFunction } from 'react-router-dom'
import supabase from './supabaseClient'
import { User } from '../../types/interfaces'

export const checkAuth = async (navigate: (path: string) => void): Promise<boolean> => {
    try {

        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            console.log('No User', user)
            return false
        } else {
            console.log('Yes user', user)
            return true
        }
    } catch (error) {
        console.error("Error fetching user data:", error)
        return false
    }
}


export const fetchUserData = async () => {
    try {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            console.log('No user found: ', user)
            return false
        } else {
            console.log('User found: ', user)
            return user
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
            let { error } = await supabase.auth.signOut()
            console.log('logout completed')
            navigate('/')
            console.log('Was there an error logging out? ', error)
        } catch (error) {
            console.error("Error logging out:", error)
        }
    }
    return logout
}