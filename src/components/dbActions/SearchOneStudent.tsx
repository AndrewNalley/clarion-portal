import { useState, useContext,  } from 'react'
import ReadQueries from '../../db/queries/ReadQueries'
import { CurrentStudentContext } from '../../pages/Dashboard'

const SearchOneStudent = () => {
    const {
        currentStudent,
        setCurrentStudent
      } = useContext(CurrentStudentContext)
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleFirstNameSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = await ReadQueries.selectByFirstName(firstName)
            if (!data) {
                console.error('Could not find first name')
            } else {
                console.log('DB read returned student(s)' + data[0].first_name + ': ' + data[0].last_name)
                setCurrentStudent(data[0])
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
            if (!data) {
                console.error('Could not find by last name')
            } else {
                console.log('DB read returned student(s)' + data[0].first_name + ': ' + data[0].last_name)
                setLastName('')
            }
        } catch (error) {
            console.error('DB read error: ', error)
        }
    }

    return (
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
    )
}

export default SearchOneStudent