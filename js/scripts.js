// Business Socks [Logic]

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++;
  }
  });
  return wordCount;
}


function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
  if (element.toLowerCase().includes(word.toLowerCase)) {
    wordCount++
  }
});
  return wordCount;
}

console.log(numberOfOccurrencesInText("red", "Red! Red. I like red, green, and yellow."));


console.log(wordCounter("wat is why"));

// UI Logic

$(document).ready(function() {
  $("form#wordCounter").submit(function(event) {
    event.preventDefault();
    const passage = $("#textPassage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#totalCount").html(wordCount);
    $("#selectedCount").html(occurrencesOfWord);
  });
});

