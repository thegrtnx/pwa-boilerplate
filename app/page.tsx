export default function Home() {
	return (
		<main className="h-screen">
			<iframe
				src={process.env.NEXT_PUBLIC_URL}
				className="w-screen h-screen"></iframe>
		</main>
	);
}
