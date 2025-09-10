import { Button } from "./components/Button";

function App() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-base-background p-4 gap-1.5">
			<Button
				variant="primary"
				size="m"
			>
				Primary Button
			</Button>
			<Button
				variant="primary"
				size="g"
				disabled
			>
				Large Primary Button disabled
			</Button>
			<Button
				variant="secondary"
				size="m"
			>
				Secondary Button
			</Button>
			<Button
				variant="secondary"
				size="g"
				disabled
			>
				Disabled Secondary Button
			</Button>
			<Button
				variant="primary"
				size="g"
				loading
			>
				Loading Primary Button
			</Button>
		</div>
	);
}

export default App;
