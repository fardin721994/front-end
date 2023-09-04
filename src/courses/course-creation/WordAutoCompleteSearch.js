import React, { useState, useRef } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { matchSorter } from "match-sorter";

import "./WordAutoCompleteSearch.css";
import WordSearchInput from "./WordSearchInput";

function WordAutoCompleteSearch({
  type,
  itemsToSearchIn,
  cues,
  //////////
  selectedItems,
  setSelectedItems,
  /////////
}) {
  const [value, setValue] = useState("");

  // const dummyItems = [
  //   {
  //     title: "a",
  //   },
  //   { title: "b" },
  //   {
  //     title: "c",
  //   },
  //   {
  //     title: "d",
  //   },
  //   {
  //     title: "e",
  //   },
  //   {
  //     title: "f",
  //   },
  //   {
  //     title: "aa",
  //   },
  //   {
  //     title: "abc",
  //   },
  //   {
  //     title: "abcd",
  //   },
  // ];
  let searchSuggestions;
  if (value) {
    searchSuggestions = matchSorter(itemsToSearchIn, value, {
      keys: ["title"],
    });
  } else searchSuggestions = [];
  const handleSelectSuggetion = (event) => {
    const newSelectedItems = [...selectedItems, event.target.textContent];
    setSelectedItems(newSelectedItems);
    setValue("");
  };
  const searchSuggestionsElements = searchSuggestions.map((item) => (
    <OverlayTrigger
      //   key={placement}
      placement="right"
      className="bg-primary border  "
      overlay={
        <Tooltip>
          {type
            ? cues.filter((cue) => cue.id === item.cueId)[0].text
            : item.meaning.definition}
        </Tooltip>
      }
    >
      <button
        className=" border rounded-0 auto-b"
        onClick={handleSelectSuggetion}
      >
        {item.title}
      </button>
    </OverlayTrigger>
  ));

  const ref = useRef();

  React.useEffect(() => {
    (function () {
      let activeElIndex = 0;
      const children = ref.current.children;
      ref.current.addEventListener("keydown", (event) => {
        // const activeElement = document.activeElement;
        if (event.key === "ArrowUp") {
          if (activeElIndex > 0) {
            activeElIndex--;
            if (activeElIndex > 0) {
              children[1].children[activeElIndex - 1].focus();
            } else children[0].focus();
          }
        }
        if (event.key === "ArrowDown") {
          activeElIndex++;

          if (activeElIndex < children[1].children.length + 1)
            children[1].children[activeElIndex - 1].focus();
          else activeElIndex--;
        }
      });
    })();
  }, []);
  return (
    <div ref={ref} className="word-auto-complete-search">
      <WordSearchInput
        value={value}
        setValue={setValue}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        placeHolder={type ? "subtitle word" : "database word"}
      />
      <div className="search-suggestions-elements">
        {searchSuggestionsElements}
      </div>
    </div>
  );
}
export default WordAutoCompleteSearch;
