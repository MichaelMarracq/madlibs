import React from "react";
import "./MadLibsStory.css";

function MadLibsStory({ noun, adjective, verb, place }) {
  const madLibIdeas = [
    `Once upon a time, a brave {noun} set out on a(n) {adjective} journey. Along the way, they encountered a magical {noun} and a mischievous {noun}. They had to {verb} their way out of tricky situations and eventually reached the enchanting {place}, where their courage was rewarded.`,

    `There was a hilarious {noun} who loved throwing {adjective} parties. They invited all their friends to join in the fun, and together they laughed, danced, and {verb}ed until the sun came up. The party took place in a wacky {place} filled with colorful decorations and endless joy.`,

    `In a hidden corner of the world, there existed a secret {noun} garden. It was a place of tranquility and beauty, filled with fragrant {adjective} flowers and vibrant {noun}. People would {verb} into the garden to find solace and be amazed by the wonders that nature had created.`,

    `A group of adventurous {noun} discovered a time-traveling {noun} that allowed them to journey through different eras. They explored ancient civilizations, witnessed pivotal historical events, and even {verb}ed with legendary figures. Their incredible journey took them to unimaginable {place} and taught them valuable lessons about the past.`,

    `The annual {adjective} sports competition brought together the world's finest {noun} athletes. They showcased their skills in thrilling {verb}ing events, captivating the audience with their speed, strength, and precision. The competition was held in a magnificent {place} that echoed with cheers and excitement.`,
  ];

  const getRandomMadLib = () => {
    const randomIndex = Math.floor(Math.random() * madLibIdeas.length);
    const madLibTemplate = madLibIdeas[randomIndex];
    return madLibTemplate
      .replace("{noun}", `<strong>${noun}</strong>`)
      .replace("{adjective}", `<strong>${adjective}</strong>`)
      .replace("{verb}", `<strong>${verb}</strong>`)
      .replace("{place}", `<strong>${place}</strong>`);
  };
  return (
    <div className="madlibs-story">
      <p dangerouslySetInnerHTML={{ __html: getRandomMadLib() }}></p>
    </div>
  );
}

export default MadLibsStory;
