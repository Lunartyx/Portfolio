import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <header className='bg-slate-300 h-20 rounded-2xl'>
                <nav className='flex'>
                    <div className='basis-1/6'>
                        <img className='h-16 w-auto p-' src={logo} alt='logo' />
                    </div>
                    <div className='basis-4/6'>
                        <ul className=''>
                            <li className='grid grid-cols-5'>
                                <a className='bg-purple-300 font-p text-center px-5 py-2 w-40 rounded-lg hover:bg-purple-700'>Home</a>
                                <a className='bg-purple-300 font-p text-center px-5 py-2 w-auto rounded-lg hover:bg-purple-700'>KingdomsRise</a>
                                <a className='bg-purple-300 font-p text-center px-5 py-2 w-auto rounded-lg hover:bg-purple-700'>Discord</a>
                                <a className='bg-purple-300 font-p text-center px-5 py-2 w-auto rounded-lg hover:bg-purple-700'>Learner Lab</a>
                                <a className='bg-purple-300 font-p text-center px-5 py-2 w-auto rounded-lg hover:bg-purple-700'>Help</a>
                            </li>
                        </ul>
                    </div>
                    <div className='basis-1/6'>
                        <button className='bg-purple-300 font-p px-5 py-2 rounded-lg hover:bg-purple-700'>Sign In</button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar





/*
const Navbar2 = () => {
    return (
        <>
            <Card>
                <header>
                    <nav className='flex'>
                        <div className='basis-1/6'>
                            <img className='h-16 w-auto' src={logo} alt='logo' />
                        </div>
                        <div className='basis-4/6'>
                            <ul className=''>
                                <li className='grid grid-cols-5'>
                                    <a className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600 w-36'>Home</a>
                                    <a className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600 w-36'>KingdomsRise</a>
                                    <a className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600 w-36'>Discord</a>
                                    <a className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600 w-36'>Learner Lab</a>
                                    <a className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600 w-36'>Help</a>
                                </li>
                            </ul>
                        </div>
                        <div className='basis-1/6'>
                            <button>Sign In</button>
                        </div>
                    </nav>
                </header>
            </Card>
        </>
    )
}

export default Navbar2
*/