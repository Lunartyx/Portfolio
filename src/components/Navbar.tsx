import { Link } from "react-router-dom";
import Card from '../components/Card'
import logo from '../assets/logo.png'

const standard_button = "text-indigo-500 bg-gray-100 px-8 py-4 rounded-lg shadow-xl text-center ml-4 mr-2 justify-center hover:animate-pulse hover:text-gray-100 hover:bg-indigo-500"


const Navbar = () => {
    return (
        <>
            <Card>
                <header>
                    <nav className='flex'>
                        <div className='basis-2/12 flex align-items items-center justify-center'>
                            <Link to="/">
                                <img className='h-16 w-16 hover:animate-spin' src={logo} alt='logo' />
                            </Link>
                        </div>
                        <div className='basis-8/12 flex align-items justify-left'>
                            <div className="flex">
                                <Link to="/sleepykingdom">
                                    <button className={standard_button}>SleepyKingdom</button>
                                </Link>
                                <Link to="/sleepylegends">
                                    <button className={standard_button}>SleepyLegends</button>
                                </Link>
                                <Link to="/team">
                                    <button className={standard_button}>Team</button>
                                </Link>
                                <Link to="/slkdiscord">
                                    <button className={standard_button}>Discord</button>
                                </Link>
                                <Link to="/contact">
                                    <button className={standard_button}>Contact us!</button>
                                </Link>

                            </div>

                        </div>
                        <div className='basis-3/12 flex align-items items-center justify-center'>
                            <Link to='SignIn'>
                                <button className='text-indigo-500 bg-gray-100 px-8 py-4 rounded-lg shadow-xl text-center ml-4 mr-2 justify-center hover:animate-pulse hover:text-gray-100 hover:bg-indigo-500'>Sign In</button>
                            </Link>
                            <Link to='SignUp'>
                                <button className='text-gray-100 bg-indigo-500 px-8 py-4 rounded-full shadow-xl text-center ml-2 mr-4 justify-center hover:animate-pulse'>Sign Up</button>
                            </Link>
                        </div>
                    </nav>
                </header>
            </Card>
        </>
    )
}

export default Navbar
