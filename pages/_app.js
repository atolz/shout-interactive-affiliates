import "../styles/globals.css";
import "../styles/typography.css";
import "../styles/icon-fonts.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Component.Layout && (
        <Component.Layout>
          <Component {...pageProps}></Component>
        </Component.Layout>
      )}
      {!Component.Layout && <Component {...pageProps}></Component>}
    </>
  );
}

export default MyApp;
