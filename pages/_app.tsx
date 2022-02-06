import "@styles/globals.css";
import "tailwindcss/tailwind.css";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
	ssr: false
});

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Head>
				<script
					async
					defer
					data-website-id="f492a1fb-d553-4b4d-a09e-a95588092ecc"
					src="https://umami.fayd.me/umami.js"
				></script>
			</Head>
			<AnimatedCursor
				// @ts-ignore
				innerSize={10}
				outerSize={8}
				color="0, 216, 214"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
