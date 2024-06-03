import { useState } from 'react';
import { useGameContext } from './context/GameContext';

const PointsMeter = () => {
	const { points, incrementPointsAndCoins, decrementEnergy } = useGameContext();
	const [isTapped, setIsTapped] = useState(false);

	const handleTap = () => {
		incrementPointsAndCoins();
		decrementEnergy();
		setIsTapped(true);
		setTimeout(() => setIsTapped(false), 300);
	};

	return (
		<div className="flex flex-col items-center">
			<img
				src="kim.jpg"
				alt="Point Image"
				className={`w-32 h-32 object-cover cursor-pointer ${
					isTapped ? 'animate-pulse' : ''
				}`}
				onClick={handleTap}
			/>
			<div className="flex items-center space-x-2 text-white">
				<img src="point.png" alt="Point icon" className="w-6 h-6" />
				<p className="mt-2 text-xl">Points: {points}</p>
			</div>
		</div>
	);
};

export default PointsMeter;
