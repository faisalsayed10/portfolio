import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { whatIdoVariant } from "util/variants";

const WhatIdo: React.FC = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) controls.start("show");
		if (!inView) controls.start("hidden");
	}, [controls, inView]);

	return (
		<>
			<div className="flex max-w-screen-prose mb-20 lg:mt-0 mt-20 mr-4">
				<div className="flex items-start xl:ml-40 ml-6 flex-1 justify-center lg:min-h-screen flex-col">
					<h3 className="flex items-center text-blue-800 lg:mb-12 mb-4 text-xl font-medium antialiased">
						<div className="bar bg-blue-800 mr-3"></div>What I Do
					</h3>
					<h2 className="text-xl lg:text-3xl xl:text-4xl xl:mb-32 lg:mb-10 mb-6 font-semibold antialiased">
						<motion.p
							variants={whatIdoVariant}
							ref={ref}
							initial="hidden"
							animate={controls}
						>
							I enjoy creating products,
						</motion.p>
						<motion.p
							variants={whatIdoVariant}
							ref={ref}
							initial="hidden"
							animate={controls}
						>
							which are fun and delightful.
						</motion.p>
					</h2>
					<h1 className="text-4xl md:text-5xl lg:text-8xl xl:text-9xl font-semibold antialiased">
						<motion.p
							variants={whatIdoVariant}
							ref={ref}
							initial="hidden"
							animate={controls}
						>
							Think.&nbsp;Make.
						</motion.p>
						<motion.p
							variants={whatIdoVariant}
							ref={ref}
							initial="hidden"
							animate={controls}
						>
							Ship.
						</motion.p>
					</h1>
				</div>
				<div className="relative hidden sm:block flex-1">
					<img className="absolute bottom-1/2 w-1/3" src="/figure-1.png" />
					<img
						className="absolute top-1/3 left-1/4 w-2/3"
						src="/figure-3.png"
					/>
					<img className="absolute top-2/3 w-2/3" src="/figure-2.png" />
				</div>
			</div>
		</>
	);
};

export default WhatIdo;
