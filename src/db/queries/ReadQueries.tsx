import supabase from '../supabaseClient'

async function selectID() {
    try {
        let { data: id, error } = await supabase
            .from('students') // Specify the type parameter here
            .select('id');

        if (error) {
            console.error('Error:', error)
            return
        }

        if (id) {
            return id
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function selectCreated() {
    try {
        let { data: created, error } = await supabase
            .from('students')
            .select('created_at')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (created) {
            return created
        }
    } catch (error) {
        console.error('Error:', error)
        return
    }

}

async function selectFirstName() {
    try {
        let { data: firstName, error } = await supabase
            .from('students')
            .select('first_name')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (firstName) {
            return firstName
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function selectLastName() {
    try {
        let { data: lastName, error } = await supabase
            .from('students')
            .select('last_name')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (lastName) {
            return lastName
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function selectPronouns() {
    try {
        let { data: pronoun, error } = await supabase
            .from('students')
            .select('pronouns')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (pronoun) {
            return pronoun
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function selectEmail() {
    try {
        let { data: email, error } = await supabase
            .from('students')
            .select('email')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (email) {
            return email
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function selectPhone() {
    try {
        let { data: phone, error } = await supabase
            .from('students')
            .select('phone')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (phone) {
            return phone
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function selectVoiceType() {
    try {
        let { data: voiceType, error } = await supabase
            .from('students')
            .select('voice_type')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (voiceType) {
            return voiceType
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function selectPaymentHistory() {
    try {
        let { data: paymentHistory, error } = await supabase
            .from('students')
            .select('payment_history')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (paymentHistory) {
            return paymentHistory
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function selectPastLesson() {
    try {
        let { data: pastLessons, error } = await supabase
            .from('students')
            .select('past_lesson')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (pastLessons) {
            return pastLessons
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function selectFutureLesson() {
    try {
        let { data: futureLessons, error } = await supabase
            .from('students')
            .select('future_lesson')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (futureLessons) {
            return futureLessons
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function selectNotes() {
    try {
        let { data: notes, error } = await supabase
            .from('students')
            .select('notes')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (notes) {
            return notes
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function readColumns(column1: string, column2: string) {
    try {
        let { data: studentColumns, error } = await supabase
            .from('students')
            .select(`${column1},${column2}`)

        if (error) {
            console.error('Error:', error)
            return
        }

        if (studentColumns) {
            return studentColumns
        }
    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function readAllRows() {
    try {
        let { data: allStudents, error } = await supabase
            .from('students')
            .select('*')

        if (error) {
            console.error('Error:', error)
            return
        }

        if (allStudents) {
            return allStudents
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}


const ReadQueries = {
    selectID,
    selectCreated,
    selectFirstName,
    selectLastName,
    selectPronouns,
    selectEmail,
    selectPhone,
    selectVoiceType,
    selectPaymentHistory,
    selectPastLesson,
    selectFutureLesson,
    selectNotes,
    readColumns,
    readAllRows
}

export default ReadQueries