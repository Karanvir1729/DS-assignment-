
/**
 * This is the class used to create tennis racket objects
 * Inherits from Racket class
 *  Exported to other files
 * @class
 */
 class TennisRacket extends Racket {
 
  /**
   * This function is the constructor function for a Racket object 
   * @constructor
   *  @param {string} name - This is the name of the racket (Will be a public instance variable from the parent classname of the racket)
   * @param {number} price - This is the initial price of the racket in dollars (Will be a public instance variable from the parent class)
   * @param {number} weight - This is the initial weight of the racket measured in grams (Will be a  public instance variable from the parent class)
   * @param {int} stock- Number of items in stock. (Will be a public variable form parent class)
   * @param {int} numberofGrips- Number of grips being added to the racket. (Will be a public variable form parent class)
   * @param {int} discount- discount percentage on the product (public variable)
   * 
   * 
   */
  constructor(name, price, weight, stock, numberofGrips, discount) {
    super(name, price, weight, stock);
    this.discount= discount;
    this.numberofGrips= numberofGrips; 
    this.weightOfTheGrip= 10; 
  }
  /**
   * This function multiplies the number of grips by the weight of the grip  and adds it to the weight of the racket to update weight. 
   * @returns {int} newWeight- Weight of the racket with grips added.  
   */
  applyWeightOfGrips(){ 
    var newWeight= this.weight+ this.weightOfTheGrip*this.numberofGrips;
    return newWeight; 
  }
 /**
   * This function finds the new price of the racket by subtracting the discount percentage. 
   * @returns {float} newPrice- Price with the discount percentage deducted. 
   */
  applyDiscount(){
    var newPrice= (1-this.discount)*this.price;
    return newPrice; 
  }
    
  }


  