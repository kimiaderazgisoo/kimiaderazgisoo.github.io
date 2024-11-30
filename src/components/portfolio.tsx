import { ReactNode, useState } from "react";

import { GalleryDialog } from "./portfolio-gallery";

type PortfolioItem = {
	title: string;
	excerpt: string;
	description: ReactNode;
	defaultImage?: number;
	images: { title: string; url: string }[];
};

const items: PortfolioItem[] = [
	{
		title: "Power BI Dashboard for Medrick Games",
		excerpt:
			"Developed an interactive Power BI dashboard hosted on Power BI Report Server to centralize insights across departments like HR, Finance, and Marketing. The dashboard features advanced interactivity, role-based security, and dynamic visuals for better decision-making and streamlined data access.",
		description: (
			<>
				<p className="mb-2">
					Developed an interactive Power BI dashboard using Power BI Report
					Server, designed to centralize insights across departments like HR,
					Finance, and Marketing. This dashboard integrates advanced
					interactivity, role-based security, and dynamic visuals to enhance
					decision-making and streamline data access.
				</p>

				<p>
					<span className="font-bold text-white">Key Highlights:</span>
				</p>
				<ol className="mb-2 list-decimal ps-8">
					<li>
						<span className="font-bold text-white">Hosting:</span> Secure,
						on-premises deployment with public views for general insights and
						private data secured by authentication layers.
					</li>

					<li>
						<span className="font-bold text-white">Interactivity:</span>
						<ul className="mb-2 list-disc ps-8">
							<li>
								<span className="font-bold text-white">
									Buttons & Bookmarks:
								</span>{" "}
								Enable seamless navigation between KPIs, campaign performance,
								and financial summaries.
							</li>
							<li>
								<span className="font-bold text-white">Dynamic Filters:</span>{" "}
								Allow users to drill down based on roles, departments, dates, or
								projects.
							</li>
						</ul>
					</li>

					<li>
						<span className="font-bold text-white">
							Role-Based Access Control (RBAC):
						</span>
						<ul className="mb-2 list-disc ps-8">
							<li>
								Ensures users see only relevant data through Row-Level Security
								(RLS).
							</li>
							<li>
								Combines aggregated public dashboards with secure, role-specific
								views.
							</li>
						</ul>
					</li>

					<li>
						<span className="font-bold text-white">Visualizations:</span>{" "}
						Includes treemaps, bar charts, line plots, and pie charts,
						dynamically updating based on filters and roles.
					</li>

					<li>
						<span className="font-bold text-white">
							Custom Branding & Mobile Compatibility:
						</span>{" "}
						Features Modric Games branding and ensures usability on desktop and
						mobile.
					</li>
				</ol>

				<p>
					Public views display general KPIs, while secure views offer detailed,
					tailored insights with dynamic filters for intuitive navigation.
				</p>

				<br />

				<p>
					P.S. Date and values are not shown in these charts to ensure security,
					similar to how data is presented in Brawl Stars on the internet.
					Please note that the data is sample data.
				</p>
			</>
		),
		defaultImage: 0,
		images: [
			{
				title: "",
				url: "/powerbi-dashboard/home.png",
			},
			{
				title: "",
				url: "/powerbi-dashboard/hr.png",
			},
			{
				title: "",
				url: "/powerbi-dashboard/campaign.png",
			},
			{
				title: "",
				url: "/powerbi-dashboard/campaign-revenue.png",
			},
			{
				title: "",
				url: "/powerbi-dashboard/retention.png",
			},
			{
				title: "",
				url: "/powerbi-dashboard/income.png",
			},
			{
				title: "",
				url: "/powerbi-dashboard/treemap.png",
			},
		],
	},
	{
		title: "Interactive Game Analytics Dashboard",
		excerpt:
			"Using Gradio, Google Sheets, and Python, I developed a dynamic dashboard tailored for mobile game analytics.",
		description: (
			<>
				<p className="mb-2">
					Using Gradio, Google Sheets, and Python, I developed a dynamic
					dashboard tailored for mobile game analytics. This tool supports game
					design, data analysis, and decision-making with two main features:
				</p>

				<ol className="mb-2 list-decimal ps-8">
					<li>
						<span className="font-bold text-white">
							Historical Performance Analysis:
						</span>
						<ul className="mb-2 list-disc ps-8">
							<li>Track trends in DAU, Revenue, and Installs.</li>
							<li>
								Highlight build release dates to measure their impact on KPIs.
							</li>
						</ul>
					</li>

					<li>
						<span className="font-bold text-white">
							LiveOps Impact Visualization:
						</span>
						<ul className="mb-2 list-disc ps-8">
							<li>
								Analyze how LiveOps events affect player engagement and revenue.
							</li>
							<li>
								Overlay event timelines with KPI trends for actionable insights.
							</li>
						</ul>
					</li>
				</ol>

				<p>
					<span className="font-bold text-white">Key Features:</span>
				</p>
				<ul className="mb-2 list-disc ps-8">
					<li>Seamless integration with live Google Sheets data.</li>
					<li>Customizable date ranges and KPI selection.</li>
					<li>Visual overlays for game builds and event durations.</li>
					<li>Modern, user-friendly Gradio interface.</li>
				</ul>

				<br />

				<p>
					P.S. Date and values are not shown in these charts to ensure security,
					similar to how data is presented in Brawl Stars on the internet.
					Please note that the data is sample data.
				</p>
			</>
		),
		defaultImage: 2,
		images: [
			{
				title: "Gradio Empty Form",
				url: "/gradio-dashboard/empty.png",
			},
			{
				title: "Gradio Builds Example",
				url: "/gradio-dashboard/builds.png",
			},
			{
				title: "Gradio LiveOps Example",
				url: "/gradio-dashboard/liveops.png",
			},
		],
	},
];

