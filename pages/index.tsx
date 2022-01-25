import Head from "next/head";
import { Navbar } from "@components/Navbar";
import Intro from "@components/Intro";
import WhatIdo from "@components/WhatIdo";
import { useState } from "react";
import NavbarOverlay from "@components/NavbarOverlay";
import About from "@components/About";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Workshops from "@components/Workshops";
import ContactForm from "@components/Contact";
import Footer from "@components/Footer";

export default function Home() {
	const [open, setOpen] = useState(false);
	const [play, setPlay] = useState(false);

	return (
		<>
			<Head>
				<title>Faisal Sayed</title>
			</Head>
			<div className="main" id="home">
				<Navbar open={open} setOpen={setOpen} play={play} setPlay={setPlay} />
				{open ? (
					<NavbarOverlay setOpen={setOpen} setPlay={setPlay} />
				) : (
					<>
						<div>
							<Intro />
							<WhatIdo />
							<About />
							<Skills />
							<Projects />
							<Workshops />
							<div className="bg-wave bg-cover bg-no-repeat">
								<ContactForm />
								<Footer />
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}
