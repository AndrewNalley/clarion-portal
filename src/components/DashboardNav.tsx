import { NavLink } from "react-router-dom"

const DashboardNav = () => {

    return (
        // TODO: add more navigation links
        <section>
            <nav>
                <NavLink to='all-students'><button>All Students</button></NavLink>
                <NavLink to='one-student'><button>One Student</button></NavLink>
                <NavLink to='new-student'><button>New Student</button></NavLink>
                <NavLink to='search-student'><button>Search For A Student</button></NavLink>
            </nav>
        </section>
    )
}

export default DashboardNav