function PortfolioItem({ item }: { item: PortfolioItem; index: number }) {
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);
	const [dialogPayload, setDialogPayload] = useState<number>(0);

	return (
		<>
			<div className="flex max-w-screen-xl flex-col items-center gap-10 lg:flex-row lg:items-start even:lg:flex-row-reverse">
				<div className="shrink-0 space-y-4 lg:max-w-[32rem]">
					<div
						className="flex aspect-video w-full items-center overflow-hidden rounded-2xl bg-black"
						onClick={() => {
							setDialogPayload(item.defaultImage ?? 0);
							setDialogOpen(true);
						}}
					>
						<img
							className="w-full cursor-pointer"
							src={item.images[item.defaultImage ?? 0].url}
							alt={item.images[item.defaultImage ?? 0].title}
						/>
					</div>
					<div className="grid grid-cols-12 gap-4">
						{item.images.map(
							(image, index) =>
								index !== (item.defaultImage ?? 0) && (
									<div
										key={index}
										className="col-span-6 flex max-h-32 items-center justify-center overflow-hidden rounded-2xl bg-black"
										onClick={() => {
											setDialogPayload(index);
											setDialogOpen(true);
										}}
									>
										<img
											className="h-full max-w-none cursor-pointer"
											src={image.url}
											alt={image.title}
										/>
									</div>
								),
						)}
					</div>
				</div>
				<div className="space-y-3">
					<div className="text-2xl font-bold tracking-wide">{item.title}</div>
					<div className="text-justify text-base leading-7 text-neutral-300">
						{item.description}
					</div>
				</div>
			</div>

			<GalleryDialog
				key={dialogPayload}
				payload={{ item, index: dialogPayload }}
				open={dialogOpen}
				onClose={() => setDialogOpen(false)}
			/>
		</>
	);
}

function Portfolio() {
	return (
		<div className="min-h-svh space-y-36 px-10 pb-40">
			<div className="text-center text-4xl font-bold tracking-[0.2em] text-neutral-600 sm:text-6xl md:text-7xl">
				PORTFOLIO
			</div>

			<div className="space-y-36">
				{items.map((item, index) => (
					<PortfolioItem item={item} index={index} />
				))}
			</div>
		</div>
	);
}

export { Portfolio };
export type { PortfolioItem };
