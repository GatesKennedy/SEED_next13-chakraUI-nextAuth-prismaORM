import { Inter } from 'next/font/google';
import Provider from './components/Provider';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'aoe',
	description: 'are you curious?',
};
export type ChildProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: ChildProps) {
	return (
		<html
			lang='en'
			className={inter.className}
		>
			<body style={{ height: '100vh' }}>
				<Provider>
					<Header />
					<main>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
