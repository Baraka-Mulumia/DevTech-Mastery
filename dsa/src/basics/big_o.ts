function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }
  return sum;
}

sum_char_codes('abc'); // 294

/**
 * Big O Notation - as the input grows, how fast does computation or memory usage grow?
 * 1. Growth with respect to input size
 *  O(n) - linear  - as input grows, computation grows at the same rate
 * There is practical vs theoretical differences
 * Just because N is faster than N^2, doesn't mean practically its always faster for smaller input.
 * Remember, we drop constants. Therefore O(100N) is faster than O(N^2) but practically speaking, you would probably win for some small set of input.
 *
 */

function sum_char_codes_2(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    let charCode = n.charCodeAt(i);

    //capital E
    if (charCode == 69) {
      return sum;
    }

    sum += charCode;
  }
  return sum;
}

sum_char_codes_2('abc'); // 294

/**
 * In BigO we often consider the worst case
 * Especially in interviews (i have never been asked for best, average, and worst case, just worst case).
 * E = 69
 * Therefore any string with E in it will terminate early (unless E is the last item in the list).
 * ITS STILL O(N)
 */

function sum_char_codes_3(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      sum += n.charCodeAt(i);
    }
  }
  return sum;
}

sum_char_codes_3('abc'); // 294
/**
 * O(N^2) - quadratic
 */

function sum_char_codes_4(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      for (let k = 0; k < n.length; k++) {
        sum += n.charCodeAt(i);
      }
    }
  }
  return sum;
}

sum_char_codes_4('abc'); // 294

/**
 * O(N^3) - cubic
 */

/**
 * O(n log n) - linearithmic
 * Quick sort is an example of this
 * Go over n characters, then you have how much you need to do, then you go over n characters you have how much you need to look at
 */

/**
 * O(log n) - logarithmic
 * Binary search is an example of this
 * Half the amount of input you have  to search, but you only need to look at one point at a time
 */

/**
 * O(sqrt(n)) - square root
 */
