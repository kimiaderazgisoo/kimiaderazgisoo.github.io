import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

function Contact() {
	return (
		<div className="space-y-6 rounded-2xl bg-neutral-900 px-8 py-8 shadow-xl shadow-neutral-950">
			<p className="mb-2 text-justify">
				Feel free to reach out to me for any inquiries, collaborations, or
				feedback. I would be thrilled to explore opportunities to work together
				and share my expertise. Let's create something great!
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
					<a href="mailto:kimia.derazgisou@gmail.com" target="_blank">
						kimia.derazgisou@gmail.com
					</a>
				</li>
			</ul>

			<p>Looking forward to connecting with you!</p>
		</div>
	);
}

export { Contact };
