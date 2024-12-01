function Branding() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-16 sm:flex-row">
			<div className="ms-12 flex size-44 items-center justify-center md:ms-16 md:size-56 lg:size-64">
				<img
					className="rounded-full shadow-[-48px_0_0_0_#262626] md:shadow-[-64px_0_0_0_#262626]"
					src="/photo.jpg"
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-6 sm:items-start md:gap-12">
				<h1 className="text-4xl md:text-5xl lg:text-6xl">Kimia Derazgisoo</h1>
				<h2 className="text-3xl font-bold text-orange-400 md:text-4xl lg:text-5xl">
					DATA ANALYST
				</h2>
			</div>
		</div>
	);
}

export { Branding };
