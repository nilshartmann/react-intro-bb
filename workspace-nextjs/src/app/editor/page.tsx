import CardEditor from "@/components/CardEditor";
import Link from "next/link";
import Card from "@/components/Card";

export default function EditorPage() {
  // const card = (
  //   <Card
  //     message={message}
  //     title={title}
  //     image={selectedImage || "placeholder.png"}
  //   />
  // );

  return (
    <div>
      <Link href={"/"}>Home</Link>
      <CardEditor />
    </div>
  );
}
