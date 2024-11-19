import { Button } from 'components/button';
import { SectionLayout } from './section-layout';

export const SajuSection = () => {
  const sajuCardInfo = [
    {
      title: '건강운',
      description: '오늘 하루도 건강하고 안전하게!',
      img: '/images/health.png',
    },
    {
      title: '취업/학업운',
      description: '하는 일 모두 잘 될거야 :)',
      img: '/images/career.png',
    },
    {
      title: '연애운',
      description: '여러분의 사랑은 안녕하신가요?',
      img: '/images/love.png',
    },
    {
      title: '재물운',
      description: '돈 많은 백수가 되는 그날까지',
      img: '/images/wealth.png',
    },
  ];

  return (
    <SectionLayout>
      <div className="w-full h-full flex flex-col gap-10 md:gap-[80px]">
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl nanum-extra-bold text-neutral-800">
              AI가 알려주는 사주
            </h3>
            <p className="text-lg md:text-xl font-semibold text-neutral-800">
              오늘의 사주 운세를 확인해보세요.
            </p>
          </div>
          <a href="/saju">
            <Button className="w-full md:w-[250px] h-full" isRounded={true}>
              내 사주 보러가기
            </Button>
          </a>
        </div>
        <div className="space-y-6 md:space-y-10">
          <p className="text-lg md:text-xl text-neutral-800 font-semibold">
            어떤 내용을 확인할 수 있나요?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[30px]">
            {sajuCardInfo.map((card) => (
              <SajuCard
                key={card.title}
                title={card.title}
                description={card.description}
                img={card.img}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

const SajuCard = ({ title, description, img }) => {
  return (
    <div className="flex items-center gap-3 md:gap-5 bg-white p-4 md:p-5 rounded-xl shadow-md">
      <div className="size-[60px] md:size-[100px]">
        <img src={img} alt="Saju Card" className="object-contain" />
      </div>
      <div className="space-y-1 md:space-y-2 h-fit">
        <h4 className="text-left text-lg md:text-xl font-bold text-neutral-800">
          {title}
        </h4>
        <p className="text-sm md:text-base font-normal text-neutral-800">{description}</p>
      </div>
    </div>
  );
};
