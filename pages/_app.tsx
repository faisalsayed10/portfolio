import "@styles/globals.css";
import "tailwindcss/tailwind.css";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
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
