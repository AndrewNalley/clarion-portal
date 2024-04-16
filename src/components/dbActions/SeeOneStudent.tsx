import { useState, useEffect } from 'react'
import ReadQueries from '../../db/queries/ReadQueries'

const data = await ReadQueries.selectByID(1)
const student = data[0]

const SeeOneStudent = () => {

console.log(student)
    return (
        <>
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

export default SeeOneStudent