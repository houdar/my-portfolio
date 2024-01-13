function AppFooterCopyright() {
	return (
		<div className="flex items-center justify-center text-center font-general-regular">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/houdar/my-portfolio"
					target="__blank"
					className="ml-1 duration-500 hover:underline hover:text-indigo-600 dark:hover:text-indigo-300"
				>
					my portfolio website
				</a>
				.{' '}
			
			</div>
		</div>
	);
}

export default AppFooterCopyright;
