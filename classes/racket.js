/**
 * This class describes the attributes of a Racket 
 * Exported to other files
 * @class
 */
 class Racket {
 
  /**
   * This function is the constructor function for a Racket objects.
   * @constructor
   * @param {int} weight - This is the initial weight of the racket measured in grams (will be a public instance variable)
   * @param {string} name - This is the initial name of the racket (will be a public instance variable)
   * @param {int} price - This is the initial price of the racket in dollars 
   * @param {int} stock - Number of items in stock. 
   
   */
  constructor( name, price, weight, stock) {
    this.name = name;
    this.price = price;
    this.weight= weight;
    this.stock= stock; 
    this.coverIncluded=false; 
  }
  /**
   * This function makes the coverIncluded variable true. 
   * @returns {boolean} this.coverIncluded- Becomes true to show that the racket has a free cover. 
   */
freeCover(){ 
      this.coverIncluded= true; 
      return this.coverIncluded; 
  }
 
}




