import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <section>
            <h1>Clarion Studios Database</h1>


            <NavLink to='/login'>
                <button type="submit">Login</button>
            </NavLink>
        </section>
    )
}

export default Home