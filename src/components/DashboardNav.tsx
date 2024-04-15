import { NavLink } from "react-router-dom"

const DashboardNav = () => {

    return (
                // TODO: add more navigation links
        <section>
            <nav>
                <NavLink to='new-student'>New Student</NavLink>
                <NavLink to='search-student'>Search For A Student</NavLink>
                <NavLink to=''>new thing 2</NavLink>
            </nav>
        </section>
    )
}

export default DashboardNav