import { useContext, useEffect, useState } from 'react'
import { CurrentStudentContext } from '../pages/Dashboard'

const StudentView = () => {
    const student = useContext(CurrentStudentContext)
    const [showStudent, setShowStudent] = useState(false)

    useEffect(() =>  {
        if (student.currentStudent.id !== 0) {
            setShowStudent(true)
        } else {
            setShowStudent(false)
        }
    }, [student])

    return (
        <section>
            {showStudent ? (
                <>
                    <h2>Selected Student:</h2>
                    <strong>{student.currentStudent.first_name} {student.currentStudent.last_name}</strong>
                    <ul>
                        <li>ID: {student.currentStudent.id}</li>
                        <li>Created At: {student.currentStudent.created_at}</li>
                        <li>Pronouns: {student.currentStudent.pronouns}</li>
                        <li>Email: {student.currentStudent.email}</li>
                        <li>Phone: {student.currentStudent.phone}</li>
                        <li>Voice Type: {student.currentStudent.voice_type}</li>
                        <li>Notes: {student.currentStudent.notes}</li>
                        {/* Add more attributes as needed */}
                    </ul>
                </>
            ) : (
                <h3>No Student Information Available</h3>
            )}
        </section>
    )
}

export default StudentView