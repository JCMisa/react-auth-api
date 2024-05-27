
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/FontAwesomeIcon';

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="/CCS.png" alt="logo" className="w-10 h-10" />
            <span className="ml-3 text-xl">API Integration</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white cursor-pointer">First Link</a>
            <a className="mr-5 hover:text-white cursor-pointer">Second Link</a>
            <a className="mr-5 hover:text-white cursor-pointer">Third Link</a>
            </nav>
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Search &nbsp; <Icon icon={faSearch} />
            </button>
        </div>
    </header>
  )
}

export default Header