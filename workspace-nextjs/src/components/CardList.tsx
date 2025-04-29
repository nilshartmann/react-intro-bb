import {CardDto, CardDtoList} from "@/types";
import Card from "@/components/Card";
import {LikesWidget} from "@/components/LikesWidget";
import Link from "next/link";

type CardListProps = {
	cards: CardDtoList;
}
export default function CardList({cards}: CardListProps) {

	return <div className={"CardList"}>
		{cards.map(card => <CardItem key={card.id} card={card}/>)}
	</div>
}

type CardItemProps = {
	card: CardDto
}

function CardItem({card}: CardItemProps) {

	return <div className={"CardItem"}>
		<div className={"flex justify-between items-center space-x-8"}>
			<img src={`/images/${card.image}`} alt={card.title}/>
			<Link href={`/cards/${card.id}`}><h2>{card.title}</h2></Link>
		</div>
		<LikesWidget cardId={card.id} currentLikes={card.likes}/>
	</div>

}