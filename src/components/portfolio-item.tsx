type PortfolioItem = {
	title: string;
	excerpt: string;
	description: React.ReactNode;
	defaultImage?: number;
	images: { title: string; url: string }[];
};

const portfolioItems: PortfolioItem[] = [
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
					P.S. Dates and values are omitted from these charts to maintain data
					security. Please note that the displayed data is for demonstration
					purposes only and does not represent actual data.
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
		title: "Automated Data Integration and Reporting System",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					I developed a Python-based system to automate data flow between Google
					Sheets and SQL Server, leveraging Windows Task Scheduler for periodic
					updates. Using Google Cloud Console and OAuth 2.0 for secure
					authentication, the script retrieves data from Google Sheets and
					updates it in SQL Server. The SQL Server database is connected to
					Power BI, which utilizes its Report Server's scheduled refresh
					capability to ensure the latest data is available in reports. This
					solution was designed to integrate with existing workflows where
					Google Sheets is the primary tool, streamlining data updates and
					enhancing accessibility through automated reporting.
				</p>

				<p>
					P.S. Dates and values are omitted from these charts to maintain data
					security. Please note that the displayed data is for demonstration
					purposes only and does not represent actual data.
				</p>
			</>
		),
		defaultImage: 0,
		images: [
			{
				title: "",
				url: "/automated-data/1.png",
			},
			{
				title: "",
				url: "/automated-data/2.png",
			},
			{
				title: "",
				url: "/automated-data/3.png",
			},
			{
				title: "",
				url: "/automated-data/4.png",
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

				<p className="mb-2">
					<span className="font-bold text-white">Key Features:</span>
					<ul className="mb-2 list-disc ps-8">
						<li>Seamless integration with live Google Sheets data.</li>
						<li>Customizable date ranges and KPI selection.</li>
						<li>Visual overlays for game builds and event durations.</li>
						<li>Modern, user-friendly Gradio interface.</li>
					</ul>
				</p>

				<br />

				<p>
					P.S. Dates and values are not shown in these charts to ensure
					security, similar to how data is presented in Brawl Stars on the
					internet. Please note that the displayed data is for demonstration
					purposes only and does not represent actual data.
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
		title: "RFM Analysis for User Segmentation in Free-to-Play Games",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					RFM (Recency, Frequency, Monetary) analysis segments users based on
					three key metrics:
				</p>

				<ol className="mb-2 list-decimal ps-8">
					<li>
						<span className="font-bold text-white">Recency (R):</span>
						How recently a user interacted with the game.
					</li>
					<li>
						<span className="font-bold text-white">Frequency (F):</span>
						How often a user plays the game.
					</li>
					<li>
						<span className="font-bold text-white">Monetary (M):</span>
						How much a user spends in the game.
					</li>
				</ol>

				<p className="mb-2">
					<span className="font-bold text-white">What We Did:</span> We
					conducted an RFM analysis on the users of our free-to-play game using
					historical shop interaction data. This allowed us to segment users
					into different groups based on their engagement and spending patterns.
					We then used these insights to identify high-value players, detect
					at-risk users, and understand user behavior for more targeted
					engagement.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Segmentation Results:</span>{" "}
					Users were categorized into groups such as Champions (high engagement
					and spending), Loyal Customers, At-Risk Users, and Lost Customers.
					This segmentation helps tailor marketing campaigns, prioritize user
					retention strategies, and optimize revenue growth.
				</p>

				<p className="mb-2">
					RFM analysis enables data-driven strategies for better resource
					allocation, maximizing user engagement, and driving revenue growth.
				</p>

				<br />

				<p>
					P.S. Dates and values are omitted from these charts to maintain data
					security. Please note that the displayed data is for demonstration
					purposes only and does not represent actual data.
				</p>
			</>
		),
		defaultImage: 1,
		images: [
			{
				title: "",
				url: "/rfm-analysis/1.png",
			},
			{
				title: "",
				url: "/rfm-analysis/2.png",
			},
			{
				title: "",
				url: "/rfm-analysis/3.png",
			},
		],
	},
];

export { portfolioItems };
export type { PortfolioItem };
