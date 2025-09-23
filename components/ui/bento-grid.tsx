import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-7 lg:gap-8 gap-4 ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 overflow-hidden flex flex-col relative shadow-input justify-between space-y-4 rounded-3xl  border border-transparent p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black bg-white dark:shadow-none",
        className,
      )}

      style={{
        background: 'rgb(4, 7, 29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full `}>
        <div className="w-full h-full absolute">
          {img && (<img src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center')} />) }
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (<img src={spareImg} alt={spareImg} className='object-cover, object-center, w-full h-full' />)}
        </div>

        {/* {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}  */}

        <div className={cn(
          titleClassName, 'group/hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-sm text-[#c1c2d3] dark:text-neutral-300 z-10 lg:text-base">
            {description}
          </div>
        </div>
      </div>
  
        <div className="text-lg lg:text-3xl max-w-96 z-10 font-sans font-bold">
          {title}
        </div>

        {id === 2 && <GlobeDemo /> }

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2-">
            <div className="flex flex-col-gap-3 lg:gap-8">
              {['React.js', 'Next.js', 'TypeScript'].map((item, index) => (
                <span className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]" key={index}> {item} </span>
              ))}
            </div>
          </div>
        )}
        
      </div>
  );
};
