import { useState, useEffect, createContext, useContext } from 'react'
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom'
import { checkAuth, handleLogout, fetchUserData } from '../auth/authUtils'
import type { User, Student } from '../../types/interfaces'

import DBNotification from '../components/DBNotification'
import DashboardNav from '../components/DashboardNav'
import { UserContext } from '../App'


export const StudentContext = createContext(null)
export const StudentsContext = createContext(null)

const Dashboard = () => {
    const navigate = useNavigate()
    const userName = useContext(UserContext)
    const [loading, setLoading] = useState(true)
    const [student, setStudent] = useState(null)
    const [students, setStudents] = useState(null)

    console.log(userName)

    useEffect(() => {
        checkAuth().then(authenticated => {
            if (!authenticated) {
                navigate('/login')
            } else {
                setLoading(false)
            }
        })
    }, [navigate])

    return (
        <>
            {userName ? (
                <h1>Welcome, {userName}</h1> // Render if available
            ) : (
                <h1>Loading...</h1> // Render loading indicator or other
            )}
            <button onClick={handleLogout()}>Logout</button>

            <DashboardNav />
            <DBNotification />
            <StudentContext.Provider value={student}>
                <StudentsContext.Provider value={students}>
                    <Outlet />
                </StudentsContext.Provider>
            </StudentContext.Provider>
        </>
    )
}

export default Dashboard