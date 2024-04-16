import { useNavigate } from 'react-router-dom'
import supabase from '../db/supabaseClient'

const checkAuth = async (): Promise<boolean> => {
    try {

        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            console.error('No user found')
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
            return null
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
            if (error) {
                console.error('Error logging out: ', error)
            } else {
                console.log('logout completed')
                navigate('/')
            }

        } catch (error) {
            throw new Error('Error logging out: ' + error)
        }
    }
    return logout
}

export { checkAuth, fetchUserData, handleLogout }