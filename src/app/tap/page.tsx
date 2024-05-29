'use client';
import React from 'react';
import PointImage from '@/components/ui/tap';

export default function Tap() {
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
		<div>
			<title>Points</title>
			<meta name="description" content="Получайте монетки за тап по картинке" />
			<link rel="icon" href="/favicon.ico" />
		</div>

		<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
			<h1 className="text-6xl font-bold mb-8">Tap to earn more points</h1>
			<PointImage />
		</main>
	</div>
	);
}
