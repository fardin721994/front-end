import React, { useState } from "react";
import WordItem from "./WordItem";
import Button from "react-bootstrap/Button";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./WordsPart.css";

function WordsPart({
  subtitleWords,
  databaseWords,
  cues,
  /////////////
  wordList,
  setWordList,
}) {
  const [closeSuggestionBox, setCloseSuggestionBox] = useState(false);

  const setSubtitleWord = (index, newSubtitleWord) => {
    let wordListCopy = [...wordList];
    wordListCopy[index].subtitleWord = newSubtitleWord;
    const newWordList = [...wordListCopy];
    setWordList(newWordList);
  };
  const setDatabaseWord = (index, newDatabaseWord) => {
    let wordListCopy = [...wordList];
    wordListCopy[index].databaseWord = newDatabaseWord;
    const newWordList = [...wordListCopy];
    setWordList(newWordList);
  };

  const handleWordAdd = () => {
    setWordList([...wordList, { subtitleWord: [], databaseWord: [] }]);
  };

  const closeSuggestionBoxHandler = (event) => {
    if (event.target.className !== "auto-input") setCloseSuggestionBox(true);
  };

  const handleWordRemove = (index) => {
    let list = [...wordList];
    list.splice(index, 1);
    setWordList([...list]);
  };

  const wordsSaveHandler = async () => {
    // try {
    //   await sendRequest(
    //     process.env.REACT_APP_BACKEND_URL + "/courses/words",
    //     "POST",
    //     JSON.stringify({
    //       name: "friends",
    //       content: wordList,
    //     }),
    //     { "Content-Type": "application/json" }
    //   );
    // } catch (err) {}
    console.log("wordList", wordList);
  };

  return (
    <div className="words-part" onClick={closeSuggestionBoxHandler}>
      {wordList.map((word, index) => (
        <WordItem
          subtitleWords={subtitleWords}
          databaseWords={databaseWords}
          cues={cues}
          ///////////////
          subtitleWord={word.subtitleWord}
          databaseWord={word.databaseWord}
          setSubtitleWord={(newSubtitleWord) =>
            setSubtitleWord(index, newSubtitleWord)
          }
          setDatabaseWord={(newDatabaseWord) =>
            setDatabaseWord(index, newDatabaseWord)
          }
          //////////////

          handleWordRemove={() => handleWordRemove(index)}
          closeSuggestionBox={closeSuggestionBox}
          setCloseSuggestionBox={setCloseSuggestionBox}
          ////////////////
          key={index}
        />
      ))}
      <button className="add" onClick={handleWordAdd}>
        Add a word
      </button>
      <button className="save" onClick={wordsSaveHandler}>
        Save
      </button>
    </div>
  );
}
export default WordsPart;
