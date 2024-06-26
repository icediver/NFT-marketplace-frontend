import { HowItWorksCard } from '@/components/ui/cards/how-it-works-card/HowItWorksCard';
import { IHowItWorksCard } from '@/types/how-it-works-card.interface';

interface IHowItWorks {
	cards: IHowItWorksCard[];
}
export function HowItWorks({ cards }: IHowItWorks) {
	return (
		<section className="">
			<div className="adaptive-container grid gap-5 lg:grid-cols-3 lg:gap-[30px]">
				<header className="mb-10 lg:col-span-3 2xl:mb-12">
					<p className="section-title">How It Works</p>
					<p className="2xl:text-1.25xl">Find out how to get started </p>
				</header>
				{cards.map((card, index) => (
					<HowItWorksCard
						key={index}
						image={card.image}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
		</section>
	);
}
