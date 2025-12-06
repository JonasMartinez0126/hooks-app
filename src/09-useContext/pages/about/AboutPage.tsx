import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button';
import { use } from 'react';
import { Link } from 'react-router'

export const AboutPage = () => {

    const { isAuthenticated, logout } = use(UserContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-center">
            <h1 className="text-4xl">About Me</h1>
            <hr />
            {/*If user is authenticate */}
            <div className="flex flex-col gap-2">
                {
                    isAuthenticated && (
                        <Link to="/profile" className='hover:text-blue-500 underline text-2xl'>Profile</Link>
                    )
                }
                {/* Login logout */}
                {
                    isAuthenticated ? (
                        <Button variant='destructive' className='mt-4' onClick={logout} >Salir</Button>
                    ) : (
                        <Link to="/login" className='hover:text-blue-500 underline text-2xl'>Login</Link>
                    )
                }
            </div>
        </div>
    )
}
