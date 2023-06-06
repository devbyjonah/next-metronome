export default function SettingsModal({
	isOpen,
	onClose,
	content,
}: {
	isOpen: boolean;
	onClose: () => void;
	content: JSX.Element;
}) {
	if (!isOpen) return null;
	return (
		<div className="flex justify-center items-center fixed z-10 top-0 left-0 w-full h-full bg-background-dark">
			<div className="relative max-w-md max-h-96 text-background bg-primary w-full h-full rounded">
				<button className="absolute top-0 right-2" onClick={onClose}>
					X
				</button>
				{content}
			</div>
		</div>
	);
}