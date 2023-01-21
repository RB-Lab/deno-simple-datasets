// inspired by https://nnfs.io/

import { gauss } from "./gauss.ts";
import { shuffle } from "./shuffle.ts";

interface Options {
  /** number of samples per class */
  samples: number;
  /** number of classes */
  classes: number;
  /**
   * how much randomness include in data, e.g.:
   * 0 – no randomness, all points are on perfect lines
   * 0.05 – default, some randomness
   * 1 – pretty random, you probably can't classify the data
   **/
  dispersion?: number;
}
export function createVerticalClasses({
  samples,
  classes,
  dispersion = 0.05,
}: Options) {
  const points = [];
  for (let i = 0; i < classes; i++) {
    for (let j = 0; j < samples; j++) {
      const x = gauss(i / classes, dispersion);
      const y = gauss(dispersion * 5, dispersion);
      points.push([x, y, i]);
    }
  }
  const X: [number, number][] = [];
  const y: number[] = [];
  shuffle(points).forEach((point) => {
    X.push([point[0], point[1]]);
    y.push(point[2]);
  });
  return { X, y };
}
