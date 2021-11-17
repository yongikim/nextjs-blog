// import "../styles/global.css";
import "tailwindcss/tailwind.css";
import "../styles/prism-nord.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
