import { Button } from 'components/button';
import { SectionLayout } from './section-layout';
import { useEffect, useState } from 'react';

export const MainSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsVisible(true);
      }
    };

    const handleTouch = (e) => {
      const touch = e.touches[0];
      if (touch && window.scrollY > 20) {
        setIsVisible(true);
      }
    };

    // 페이지 로드 시에도 체크
    handleScroll();

    // 데스크톱 스크롤 이벤트
    window.addEventListener('scroll', handleScroll);
    // 모바일 터치 이벤트
    window.addEventListener('touchmove', handleTouch, { passive: true });
    window.addEventListener('touchstart', handleTouch, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <SectionLayout>
      <style jsx global>{`
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .slide-in {
          opacity: 0;
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
        .slide-in-delay-1 {
          opacity: 0;
          animation: slideInFromLeft 0.8s ease-out 0.2s forwards;
        }
        .slide-in-delay-2 {
          opacity: 0;
          animation: slideInFromLeft 0.8s ease-out 0.4s forwards;
        }
      `}</style>

      <div className="flex flex-col w-full gap-4 md:gap-8 items-start pt-10 md:pt-0 h-[500px]">
        <h1 className={`text-3xl md:text-[64px] leading-normal whitespace-pre-wrap text-left nanum-extra-bold text-black dark:text-white ${isVisible ? 'slide-in' : 'opacity-0'}`}>
          <span>멋쟁이</span> <s className="text-gray-500">사자</s>
          {'\n'}
          <span>사주처럼</span>
        </h1>
        <p className={`text-base md:text-lg text-left ${isVisible ? 'slide-in-delay-1' : 'opacity-0'}`}>
          오늘의 사주 운세를 확인하고, 친구에게 공유하자!
        </p>
        <a href="/saju" className={`w-full md:w-auto ${isVisible ? 'slide-in-delay-2' : 'opacity-0'}`}>
          <Button className="w-full md:w-auto">멋사주 시작하기</Button>
        </a>
      </div>
      <div className="absolute -bottom-10 right-[30vw] md:right-[20vw] w-[200px] md:w-[341px] h-[200px] md:h-[329px]">
        <img
          src="/images/snulion.png"
          className="absolute z-50 object-contain scale-[100%]"
          alt="Main Illustration"
        />
        <img
          src="/images/card1.png"
          className="absolute scale-[40%] md:scale-[60%] left-[0px] md:left-[77px] -translate-x-[75%] -translate-y-[25%] -rotate-45 object-contain"
          alt="Card1 Illustration"
        />
        <img
          src="/images/card2.png"
          className="absolute scale-[40%] md:scale-[60%] left-[0px] md:left-[77px] -translate-x-[30%] -translate-y-[45%] -rotate-[15deg] object-contain"
          alt="Card2 Illustration"
        />
        <img
          src="/images/card3.png"
          className="absolute scale-[40%] md:scale-[60%] left-[0px] md:left-[77px] translate-x-[30%] -translate-y-[45%] rotate-[15deg] object-contain"
          alt="Card3 Illustration"
        />
        <img
          src="/images/card4.png"
          className="absolute scale-[40%] md:scale-[60%] left-[0px] md:left-[77px] translate-x-[75%] -translate-y-[25%] rotate-45 object-contain"
          alt="Card4 Illustration"
        />
      </div>
    </SectionLayout>
  );
};
