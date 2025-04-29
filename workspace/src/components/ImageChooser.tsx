// in real life this would come from the backend
import { useState } from "react";

const ALL_IMAGES = ["01.png", "02.png", "03.png", "04.png", "05.png"];

export default function ImageChooser() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelected = (name: string) => {
    const newSelected = name === selectedImage ? null : name;
    setSelectedImage(newSelected);
  };

  return (
    <div className={"ImageChooser"}>
      {ALL_IMAGES.map((i) => (
        <img
          key={i}
          src={`/images/${i}`}
          onClick={() => handleImageSelected(i)}
          className={selectedImage === i ? "border-amber-600" : ""}
        />
      ))}
    </div>
  );
}
