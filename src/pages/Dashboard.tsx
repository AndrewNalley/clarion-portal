import { useState, useEffect } from 'react';
import selectQueries from '../queries/SelectQueries'
import { Student } from '../../types/interfaces'


function Dashboard() {
    const [students, setStudents] = useState<Student[]>([])

    useEffect(() => {
        async function fetchStudents() {
            const studentData = await selectQueries.readAllRows();
            setStudents(studentData);
        }

        fetchStudents();
    }, []);

    // const showID = selectQueries.selectID()
    // const showDateCreated = selectQueries.selectCreated()
    // const showFirstName = selectQueries.selectFirstName()


    return (
        <>
            <h2>Student List</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
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
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Dashboard