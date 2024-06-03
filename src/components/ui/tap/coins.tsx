// import { useState } from 'react';

// const CoinMeter = () => {
// 	const [coins, setCoins] = useState(0);
// 	const [isTapped, setIsTapped] = useState(false);

// 	const handleTap = () => {
// 		setCoins(coins + 1);
// 		setIsTapped(true);
// 		setTimeout(() => setIsTapped(false), 300);
// 	};

// 	return (
// 		<div className="flex items-center space-x-2 text-white">
// 			<img src="coin.png" alt="Energy Icon" className="w-6 h-6" />
// 			<span className="text-lg text-slate-700">{coins}</span>
// 		</div>
// 	);
// };

// export default CoinMeter;

import { useGameContext } from './context/GameContext';

const CoinMeter = () => {
	const { coins } = useGameContext();

	return (
		<div className="flex items-center space-x-2 text-white">
			<img src="coin.png" alt="Coin Icon" className="w-6 h-6" />
			<span className="text-lg">{coins}</span>
		</div>
	);
};

export default CoinMeter;
