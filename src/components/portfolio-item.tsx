type PortfolioItem = {
	title: string;
	excerpt: string;
	description: React.ReactNode;
	defaultImage?: number;
	images: { title: string; url: string }[];
};

const portfolioItems: PortfolioItem[] = [
	{
		title: "Clash Royale Game Analytics",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					An end-to-end game analytics project exploring player behavior in a
					mobile game environment, with a focus on{" "}
					<span className="font-bold text-white">
						engagement, retention, monetization, player segmentation, and
						platform differences
					</span>
					.
				</p>

				<p className="mb-2">
					The main objective was to move beyond descriptive charts and
					understand how player behavior can reveal retention patterns,
					monetization opportunities, and potential product improvements.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Business Question</span>
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						How can player behavior help us understand retention and
						monetization, and what product opportunities can be identified from
						these patterns?
					</span>
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Project Overview</span>
				</p>

				<p className="mb-2">
					Using a public Clash Royale dataset created by{" "}
					<span className="font-bold text-white">Melih Kurtaran</span>, I
					analyzed player accounts, daily sessions, and in-app purchases to
					understand how different aspects of player behavior are associated
					with retention and monetization.
				</p>

				<p className="mb-2">
					The project followed an end-to-end analytical workflow:
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						Data → Cleaning → Exploratory Analysis → Engagement → Retention →
						Monetization → Segmentation → Business Insights → Interactive
						Dashboard
					</span>
				</p>

				<p className="mb-2">
					The final analysis was transformed into an interactive{" "}
					<span className="font-bold text-white">Streamlit dashboard</span>,
					allowing the findings to be explored through a presentation-style
					interface.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Player Engagement</span>
				</p>

				<p className="mb-2">
					I explored player engagement through session frequency, session
					duration, daily activity, early player engagement, and engagement
					distributions.
				</p>

				<p className="mb-2">
					The dataset showed a{" "}
					<span className="font-bold text-white">
						right-skewed engagement pattern
					</span>
					, with most player-days concentrated around relatively low session
					counts and shorter play durations.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">
						Retention & Cohort Analysis
					</span>
				</p>

				<p className="mb-2">
					Retention was evaluated across four key milestones:
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>Day 1 Retention (D1)</li>
					<li>Day 7 Retention (D7)</li>
					<li>Day 14 Retention (D14)</li>
					<li>Day 30 Retention (D30)</li>
				</ul>

				<p className="mb-2">
					I also performed cohort analysis to understand how retention changed
					across different player acquisition periods.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Monetization Analysis</span>
				</p>

				<p className="mb-2">
					The monetization analysis focused on understanding:
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>Payer conversion</li>
					<li>Revenue</li>
					<li>Average Revenue Per User (ARPU)</li>
					<li>Average Revenue Per Paying User (ARPPU)</li>
					<li>Revenue contribution</li>
					<li>The relationship between retention and monetization</li>
				</ul>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Player Segmentation</span>
				</p>

				<p className="mb-2">
					Players were segmented based on their{" "}
					<span className="font-bold text-white">Day-0 session activity</span>{" "}
					to explore how early engagement was associated with subsequent player
					behavior.
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>1 session</li>
					<li>2 sessions</li>
					<li>3–4 sessions</li>
					<li>5+ sessions</li>
				</ul>

				<p className="mb-2">
					These segments were compared across retention and monetization metrics
					to identify differences between players with varying levels of early
					engagement.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Platform Analysis</span>
				</p>

				<p className="mb-2">
					Android and iOS players were compared across several dimensions:
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>Engagement</li>
					<li>Play time</li>
					<li>D1 and D7 retention</li>
					<li>Payer conversion</li>
					<li>ARPU</li>
					<li>ARPPU</li>
				</ul>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">
						Key Finding: Early Engagement & Retention
					</span>
				</p>

				<p className="mb-2">
					One of the strongest patterns identified was the association between{" "}
					<span className="font-bold text-white">
						Day-0 engagement and D7 retention
					</span>
					.
				</p>

				<p className="mb-2">
					The following results show how D7 retention varied across early
					engagement segments:
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>
						1 session: <span className="font-bold text-white">8.1%</span>
					</li>
					<li>
						2 sessions: <span className="font-bold text-white">22.7%</span>
					</li>
					<li>
						3–4 sessions: <span className="font-bold text-white">36.0%</span>
					</li>
					<li>
						5+ sessions: <span className="font-bold text-white">55.3%</span>
					</li>
				</ul>

				<p className="mb-2">
					Players with higher Day-0 session activity showed substantially higher
					D7 retention.
				</p>

				<p className="mb-2">
					Higher early engagement was also associated with higher{" "}
					<span className="font-bold text-white">
						payer conversion and ARPU
					</span>
					, while ARPPU was comparatively more stable across engagement groups.
				</p>

				<p className="mb-2">
					These findings represent{" "}
					<span className="font-bold text-white">
						observational associations rather than causal conclusions
					</span>
					. They provide hypotheses that could be validated through deeper
					player-level analysis and controlled experiments.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Business Opportunities</span>
				</p>

				<p className="mb-2">
					The analysis highlighted several opportunities that could be explored
					through future product experiments.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						1. Improve Early-Game Engagement
					</span>
				</p>

				<p className="mb-2">
					Investigate onboarding, first-session experience, early quests,
					rewards, and progression to identify opportunities to encourage
					meaningful early activity.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						2. Identify Early Churn Risk
					</span>
				</p>

				<p className="mb-2">
					Analyze players with very low initial activity to identify potential
					early-retention opportunities and test targeted re-engagement
					strategies.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						3. Connect Engagement with Monetization
					</span>
				</p>

				<p className="mb-2">
					Explore how engagement milestones relate to purchase behavior and test
					monetization experiences at different stages of the player journey.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						4. Investigate Platform Differences
					</span>
				</p>

				<p className="mb-2">
					The observed differences between Android and iOS raise questions
					around purchasing flows, offers, pricing, and platform-specific player
					behavior that could be explored with additional data.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Interactive Dashboard</span>
				</p>

				<p className="mb-2">
					To make the analysis more accessible, I built an interactive{" "}
					<span className="font-bold text-white">Streamlit dashboard</span> with
					six sections:
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">Overview:</span> High-level
						player, engagement, retention, and monetization metrics.
					</li>
					<li>
						<span className="font-bold text-white">Engagement:</span> Session
						behavior and play-time analysis.
					</li>
					<li>
						<span className="font-bold text-white">Retention:</span> Retention
						milestones and cohort analysis.
					</li>
					<li>
						<span className="font-bold text-white">Monetization:</span> Revenue,
						payer conversion, ARPU, and ARPPU.
					</li>
					<li>
						<span className="font-bold text-white">Player Segmentation:</span>
						Engagement-based player segments and performance.
					</li>
					<li>
						<span className="font-bold text-white">Platform Analysis:</span>
						Android vs. iOS comparison.
					</li>
				</ul>

				<p className="mb-2">
					Explore the interactive dashboard:{" "}
					<a
						className="underline underline-offset-4"
						href="https://clash-royale-analysis-dashboard.streamlit.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Explore the Interactive Dashboard →
					</a>
				</p>

				<p className="mb-2">
					For the best experience, the dashboard is recommended on a{" "}
					<span className="font-bold text-white">PC or laptop</span>, as it was
					designed primarily as a desktop analytics presentation.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Tools & Technologies</span>
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						Python · Pandas · NumPy · SQLite · Plotly · Streamlit · Data
						Visualization · Product Analytics
					</span>
				</p>

				<p className="mb-2">
					This project was also my{" "}
					<span className="font-bold text-white">
						first experience building with Streamlit
					</span>
					, giving me the opportunity to combine analytical work with
					interactive dashboard development and deployment.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Dataset</span>
				</p>

				<p className="mb-2">
					The project uses a public Clash Royale dataset created by{" "}
					<span className="font-bold text-white">Melih Kurtaran</span>,
					containing player account information, daily session activity, and
					in-app purchase data.
				</p>

				<p className="mb-2">
					View the original dataset repository:{" "}
					<a
						className="underline underline-offset-4"
						href="https://github.com/melihkurtaran/Clash_Royale"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://github.com/melihkurtaran/Clash_Royale
					</a>
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Project Takeaway</span>
				</p>

				<p className="mb-2">
					The goal of this project was not simply to create visualizations, but
					to practice the complete process of turning raw behavioral data into
					actionable product insights:
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						Data → Analysis → Finding → Business Insight → Action → Presentation
					</span>
				</p>

				<p className="mb-2">
					It combines{" "}
					<span className="font-bold text-white">
						game analytics, product thinking, statistical analysis, data
						visualization, and interactive dashboard development
					</span>{" "}
					into one end-to-end project.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">GitHub Repository</span>
				</p>

				<p className="mb-2">
					View the complete project on GitHub:{" "}
					<a
						className="underline underline-offset-4"
						href="https://github.com/kimiaderazgisoo/clash-royale-analysis-dashboard"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://github.com/kimiaderazgisoo/clash-royale-analysis-dashboard
					</a>
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
				url: "/clash-royale-analysis/1.png",
			},
			{
				title: "",
				url: "/clash-royale-analysis/2.png",
			},
			{
				title: "",
				url: "/clash-royale-analysis/3.png",
			},
			{
				title: "",
				url: "/clash-royale-analysis/4.png",
			},
			{
				title: "",
				url: "/clash-royale-analysis/5.png",
			},
			{
				title: "",
				url: "/clash-royale-analysis/6.png",
			},
		],
	},
	{
		title: "Cookie Cats — A/B Testing & P-Value",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					<span className="font-bold text-white">Project Overview</span>
				</p>

				<p className="mb-2">
					This project is a practical and visual introduction to{" "}
					<span className="font-bold text-white">A/B testing and p-value</span>,
					using the Cookie Cats mobile game dataset. The main goal was to
					understand the logic behind hypothesis testing in a simple, practical
					way and demonstrate how statistical results can be connected to a real
					business question.
				</p>

				<p className="mb-2">
					The dataset was originally obtained from{" "}
					<span className="font-bold text-white">Kaggle</span> and contains data
					from an A/B test in which players were randomly assigned to two
					groups:
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">Gate 30:</span> The level
						gate was placed at level 30.
					</li>
					<li>
						<span className="font-bold text-white">Gate 40:</span> The level
						gate was placed at level 40.
					</li>
				</ul>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Business Question</span>
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						Should the level gate be moved from level 30 to level 40?
					</span>
				</p>

				<p className="mb-2">
					To explore this question, I compared the two groups across three key
					metrics:
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>Day 1 Retention</li>
					<li>Day 7 Retention</li>
					<li>Total Game Rounds</li>
				</ul>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Analysis</span>
				</p>

				<p className="mb-2">
					The project focuses on understanding the following statistical
					reasoning:
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						Observed Difference → Standard Error → Z-score → p-value → Decision
					</span>
				</p>

				<p className="mb-2">
					For retention, I used a{" "}
					<span className="font-bold text-white">two-proportion Z-test</span> to
					compare the retention rates between the two groups.
				</p>

				<p className="mb-2">
					For total game rounds, I used a{" "}
					<span className="font-bold text-white">permutation test</span>, since
					the metric is highly right-skewed and contains extreme values.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Key Results</span>
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Day 1 Retention</span>
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>
						Gate 30: <span className="font-bold text-white">44.82%</span>
					</li>
					<li>
						Gate 40: <span className="font-bold text-white">44.23%</span>
					</li>
					<li>
						p-value: <span className="font-bold text-white">0.0744</span>
					</li>
				</ul>

				<p className="mb-2">
					Since p-value &gt; 0.05, there was not sufficient evidence to reject
					the null hypothesis.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Day 7 Retention</span>
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>
						Gate 30: <span className="font-bold text-white">19.02%</span>
					</li>
					<li>
						Gate 40: <span className="font-bold text-white">18.20%</span>
					</li>
					<li>
						p-value: <span className="font-bold text-white">0.00155</span>
					</li>
				</ul>

				<p className="mb-2">
					Since p-value &lt; 0.05, there was sufficient evidence to reject the
					null hypothesis.
				</p>

				<p className="mb-2">
					The observed difference was approximately{" "}
					<span className="font-bold text-white">0.82 percentage points</span>,
					with higher retention in the Gate 30 group.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Average Game Rounds</span>
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>
						Gate 30: <span className="font-bold text-white">52.46</span>
					</li>
					<li>
						Gate 40: <span className="font-bold text-white">51.30</span>
					</li>
					<li>
						p-value: <span className="font-bold text-white">0.456</span>
					</li>
				</ul>

				<p className="mb-2">
					Since p-value &gt; 0.05, there was not sufficient evidence to reject
					the null hypothesis.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Main Learning</span>
				</p>

				<p className="mb-2">
					One of the main lessons from this project was understanding what a
					p-value{" "}
					<span className="font-bold text-white">
						does and does not tell us
					</span>
					.
				</p>

				<p className="mb-2">
					A p-value greater than 0.05 does{" "}
					<span className="font-bold text-white">not</span> prove that two
					groups are equal. It means that the observed data does not provide
					sufficient evidence to reject the null hypothesis.
				</p>

				<p className="mb-2">
					Similarly, statistical significance does not automatically mean that a
					difference is large enough to be meaningful from a business
					perspective.
				</p>

				<p className="mb-2">
					For example, although the Day 7 retention difference was statistically
					significant, the improvement was approximately{" "}
					<span className="font-bold text-white">0.82 percentage points</span>.
					In this analysis, a{" "}
					<span className="font-bold text-white">
						1 percentage-point threshold
					</span>{" "}
					was used as an illustrative business significance threshold, so the
					observed improvement was below that threshold.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Key Takeaway</span>
				</p>

				<p className="mb-2">
					This project was intentionally designed to be{" "}
					<span className="font-bold text-white">simple and educational</span>.
				</p>

				<p className="mb-2">
					Rather than using advanced statistical techniques, the focus was on
					building an intuitive understanding of:
				</p>

				<ul className="mb-2 list-disc ps-8">
					<li>A/B testing</li>
					<li>Null and alternative hypotheses</li>
					<li>Standard error</li>
					<li>Z-score</li>
					<li>p-value</li>
					<li>Statistical significance</li>
					<li>Practical/business significance</li>
					<li>Interpreting statistical results in a business context</li>
				</ul>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Tools</span>
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						Python · Pandas · NumPy · SciPy · Matplotlib · Jupyter Notebook
					</span>
				</p>

				<p className="mb-2 mt-6">
					View the project on GitHub:{" "}
					<a
						className="underline underline-offset-4"
						href="https://github.com/kimiaderazgisoo/cookie-cats-ab-testing"
						target="_blank"
					>
						https://github.com/kimiaderazgisoo/cookie-cats-ab-testing
					</a>
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
				url: "/cookie-cats-ab-testing/1.jpg",
			},
		],
	},
	{
		title: "E-Commerce Business Intelligence Dashboard",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					<span className="font-bold text-white">
						End-to-End Business Intelligence Project
					</span>
				</p>

				<p className="mb-2">
					An end-to-end E-Commerce Business Intelligence project focused on
					transforming raw e-commerce data into interactive and actionable
					business insights.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Project Overview</span>
				</p>

				<p className="mb-2">
					I built the complete data workflow from data generation to business
					intelligence reporting. The dataset was generated using{" "}
					<span className="font-bold text-white">Python and Faker</span>,
					validated through multiple data-quality checks, and then loaded into a
					<span className="font-bold text-white">SQL Server</span> database. The
					database was connected to{" "}
					<span className="font-bold text-white">Power BI</span>, where I
					designed the data model, created DAX measures, and developed an
					interactive dashboard covering business, customer, and product
					performance.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">
						Data Generation & Validation
					</span>
				</p>

				<p className="mb-2">
					Generated a realistic synthetic e-commerce dataset using Python and
					Faker, followed by multiple validation checks to improve data quality
					and consistency.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">SQL Server Database</span>
				</p>

				<p className="mb-2">
					Created a relational database in SQL Server and built the
					Python-to-SQL Server workflow for loading the validated data.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Power BI Dashboard</span>
				</p>

				<p className="mb-2">
					Designed an interactive three-page dashboard covering:
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">Overview:</span> Key business
						KPIs, revenue trends, customer segmentation, and geographic
						insights.
					</li>

					<li>
						<span className="font-bold text-white">Customer Analysis:</span>{" "}
						Customer growth, new vs. repeat customers, retention, demographics,
						and geographic distribution.
					</li>

					<li>
						<span className="font-bold text-white">Product Analysis:</span>{" "}
						Product performance, top products, units sold, and category
						analysis.
					</li>
				</ol>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Dashboard Design</span>
				</p>

				<p className="mb-2">
					Created custom dashboard backgrounds and visual design elements using
					PowerPoint and integrated them into Power BI.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Tech Stack</span>
				</p>

				<p className="mb-2">
					Python · Faker · Pandas · NumPy · SQL Server · SQL · Power BI · DAX ·
					Jupyter Notebook · PowerPoint
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Project Workflow</span>
				</p>

				<p className="mb-2">
					Python → Data Validation → SQL Server → Data Modeling → Power BI →
					Business Insights
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">Future Development</span>
				</p>

				<p className="mb-2">
					This project is being developed in multiple phases. The next phase
					will introduce Marketing Analytics, including campaign performance,
					acquisition channels, and marketing KPIs. A later phase will explore
					<span className="font-bold text-white">Machine Learning</span> and
					predictive analytics.
				</p>

				<p className="mb-2 mt-6">
					<span className="font-bold text-white">GitHub</span>
				</p>

				<p className="mb-2">
					The complete project, including the data-generation notebook,
					configuration files, documentation, and dashboard screenshots, is
					available on GitHub.
				</p>

				<p className="mb-2">
					View the project on GitHub:{" "}
					<a
						className="underline underline-offset-4"
						href="https://github.com/kimiaderazgisoo/ecommerce-data-analysis"
						target="_blank"
					>
						https://github.com/kimiaderazgisoo/ecommerce-data-analysis
					</a>
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
				url: "/ecommerce-business-intelligence-dashboard/1.png",
			},
			{
				title: "",
				url: "/ecommerce-business-intelligence-dashboard/2.png",
			},
			{
				title: "",
				url: "/ecommerce-business-intelligence-dashboard/3.png",
			},
		],
	},
	{
		title: "HR Dashboard",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					<span className="font-bold text-white">
						Slide 1: Overview Dashboard
					</span>
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Title:</span> HR Performance
					Overview
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Description</span>
				</p>

				<p className="mb-2">
					This dashboard provides a high-level summary of organizational
					metrics, including team size, attendance, and leave management.
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">Key Metrics (Top Row):</span>{" "}
						Highlights critical KPIs such as total team size, average working
						hours, total shortages, overtime hours, and leave statistics.
					</li>

					<li>
						<span className="font-bold text-white">Detailed Records:</span> A
						tabular view listing individual employee performance metrics (Time,
						Overtime, Business Trips, Shortage, and Leave).
					</li>

					<li>
						<span className="font-bold text-white">Leave Distribution:</span> A
						donut chart illustrating the ratio between medical leaves and
						regular daily leaves.
					</li>

					<li>
						<span className="font-bold text-white">Attendance Trend:</span> A
						bar chart showing the average attendance hours over specific work
						months.
					</li>
				</ol>

				<hr className="my-8" />

				<p className="mb-2">
					<span className="font-bold text-white">
						Slide 2: Business Trip Analysis (Team Perspective)
					</span>
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Title:</span> Business Trip
					Distribution by Team
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Description</span>
				</p>

				<p className="mb-2">
					This section focuses on mobility and travel patterns across different
					organizational units.
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">KPI Summary:</span> Quick
						reference to average work hours and current total team size.
					</li>

					<li>
						<span className="font-bold text-white">In-City Trips:</span> A
						horizontal bar chart displaying the frequency of local business
						travel across various departments (e.g., Viva, DistributionChannel,
						Health Burst).
					</li>

					<li>
						<span className="font-bold text-white">Out-of-City Trips:</span> A
						chart showcasing travel frequency for external/long-distance
						business trips, with “DistributionChannel” highlighted as a primary
						contributor.
					</li>
				</ol>

				<hr className="my-8" />

				<p className="mb-2">
					<span className="font-bold text-white">
						Slide 3: Detailed Business Trip Analysis (Individual Perspective)
					</span>
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Title:</span> Individual
					Employee Travel Insights
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Description</span>
				</p>

				<p className="mb-2">
					This view drills down into business travel at the individual level,
					identifying top travelers.
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">High-Level Totals:</span> A
						summary showing the aggregate count of out-of-city, daily in-city,
						and hourly in-city business trips.
					</li>

					<li>
						<span className="font-bold text-white">
							Out-of-City Trips Per Person:
						</span>{" "}
						Identifies top individual performers in external business travel.
					</li>

					<li>
						<span className="font-bold text-white">
							In-City Trips Per Person:
						</span>{" "}
						Visualizes high-frequency local travelers, notably highlighting a
						significant volume from a specific employee (“Employee A”).
					</li>

					<li>
						<span className="font-bold text-white">Tabular Data:</span> Two
						side-by-side tables providing raw data for individual trips,
						allowing for granular audit and tracking.
					</li>
				</ol>

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
				url: "/poura-hr-dashboard/1.jpeg",
			},
			{
				title: "",
				url: "/poura-hr-dashboard/2.png",
			},
			{
				title: "",
				url: "/poura-hr-dashboard/3.png",
			},
		],
	},
	{
		title: "Physician Tour Allocation & Coverage Analytics Dashboard",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					<span className="font-bold text-white">Tech Stack:</span> Power BI,
					DAX, SQL, Excel (Power Query), Data Modeling
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						Led the end to end development of an interactive{" "}
						<span className="font-bold text-white">
							Business Intelligence dashboard
						</span>{" "}
						to optimize physician tour allocation and sales force territory
						coverage.
					</li>

					<li>
						Designed a scalable{" "}
						<span className="font-bold text-white">star schema data model</span>{" "}
						and performed ETL processes using SQL and Power Query to clean,
						transform, and structure operational datasets.
					</li>

					<li>
						Developed advanced{" "}
						<span className="font-bold text-white">
							DAX calculations and performance KPIs
						</span>{" "}
						to monitor physician distribution by representative, region,
						specialty, and product focus.
					</li>

					<li>
						Enabled{" "}
						<span className="font-bold text-white">self-service analytics</span>{" "}
						through drill-through reports, cross-filtering, and dynamic
						segmentation, improving accessibility of insights for leadership.
					</li>

					<li>
						Reduced manual reporting time by{" "}
						<span className="font-bold text-white">~60%</span> by automating
						recurring Excel-based reports and consolidating multiple data
						sources into a centralized BI solution.
					</li>

					<li>
						Increased tour planning accuracy by{" "}
						<span className="font-bold text-white">~25%</span> by identifying
						territory coverage gaps and specialty distribution imbalances.
					</li>

					<li>
						Delivered analytical visibility across{" "}
						<span className="font-bold text-white">
							9,000+ physician records
						</span>
						, supporting data-driven decision-making and operational efficiency
						improvements.
					</li>

					<li>
						Collaborated with cross-functional stakeholders (sales, operations,
						management) to translate business requirements into measurable
						analytics solutions.
					</li>
				</ol>

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
				url: "/physician-tour-allocation/1.png",
			},
		],
	},
	{
		title: "Purchase Request Analysis Dashboard",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					<span className="font-bold text-white">Overview</span>
				</p>

				<p className="mb-2">
					This management dashboard, developed in Power BI, is designed to
					monitor and analyze purchase request workflows and supply status. The
					primary goal is to provide a comprehensive and accurate overview of
					purchase requests, supply chain statuses, and technician performance
					to enhance decision-making and improve transparency across procurement
					processes.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">
						Key Features and Components
					</span>
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">
							Purchase Requests Overview:
						</span>{" "}
						Displays a detailed table of purchase requests including request
						codes, request types, request statuses, submission dates, quantities
						needed, suppliers, and other relevant parameters. This section
						enables precise tracking and real-time monitoring of purchase
						requests.
					</li>

					<li>
						<span className="font-bold text-white">
							Supply Status Analysis:
						</span>{" "}
						Visualizes supply status segmented by full supply, partial supply,
						and no supply, along with quantitative and percentage comparisons
						using tables and charts. This helps identify supply chain
						bottlenecks and areas for improvement.
					</li>

					<li>
						<span className="font-bold text-white">
							Technician Performance Review:
						</span>{" "}
						Analyzes the performance of technicians involved in the supply
						process, showing the number of requests managed by each technician
						and monthly goal attainment percentages through line charts and
						numerical tables. This facilitates process evaluation and
						optimization.
					</li>

					<li>
						<span className="font-bold text-white">
							Non-fulfillment Causes Analysis:
						</span>{" "}
						Presents statistics and percentages of different causes for supply
						non-fulfillment such as stock shortages and financial approval
						issues, supported by pie charts for easy ratio understanding.
					</li>

					<li>
						<span className="font-bold text-white">Time-based Trends:</span>{" "}
						Includes a timeline chart depicting monthly achievement percentages
						to track performance progress or decline over time.
					</li>

					<li>
						<span className="font-bold text-white">
							Advanced Filtering Options:
						</span>{" "}
						The dashboard features side panels for applying filters such as date
						ranges, organizational units, request statuses, and more, enabling
						customized and detailed analysis.
					</li>
				</ol>

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
				url: "/commercial/1.png",
			},
		],
	},
	{
		title: "Sales Rep Sample Tracking Dashboard",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					<span className="font-bold text-white">Project Overview</span>
				</p>

				<p className="mb-2">
					This interactive dashboard was developed to streamline and monitor the
					process of sample drug distribution by sales representatives
					(medreps). Its primary objective is to ensure accurate tracking of
					samples assigned to sales reps, their delivery to doctors, and
					subsequent uploading of prescription evidence into the system.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Purpose and Goals</span>
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">
							Prevent loss or misplacement
						</span>{" "}
						of drug samples by ensuring every transaction is recorded.
					</li>

					<li>
						Track KPI:{" "}
						<span className="font-bold text-white">
							Prescription Upload Rate per sales rep to measure compliance and
							performance.
						</span>
					</li>

					<li>
						Monitor the number of{" "}
						<span className="font-bold text-white">
							samples delivered, prescriptions uploaded, and remaining samples
						</span>{" "}
						in real-time.
					</li>

					<li>
						Facilitate fast and transparent tracking of the entire
						sample-to-prescription workflow.
					</li>

					<li>
						Support inventory control for reclaiming unused samples when sales
						reps leave or contracts end.
					</li>
				</ol>

				<p className="mb-2">
					<span className="font-bold text-white">Dashboard Features</span>
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						Filters by year, month, product, sales representative, marketing
						manager, and scientific rep.
					</li>

					<li>
						Summary tables showing total samples assigned, prescription uploads,
						and upload percentages per sales rep.
					</li>

					<li>
						Detailed logs of sample deliveries and prescription statuses with
						timestamps.
					</li>

					<li>
						Visualizations illustrating upload rates and sample distribution
						status.
					</li>

					<li>
						Remaining sample counts linked to products and reps to enable
						precise inventory reconciliation.
					</li>
				</ol>

				<p className="mb-2">
					<span className="font-bold text-white">Impact</span>
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						Improved accuracy and transparency in sample management processes.
					</li>

					<li>
						Enhanced oversight of sales rep activities through performance KPIs.
					</li>

					<li>
						Reduced sample losses and streamlined prescription validation.
					</li>

					<li>
						Faster decision-making for inventory adjustments and resource
						management.
					</li>

					<li>
						Prepared organization for contract transitions with clear sample
						return metrics.
					</li>
				</ol>

				<p className="mb-2">
					<span className="font-bold text-white">
						Additional Impact on Management Efficiency
					</span>
				</p>

				<p className="mb-2">
					This dashboard was deployed to managers of each pharmaceutical brand,
					significantly reducing the time required for sample tracking and
					reporting. Tasks that previously took approximately one full day using
					Excel can now be completed in a matter of seconds. Managers gained the
					ability to generate customized reports instantly by applying various
					filters and easily print the results directly from the dashboard,
					greatly enhancing their productivity and decision-making speed.
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
				url: "/sales-rep-sample-tracking-dashboard/1.png",
			},
			{
				title: "",
				url: "/sales-rep-sample-tracking-dashboard/2.png",
			},
		],
	},
	{
		title: "Real-Time Pharmaceutical Price Intelligence",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					Managing price volatility for over 5,000 pharmaceutical SKUs used to
					be a month-long, manual struggle in Excel. By the time reports were
					consolidated, the market intelligence was already obsolete.
				</p>

				<p className="mb-2">
					I decided to re-engineer our pricing workflow by building an{" "}
					<span className="font-bold text-white">
						End-to-End Automated Data Pipeline
					</span>
					. Here is the technical breakdown of the architecture:
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">Data Ingestion:</span>{" "}
						Developed robust, multi-threaded web scrapers to extract daily price
						data from dynamic web sources, ensuring high data availability and
						cleanliness.
					</li>

					<li>
						<span className="font-bold text-white">ETL & Storage:</span>{" "}
						Orchestrated a streamlined pipeline to ingest raw data into{" "}
						<span className="font-bold text-white">SQL Server</span>, ensuring a
						normalized relational structure for long-term trend analysis.
					</li>

					<li>
						<span className="font-bold text-white">Semantic Modeling:</span>{" "}
						Implemented a multidimensional model using{" "}
						<span className="font-bold text-white">SSAS</span>, allowing us to
						perform complex comparative analysis and aggregate metrics at scale.
					</li>

					<li>
						<span className="font-bold text-white">
							Orchestration & Alerting:
						</span>{" "}
						Utilized <span className="font-bold text-white">n8n</span> to
						automate the entire workflow. By scheduling 5 daily execution
						cycles, we achieved proactive anomaly detection, pushing instant,
						actionable insights via Telegram and Email.
					</li>

					<li>
						<span className="font-bold text-white">Data Visualization:</span>{" "}
						Developed interactive{" "}
						<span className="font-bold text-white">Power BI</span> dashboards
						powered by sophisticated DAX measures, providing a real-time “single
						source of truth” for the team.
					</li>
				</ol>

				<p className="mb-2">
					<span className="font-bold text-white">The Result</span>
				</p>

				<p className="mb-2">
					We eliminated a 30-day manual process, replacing it with an automated
					cycle that completes in seconds. This transformation shifted our
					team’s focus from mundane data entry to{" "}
					<span className="font-bold text-white">
						strategic pricing intelligence
					</span>
					.
				</p>

				<p className="mb-2">
					It’s a perfect example of how Data Engineering can turn operational
					bottlenecks into a competitive advantage.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">#DataEngineering</span>,{" "}
					<span className="font-bold text-white">#AutomatedPipelines</span>,{" "}
					<span className="font-bold text-white">#BI</span>,{" "}
					<span className="font-bold text-white">#SQLServer</span>,{" "}
					<span className="font-bold text-white">#SSAS</span>,{" "}
					<span className="font-bold text-white">#PowerBI</span>,{" "}
					<span className="font-bold text-white">#n8n</span>,{" "}
					<span className="font-bold text-white">#DataStrategy</span>,{" "}
					<span className="font-bold text-white">#PharmaceuticalTech</span>,{" "}
					<span className="font-bold text-white">#Automation</span>
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
				url: "/price-change/1.png",
			},
			{
				title: "",
				url: "/price-change/2.png",
			},
		],
	},
	{
		title: "Log Analysis Dashboard",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					<span className="font-bold text-white">Overview</span>
				</p>

				<p className="mb-2">
					A comprehensive analytical dashboard designed to monitor system logs,
					visualize trends, and accelerate the detection of anomalies and
					discrepancies.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">Core Capabilities</span>
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">Date based navigation:</span>{" "}
						Easily explore logs across multiple days using an interactive time
						selector.
					</li>

					<li>
						<span className="font-bold text-white">
							Daily trend visualization:
						</span>{" "}
						Displays value fluctuations through connected data points, making
						spikes, drops, and irregular patterns instantly noticeable.
					</li>

					<li>
						<span className="font-bold text-white">
							Advanced filtering panel:
						</span>

						<br />

						<ol className="mb-2 list-[circle] ps-8">
							<li>
								Filter by Entity Type, Entity Name, Sub Entity Name, and Measure
							</li>

							<li>Enables focused analysis and segmentation of log data</li>
						</ol>
					</li>

					<li>
						<span className="font-bold text-white">Metric mode toggle:</span>{" "}
						Switch between{" "}
						<span className="font-bold text-white">Quantity (Qty)</span> and{" "}
						<span className="font-bold text-white">Value (Val)</span> to view
						data from different analytical perspectives.
					</li>

					<li>
						<span className="font-bold text-white">Drill down insights:</span>{" "}
						Selecting a specific day automatically opens an{" "}
						<span className="font-bold text-white">hourly breakdown chart</span>
						, allowing investigation of intra day behavior and peak activity
						periods.
					</li>
				</ol>

				<p className="mb-2">
					<span className="font-bold text-white">Purpose & Usage</span>
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>Monitoring system behavior over time</li>

					<li>Identifying anomalies, spikes, or drops in log activity</li>

					<li>
						Supporting operational teams in diagnosing issues more efficiently
					</li>

					<li>
						Enabling clearer visibility into patterns that may indicate system
						bottlenecks or inconsistencies
					</li>
				</ol>

				<p className="mb-2">
					<span className="font-bold text-white">Impact</span>
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>Simplified and accelerated the log review workflow</li>

					<li>Improved accuracy in identifying unusual patterns</li>

					<li>
						<span className="font-bold text-white">
							Reduced the time required for discrepancy detection and
							investigation by approximately 68%
						</span>
						, resulting in significant efficiency gains for technical and
						monitoring teams
					</li>
				</ol>

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
				url: "/log-analysis/1.jpg",
			},
			{
				title: "",
				url: "/log-analysis/2.jpg",
			},
		],
	},
	{
		title:
			"Streamlining Reconciliation: From Manual Overhead to Automated Insights",
		excerpt: "",
		description: (
			<>
				<p className="mb-2">
					Data reconciliation is often the “hidden” bottleneck in business
					operations. For us, comparing daily sales across three different
					company panels was a repetitive, 9-day manual sprint every month—until
					we decided to re-engineer the pipeline.
				</p>

				<p className="mb-2">
					I’m thrilled to share a recent collaboration with my colleague where
					we successfully transformed our manual workflow into a streamlined,
					automated process.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">The Technical Approach</span>
				</p>

				<ol className="mb-2 list-disc ps-8">
					<li>
						<span className="font-bold text-white">Data Ingestion:</span> We
						moved away from manual Excel handling by building a custom Python
						script. This script now automates the extraction and loading (EL) of
						raw data into our centralized SQL database in just minutes.
					</li>

					<li>
						<span className="font-bold text-white">Data Integration:</span> We
						utilized DAX queries to extract structured data from our Power BI
						models and land it into the database, creating a unified source of
						truth.
					</li>

					<li>
						<span className="font-bold text-white">Data Modeling:</span> By
						bringing both datasets into a relational model, we achieved
						real-time visibility into historical data and instant discrepancy
						detection.
					</li>
				</ol>

				<p className="mb-2">
					<span className="font-bold text-white">The Impact</span>
				</p>

				<p className="mb-2">
					What used to be a 9-day manual effort is now completed in less than
					half a day. By minimizing manual touchpoints, we’ve drastically
					reduced the risk of human error and shifted our team’s focus from
					“data gathering” to “data analysis”.
				</p>

				<p className="mb-2">
					This project was a great example of how applying small-scale data
					engineering principles can yield significant operational efficiency.
				</p>

				<p className="mb-2">
					<span className="font-bold text-white">#DataEngineering</span>,{" "}
					<span className="font-bold text-white">#Automation</span>,{" "}
					<span className="font-bold text-white">#Python</span>,{" "}
					<span className="font-bold text-white">#PowerBI</span>,{" "}
					<span className="font-bold text-white">#BusinessIntelligence</span>,{" "}
					<span className="font-bold text-white">#ETL</span>,{" "}
					<span className="font-bold text-white">#OperationalEfficiency</span>,{" "}
					<span className="font-bold text-white">#DataAnalytics</span>
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
				url: "/contradiction/1.png",
			},
		],
	},
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
			// {
			// 	title: "",
			// 	url: "/powerbi-dashboard/home.png",
			// },
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
