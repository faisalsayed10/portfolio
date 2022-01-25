import ProjectNavbar from "@components/ProjectNavbar";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { Project } from "util/types";
import { defaultVariant } from "util/variants";
import parse from "html-react-parser";

interface Props {
	data: Project;
}

const ProjectPage: React.FC<Props> = ({ data }) => {
	return (
		<>
			<Head>
				<title>Project - {data.title}</title>
				<link rel="icon" href={data.project_image} type="image"></link>
			</Head>
			<div className="bg-no-repeat bg-bottom bg-cover">
				<ProjectNavbar title={data.title} git_url={data.github} />
				<div className="flex flex-col items-center text-center justify-center project-hero">
					<motion.img
						variants={defaultVariant}
						initial="hidden"
						animate="show"
						src={data.project_image}
						className="w-40 mb-4 rounded-sm"
					/>
					<motion.h1
						variants={defaultVariant}
						initial="hidden"
						animate="show"
						className="text-4xl tracking-normal leading-tight font-medium antialiased mb-4"
					>
						{data.title}
					</motion.h1>
					<motion.p
						variants={defaultVariant}
						initial="hidden"
						animate="show"
						className="mb-4 max-w-md"
					>
						{data.desc}
					</motion.p>
					{parse(data.producthunt ?? "")}
					<div className="mt-2">
						<button
							onClick={() => data.link && window.open(data.link, "_blank")}
							className={`${
								data.link ? "bg-blue-500" : "bg-blue-300"
							} shadow-md text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline`}
						>
							{data.link ? "Try Now" : "Coming Soon"}
						</button>
						{data.github ? (
							<button
								onClick={() => window.open(data.github, "_blank")}
								className="bg-blue-500 shadow-md text-white font-bold py-2 ml-2 px-8 rounded focus:outline-none focus:shadow-outline"
							>
								Source
							</button>
						) : null}
					</div>
				</div>
				<div className="font-medium antialiased">
					{data.images.length > 0 ? (
						<div className="text-xl lg:mx-20 mx-6 mb-10">
							<h3 className="text-4xl mb-4 pt-6 font-semibold">Screenshots</h3>
							<div className="flex items-center justify-evenly flex-col md:flex-row">
								{data.images.map((item, i) => (
									<img key={i} src={item} className="rounded-md w-full md:w-1/2 h-auto block shadow-md mb-4 ml-4" />
								))}
							</div>
						</div>
					) : null}
					<div className="text-xl lg:ml-20 ml-6 mb-10">
						<h3 className="text-4xl mb-4 pt-6 font-semibold">Stack Used</h3>
						{data.stack.map((item, i) => (
							<p key={i}>— {item}</p>
						))}
					</div>
					<div className="text-xl lg:ml-20 ml-6 mr-6 mb-10 lg:w-1/2">
						<h3 className="text-4xl mb-4 pt-6 font-semibold">What is this Project?</h3>
						<p className="text-center sm:text-left">{parse(data.what)}</p>
					</div>
					<div className="text-xl lg:ml-20 ml-6 mr-6 mb-10 lg:w-1/2">
						<h3 className="text-4xl mb-4 pt-6 font-semibold">Why I built it: </h3>
						<p className="text-center sm:text-left">{parse(data.why)}</p>
					</div>
					<div className="text-xl lg:ml-20 ml-6 mr-6 mb-10 lg:w-1/2">
						<h3 className="text-4xl mb-4 pt-6 font-semibold">How I built it: </h3>
						<p className="text-center sm:text-left">{parse(data.how)}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export async function getStaticPaths() {
	const url =
		process.env.NODE_ENV !== "production"
			? "http://localhost:3000/projects.json"
			: "https://raw.githubusercontent.com/faisalsayed10/portfolio/main/public/projects.json";
	const res = await fetch(url);
	const projects: Project[] = await res.json();

	const paths = projects.map((p) => ({
		params: { slug: p.slug }
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const url =
		process.env.NODE_ENV !== "production"
			? "http://localhost:3000/projects.json"
			: "https://raw.githubusercontent.com/faisalsayed10/portfolio/main/public/projects.json";
	const res = await fetch(url);
	const projects: Project[] = await res.json();
	const data = projects.filter((p) => p.slug === params.slug)[0];

	return { props: { data } };
}

export default ProjectPage;
