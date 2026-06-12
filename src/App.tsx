import "./App.css";

import { useState } from "react";
import { FaAward, FaEnvelopesBulk, FaFolderTree } from "react-icons/fa6";

import { Branding } from "./components/branding";
import { Portfolio } from "./components/portfolio";
import { portfolioItems } from "./components/portfolio-item";
import { PortfolioSingle } from "./components/portfolio-single";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Contact } from "./components/contact";
import { IconType } from "react-icons";

const TABS: {
	value: string;
	title: string;
	icon: IconType;
	hidden?: boolean;
}[] = [
	{
		value: "projects",
		title: "Projects",
		icon: FaFolderTree,
	},
	{
		value: "certificates",
		title: "Certificates",
		icon: FaAward,
		hidden: true,
	},
	{
		value: "contact",
		title: "Contact Me",
		icon: FaEnvelopesBulk,
	},
];

function App() {
	const [activeTab, setActiveTab] = useState<string>(
		() => TABS.filter((t) => !t.hidden)[0].value,
	);
	const [activeProject, setActiveProject] = useState<number>();

	return (
		<div className="bg-neutral-800 pb-12">
			<div className="h-64 w-full bg-gradient-to-r from-[#f7a982] to-yellow-300 shadow-2xl"></div>
			<div className="mx-auto flex w-full max-w-screen-2xl flex-col items-start gap-x-4 gap-y-12 px-4 lg:flex-row lg:px-8 xl:px-12">
				<Branding />

				<div className="grow lg:my-8 lg:ms-4 xl:m-8">
					<Tabs
						className="flex flex-col items-center space-y-12 lg:items-start"
						value={activeTab}
						onValueChange={(value) => {
							setActiveTab(value);
							if (value === "projects") {
								setActiveProject(undefined);
							}
						}}
					>
						<TabsList className="mx-0 gap-4 bg-neutral-700 px-4">
							{TABS.map((tab) => {
								if (tab.hidden) {
									return null;
								}

								return (
									<TabsTrigger
										key={tab.value}
										className="rounded-lg px-4 py-3 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#f7a982] data-[state=active]:to-yellow-300 data-[state=active]:text-neutral-900 data-[state=active]:shadow-xl data-[state=active]:shadow-neutral-950"
										value={tab.value}
									>
										<tab.icon />
										{tab.title}
									</TabsTrigger>
								);
							})}
						</TabsList>

						<TabsContent value="projects">
							{typeof activeProject !== "undefined" ? (
								<PortfolioSingle
									item={portfolioItems[activeProject]}
									onBack={() => setActiveProject(undefined)}
								/>
							) : (
								<Portfolio onSelect={(index) => setActiveProject(index)} />
							)}
						</TabsContent>

						<TabsContent value="certificates">
							<div>Coming Soon...</div>
						</TabsContent>

						<TabsContent value="contact">
							<Contact />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}

export default App;
