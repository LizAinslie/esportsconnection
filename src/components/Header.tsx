import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitch, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return(
        <header className="flex flex-col items-center gap-3 justify-center text-indigo-900">
            <div className='flex flex-col items-center'>
                <Image src="/logo.png" alt="OC Talk Radios Esports Connection Logo" width={400} height={400}/>
                <h1 className="text-2xl text-center font-bold">WHERE THE ESPORTS WORLD GOES TO CONNECT.</h1>
            </div>
            <div className="flex flex-row gap-4 justify-between items-center w-full px-4">
                <div className="flex flex-row gap-2 text-indigo-800">
                    <a href='#' className='h-8 w-8 flex flex-row items-center justify-center'>
                        <FontAwesomeIcon icon={faYoutube} fixedWidth />
                    </a>

                    <a href='#' className='h-8 w-8 flex flex-row items-center justify-center'>
                        <FontAwesomeIcon icon={faTwitch} fixedWidth />
                    </a>
                    
                    <a href='#' className='h-8 w-8 flex flex-row items-center justify-center'>
                        <FontAwesomeIcon icon={faInstagram} fixedWidth />
                    </a>

                    <a href='#' className='h-8 w-8 flex flex-row items-center justify-center'>
                        <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
                    </a>

                    <a href='#' className='h-8 w-8 flex flex-row items-center justify-center'>
                        <FontAwesomeIcon icon={faTwitter} fixedWidth />
                    </a>
                </div>
                <button className="flex flex-row gap-2 bg-indigo-600 font-semibold p-2 text-white rounded-md cursor-pointer">
                    Our Newsletter
                </button>
            </div>
        </header>
    );
};

export default Header;
