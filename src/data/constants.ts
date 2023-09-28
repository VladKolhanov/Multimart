export const dateLimitedOffers = 'Oct 15, 2023'

export const navigation = [
	{ path: '/home', display: 'Home' },
	{ path: '/shop', display: 'Shop' },
	{ path: '/cart', display: 'Cart' },
]

export const serviceData = [
	{
		icon: 'ri-truck-line',
		title: 'Free Shipping',
		subtitle: 'Lorem ipsum dolor sit amet.',
		bg: '#fdefe6',
	},
	{
		icon: 'ri-refresh-line',
		title: 'Easy Returns',
		subtitle: 'Lorem ipsum dolor sit amet.',
		bg: '#ceebe9',
	},
	{
		icon: 'ri-secure-payment-line',
		title: 'Secure Payment',
		subtitle: 'Lorem ipsum dolor sit amet.',
		bg: '#e2f2b2',
	},
	{
		icon: 'ri-exchange-dollar-line',
		title: ' Back Guarantee',
		subtitle: 'Lorem ipsum dolor sit amet.',
		bg: '#d6e5fb',
	},
]

export const footerData = {
	topCategories: {
		title: 'Top Categories',
		categories: [
			{ path: '#', display: 'Mobile Phones' },
			{ path: '#', display: 'Modern Sofa' },
			{ path: '#', display: 'Arm Chair' },
			{ path: '#', display: 'Smart Watches' },
		],
	},
	usefulLinks: {
		title: 'Useful Links',
		links: [
			{ path: '/shop', display: 'Shop' },
			{ path: '/cart', display: 'Cart' },
			{ path: '/login', display: 'Login' },
			{ path: '#', display: 'Privacy policy' },
		],
	},
	contact: {
		title: 'Contact',
		information: [
			{
				location: 'Lorem, ipsum dolor.',
				icon: 'ri-map-pin-line',
				protocol: '',
			},
			{ number: '+0881234567890', icon: 'ri-phone-line', protocol: 'tel:' },
			{
				email: 'exampler123@gmail.com',
				icon: 'ri-mail-line',
				protocol: 'mailto:',
			},
		],
	},
}

export type TContacts = 'location' | 'number' | 'email'
