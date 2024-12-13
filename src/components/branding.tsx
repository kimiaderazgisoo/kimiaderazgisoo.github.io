import { FaFilePdf } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

const skills: { title: string; image: string; className: string }[] = [
	{ title: "Python", image: "/logos/python.webp", className: "size-9" },
	{ title: "SQL Server", image: "/logos/sql-server.png", className: "size-10" },
	{ title: "PowerBI", image: "/logos/powerbi.png", className: "size-14" },
	{
		title: "Google Sheets",
		image: "/logos/google-sheets.png",
		className: "size-7",
	},
	{ title: "Tableau", image: "/logos/tableau.png", className: "size-10" },
	{
		title: "Google Slides",
		image: "/logos/google-slides.png",
		className: "size-14",
	},
	{ title: "Gradio", image: "/logos/gradio.png", className: "size-9" },
	{
		title: "Google Analytics",
		image: "/logos/google-analytics.png",
		className: "size-12",
	},
	{ title: "Adjust", image: "/logos/adjust.png", className: "size-12" },
	{
		title: "Game Analytics",
		image: "/logos/game-analytics.png",
		className: "size-10",
	},
];

function Branding() {
	return (
		<div className="mx-auto -mt-32 max-w-[32rem] shrink-0 grow-0 space-y-12 rounded-2xl bg-neutral-900 px-8 py-10 shadow-xl shadow-neutral-950 lg:w-80 xl:mx-8 xl:w-96">
			<div className="space-y-6">
				<div className="mx-auto flex size-44 items-center justify-center md:size-56 lg:size-44">
					<img className="rounded-full" src="/photo.jpg" />
				</div>
				<div className="flex flex-col items-center justify-center gap-3">
					<h1 className="text-3xl font-bold">Kimia Derazgisoo</h1>
					<h2 className="text-2xl font-bold text-[#f7a982]">DATA ANALYST</h2>
				</div>
			</div>

			<div className="mt-12 space-y-2">
				<div className="font-bold">About Me</div>
				<p className="text-justify">
					A data analyst with 3 years of experience turning complex data into
					meaningful insights through impactful dashboards and visualizations.
					Passionate about driving decisions and exploring data science to solve
					complex problems and uncover deeper insights.
				</p>
			</div>

			<div className="mt-12 space-y-2">
				<div className="font-bold">Skills</div>
				<div className="grid grid-cols-5 gap-x-3 gap-y-2 py-2">
					<TooltipProvider>
						{skills.map(({ title, image, className }, index) => (
							<div key={index} className="flex items-center justify-center">
								<Tooltip>
									<TooltipTrigger>
										<div
											className={cn(
												"flex aspect-square items-center",
												className,
											)}
										>
											<img src={image} alt={title} />
										</div>
									</TooltipTrigger>
									<TooltipContent>{title}</TooltipContent>
								</Tooltip>
							</div>
						))}
					</TooltipProvider>
				</div>
			</div>

			<div className="mt-12 space-y-2">
				<div className="font-bold">My Resume</div>
				<p className="flex items-center gap-3">
					View or download my resume:{" "}
					<a
						className="text-xl"
						href="/kimia_derazgisoo-cv-131224.pdf"
						target="_blank"
					>
						<FaFilePdf />
					</a>
				</p>
			</div>
		</div>
	);
}

export { Branding };
