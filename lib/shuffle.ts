/**
 * Fisher-Yates (aka Knuth) Shuffle.
 * Source: https://stackoverflow.com/a/2450976/1105860
 */
export function shuffle<T>(array: T[]) {
  performance.mark("shuffle-start");
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
