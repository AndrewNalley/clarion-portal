import { useContext } from 'react'
import { StudentContext } from '../../pages/Dashboard'

const SearchResults = () => {

    const data = useContext(StudentContext)

    return (
        <>
            <h3>SearchResults</h3>
            {data.map(student => {
                console.log(student.first_name)
                console.log(student.last_name)
                console.log(student.email)

            })}
        </>
    )
}

export default SearchResults