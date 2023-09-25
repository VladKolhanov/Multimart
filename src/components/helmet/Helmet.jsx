export const Helmet = ({ children, title }) => {
	document.title = 'Multimart - ' + title

	return <div className="w-100">{children}</div>
}
