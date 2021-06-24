
/**
 * This is the class used to create squash racket objects
 * Inherits from Racket class
 * Exported to other files
 * @class
 */
class SquashRacket extends Racket {
 
 
  /**
   * This function is the constructor function for a squash racket object 
   * @constructor
   *  @param {string} name - This is the initial (will be a public instance variable from the parent class)
   * @param {int} price - This is the initial price of the racket in dollars (will be a public instance variable from the parent class)
   * @param {int} weight - This is the initial weight of the racket measured in grams (will be a public instance variable from the parent class)
   *  @param {int} stock - number of items in stock. (will be a public variable form parent class)
   * @param {int} stringLength - Length of the string of the racket. (will be a public variable form parent class)
   * @param {int} lengthOfRacket - Length of the racket. (will be a public variable form parent class)
   *@param {int} stringMass - Weight of the squash racket string. (will be a public variable form parent class)
   * @param {int} stringTension - String tension of the racket in newtons. (will be a public variable form parent class)
   */
  constructor( name, price, weight, stock, stringLength, 
  lengthOfRacket,stringMass, stringTension=274) {
    super(name, price, weight, stock);
   this.lengthOfRacket= lengthOfRacket; 
   this.stringTension= stringTension; 
   this.stringMass=stringMass; 
   this.stringLength= stringLength; 
  
  }
  /**
   * This function finds the balance of racket based on the racket length. 
   * @returns {string}- The balance of the racket. (balanced, head light or head heavy) 
   */
   balance(){
    if (this.lengthOfRacket== 340){
    return "Balanced";
    
    
    }
    else if (this.lengthOfRacket< 340){
    return "Head light"
      
    }
    else {
      return "Head heavy"
    }
   
   }
  /**
   * This function finds the frequency of the racket string based on string tension, string mass and string lengh. 
   * @returns {float} frequency- frequency in mega hertz. 
   */

  stringFrequency(){
    var frequency= Math.sqrt(this.stringTension/ (4*this.stringMass* this.stringLength)) 
    return frequency; 
    }

}




  