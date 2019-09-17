export function calcColorFromTitle(title){
  /**
   * Convert the title string to a RGB color.
   * String length -- Red
   *   The shortest title of Chirstie's mysteries is Third Girl at 10 (space included).
   *   The longest title is The Mirror Crack'd from Side to Side at 36.
   *   The generated value of redness (0 ~ 255) depends on where the title length falls in between 10 and 36.
   * Number of words -- Green
   *   More words more green.
   * Number of vows -- Blue
   *   More vows more blue.
   */
  if (typeof title != 'string') {
    throw new Error('Parameter is not a string!');
  }
  let r, g, b = 0;

  r = Math.min(Math.floor(title.length / 40 * 255), 255);

  const wordCount = title.split(' ').length;
  g = Math.min(Math.floor(wordCount / 8 * 255), 255);

  // Get the number of vows in the title string.
  const matches = title.match(/[aeiou]/ig);
  if (matches != null) {
    b = Math.min(Math.floor(matches.length / 15 * 255), 255);    
  }

  return `rgb(${r}, ${g}, ${b})`;   
}