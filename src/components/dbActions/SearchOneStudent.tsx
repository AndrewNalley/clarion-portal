import { useState, useContext, } from 'react'
import { Student } from '../../../types/interfaces'
import ReadQueries from '../../db/queries/ReadQueries'
import { CurrentStudentContext } from '../../pages/Dashboard'
import { useNavigate } from 'react-router-dom'

const SearchOneStudent = () => {
    const { setCurrentStudent } = useContext(CurrentStudentContext)
    const navigate = useNavigate()

    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [searchResults, setSearchResults] = useState<Student[]>([])
    const [showModal, setShowModal] = useState(false)

    const handleFirstNameSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = await ReadQueries.selectByFirstName(firstName)
            if (!data || Array.isArray(data) && data.length === 0) {
                console.error('Could not find first name')
                setShowModal(true)
            } else {
                setSearchResults(data || [])
                setfirstName('')
            }

        } catch (error) {
            console.error('DB read error: ', error)
        }
    }

    const handleLastNameSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = await ReadQueries.selectByLastName(lastName)
            if (!data || Array.isArray(data) && data.length === 0) {
                console.error('Could not find by last name')
                setShowModal(true)
            } else {
                setSearchResults(data || [])
                setLastName('')
            }
        } catch (error) {
            console.error('DB read error: ', error)
        }
    }

    const clearStudents = () => {
        setSearchResults([])
    }

    return (
        <>
            {searchResults.length === 0 && (
                <>
                    <form onSubmit={handleFirstNameSearch}>
                        <label>First Name
                            <input
                                type='text'
                                name='firstName'
                                placeholder='First'
                                aria-label='First'
                                required
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                    <form onSubmit={handleLastNameSearch}>
                        <label>Last Name
                            <input
                                type='text'
                                name='lastName'
                                placeholder='Last'
                                aria-label='Last'
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </>
            )}
            {searchResults.length > 0 && (
                <>
                    {searchResults.map(student => (
                        <div key={student.id}>
                            <li>
                                <strong>{student.first_name} {student.last_name}</strong>
                                <button onClick={() => {
                                    setCurrentStudent(student)
                                    clearStudents()
                                    navigate('/dashboard/edit-student')
                                }}>Edit Student</button>
                                <ul>
                                    <li>ID: {student.id}</li>
                                    <li>Created At: {student.created_at}</li>
                                    <li>Pronouns: {student.pronouns}</li>
                                    <li>Email: {student.email}</li>
                                    <li>Phone: {student.phone}</li>
                                    <li>Voice Type: {student.voice_type}</li>
                                    <li>Notes: {student.notes}</li>
                                </ul>
                            </li>
                        </div>
                    ))}
                    <button onClick={clearStudents}>Clear Students</button>
                </>
            )}
            {showModal && (
                <dialog open>
                    <article>
                        <h2>No Students found by that query.</h2>
                        <p>
                            Please try another search.
                        </p>
                        <footer>
                            <button className="secondary" onClick={() => setShowModal(false)}>
                                Close
                            </button>
                        </footer>
                    </article>
                </dialog>
            )}
        </>
    )
}

export default SearchOneStudent