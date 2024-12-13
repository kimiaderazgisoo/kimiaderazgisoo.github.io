import { useState } from "react";

import { cn } from "@/lib/utils";

import { PortfolioItem } from "./portfolio-item";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { Conditional } from "./ui/conditional";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

function GalleryDialog({
	payload,
	open,
	onClose,
}: {
	payload: {
		item: PortfolioItem;
		index: number;
	};
	open: boolean;
	onClose: () => void;
}) {
	return (
		<Dialog open={open} onOpenChange={() => onClose()}>
			<Conditional mount={open} delay>
				<GalleryDialogContent {...payload} />
			</Conditional>
		</Dialog>
	);
}

function GalleryDialogContent({
	item,
	index,
}: {
	item: PortfolioItem;
	index: number;
}) {
	const [activeIndex, setActivceIndex] = useState<number>(index);

	return (
		<DialogContent className="max-w-screen-lg border-0 bg-neutral-900">
			<DialogHeader>
				<DialogTitle>{item.title} Images</DialogTitle>
			</DialogHeader>
			<div className="space-y-6 px-2 pt-2">
				<div>
					<Carousel
						className="text-black"
						opts={{ loop: true, startIndex: index + 1, dragFree: true }}
					>
						<CarouselContent>
							{item.images.map((image, index) => (
								<CarouselItem key={index} className="basis-1/3">
									<div
										className={cn(
											"flex h-full max-h-32 cursor-pointer items-center overflow-hidden rounded-xl bg-black opacity-40 transition duration-300",
											index === activeIndex && "opacity-100",
										)}
										onClick={() => {
											setActivceIndex(index);
										}}
									>
										<img className="" src={image.url} alt={image.title} />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
				<div className="flex items-center justify-center overflow-hidden rounded-2xl bg-black">
					<a href={item.images[activeIndex].url} target="_blank">
						<img
							src={item.images[activeIndex].url}
							title={item.images[activeIndex].title}
						/>
					</a>
				</div>
			</div>
		</DialogContent>
	);
}

export { GalleryDialog };
