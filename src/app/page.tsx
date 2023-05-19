import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<header>
				<div>Give2Learn</div>
				<Link href='/'>Home</Link>
				<Link href='/for-donors'>For donors</Link>
				<Link href='/for-teachers'>For teachers</Link>
				<Link href='/profile'>For profile</Link>
			</header>
			<main>
				<div>
					<h1>
						Did you know that over 41 million computers are
						discarded when they’re broken or outdated?
					</h1>
					<h3>
						Find a new home for your old devices by supporting
						students who need technology in their classrooms.
					</h3>
				</div>
				<div>
					<button>Donate a Device</button>
					<button>Request a Device</button>
				</div>
				<div>
					<h2>How this works</h2>
					<div>
						<h3>For Teachers</h3>
						<p>
							Submit a request for a device we have in our
							inventory. Within a day, we will review your request
							and begin the process for getting your requested
							devices to your classroom
						</p>
					</div>
					<div>
						<h3>For Donors</h3>
						<p>
							Simply fill out a simple form describing the device
							you’ll be sending to us. Check out our criteria for
							acceptable devices before you send your device in!
						</p>
					</div>
				</div>
			</main>
			<footer>
				<Link href='/about'>About</Link>
				<Link href='/contact'>Contact</Link>
				<Link href='/faq'>FAQ</Link>
			</footer>
		</div>
	);
}
