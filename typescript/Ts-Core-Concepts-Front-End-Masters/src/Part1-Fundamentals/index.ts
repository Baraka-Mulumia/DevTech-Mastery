/**
 * Create a  promise that resolves after "ms" Milliseconds
 */
function timeout(n: number) {
  return new Promise((resolve) => setTimeout(resolve, n));
}

export async function addNumbers(a: number, b: number) {
  await timeout(1000);
  return a + b;
}

(async () => {
  console.log(await addNumbers(1, 2));
})();
