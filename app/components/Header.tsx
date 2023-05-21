'use client';
import { Center, Divider, HStack, StackDivider } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<nav>
				<Center m={2}>
					<Image
						src='/aoe.png'
						width={40}
						height={40}
						alt='aoe'
					/>
				</Center>
				<Center>
					<HStack
						spacing={12}
						mb={1}
					>
						<Link href={'/'}>home</Link>
						<Link href={'/work'}>work</Link>
						<Link href={'/info'}>info</Link>
					</HStack>
				</Center>
				<Divider mb={2} />
			</nav>
		</header>
	);
};

export default Header;
