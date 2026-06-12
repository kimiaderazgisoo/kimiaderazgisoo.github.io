import { useEffect, useRef } from "react";

import {
	PortfolioItem as PortfolioItemType,
	portfolioItems,
} from "./portfolio-item";

function PortfolioItem({
	item,
	onSelect,
}: {
	item: PortfolioItemType;
	onSelect: () => void;
}) {
	return (
		<div className="flex flex-col gap-6 rounded-2xl bg-neutral-900 px-4 py-4 shadow-lg shadow-neutral-950 sm:flex-row">
			<div
				className="flex h-48 cursor-pointer items-center overflow-hidden rounded-xl bg-black opacity-70 transition duration-300 sm:h-36 sm:max-w-60"
				onClick={() => onSelect()}
			>
				<img
					className=""
					src={item.images[item.defaultImage ?? 0].url}
					alt={item.images[item.defaultImage ?? 0].title}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<div
					className="cursor-pointer text-xl font-bold tracking-wide"
					onClick={() => onSelect()}
				>
					{item.title}
				</div>

				<div
					className="flex cursor-pointer items-center gap-2 md:gap-1"
					onClick={() => onSelect()}
				>
					Read more...
				</div>
			</div>
		</div>
	);
}

function Portfolio({ onSelect }: { onSelect: (index: number) => void }) {
	const containterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.scrollTo({
			top: (containterRef.current?.offsetTop ?? 0) - 116,
			behavior: "smooth",
		});
	}, []);

	return (
		<div ref={containterRef} className="space-y-8">
			{portfolioItems.map((item, index) => (
				<PortfolioItem item={item} onSelect={() => onSelect(index)} />
			))}
		</div>
	);
}

export { Portfolio };
export type { PortfolioItem };
