/**
 * Returns a sample from a Gaussian distribution with the given mean and standard deviation
 * using Box-Muller transform.
 * Source: https://stackoverflow.com/a/36481059/112731
 */
export function gauss(mean = 0, stDev = 1) {
  const u = 1 - Math.random(); //Converting [0,1) to (0,1)
  const v = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  // Transform to the desired mean and standard deviation:
  return z * stDev + mean;
}
