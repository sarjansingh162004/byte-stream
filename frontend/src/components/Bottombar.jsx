import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { FaUserLarge } from "react-icons/fa6";
import { BsSaveFill } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import Discover from './Discover';


const Bottombar = () => {
  const navigate = useNavigate()
  const [showSidebar, setShowSidebar] = useState(true);
  const [isDrawerOpen , setIsDrawerOpen] = useState(false);
  const { pathname } = useLocation();
//   const { fetchAllUsers, allUsers } = useAuthStore();
    const fetchAllUsers = {u1:'a' , u2:'b'}
    const allUsers = {u1:'a' , u2:'b'}
    const userId = localStorage.getItem("userId");
    const onProfileClick = ()=>{
      navigate(`/profile/${userId}`);
    }
  

  const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';
  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';

  const handleOpenExplore = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <div>
      <div className='relative flex flex-row justify-center'>
      {
        isDrawerOpen ? (
          <>
          <div className='absolute bottom-[5px] bg-gray-900 rounded-md'>
           <Discover />
          </div>
          </>
        ) : (
          <>
          </>
        )
      }
      </div>
      <div className=' w-full flex flex-row justify-around p-1 '>
      <Link className='mx-1' to='/'>
        <div className={pathname === '/' ? activeLink : normalLink}>
          <p className='text-2xl'>
            <AiFillHome />
          </p>
        </div>
      </Link>
      <Link className='mx-1' to='/saved'>
        <div className={pathname === '/saved' ? activeLink : normalLink}>
          <p className='text-xl'>
          <BsSaveFill />
          </p>
        </div>
      </Link>
      <div className='mx-1' onClick={handleOpenExplore} >
        <div className={normalLink}>
          <p className='text-[27px] mb-1 -mt-1 xl'>
          <MdExplore />
          </p>
        </div>
      </div>
      <Link to={`/profile/${userId}`}>
          <div className={pathname === `/profile/${userId}` ? activeLink : normalLink}>
            <p className='text-xl'>
            <FaUserLarge onClick={onProfileClick} />
            </p>
          </div>
      </Link>
      </div>
    </div>
  );
};

export default Bottombar;
