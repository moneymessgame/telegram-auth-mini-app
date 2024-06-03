import { useGameContext } from './context/GameContext';

const EnergyMeter = () => {
	const { energy } = useGameContext();
	const maxEnergy = 3000;

	return (
		<div className="flex items-center space-x-2 text-white">
			<img src="energy.png" alt="Energy Icon" className="w-6 h-6" />
			<span className="text-lg">
				{energy} / {maxEnergy}
			</span>
		</div>
	);
};

export default EnergyMeter;
