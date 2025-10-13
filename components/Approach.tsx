"use client";

import React from 'react'
import { CanvasRevealEffect } from './ui/canvas-reveal-effect'
import { AnimatePresence, motion } from 'motion/react';
import MagicButton from './ui/MagicButton';

const Approach = () => {
  return (
    <section className='py-20'>
      <h1 className="heading">
        My
        <span className="text-purple ml-[8px]">Approach</span>
      </h1>
      <div className="mt-10">
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
            <Card title="Planning & Strategy" icon={<AceternityIcon order='Phase 1'/>}
                description="We’ll collaborate closely to understand your goals, target audience, and vision. Together, we’ll define the project scope, site architecture, and user journey. This stage ensures that every design and development choice aligns perfectly with your objectives before coding begins."
            >
                <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
                />
            </Card>
            <Card title="Development & Progress Update" icon={<AceternityIcon order='Phase 2' />}
            description="Once the plan is in motion, I’ll begin building your website with clean, scalable, and responsive code. You’ll receive regular progress updates, design previews, and feedback opportunities at each milestone keeping the process transparent and collaborative."
            >
                <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                    [236, 72, 153],
                    [232, 121, 249],
                ]}
                dotSize={2}
                />
                {/* Radial gradient for the cute fade */}
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
            <Card title="Development & Launch" icon={<AceternityIcon order='Phase 3' />}
                description='After thorough testing, optimization, and final refinements, your website goes live, ready to perform flawlessly across all devices. I’ll ensure smooth deployment, provide post-launch support, and help you take the first confident step toward digital growth.'
            >
                <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
                />
            </Card>
            </div>
      </div>
    </section>
  )
};


const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4  lg:h-[35rem] relative rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex justify-center items-center">
        <div className=" absolute text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className=" flex flex-col justify-center items-center px-6 dark:text-white  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4   group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          <h2 className='text-3xl text-center font-bold mb-3'>{title}</h2>
          <h2 className='text-center text-sm text-[#e4ecff]'>{description}</h2>
        </div>
        
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div key={order}>
       <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 lg:text-xl font-bold text-white backdrop-blur-3xl">
                {order}
            </span>
        </button> 
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};


export default Approach
