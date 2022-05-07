import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import { ScrollToTop } from '../components/scroll/ScrollToTop';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextNProgress
        color="#2863EB"
        height={2}
        options={{
            showSpinner: false
          }}
      />
      <Component {...pageProps} />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default MyApp
