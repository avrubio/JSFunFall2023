const place = "New Jersey"; // e.g.

/**
 * Create a variable called "newPlace". It should use "place" above and it should be equal to the last part of a place name.
 * This should still work when place is equal to a different city, like "New Mexico" or "San Diego".
 *
 * @example
 * If "place" is equal to "New Jersey",
 * "newPlace" should equal "Jersey"
 *
 * If "place" is equal to "New Mexico",
 * "newPlace" should equal "Mexico"
 *
 * If "place" is equal to "San Diego",
 * "newPlace" should equal "Diego"
 */

// WRITE YOUR ANSWER BELOW THIS LINE
const index = place.indexOf(" ");
const newPlace = place.substring(index + 1);
const myString = "i'm typing with out autocapitalize";
const newString = myString[0].toUpperCase() + myString.substring(1);
console.log(newString);