import React, { useState } from "react";
import "./MadLibsForm.css";
import MadLibsStory from "./MadLibsStory";

function MadLibsForm() {
  const [noun, setNoun] = useState("");
  const [adjective, setAdjective] = useState("");
  const [verb, setVerb] = useState("");
  const [place, setPlace] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(`Adjective: ${adjective}`);
    console.log(`Noun: ${noun}`);
    console.log(`Verb: ${verb}`);
    console.log(`Place: ${place}`);
  }

  function handleReset() {
    setAdjective("");
    setNoun("");
    setVerb("");
    setPlace("");
    setIsSubmitted(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="noun">
          <input
            id="noun"
            type="text"
            placeholder="Enter a noun..."
            value={noun}
            onChange={(e) => setNoun(e.target.value)}
          />
        </label>
        <label htmlFor="adjective">
          <input
            id="adjective"
            type="text"
            placeholder="Enter an adjective..."
            value={adjective}
            onChange={(e) => setAdjective(e.target.value)}
          />
        </label>
        <label htmlFor="verb">
          <input
            id="verb"
            type="text"
            placeholder="Enter a verb..."
            value={verb}
            onChange={(e) => setVerb(e.target.value)}
          />
        </label>
        <label htmlFor="place">
          <input
            id="place"
            type="text"
            placeholder="Enter a place..."
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </label>

        <button type="submit">Create Story</button>
      </form>
      {isSubmitted && (
        <MadLibsStory
          noun={noun}
          adjective={adjective}
          verb={verb}
          place={place}
        />
      )}
      {isSubmitted && (
        <button className="reset-button" onClick={handleReset}>
          Create a New Story
        </button>
      )}
    </div>
  );
}

export default MadLibsForm;
