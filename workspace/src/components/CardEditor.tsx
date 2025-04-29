import ky from "ky";
import { useState } from "react";

import Card from "./Card.tsx";
import ImageChooser from "./ImageChooser.tsx";

// Virtual DOM (React)
//  Shadow DOM (Custom Elements, aka Web Components)

export default function CardEditor() {

  // State
  const [title, setTitle] = useState("Happy Birthday");
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelected = (name: string) => {
    const newSelected = name === selectedImage ? null : name;
    setSelectedImage(newSelected);
  };

  const saveButtonDisabled = title.length === 0 || message.length === 0 || selectedImage == null;

  const handleSave = async() => {

    // TanStack Query
    // SWR
    // Apollo GraphQL Client

    console.log("SAVING", title, message, selectedImage);

    const response = await ky.post("http://localhost:7100/cards", {
      json: { title, message, image: selectedImage }
    }).json();

    console.log("SAVED", response)

  }

  return <div className={"CardEditor"}>
    <h1>Create your own Card</h1>

    <form>
      <label>
        Title
        <input value={title}
               onChange={event => setTitle(event.target.value)}
        />
      </label>
      {title.length<4 && <p>Please enter a title with at least 4 char. You have entered {title.length} chars instead</p>}

      <label>
        Message
        <input value={message}
               onChange={event => setMessage(event.target.value)}/>
      </label>

      <label>
        Select your image
        <ImageChooser
          selectedImage={selectedImage}
          onSelectedImageChange={handleImageSelected}
        />
      </label>

      <button type={"button"} onClick={ () => setTitle("")}>Clear</button>
      <button type={"button"} disabled={saveButtonDisabled}
      onClick={ () => handleSave()}
      >Create your Card!</button>

    </form>

    <Card title={title} message={message} image={selectedImage || "placeholder.png"} />

  </div>
}