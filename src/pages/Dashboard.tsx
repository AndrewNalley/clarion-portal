import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Student } from '../../types/interfaces'
import selectQueries from '../queries/SelectQueries'
import { checkAuth, handleLogout, fetchUserData } from '../components/authUtils'

const Dashboard = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState<string | null>("")
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkAuth(navigate).then(authenticated => {
            if (!authenticated) {
                navigate('/login')
            } else {
                setLoading(false)
            }
        })
    }, [navigate])



    useEffect(() => {
        async function fetchStudents() {
            const studentData = await selectQueries.readAllRows()
            setStudents(studentData)
            setLoading(false)
        }
        fetchStudents()
    }, [])

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const userName = await fetchUserData(); // Await the promise returned by fetchUserData
                console.log('Finding the username ', userName)
                setUserName(userName.email);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserName();
    }, []);





    // const showID = selectQueries.selectID()
    // const showDateCreated = selectQueries.selectCreated()
    // const showFirstName = selectQueries.selectFirstName()


    return (
        <>
            {userName ? (
                <h1>Welcome, {userName}</h1> // Render user name if available
            ) : (
                <h1>Loading...</h1> // Render loading indicator or handle other cases
            )}
            <button onClick={handleLogout()}>Logout</button>

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