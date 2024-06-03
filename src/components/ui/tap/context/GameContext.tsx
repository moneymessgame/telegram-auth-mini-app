import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface GameContextType {
	points: number;
	coins: number;
	energy: number;
	incrementPointsAndCoins: () => void;
	decrementEnergy: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
	const context = useContext(GameContext);
	if (!context) {
		throw new Error('useGameContext must be used within a GameProvider');
	}
	return context;
};

interface GameProviderProps {
	children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
	const [points, setPoints] = useState(0);
	const [coins, setCoins] = useState(0);
	const [energy, setEnergy] = useState(3000);
	const maxEnergy = 3000;

	const incrementPointsAndCoins = () => {
		setPoints((prevPoints) => prevPoints + 1);
		setCoins((prevCoins) => prevCoins + 1);
	};

	const decrementEnergy = () => {
		setEnergy((prevEnergy) => (prevEnergy > 0 ? prevEnergy - 1 : 0));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setEnergy((prevEnergy) =>
				prevEnergy < maxEnergy ? prevEnergy + 1 : prevEnergy
			);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<GameContext.Provider
			value={{
				points,
				coins,
				energy,
				incrementPointsAndCoins,
				decrementEnergy,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
