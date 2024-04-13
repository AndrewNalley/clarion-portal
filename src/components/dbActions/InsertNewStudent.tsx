import { useState } from 'react'
import changeQueries from '../../db/queries/ChangeQueries'

const InsertNewStudent = () => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [pronouns, setPronouns] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(0)
    const [voiceType, setVoiceType] = useState('')
    const [notes, setNotes] = useState('')


    const handleDBChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await changeQueries.insertRow(firstName, lastName, pronouns, email, phone, voiceType, notes)
            console.log('DB change successful')
            // reset form fields after submission
            setfirstName('')
            setLastName('')
            setPronouns('')
            setEmail('')
            setPhone(1234567890)
            setVoiceType('')
            setNotes('')

        } catch (error) {
            console.error('DB change error: ', error)
        }
    }


    return (
        <form onSubmit={handleDBChange}>
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
            <label>Pronouns
                <input
                    type='text'
                    name='pronouns'
                    placeholder=''
                    aria-label='Pronouns'
                    required
                    value={pronouns}
                    onChange={(e) => setPronouns(e.target.value)}
                />
            </label>
            <label>Email
                <input
                    type='text'
                    name='email'
                    placeholder='name@example.com'
                    aria-label='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>Phone Number
                <input
                    type='number'
                    name='phone'
                    aria-label='Phone'
                    required
                    value={phone}
                    onChange={(e) => setPhone(parseInt(e.target.value))}
                />
            </label>
            <label>Voice Type
                <input
                    type='text'
                    name='voiceType'
                    aria-label='Voice type'
                    required
                    value={voiceType}
                    onChange={(e) => setVoiceType(e.target.value)}
                />
            </label>
            <label>Notes
                <input
                    type='text'
                    name='Notes'
                    aria-label='Notes'
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}


export default InsertNewStudent