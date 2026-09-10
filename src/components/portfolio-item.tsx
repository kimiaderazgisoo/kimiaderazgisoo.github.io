type PortfolioItem = {
	title: string;
	excerpt: string;
	description: React.ReactNode;
	defaultImage?: number;
	images: { title: string; url: string }[];
};

const portfolioItems: PortfolioItem[] = [
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
