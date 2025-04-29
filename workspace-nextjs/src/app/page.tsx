import ky from "ky";
import { CardDtoList } from "@/types";
import CardList from "@/components/CardList";
import { fetchCard, fetchCards, fetchComments } from "@/app/queries";
import Card from "@/components/Card";
import CommentList from "@/components/CommentList";

export default async function Home() {
  const cards = await fetchCards();
  const card = await fetchCard("C1");
  const comments = await fetchComments("C1");

  return (
    <div className={"container mx-auto pt-8"}>
      <CardList cards={cards} />
      <Card {...card} />
      <CommentList comments={comments} />
    </div>
  );
}
