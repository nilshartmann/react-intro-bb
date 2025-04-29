import { LikeIcon, LikeIndicator } from "@/components/LoadingIndicator";
import { saveLike } from "@/queries";
import { revalidatePath } from "next/cache";
import LikeButton from "@/components/LikeButton";

type LikesWidgetProps = {
  cardId: string;
  currentLikes: number;
};

export function LikesWidget({ cardId, currentLikes }: LikesWidgetProps) {
  async function handleSave() {
    "use server";

    await saveLike(cardId);

    revalidatePath("/");
  }

  return (
    <form className={"inline-block"} action={handleSave}>
      <LikeButton currentLikes={currentLikes} />
    </form>
  );
}
