import { useState, useEffect, createContext, useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { handleLogout } from '../auth/authUtils'
import type { Student } from '../../types/interfaces'

import DBNotification from '../components/DBNotification'
import DashboardNav from '../components/DashboardNav'
import { CurrentUserContext } from '../App'


export const StudentContext = createContext(null)
export const StudentsContext = createContext(null)

const Dashboard = () => {
    const navigate = useNavigate()
    const userName = useContext(CurrentUserContext)
    const [student, setStudent] = useState(null)
    const [students, setStudents] = useState(null)

    useEffect(() => {
        if (!userName || !userName.currentUser || Object.keys(userName.currentUser).length === 0 || userName.currentUser.email === undefined) {
            navigate('/login')
        }
    }, [userName, navigate])

    return (
        <>
            <button onClick={handleLogout()}>Logout</button>
            <h1>Welcome, {userName.currentUser.email}</h1>

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