import Card from "@/components/Card";
import { fetchCards } from "@/queries";
import CardList from "@/components/CardList";
import Link from "next/link";

// React Server Components (RSC)

export default async function Home() {
  console.log("Hello Server", new Date().toLocaleTimeString());

  const response = await fetchCards();

  return (
    <div>
      <Link href={"/editor"}>Create your own card</Link>
      <CardList cards={response} />
    </div>
  );
}
