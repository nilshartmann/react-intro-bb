import ky from "ky";
import { CardDto, CardDtoList, CommentDtoList } from "@/types";

export async function fetchCards() {
  const r = await ky.get("http://localhost:7100/cards").json();
  return CardDtoList.parse(r);
}

export async function fetchCard(id: string) {
  const r = await ky.get(`http://localhost:7100/cards/${id}`).json();
  return CardDto.parse(r);
}

export async function fetchComments(cardId: string) {
  const r = await ky
    .get(`http://localhost:7100/cards/${cardId}/comments`)
    .json();
  return CommentDtoList.parse(r);
}

export async function saveLike(cardId: string) {
  const r = await ky.post(`http://localhost:7100/cards/${cardId}/likes`).json();
  return CardDto.parse(r);
}
