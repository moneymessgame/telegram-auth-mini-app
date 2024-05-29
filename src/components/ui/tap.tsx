import { useState } from 'react';

const PointImage = () => {
	const [points, setPoints] = useState(0);
	const [isTapped, setIsTapped] = useState(false);

	const handleTap = () => {
		setPoints(points + 1);
		setIsTapped(true);
		setTimeout(() => setIsTapped(false), 300);
	};
	return (
		<div className="flex flex-col items-center">
			<img
				src="kim.jpg"
				alt="Point Image"
				className={`w-32 h-32 object-cover cursor-pointer ${isTapped ? 'animate-pulse' : ''}`}
				onClick={handleTap}
			/>
			<p className="mt-2 text-xl">Points: {points}</p>
		</div>
	);
};

export default PointImage;
