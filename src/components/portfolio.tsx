import { ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

type Item = {
	title: string;
	excerpt: string;
	description: ReactNode;
	defaultImage?: number;
	images: { title: string; url: string }[];
};

const items: Item[] = [
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
						Historical Performance Analysis
						<ul className="mb-2 list-disc ps-8">
							<li>Track trends in DAU, Revenue, and Installs.</li>
							<li>
								Highlight build release dates to measure their impact on KPIs.
							</li>
						</ul>
					</li>

					<li>
						LiveOps Impact Visualization
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

				<p>Key Features:</p>
				<ul className="mb-2 list-disc ps-8">
					<li>Seamless integration with live Google Sheets data.</li>
					<li>Customizable date ranges and KPI selection.</li>
					<li>Visual overlays for game builds and event durations.</li>
					<li>Modern, user-friendly Gradio interface.</li>
				</ul>

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
	{
		title: "Power BI Dashboard for Medrick Games",
		excerpt:
			"Developed an interactive Power BI dashboard using Power BI Report Server, designed to centralize insights across departments like HR, Finance, and Marketing. This dashboard integrates advanced interactivity, role-based security, and dynamic visuals to enhance decision-making and streamline data access.",
		description: (
			<>
				<p className="mb-2">
					Developed an interactive Power BI dashboard using Power BI Report
					Server, designed to centralize insights across departments like HR,
					Finance, and Marketing. This dashboard integrates advanced
					interactivity, role-based security, and dynamic visuals to enhance
					decision-making and streamline data access.
				</p>

				<p>Key Features:</p>
				<ol className="mb-2 list-decimal ps-8">
					<li>
						Hosted on Power BI Report Server:
						<ul className="mb-2 list-disc ps-8">
							<li>Secure, on-premises deployment for controlled access.</li>
							<li>
								Public-facing views for general insights, with private data
								secured behind authentication layers.
							</li>
						</ul>
					</li>

					<li>
						Advanced Interactivity:
						<ul className="mb-2 list-disc ps-8">
							<li>
								Buttons and Bookmarks:
								<ul className="mb-2 list-disc ps-8">
									<li>
										Bookmark Buttons enable users to switch seamlessly between
										different charts or dashboard sections on the same page.
									</li>
									<li>
										For example, a single page might contain KPI metrics,
										campaign performance, and financial summaries, with users
										switching views using interactive buttons.
									</li>
								</ul>
							</li>
							<li>
								Dynamic Filters:
								<ul className="mb-2 list-disc ps-8">
									<li>
										Filters allow users to drill down into data based on
										department, date range, project, or other criteria.
									</li>
									<li>
										Custom filters ensure that specific roles (e.g., Product
										Owners, HR Managers) see only relevant data.
									</li>
								</ul>
							</li>
						</ul>
					</li>

					<li>
						Role-Based Access Control (RBAC):
						<ul className="mb-2 list-disc ps-8">
							<li>
								Dynamic Role Filtering:
								<ul className="mb-2 list-disc ps-8">
									<li>
										If there are multiple Product Owners (POs), each sees only
										their assigned projects through Row-Level Security (RLS).
									</li>
									<li>
										For example, PO1 accesses Project A, PO2 sees Project B, and
										so on.
									</li>
								</ul>
							</li>

							<li>
								Windows Server Authentication: Logins ensure users see data
								scoped to their roles.
							</li>

							<li>
								Combines public dashboards for aggregated insights with secure
								views for confidential information.
							</li>
						</ul>
					</li>

					<li>
						Comprehensive Visualizations:
						<ul className="mb-2 list-disc ps-8">
							<li>
								Includes various visuals, such as:
								<ul className="mb-2 list-disc ps-8">
									<li>Treemaps for hierarchical data analysis.</li>
									<li>Stacked bar charts for trend comparisons.</li>
									<li>Line plots for time-series trends.</li>
									<li>Pie charts for proportional data insights.</li>
								</ul>
							</li>

							<li>
								Visuals are dynamically updated based on filters and user roles.
							</li>
						</ul>
					</li>

					<li>
						Custom Branding and Mobile Compatibility:
						<ul className="mb-2 list-disc ps-8">
							<li>
								Incorporates Modric Games branding (logo and theme colors).
							</li>
							<li>
								Designed for mobile and desktop devices, ensuring seamless
								access.
							</li>
						</ul>
					</li>
				</ol>

				<p>Public and Secure Dashboard Access:</p>
				<ul className="mb-2 list-disc ps-8">
					<li>
						Public Views: Show general metrics (e.g., company-wide KPIs) without
						sensitive data.
					</li>
					<li>
						Private Views: Require secure login to access detailed,
						role-specific data.
					</li>
					<li>
						Dynamic Filters and Buttons: Provide tailored insights, ensuring
						intuitive and efficient navigation.
					</li>
				</ul>

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
		],
	},
];

function GalleryDialog({
	payload,
	open,
	onClose,
}: {
	payload: {
		item: Item;
		index: number;
	};
	open: boolean;
	onClose: () => void;
}) {
	const [activeIndex, setActivceIndex] = useState<number>(payload.index);

	return (
		<Dialog open={open} onOpenChange={() => onClose()}>
			<DialogContent
				className="max-w-screen-md border-0 bg-neutral-900"
				onPointerDownOutside={(e) => {
					e.preventDefault();
				}}
			>
				<DialogHeader>
					<DialogTitle>{payload.item.title} Images</DialogTitle>
				</DialogHeader>
				<div className="space-y-6 pt-2">
					<div className="-mx-6 grid grid-cols-12 gap-6 px-6">
						{payload.item.images.map((image, index) => (
							<div
								key={index}
								className={cn(
									"col-span-6 flex max-h-32 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-black opacity-40 transition duration-300 sm:col-span-3",
									index === activeIndex && "cursor-default opacity-100",
								)}
								onClick={() => {
									setActivceIndex(index);
								}}
							>
								<img
									className="h-full max-w-none"
									src={image.url}
									alt={image.title}
								/>
							</div>
						))}
					</div>
					<div className="overflow-hidden rounded-2xl">
						<a href={payload.item.images[activeIndex].url} target="_blank">
							<img
								src={payload.item.images[activeIndex].url}
								title={payload.item.images[activeIndex].title}
							/>
						</a>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}

function PortfolioItem({ item }: { item: Item; index: number }) {
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);
	const [dialogPayload, setDialogPayload] = useState<number>(0);

	return (
		<>
			<div className="flex max-w-screen-xl flex-col items-center gap-10 lg:flex-row lg:items-start even:lg:flex-row-reverse">
				<div className="space-y-4 lg:max-w-[32rem]">
					<div
						className="flex aspect-video w-full items-center overflow-hidden rounded-2xl bg-black"
						onClick={() => {
							setDialogPayload(item.defaultImage ?? 0);
							setDialogOpen(true);
						}}
					>
						<img
							className="w-full"
							src={item.images[item.defaultImage ?? 0].url}
							alt={item.images[item.defaultImage ?? 0].title}
						/>
					</div>
					<div className="grid grid-cols-12 gap-4">
						{item.images
							.filter((_, i) => i !== item.defaultImage)
							.map((image, index) => (
								<div
									key={index}
									className="col-span-6 flex max-h-32 items-center justify-center overflow-hidden rounded-2xl bg-black"
									onClick={() => {
										setDialogPayload(index);
										setDialogOpen(true);
									}}
								>
									<img
										className="h-full max-w-none"
										src={image.url}
										alt={image.title}
									/>
								</div>
							))}
					</div>
				</div>
				<div className="space-y-3">
					<div className="text-3xl font-bold tracking-wide">{item.title}</div>
					<div className="text-justify text-lg leading-7">
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
