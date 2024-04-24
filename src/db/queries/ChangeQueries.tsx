import supabase from '../supabaseClient'

async function insertRow(firstName: string, lastName: string, pronouns: string, email: string, phone: number, voiceType?: string, notes?: string) {
    try {
        const { data, error } = await supabase
            .from('students')
            .insert({
                first_name: firstName,
                last_name: lastName,
                pronouns: pronouns,
                email: email,
                phone: phone,
                voice_type: voiceType,
                notes: notes
            })
            .select()

        if (error) {
            console.error('Error:', error)
            return null
        }

        if (data) {
            return data
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

// first two params take in the proposed new data, the second two params take in the identifying/matching information of the data fields to update
async function updateRow(newColumnValue: string, newValue: string, targetID: number) {
    try {
        const { data, error } = await supabase
            .from('students')
            .update({ [newColumnValue]: newValue })
            .eq('id', targetID)
            .select()

        if (error) {
            console.error('Error:', error)
            return
        }

        if (data) {
            return data
        }

    } catch (error) {
        console.error('Error:', error)
        return
    }
}

async function deleteRow(column: string, value: string) {
    try {
        const { error } = await supabase
            .from('students')
            .delete()
            .eq(column, value)

        if (error) {
            console.error('Error:', error)
            return
        } else return `succesfully deleted value ${value} from ${column} `


    } catch (error) {
        console.error('Error:', error)
        return
    }
}

const changeQueries = {
    insertRow,
    updateRow,
    deleteRow
}

export default changeQueries