'use client';
import React from 'react';
import PointsMeter from '@/components/ui/tap/points';
import EnergyMeter from '@/components/ui/tap/energy';
import { GameProvider } from '@/components/ui/tap/context/GameContext';

export default function Tap() {
	return (
		<GameProvider>
			<div className="flex justify-center items-center min-h-screen">
				<div>
					<title>Points</title>
					<meta name="description" content="Tap to earn more points" />
					<link rel="icon" href="/favicon.ico" />
				</div>

				<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
					<h1 className="text-4xl font-semibold mb-8">
						Tap to earn more points
					</h1>
					<PointsMeter />
					<EnergyMeter />
				</main>
			</div>
		</GameProvider>
	);
}
