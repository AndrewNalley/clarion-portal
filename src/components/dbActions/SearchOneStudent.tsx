import { useState } from 'react'
import ReadQueries from '../../db/queries/ReadQueries'

const SearchOneStudent = () => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleFirstNameSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = await ReadQueries.selectByFirstName(firstName)
            console.log('DB read returned student(s)' + data)
            setfirstName('')


        } catch (error) {
            console.error('DB read error: ', error)
        }
    }

    const handleLastNameSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = await ReadQueries.selectByLastName(lastName)
            console.log('DB read returned student(s)' + data)
            setLastName('')

        } catch (error) {
            console.error('DB read error: ', error)
        }
    }

    return (
        <>
            <form onSubmit={handleFirstNameSearch}>
                <label>First and Last Name
                    <input
                        type='text'
                        name='firstName'
                        placeholder='First'
                        aria-label='First'
                        required
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                    />

                    <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleLastNameSearch}>
                <label>First and Last Name
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