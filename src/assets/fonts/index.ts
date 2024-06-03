import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const fontMontserrat = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['cyrillic-ext'],
	display: 'swap',
	fallback: ['Montserrat', 'sans-serif'],
	variable: '--font-montserrat',
});

// export const fontMontserrat = Montserrat({
// 	subsets: ['cyrillic-ext'],
// 	variable: '--font-montserrat',
// });

export const fontCalsans = localFont({
	src: [
		{
			path: './calsans/CalSans-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
});

export const fontBebas = localFont({
	src: [
		{
			path: './BebasNeuePro-Thin.woff2',
			weight: '100',
			style: 'normal',
		},
		{
			path: './BebasNeuePro-ThinItalic.woff2',
			weight: '100',
			style: 'italic',
		},
		{
			path: './BebasNeuePro-Light.woff2',
			weight: '200',
			style: 'normal',
		},
		{
			path: './BebasNeuePro-LightItalic.woff2',
			weight: '200',
			style: 'italic',
		},
		{
			path: './BebasNeuePro-Book.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './BebasNeuePro-BookItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: './BebasNeuePro-Middle.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './BebasNeuePro-MiddleItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: './BebasNeuePro-Regular.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './BebasNeuePro-Italic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: './BebasNeuePro-Bold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './BebasNeuePro-BoldItalic.woff2',
			weight: '600',
			style: 'italic',
		},
	],
	variable: '--font-bebas',
});
