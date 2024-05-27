
import { faArrowRight, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/FontAwesomeIcon';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [user, setUser] = useState<string>("");

    useEffect(()=>{
        const getUsers = () => {
            fetch("http://localhost:3000/api/users/6651d74d97f26134b5bdb16a")
                .then(res => res.json())
                .then(data => setUser(data.name))
        }

        getUsers();
    }, [user])

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="/CCS.png" alt="logo" className="w-10 h-10" />
            <span className="ml-3 text-xl">API Integration</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white cursor-pointer">First Link</a>
            <a className="mr-5 hover:text-white cursor-pointer">Second Link</a>
            <a className="mr-5 hover:text-white cursor-pointer">Third Link</a>
            </nav>
            <div className="gap-5 flex justify-between">
                <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Hello! {user} &nbsp; <Icon icon={faFaceSmile} />
                </button>
                <Link to="/signin" className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Logout &nbsp; <Icon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header