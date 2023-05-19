import Link from 'next/link';


function Navbar() {
	return (
		<nav>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/for-teachers'>
				<a>For teachers</a>
			</Link>
			<Link href='/for-donors'>
				<a>For donors</a>
			</Link>
			<Link href='/profile'>
				<a>Profile</a>
			</Link>
		</nav>
	);
}

export default Navbar;
