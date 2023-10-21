export const dateLimitedOffers = 'Oct 15, 2023'

// Navbar
export const navigation = [
	{ path: '/home', display: 'Home' },
	{ path: '/shop', display: 'Shop' },
	{ path: '/cart', display: 'Cart' },
]

// Service component
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

// Footer component
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

// Shop page component
export const selectCategory = {
	name: 'category',
	options: [
		{ value: 'all', display: 'Filter By Category' },
		{ value: 'sofa', display: 'Sofa' },
		{ value: 'mobile', display: 'Mobile' },
		{ value: 'chair', display: 'Chair' },
		{ value: 'watch', display: 'Watch' },
		{ value: 'wireless', display: 'Wireless' },
	],
}

export const selectSort = {
	name: 'sort',
	options: [
		{ value: 'all', display: 'Sort By' },
		{ value: 'ascending', display: 'Ascending' },
		{ value: 'descending', display: 'Descending' },
	],
}

// Checkout form

export const checkoutForm = [
	{
		type: 'text',
		placeholder: 'Enter your name',
		name: 'name',
		autoComplete: 'name',
		required: true,
		autoFocus: true,
	},
	{
		type: 'email',
		placeholder: 'Enter your email',
		name: 'email',
		required: true,
		autoComplete: 'email',
	},
	{
		type: 'tel',
		placeholder: 'Phone number',
		name: 'phone-number',
		autoComplete: 'tel',
		required: true,
	},
	{
		type: 'text',
		placeholder: 'Country',
		name: 'country',
		autoComplete: 'country-name',
		required: true,
	},
	{
		type: 'text',
		placeholder: 'City',
		name: 'city',
		autoComplete: 'address-level2',
		required: true,
	},
	{
		type: 'text',
		placeholder: 'Street address',
		name: 'street',
		autoComplete: 'street-address',
		required: true,
	},
	{
		type: 'text',
		placeholder: 'Postal code',
		name: 'postal-code',
		autoComplete: 'postal-code',
		required: true,
	},
]
