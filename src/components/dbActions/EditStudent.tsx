import { useState } from 'react'
import { CurrentStudentContext } from '../../pages/Dashboard'
import { useContext } from 'react'
import changeQueries from '../../db/queries/ChangeQueries'

const EditStudent = () => {
    const {
        currentStudent,
        setCurrentStudent
    } = useContext(CurrentStudentContext)

    const [firstName, setfirstName] = useState(currentStudent.first_name)
    const [lastName, setLastName] = useState(currentStudent.last_name)
    const [pronouns, setPronouns] = useState(currentStudent.pronouns)
    const [email, setEmail] = useState(currentStudent.email)
    const [phone, setPhone] = useState(currentStudent.phone)
    const [voiceType, setVoiceType] = useState(currentStudent.voice_type)
    const [notes, setNotes] = useState(currentStudent.notes)


    const handleFirstNameChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await changeQueries.updateRow('first_name', firstName, currentStudent.id)
            console.log('DB change successful')
            // reset form field after submission
            setfirstName(currentStudent.first_name)
            // return current student with updated info
            setCurrentStudent(currentStudent)
        } catch (error) {
            console.error('DB change error: ', error)
        }
    }

    const handleLastNameChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await changeQueries.updateRow('last_name', lastName, currentStudent.id)
            console.log('DB change successful')
            // reset form fields after submission
            setLastName('')
            setCurrentStudent(currentStudent)
        } catch (error) {
            console.error('DB change error: ', error)
        }
    }

    const handlePronounChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await changeQueries.updateRow('pronouns', pronouns, currentStudent.id)
            console.log('DB change successful')
            // reset form fields after submission
            setPronouns('')
            setCurrentStudent(currentStudent)
        } catch (error) {
            console.error('DB change error: ', error)
        }
    }

    const handleEmailChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await changeQueries.updateRow('email', email, currentStudent.id)
            console.log('DB change successful')
            // reset form fields after submission
            setEmail(currentStudent.email)
            setCurrentStudent(currentStudent)
        } catch (error) {
            console.error('DB change error: ', error)
        }
    }

    const handlePhoneChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await changeQueries.updateRow('phone', phone, currentStudent.id)
            console.log('DB change successful')
            // reset form fields after submission
            setPhone(currentStudent.phone)
            setCurrentStudent(currentStudent)
        } catch (error) {
            console.error('DB change error: ', error)
        }
    }

    const handleVoiceTypeChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await changeQueries.updateRow('voice_type', voiceType, currentStudent.id)
            console.log('DB change successful')
            // reset form fields after submission
            setVoiceType(currentStudent.voice_type)
            setCurrentStudent(currentStudent)
        } catch (error) {
            console.error('DB change error: ', error)
        }
    }

    const handleNotesChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await changeQueries.updateRow('notes', notes, currentStudent.id)
            console.log('DB change successful')
            // reset form fields after submission
            setNotes(currentStudent.notes)
            setCurrentStudent(currentStudent)
        } catch (error) {
            console.error('DB change error: ', error)
        }
    }

    return (
        <>
            <form onSubmit={handleFirstNameChange}>
                <label>First and Last Name
                    <input
                        type='text'
                        name='firstName'
                        placeholder={currentStudent.first_name}
                        aria-label='First'
                        required
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleLastNameChange}>
                <label>Last Name
                    <input
                        type='text'
                        name='lastName'
                        placeholder={currentStudent.last_name}
                        aria-label='Last'
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label >
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handlePronounChange}>
                <label>Pronouns
                    <input
                        type='text'
                        name='pronouns'
                        placeholder={currentStudent.pronouns}
                        aria-label='Pronouns'
                        required
                        value={pronouns}
                        onChange={(e) => setPronouns(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleEmailChange}>
                <label>Email
                    <input
                        type='text'
                        name='email'
                        placeholder={currentStudent.email}
                        aria-label='Email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handlePhoneChange}>
                <label>Phone Number
                    <input
                        type='number'
                        name='phone'
                        placeholder={currentStudent.phone}
                        aria-label='Phone'
                        required
                        value={phone}
                        onChange={(e) => setPhone(parseInt(e.target.value))}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleVoiceTypeChange}>
                <label>Voice Type
                    <input
                        type='text'
                        name='voiceType'
                        placeholder={currentStudent.voice_type}
                        aria-label='Voice type'
                        required
                        value={voiceType}
                        onChange={(e) => setVoiceType(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleNotesChange}>
                <label>Notes
                    <input
                        type='text'
                        name='Notes'
                        placeholder={currentStudent.notes}
                        aria-label='Notes'
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form >
        </>
    )
}


export default EditStudent