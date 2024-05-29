import React from 'react';

import { type NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import nextAuthLogo from '@/public/next-auth.png';
import siweLogo from '@/public/siwe.png';

import { ThreeDCardDemo } from '@/components/card';
import { AnimatedPinDemo } from '@/components/pin';
import { AnimatedTooltipPreview } from '@/components/tooltip';
import { AuroraBackgroundDemo } from '@/components/aurora';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { BackgroundBeamsDemo } from '@/components/beams';
import { BackgroundBoxesDemo } from '@/components/boxes';
import { BackgroundGradientDemo } from '@/components/gradient';
import { BentoGridThirdDemo } from '@/components/bento3';
import { BentoGridSecondDemo } from '@/components/bento2';
import { BentoGridDemo } from '@/components/bento1';
import { CanvasRevealEffectDemo } from '@/components/canvas';
import { CanvasRevealEffectDemo3 } from '@/components/canvas3';
import { CanvasRevealEffectDemo2 } from '@/components/canvas2';
import { CardHoverEffectDemo } from '@/components/hover';
import { CardStackDemo } from '@/components/card-stack';
import { HeroScrollDemo } from '@/components/container-scroll';
import { DirectionAwareHoverDemo } from '@/components/direction-hover';
import { EvervaultCardDemo } from '@/components/evervault';
import { FlipWordsDemo } from '@/components/flip';
import { FloatingNavDemo } from '@/components/floating-nav';
import { FollowingPointerDemo } from '@/components/pointer';
import { GlobeDemo } from '@/components/globe';
import { GlowingStarsBackgroundCardPreview } from '@/components/stars';
import { GoogleGeminiEffectDemo } from '@/components/google';
import { BackgroundGradientAnimationDemo } from '@/components/bg-gradient';
import { GridBackgroundDemo } from '@/components/grid-bg';
import { GridSmallBackgroundDemo } from '@/components/grid-bg-small';
import { DotBackgroundDemo } from '@/components/dot-bg';
import { HeroHighlightDemo } from '@/components/hero-high';
import { HeroParallaxDemo } from '@/components/hero-parx';
import { HoverBorderGradientDemo } from '@/components/hover-border';
import { ImagesSliderDemo } from '@/components/slider';
import { InfiniteMovingCardsDemo } from '@/components/moving-cards';
import { LampDemo } from '@/components/lamp-header';
import { LayoutGridDemo } from '@/components/layout';
import { MacbookScrollDemo } from '@/components/macbook';
import { MeteorsDemo } from '@/components/meteors';
import { MovingBorderDemo } from '@/components/moving-border';
import { MultiStepLoaderDemo } from '@/components/multi-step';
// import { NavbarDemo } from '@/components/navbar';
import { ParallaxScrollDemo } from '@/components/parallax-scroll';
import { ParallaxScrollSecondDemo } from '@/components/parallax-scroll2';
import { PlaceholdersAndVanishInputDemo } from '@/components/placeholder';
import { SignupFormDemo } from '@/components/input2';
import { SparklesPreview } from '@/components/sparkles';
import { SparklesPreview2 } from '@/components/sparkles-preview';
import { SpotlightPreview } from '@/components/spotlight';
import { StickyScrollRevealDemo } from '@/components/sticky-scroll';
import { SVGMaskEffectDemo } from '@/components/mask-effect';
import { TabsDemo } from '@/components/tabs2';
import { TailwindcssButtons } from '@/components/buttons';
import { TextGenerateEffectDemo } from '@/components/text-generate';
import { TextRevealCardPreview } from '@/components/text-reveal';
import { TracingBeamDemo } from '@/components/beam';
import { TypewriterEffectSmoothDemo } from '@/components/typewriter';
import { VortexDemo } from '@/components/vortex';
import { VortexDemoSecond } from '@/components/vortex2';
import { WavyBackgroundDemo } from '@/components/wavy';
import { WobbleCardDemo } from '@/components/wobble';

const HomePage: NextPage = () => (
	<div className="flex grow flex-col items-center justify-center">
		<div className="flex h-[20vh] w-full max-w-3xl items-center justify-evenly gap-5 self-center px-5">
			<Link
				href="https://next-auth.js.org/"
				className="h-full"
				rel="noreferrer"
				target="_blank"
			>
				<Image
					src={nextAuthLogo}
					alt="Next Auth Logo"
					className="h-full w-auto object-contain"
				/>
			</Link>
			<Link
				href="https://login.xyz/"
				className="h-full"
				rel="noreferrer"
				target="_blank"
			>
				<Image
					src={siweLogo}
					alt="SIWE Logo"
					className="h-full w-auto object-contain"
				/>
			</Link>
		</div>
		<h1 className="font-sans text-center text-5xl font-semibold">
			Next Auth + SIWE
		</h1>
		{/* <div className="flex">
			<WavyBackgroundDemo />
		</div>
		<div className="flex">
			<ThreeDCardDemo />
			<ThreeDCardDemo />
		</div>
		<div className="flex">
			<AnimatedPinDemo />
			<AnimatedPinDemo />
		</div>
		<div className="flex">
			<AnimatedTooltipPreview />
		</div>
		<div className="flex">
			<AuroraBackgroundDemo />
		</div>
			<BackgroundBeamsDemo />
			<BackgroundBoxesDemo />
		<div className="flex">
			<BackgroundGradientDemo />
		</div>
		<div className="flex">
			<BentoGridDemo />
		</div>
		<div className="flex">
			<BentoGridSecondDemo />
		</div>
		<div className="flex">
			<BentoGridThirdDemo />
		</div>
		<div className="flex">
			<CanvasRevealEffectDemo />
		</div>
		<div className="flex">
			<CanvasRevealEffectDemo2 />
			<CanvasRevealEffectDemo2 />
			<CanvasRevealEffectDemo2 />
		</div>
			<CanvasRevealEffectDemo3 />
		<div className="flex">
			<CardHoverEffectDemo />
		</div>
		<div className="flex">
			<CardStackDemo />
		</div>
		<div className="flex">
			<HeroScrollDemo />
		</div>
		<div className="flex">
			<DirectionAwareHoverDemo />
			<DirectionAwareHoverDemo />
		</div>
		<div className="flex">
			<EvervaultCardDemo />
		</div>
		<div className="flex">
			<FlipWordsDemo />
		</div>
		<div className="flex">
			<FloatingNavDemo />
		</div>
			<FollowingPointerDemo />
			<GlobeDemo />
		<div className="flex">
			<GlowingStarsBackgroundCardPreview />
			<GlowingStarsBackgroundCardPreview />
		</div>
			<GoogleGeminiEffectDemo />
		<div className="flex">
			<BackgroundGradientAnimationDemo />
		</div>
			<GridBackgroundDemo />
			<GridSmallBackgroundDemo />
			<DotBackgroundDemo />
			<HeroHighlightDemo />
		<div className="flex">
			<HeroParallaxDemo />
		</div>
		<div className="flex">
			<HoverBorderGradientDemo />
		</div>
		<div className="flex">
			<ImagesSliderDemo />
		</div>
		<div className="flex">
			<InfiniteMovingCardsDemo />
		</div>
		<LampDemo />
		<LayoutGridDemo />
		<MacbookScrollDemo />
		<div className="flex">
			<MeteorsDemo />
			<MeteorsDemo />
			<MeteorsDemo />
		</div>
		<div className="flex">
			<MovingBorderDemo />
			<MovingBorderDemo />
			<MovingBorderDemo />
		</div>
		<div className="flex">
			<MultiStepLoaderDemo />
		</div>
			{/* <NavbarDemo /> 
			<ParallaxScrollDemo />
			<ParallaxScrollSecondDemo />
		<div className="flex">
			<PlaceholdersAndVanishInputDemo />
		</div>
		<div className="flex">
			<SignupFormDemo />
		</div>
		<SparklesPreview />
		<SparklesPreview2 />
		<SpotlightPreview />
		<StickyScrollRevealDemo />
		<SVGMaskEffectDemo />
		<TabsDemo />
		<TailwindcssButtons />
		<div className="flex">
			<TextGenerateEffectDemo />
		</div>
		< TextRevealCardPreview />
		<div className="flex">
			<TracingBeamDemo />
		</div>
		<TypewriterEffectSmoothDemo />
		<VortexDemo />
		<VortexDemoSecond />
		< WobbleCardDemo /> */}
	</div>
);

export default HomePage;
