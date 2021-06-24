
/**
 * This is the class used to create table tennis racket objects
 * Inherits from Racket class
 *  Exported to other files
 * @class
 */
 class TableTennisRacket extends Racket {
 
   /**
   * This function is the constructor function for a table tennis racket object. 
   * @constructor
   *  @param {string} name - This is the initial (Will be a public instance variable from the parent class)
   * @param {int} price - This is the initial price of the racket in dollars (Will be a public instance variable from the parent class)
   * @param {int} weight - This is the initial weight of the racket measured in grams (Will be a public instance variable from the parent class)
   *  @param {int} stock - number of items in stock. (Will be a public variable form parent class)
   * @param {int} numberOfRubberLayers - Number of rubber grips bring added to the racket. 
   * @param {int} thickness -  Thickness of the racket. Distance between forehad and backhand.(Will be a public variable form parent class)
   *
   */
  constructor(name, price, weight, stock,numberOfRubberLayers, thickness=25){
    super(name, price, weight, stock);
    this.numberOfRubberLayers= numberOfRubberLayers;
    this.thickness= thickness; 
    this.thicknessOfTheRubberLayer=5; 
    this.weightOfTheRubberLayer=50
    
   
  }
  /**
   * This function multiplies the number of rubber layers by the thinkness of the rubber layer and adds it to the thickness to update thickness. 
   *@returns {int} newThickness- Thickness with the thickness of rubber pads added.  
   */
  newThickness(){
    var newThickness= this.thickness+ this.thicknessOfTheRubberLayer*this.numberOfRubberLayers
    return newThickness; 
  }
  /**
   * This function multiplies the number of rubber layers by the weight of the rubber layer and adds it to the weight to update weight. 
   * @returns {int} newWeight- Weight with the weight of rubber pads added.  
   */
  applyRubberMass(){
    var newWeight= this.weight+ this.weightOfTheRubberLayer*this.numberOfRubberLayers
    return newWeight; 
}
}


  