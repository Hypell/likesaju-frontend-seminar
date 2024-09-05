import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PointModal } from './modals/point-modal';
import avatar from '../assets/images/avatar.png';
import coin from '../assets/icons/coin.png';

export const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();

  const [showProfile, setShowProfile] = useState(false);
  const [isPointModalOpen, setIsPointModalOpen] = useState(false);

  useEffect(() => {
    // 이후 로그인 여부를 확인하는 코드를 작성 필요
  }, []);

  const linkStyle = 'text-xl font-bold text-[#14142B] leading-6 hover:font-extrabold hover:text-[#4A3AFF] hover:cursor-pointer';
  const activeLinkStyle = 'text-xl font-extrabold text-[#4A3AFF] leading-6';

  const onClickPoint = () => {
    setIsPointModalOpen(true);
  };

  const onClickLogout = () => {
    alert('로그아웃.');
  };

  return (
    <div className="w-full flex flex-row items-center justify-between bg-white drop-shadow h-[80px] px-[68px] z-[999]">
      <Link to="/" className="text-[26px] font-extrabold text-[#14142B] leading-9 tracking-tighter">멋쟁이 사주처럼</Link>
      <div className="flex flex-row items-center gap-[50px]">
        <Link to="/saju" className={ location.pathname === '/saju' ? activeLinkStyle : linkStyle }>사주</Link>
        <Link to="/chat" className={ location.pathname === '/chat' ? activeLinkStyle : linkStyle }>채팅</Link>
        {isLogin ? (
          <div className='relative' onMouseOver={() => setShowProfile(true)} onMouseLeave={() => setShowProfile(false)}>
            <span className="text-xl font-bold text-[#14142B] leading-6 hover:font-extrabold hover:text-[#4A3AFF] hover:cursor-pointer">프로필</span>
            {showProfile && (
              <div className='absolute top-[25px] right-[-25px] bg-white drop-shadow w-[221px] p-[25px] rounded-[12px] flex flex-col gap-5'>
                <div className='flex flex-row gap-[10px] items-center justify-start'>
                  <img src={avatar} alt='avatar' className='w-[30px] h-[30px]' />
                  <span className='text-lg font-bold text-[#170F49] leading-6'>닉네임</span>
                </div>
                <div className='flex flex-row items-center justify-between'>
                  <div className='flex flex-row gap-[10px] items-center'>
                    <img src={coin} alt='coin' className='w-[30px] h-[30px]' />
                    <span className='text-lg font-bold text-[#170F49] leading-6'>포인트</span>
                  </div>
                  <span className='text-lg font-bold text-[#4A3AFF] leading-6'>130<span className='text-[#160F49]'>P</span></span>
                </div>
                <button onClick={onClickPoint} className='bg-[#160F49] text-white text-bases font-semibold leading-6 rounded-[50px] px-6 py-[6px]'>충전하기</button>
                <span onClick={onClickLogout} className='text-base font-normal underline text-[#160F49] self-start cursor-pointer'>로그아웃</span>
              </div>
            )}
          </div>
        ) : (
          <Link to="login" className="text-xl font-bold text-[#4A3AFF] leading-6 bg-[#F3F1FF] px-7 py-[17px] rounded-[50px]">로그인</Link>
        )}
      </div>
      {isPointModalOpen && <PointModal setIsModalOpen={setIsPointModalOpen} />}
    </div>
  );
};