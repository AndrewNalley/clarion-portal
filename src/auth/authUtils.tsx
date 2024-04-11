import { useNavigate, redirect } from 'react-router-dom'
import supabase from '../db/supabaseClient'
import { User } from '../../types/interfaces'


const checkAuth = async (navigate: (path: string) => void): Promise<boolean> => {
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
        throw new Error('Error checking authentication : ' + error)
    }
}


const fetchUserData = async () => {
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
        throw new Error('Error fetching user data: ' + error)
    }
}



const handleLogout = () => {
    const navigate = useNavigate()
    const logout = async () => {
        try {
            let { error } = await supabase.auth.signOut()
            console.log('logout completed')
            navigate('/')
            console.log('Was there an error logging out? ', error)
        } catch (error) {
            throw new Error('Error logging out: ' + error)
        }
    }
    return logout
}

export { checkAuth, fetchUserData, handleLogout }