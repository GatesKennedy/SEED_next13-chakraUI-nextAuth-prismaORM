import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './layout';
import Provider from './components/Provider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
