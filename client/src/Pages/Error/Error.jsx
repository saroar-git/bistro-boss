import { Link } from 'react-router-dom';
import errorImg from '../../assets/404.gif';
import { FaHome } from 'react-icons/fa';

const Error = () => {
      return (
            <div className='w-full mx-auto min-h-screen bg-[#FFFFFF]'>
                  <img src={errorImg} alt="" className='w-[750px] mx-auto' />
                  <Link to='/' className='text-white font-cinzel font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] p-3 rounded-lg flex items-center gap-2 uppercase w-44 mx-auto'>
                        back to home <FaHome />
                         </Link>
            </div>
      );
};

export default Error;