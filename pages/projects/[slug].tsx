import React from "react";
import { Project } from "util/types";

const dev = process.env.NODE_ENV !== "production";

interface Props {
	data: Project;
}

const ProjectPage: React.FC<Props> = ({ data }) => {
	return <div>{JSON.stringify(data)}</div>;
};

export async function getStaticPaths() {
	const url = dev ? "http://localhost:3000/projects.json" : "https://fayd.me/projects.json";
	const res = await fetch(url);
	const projects: Project[] = await res.json();

	const paths = projects.map((p) => ({
		params: { slug: p.slug }
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const url = dev ? "http://localhost:3000/projects.json" : "https://fayd.me/projects.json";
	const res = await fetch(url);
	const projects: Project[] = await res.json();
	const data = projects.filter((p) => p.slug === params.slug)[0];

	return { props: { data } };
}

export default ProjectPage;
