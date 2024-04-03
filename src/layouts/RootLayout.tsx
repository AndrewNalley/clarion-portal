import { Outlet } from 'react-router-dom';



export default function RootLayout() {


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
