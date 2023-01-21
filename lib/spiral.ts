// inspired by: https://cs231n.github.io/neural-networks-case-study/
// and https://nnfs.io/

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
   * 0.2 – default, some randomness
   * 1 – pretty random, you probably can't classify the data
   **/
  dispersion?: number;
  /** how much twisted the spiral, better set 1, 2 or 3 */
  twist?: number;
}
export function createSpiral({
  samples,
  classes,
  dispersion = 0.2,
  twist = 2,
}: Options) {
  const points = [];
  const angle = (2 * Math.PI) / classes;
  const step = 1 / samples;
  for (let i = 0; i < classes; i++) {
    for (let j = 0; j < samples; j++) {
      const radius = step * j;
      const t = angle * i + radius + gauss(0, dispersion);
      const x = Math.sin(t * twist) * radius;
      const y = Math.cos(t * twist) * radius;
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
