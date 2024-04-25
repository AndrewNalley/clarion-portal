import { useContext, useEffect, useState } from 'react'
import { CurrentStudentContext } from '../pages/Dashboard'
import { useNavigate } from 'react-router-dom'

const StudentView = () => {
    const [showStudent, setShowStudent] = useState(false)
    const {
        currentStudent,
        setCurrentStudent
    } = useContext(CurrentStudentContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (currentStudent.id !== 0 && currentStudent.id !== null && Object.keys(currentStudent).length !== 0) {
            setShowStudent(true)
        } else {
            setShowStudent(false)
        }
    }, [currentStudent])

    const clearStudent = () => {
        setCurrentStudent(
            {
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
            }
        )
    }

    return (
        <section>
            {showStudent ? (
                <>
                    <h2>Selected Student:</h2>
                    <strong>{currentStudent.first_name} {currentStudent.last_name}</strong>
                    <ul>
                        <li>ID: {currentStudent.id}</li>
                        <li>Created At: {currentStudent.created_at}</li>
                        <li>Pronouns: {currentStudent.pronouns}</li>
                        <li>Email: {currentStudent.email}</li>
                        <li>Phone: {currentStudent.phone}</li>
                        <li>Voice Type: {currentStudent.voice_type}</li>
                        <li>Notes: {currentStudent.notes}</li>
                    </ul>
                    <button onClick={() => {
                        clearStudent()
                        navigate('/dashboard/search-student')
                    }}>Clear Student</button>
                </>
            ) : (
                <h3>Current Student View</h3>
            )}
        </section>
    )
}

export default StudentView