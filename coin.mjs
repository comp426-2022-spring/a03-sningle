export { coinFlip, coinFlips, countFlips, flipACoin }

/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
	return (Math.random() > 0.5 ? "heads" : "tails");
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  const flip_array = [];
  var i = 0;
  while (i < flips) {
    flip_array.push(coinFlip())
    i++;
  }
  return flip_array;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  var i = 0;
  var heads = 0;
  var tails = 0;
  while (i < array.length) {
    if (array[i] == "heads") {
      heads++;
    } else {
      tails++;
    }
    i++;
  }
  const final_nums = new Map();
  final_nums.set("tails", tails);
  final_nums.set("heads", heads)
  return final_nums;
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  if (call != "heads" & call != "tails" | call == null) {
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
  } else {
    const flip = coinFlip();
    var result = "";
    if (call == flip) {
      result = "win";
    } else {
      result = "lose";
    }
    const final_results = new Map();
    final_results.set("call", call);
    final_results.set("flip", flip);
    final_results.set("result", result);
    return final_results;
  }
}

/** question of the day: is the autograder up yet? */
