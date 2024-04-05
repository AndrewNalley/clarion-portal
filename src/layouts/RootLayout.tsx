import { Outlet } from 'react-router-dom'

const RootLayout = () => {


    return (
        <main className='app-main'>
            {// footer ??
            }
            
                <Outlet />
            
            {// header ?? 
            }
        </main>
    );
}

export default RootLayout