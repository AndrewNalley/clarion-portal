import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../components/supabaseClient';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const checkCredentials = async (email: string, password: string) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
            if (error) {
                console.log('Error checking Credentials', error)
                return error
            } else {
                console.log('Checking credentials', data)
                return data
            }
        } catch (error) {
            console.error('Error in Credentials function', error)
        }
    }

    const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await checkCredentials(email, password)
            console.log('handleEmailLogin data: ', data)
            if (data.user.aud === 'authenticated') {
                console.log(data.user)
                console.log(data.user.aud)
                // After successful login, redirect 
                console.log('success!')
                navigate('/dashboard')
            } else {
                navigate('/')
                console.log(data.user)
                return false;
            }
        } catch (error) {
            navigate('/')
            console.error('Email Login Error: ', error)
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