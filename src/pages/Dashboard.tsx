import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { checkAuth, handleLogout, fetchUserData } from '../auth/authUtils'

import DBNotification from '../components/DBNotification'
import DashboardNav from '../components/DashboardNav'

const Dashboard = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState<string>('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkAuth().then(authenticated => {
            if (!authenticated) {
                navigate('/login')
            } else {
                setLoading(false)
            }
        })
    }, [navigate])


    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const userName = await fetchUserData() // Await the promise returned by fetchUserData
                console.log('Finding the username.... ')
                if (userName === undefined || userName === null) {
                    console.error('Could not find the username', userName)
                } else {
                    setUserName(userName.email)
                }
            } catch (error) {
                console.error('Error fetching user data:', error)
            }
        }
        fetchUserName()
    }, [])

    return (
        <>
            {userName ? (
                <h1>Welcome, {userName}</h1> // Render user name if available
            ) : (
                <h1>Loading...</h1> // Render loading indicator or handle other cases
            )}
            <button onClick={handleLogout()}>Logout</button>

            <DashboardNav />
            <Outlet />
            <DBNotification />
        </>
    )
}

export default Dashboard