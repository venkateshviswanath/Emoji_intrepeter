import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😅": " Grinning Face with Sweat",
  "😂": "LOL",
  "🤑": "Rich",
  "🥵": "Heat blast"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have it in our database";
    }
    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickedHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>🙂 Welcome to Emoticons 🙃</h1>
      <input
        placeholder="Enter Emoji  to know the meaning "
        onChange={emojiInputHandler}
      ></input>
      <h2> {meaning} </h2>
      <h3>Emojis we Know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickedHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
