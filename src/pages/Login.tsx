import { useState, useContext } from 'react'
import supabase from '../db/supabaseClient'
import { useNavigate, redirect } from 'react-router-dom'
import { CurrentUserContext } from '../App'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {
        currentUser,
        setCurrentUser
      } = useContext(CurrentUserContext)
    

    const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            let { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            if (!data.user) {
                console.error('User not found')
                throw redirect('/login')
            } else {
                setCurrentUser(data.user)
                // After successful login, redirect 
                console.log('success!')
                navigate('/dashboard')
            }
        } catch (error) {
            console.error('Email Login Error: ', error);
            navigate('/login') 

        }
    }

    return (
        <>
            <h1>Sign in</h1>

            <form onSubmit={handleEmailLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    aria-label="Email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    aria-label="Password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <fieldset>
                    <label htmlFor="remember">
                        <input type="checkbox" role="switch" id="remember" name="remember" />
                        Remember me
                    </label>
                </fieldset>
                <button type="submit">
                    Login
                </button>
            </form>
        </>
    );
};
export default Login