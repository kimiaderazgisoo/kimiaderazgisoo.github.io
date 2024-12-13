import { useEffect, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

import { GalleryDialog } from "./portfolio-gallery";
import { PortfolioItem } from "./portfolio-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function PortfolioSingle({
	item,
	onBack,
}: {
	item: PortfolioItem;
	onBack: () => void;
}) {
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);
	const [dialogPayload, setDialogPayload] = useState<number>(0);

	const containterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.scrollTo({
			top: (containterRef.current?.offsetTop ?? 0) - 32,
			behavior: "smooth",
		});
	}, []);

	return (
		<>
			<div ref={containterRef} className="space-y-6">
				<div className="flex flex-wrap items-center gap-x-12 gap-y-4">
					<div className="text-2xl font-bold tracking-wide">
						Project: {item.title}
					</div>
					<div
						className="ms-auto flex cursor-pointer items-center gap-1"
						onClick={() => onBack()}
					>
						<FaAngleLeft className="mt-0.5" />
						Back to list
					</div>
				</div>

				<div className="space-y-6 rounded-2xl bg-neutral-900 px-8 py-8 shadow-xl shadow-neutral-950">
					<div className="">
						<div
							className="flex w-full items-center overflow-hidden rounded-2xl bg-black"
							onClick={() => {
								setDialogPayload(item.defaultImage ?? 0);
								setDialogOpen(true);
							}}
						>
							<img
								className="w-full cursor-pointer"
								src={item.images[item.defaultImage ?? 0].url}
								alt={item.images[item.defaultImage ?? 0].title}
							/>
						</div>
					</div>

					<Carousel
						className="text-black"
						opts={{ loop: true, startIndex: 1, dragFree: true }}
					>
						<CarouselContent>
							{item.images
								// .filter((_, index) => index !== (item.defaultImage ?? 0))
								.map((image, index) => (
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

					<div className="space-y-3">
						<div className="text-justify text-base leading-7 text-neutral-300">
							{item.description}
						</div>
					</div>
				</div>
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

export { PortfolioSingle };
