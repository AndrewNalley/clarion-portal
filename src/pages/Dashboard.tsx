import { useState, useEffect, createContext, useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { handleLogout } from '../auth/authUtils'
import type { Student } from '../../types/interfaces'
import { CurrentUserContext } from '../App'

import DashboardNav from '../components/DashboardNav'
import StudentView from '../components/StudentView'

type CurrentStudentContextType = {
    currentStudent: Student
    setCurrentStudent: React.Dispatch<React.SetStateAction<Student>>
}

export const CurrentStudentContext = createContext<CurrentStudentContextType>({
    currentStudent: {
        id: 0,
        created_at: '',
        first_name: '',
        last_name: '',
        pronouns: '',
        email: '',
        phone: 0,
        voice_type: '',
        payment_history: [],
        past_lesson: undefined,
        future_lesson: undefined,
        notes: ''
    },
    setCurrentStudent: () => { }
})

const Dashboard = () => {
    const navigate = useNavigate()
    const userName = useContext(CurrentUserContext)
    const [currentStudent, setCurrentStudent] = useState<Student>({} as Student)


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
            <CurrentStudentContext.Provider value={{
                currentStudent,
                setCurrentStudent
            }}>
                <StudentView />
                <NavLink to='edit-student'><button>Edit Student</button></NavLink>
                <Outlet />
            </CurrentStudentContext.Provider>
        </>
    )
}

export default Dashboard