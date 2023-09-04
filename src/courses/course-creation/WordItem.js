import React, { useState } from "react";
import WordAutoCompleteSearch from "./WordAutoCompleteSearch";
import "./WordItem.css";

function WordItem(props) {
  return (
    <div className="word-item">
      <WordAutoCompleteSearch
        itemsToSearchIn={props.subtitleWords}
        cues={props.cues}
        type={"subtitle"}
        /////////////
        selectedItems={props.subtitleWord}
        setSelectedItems={props.setSubtitleWord}
        ////////////////////
        closeSuggestionBox={props.closeSuggestionBox}
        setCloseSuggestionBox={props.setCloseSuggestionBox}
      />

      <WordAutoCompleteSearch
        itemsToSearchIn={props.databaseWords}
        ////////////////
        selectedItems={props.databaseWord}
        setSelectedItems={props.setDatabaseWord}
        ////////////////
        closeSuggestionBox={props.closeSuggestionBox}
        setCloseSuggestionBox={props.setCloseSuggestionBox}
      />
      <button className="remove" onClick={props.handleWordRemove}>
        Remove
      </button>
    </div>
  );
}
export default WordItem;
