import { useContext, useState } from 'react'
import { Student } from '../../../types/interfaces'
import { CurrentStudentContext } from '../../pages/Dashboard'
import ReadQueries from '../../db/queries/ReadQueries'
const students = await ReadQueries.readAllRows()

const SeeAllStudents = () => {
    const { setCurrentStudent } = useContext(CurrentStudentContext)

    return (
        <>
            <h2>Student List</h2>
            <ul>
                {students && students.map(student => (
                    <li key={student.id}>
                        <strong>{student.first_name} {student.last_name}</strong>
                        <button onClick = {() => setCurrentStudent(student)}>Edit Student</button>
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
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SeeAllStudents