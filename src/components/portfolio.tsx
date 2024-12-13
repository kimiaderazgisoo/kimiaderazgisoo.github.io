import { useEffect, useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

import { GalleryDialog } from "./portfolio-gallery";
import {
	PortfolioItem as PortfolioItemType,
	portfolioItems,
} from "./portfolio-item";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

function PortfolioItem({
	item,
	onSelect,
}: {
	item: PortfolioItemType;
	onSelect: () => void;
}) {
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);
	const [dialogPayload, setDialogPayload] = useState<number>(0);

	return (
		<>
			<div className="space-y-6 rounded-2xl bg-neutral-900 px-8 py-8 shadow-xl shadow-neutral-950">
				<div className="flex items-center justify-between">
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
						<FaAngleRight className="mt-0.5" />
						Read more
					</div>
				</div>

				<Carousel
					className="text-black"
					opts={{ loop: true, startIndex: 1, dragFree: true }}
				>
					<CarouselContent>
						{item.images.map((image, index) => (
							<CarouselItem key={index} className="basis-1/3">
								<div
									className="flex h-full max-h-36 cursor-pointer items-center overflow-hidden rounded-xl bg-black opacity-70 transition duration-300"
									onClick={() => {
										setDialogPayload(index);
										setDialogOpen(true);
									}}
								>
									<img className="" src={image.url} alt={image.title} />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="size-7 shadow-xl shadow-neutral-950" />
					<CarouselNext className="size-7 shadow-xl shadow-neutral-950" />
				</Carousel>
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

function Portfolio({ onSelect }: { onSelect: (index: number) => void }) {
	const containterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.scrollTo({
			top: (containterRef.current?.offsetTop ?? 0) - 116,
			behavior: "smooth",
		});
	}, []);

	return (
		<div ref={containterRef} className="space-y-12">
			{portfolioItems.map((item, index) => (
				<PortfolioItem item={item} onSelect={() => onSelect(index)} />
			))}
		</div>
	);
}

export { Portfolio };
export type { PortfolioItem };
