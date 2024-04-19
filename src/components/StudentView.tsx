import { useContext } from 'react'
import { StudentContext, StudentsContext } from '../pages/Dashboard'

const StudentView = () => {
    const student = useContext(StudentContext)
    const students = useContext(StudentsContext)

    return (
        <>
            <h4>Student</h4>
            {student ? (
                <>
                    <h2>student Information</h2>
                    <strong>{student.first_name} {student.last_name}</strong>
                    <ul>
                        <li>ID: {student.id}</li>
                        <li>Created At: {student.created_at}</li>
                        <li>Pronouns: {student.pronouns}</li>
                        <li>Email: {student.email}</li>
                        <li>Phone: {student.phone}</li>
                        <li>Voice Type: {student.voice_type}</li>
                        <li>Notes: {student.notes}</li>
                        {/* Add more attributes as needed */}
                    </ul>
                </>
            ) : (
                <h3>No Student Information Available</h3>
            )}
        </>
    )
}

export default StudentView