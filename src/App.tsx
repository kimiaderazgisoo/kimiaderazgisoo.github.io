import "./App.css";

import { useState } from "react";
import {
	FaEnvelope,
	FaEnvelopesBulk,
	FaFolderTree,
	FaLinkedin,
} from "react-icons/fa6";

import { Branding } from "./components/branding";
import { Portfolio } from "./components/portfolio";
import { portfolioItems } from "./components/portfolio-item";
import { PortfolioSingle } from "./components/portfolio-single";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
	const [activeProject, setActiveProject] = useState<number>();

	return (
		<div className="bg-neutral-800 pb-12">
			<div className="h-64 w-full bg-gradient-to-r from-[#f7a982] to-yellow-300 shadow-2xl"></div>
			<div className="mx-auto flex w-full max-w-screen-2xl flex-col items-start gap-x-4 gap-y-12 px-4 lg:flex-row lg:px-8 xl:px-12">
				<Branding />

				<div className="grow lg:my-8 lg:ms-4 xl:m-8">
					{typeof activeProject !== "undefined" ? (
						<PortfolioSingle
							item={portfolioItems[activeProject]}
							onBack={() => setActiveProject(undefined)}
						/>
					) : (
						<Tabs
							className="flex flex-col items-center space-y-12 lg:items-start"
							defaultValue="projects"
						>
							<TabsList className="mx-0 gap-4 bg-neutral-700 px-4">
								<TabsTrigger
									className="rounded-lg px-4 py-3 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#f7a982] data-[state=active]:to-yellow-300 data-[state=active]:text-neutral-900 data-[state=active]:shadow-xl data-[state=active]:shadow-neutral-950"
									value="projects"
								>
									<FaFolderTree />
									Projects
								</TabsTrigger>

								{/* <TabsTrigger
									className="rounded-lg px-4 py-3 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#f7a982] data-[state=active]:to-yellow-300 data-[state=active]:text-neutral-900 data-[state=active]:shadow-xl data-[state=active]:shadow-neutral-950"
									value="certificates"
								>
									<FaAward />
									Certificates
								</TabsTrigger> */}

								<TabsTrigger
									className="rounded-lg px-4 py-3 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#f7a982] data-[state=active]:to-yellow-300 data-[state=active]:text-neutral-900 data-[state=active]:shadow-xl data-[state=active]:shadow-neutral-950"
									value="contact"
								>
									<FaEnvelopesBulk />
									Contact Me
								</TabsTrigger>
							</TabsList>

							<TabsContent value="projects">
								<Portfolio
									onSelect={(index: number) => setActiveProject(index)}
								/>
							</TabsContent>

							<TabsContent value="certificates">
								<div>Coming Soon...</div>
							</TabsContent>

							<TabsContent value="contact">
								<div className="space-y-6 rounded-2xl bg-neutral-900 px-8 py-8 shadow-xl shadow-neutral-950">
									<p className="mb-2 text-justify">
										Feel free to reach out to me for any inquiries,
										collaborations, or feedback. I would be thrilled to explore
										opportunities to work together and share my expertise. Let's
										create something great!
									</p>
									<ul className="mb-2 space-y-4 sm:space-y-2">
										<li className="flex flex-col gap-2 sm:flex-row sm:items-center">
											<div className="flex items-center gap-2">
												<FaLinkedin className="w-5 shrink-0 text-xl" />
												LinkedIn:{" "}
											</div>
											<a
												href="https://www.linkedin.com/in/kimia-derazgisoo/"
												target="_blank"
											>
												https://www.linkedin.com/in/kimia-derazgisoo/
											</a>
										</li>

										<li className="flex flex-col gap-2 sm:flex-row sm:items-center">
											<div className="flex items-center gap-2">
												<FaEnvelope className="w-5 shrink-0 text-xl" />
												Email:{" "}
											</div>
											<a
												href="mailto:kimia.derazgisou@gmail.com"
												target="_blank"
											>
												kimia.derazgisou@gmail.com
											</a>
										</li>
									</ul>

									<p>Looking forward to connecting with you!</p>
								</div>
							</TabsContent>
						</Tabs>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
