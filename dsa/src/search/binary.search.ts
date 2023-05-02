export default function binary_search(
  haystack: number[],
  needle: number
): boolean {
  let low = 0,
    high = haystack.length - 1;

  do {
    const mid_point = Math.floor(low + (high - low) / 2);
    const value = haystack[mid_point];

    if (value === needle) {
      return true;
    } else if (value > needle) {
      high = mid_point;
    } else {
      low = mid_point + 1;
    }
  } while (low < high);

  return false;
}
