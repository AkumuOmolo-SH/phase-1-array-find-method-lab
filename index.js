const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function superbowlWin(recordArray) {
  const winRecord = recordArray.find(function(game) {
    return game.result === "W";
  });
  return winRecord ? winRecord.year : undefined;
}

