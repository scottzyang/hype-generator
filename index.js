const hypeStatements = ["That's badass!", "I'm so proud of you!", "You're kicking ass!", "Killin it as usual!",  "You're the greatest!", "Fuck yeah! Nice work!", "You are so damn cool. Nothing can stop you!"]

function hype(accomplishment) {
  const index = Math.floor(Math.random() * hypeStatements.length)
  const hypeStatement = hypeStatements[index]

  // Replace "I" with "you" (case-insensitive)
  let modifiedSentence = accomplishment.replace(/\bI\b/gi, (match, offset) => {
    // Check if "I" is at the beginning of the sentence
    if (offset === 0) {
      return 'You'; // Capitalize "you"
    } else {
      return 'you';
    }
  });

  // Remove the period at the end of the sentence
  modifiedSentence = modifiedSentence.replace(/\.$/, '');

  return `${modifiedSentence}?!? ${hypeStatement}`
}

module.exports = {
  hype
};

