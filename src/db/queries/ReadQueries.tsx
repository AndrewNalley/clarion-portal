import supabase from '../supabaseClient'


// ID
async function selectByID(id: number) {
    try {
        let { data, error } = await supabase
            .from('students') // Specify the type parameter here
            .select()
            .eq('id', id)

        if (!data) {
            console.error('Student not found by that ID: ', error)
            return null

        } else {
            return data
        }

    } catch (error) {
        throw new Error('Error selecting by ID: ' + error)
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

async function selectByFirstName(firstName: string) {
    try {
        let { data, error } = await supabase
            .from('students')
            .select()
            .eq('first_name', firstName)

        if (!data) {
            console.error('Student not found by that first name: ', error)
            return null

        } else {
            return data
        }

    } catch (error) {
        throw new Error('Error selecting by first name: ' + error)
    }
}

async function selectByLastName(lastName: string) {
    try {
        let { data, error } = await supabase
            .from('students')
            .select()
            .eq('last_name', lastName)

        if (!data) {
            console.error('Student not found by that last name: ', error)
            return null

        } else {
            return data
        }

    } catch (error) {
        throw new Error('Error selecting by last name: ' + error)
    }
}

async function selectByEmail(email: string) {
    try {
        let { data, error } = await supabase
            .from('students')
            .select()
            .eq('email', email)

        if (!data) {
            console.error('Cannot find student by that email: ', error)
            return null

        } else {
            return data
        }

    } catch (error) {
        throw new Error('Error selecting by email address: ' + error)
    }
}

async function selectByPhone(phone: number) {
    try {
        let { data, error } = await supabase
            .from('students')
            .select()
            .eq('phone', phone)

        if (!data) {
            console.error('Cannot find student with that phone number:', error)
            return null

        } else {
            return data
        }

    } catch (error) {
        throw new Error('Error selecting by phone number: ' + error)
    }
}

async function selectByVoiceType(voiceType: string) {
    try {
        let { data, error } = await supabase
            .from('students')
            .select()
            .eq('voice_type', voiceType)

        if (!data) {
            console.error('Error finding students by that voice type: ', error)
            return null

        } else {
            return data
        }

    } catch (error) {
        throw new Error('Error selecting by voice type: ' + error)
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


async function readAllRows() {
    try {
        let { data: allStudents, error } = await supabase
            .from('students')
            .select('*')

        if (!allStudents) {
            console.error('No students in the database: ', error)
            return null

        } else {
            return allStudents
        }

    } catch (error) {
        throw new Error('Error selecting all students: ' + error)
    }
}


const ReadQueries = {
    selectByID,
    selectCreated,
    selectByFirstName,
    selectByLastName,
    selectByEmail,
    selectByPhone,
    selectByVoiceType,
    selectPaymentHistory,
    selectPastLesson,
    selectFutureLesson,
    selectNotes,
    readAllRows
}

export default ReadQueries