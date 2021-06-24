/*
#-----------------------------------------------------------------------------
# Name:        Data Structures Assignment
# Purpose:     To provide an example of inheritance,classes, reading and writing,and sorting algorithms. 
# Author:      Karanvir Khanna 
# Created:     14-Oct-2020
# Updated:     30-Oct-2020
#-----------------------------------------------------------------------------
*/
/*
Sorting complexity analysis:

The built in .sort() is the fastest one. The insertion sort is the second fastest and the bubble sort is the slowest. This can be observed in the runtimes displayed on the html. The bubble sort has the average run time of 265 ms, the insertion sort has the average run time of 85 ms and the built in .sort() has the average run time of 2 ms while sorting a 1.6 mb file. 

The .sort() is the fastest because it uses the quick sort algorithm, which uses the last item as a pivot point to sort through the list by comparing the itmes to the pivot point or the point before them. This process happens in one go, unlike bubble and insertion sort where multiple comparisions need to be made. This can be interpretead as the O(nlogn). This means that to sort an array of 100 objects the quick sort will make 200 iterations.

Bubble sort and insertion sort both have slower run times. Bubble sort is slower than insertion sort because its big O notation is O(n^2) at its average case, which means that to sort 100 objects 1000 iterations would be needed. Whereas, the average notation for insertion is O(n^2) but that is in worst case, the best case can be O(n). This makes insertion sort extremely faster than bubble sort in the scinarios where the objects are mostly sorted.  

Bubble sort is slower than insertion sort because it has to go back to the start to sort each item by comparing it to every item. In insertion sort the algorithm sorts each item by comparing it to the item before it. 

Emperical data at different points: (found by changing the lenth of for loop in the fetch function, which is the number of times it calls createRandomObjects())
72 objects: 
  bubble sort: 1.45  ms 
  Insertion sort: 0.09 ms 
  .sort(): 0.12 ms 

100 objects: 
  bubble sort: 6.7  ms 
  Insertion sort: 0.3 ms 
  .sort(): 0.12 ms 

1000 objects:
  bubble sort: 11.2  ms 
  Insertion sort: 5.3 ms 
  .sort(): 0.5 ms 

10000 objects: 
  bubble sort: 228.2 ms 
  Insertion sort: 88.7 ms 
  .sort(): 4.2 ms 

conclusion: All algorithms run at about the same speed when data size is small. However, as the size increase bubble sort and insertion sort get exponentially slower. 
*/

/*
Complexity analysis for searching:

Binary search combined by built in sort is much faster as comared to the linear search algorithm. The big O notation for it is O(log2n). That means for 100 object the averge is approx. 7 searches or divisions in the worst case. For linear search the big O notaion is O(n), which means that for 100 objects 100 comparisions will be needed in the worst case.  

This is because binary search eliminates a huge chuck of the list everytime it sorts which leaves it with half of the list everytime. In contrast, linear search has to go through evety item until it gets to the item needed. However, if the item is near the begining linear sort is much faster.  The emperical data supports this reasoning. 

Emperical data for run times(found by changing the lenth of for loop in the fetch function, which is the number of times it calls createRandomObjects()): 

100 objects: 
  value searched for: 2332
  linear search: 0.04ms 
  binary search: 0.11ms
  value searched for: 100
  linear search: 0.05ms 
  binary search: 0.0004ms 
1000 objects:
  value searched for: 2332
  linear search: 0.09ms 
  binary search: 0.7ms
  value searched for: 100
  linear search: 0.05ms 
  binary search: 0.02ms 
10000 objects 
  value searched for: 2332
  linear search: 0.07ms 
  binary search: 0.15ms
  value searched for: 100
  linear search: 0.16ms 
  binary search: 0.015ms

conclusion: binary search is faster than linear search until the value entered is not at the begining of the array. This is because binary search starts at the end of the array and linear search starts at the begining of the array. This makes them both fast for different purposes.   
*/

/*
Youtube video questions: 

1. The searches for thick bars on average have a delay of 0.5ms, while the ones with shorter bars have upto 5 ms. Therefore, the one with thicker bars take longer to sort. The ones with thicker bars are also making more comparisions as the red line is more streched there. This is because they sort from the start to the end of each array. 

2. This video gives an auditorial and a visual representation of sorting algorithms. This way it's easier to learn how each algorithm sorts the data.  

3. Having different delays for each algorithms may suggest that there is no difference between the speeds of the algorithms. Additionally, the audio of the video could skew one to think that it somehow contributes to sorting the data. 
*/
/**
   *Sorts by price in assending order using bubble sort. 
   * @param {arary of objects} inputArr -  The array to sort. 
   * 
   * @returns {arary of objects} inputArr- Sorted array. 
*/
function bubbleSortPrice(inputArr){
   let len = inputArr.length;
   var sorted = false
    while (sorted==false){
      sorted  = true
        for (let elementInList = 0; elementInList< len-1; elementInList++) {
            if (inputArr[elementInList].price > inputArr[elementInList + 1].price) {
              sorted = false
              let swapper = inputArr[elementInList];
              inputArr[elementInList] = inputArr[elementInList + 1];
              inputArr[elementInList + 1] = swapper;
            }
      }
    }
    return inputArr;
}
/**
   *Sorts by price in assending order using insertion sort. 
   * @param {arary of objects} inputArr -  The array to sort. 
   * 
   * @returns {arary of objects} inputArr- Sorted array. 
*/
function insertionSortPrice(inputArr) {
    let len = inputArr.length;
        for (let elementOfList = 1; elementOfList < len; elementOfList++) {
            let currentElement = inputArr[elementOfList];
            let elementBeforeTheCurrentElement = elementOfList-1; 
            while (( elementBeforeTheCurrentElement> -1) && (currentElement.price < inputArr[elementBeforeTheCurrentElement].price)) {
                inputArr[elementBeforeTheCurrentElement+1] = inputArr[elementBeforeTheCurrentElement];
                elementBeforeTheCurrentElement--;
            }
            inputArr[elementBeforeTheCurrentElement+1] = currentElement;
        }
    return inputArr;
}
/**
   *Sorts by weight in assending order using insertion sort. 
   * @param {arary of objects} inputArr -  The array to sort. 
   * 
   * @returns {arary of objects} inputArr- Sorted array. 
*/
function insertionSortWeight(inputArr) {
    let len = inputArr.length;
        for (let elementOfList = 1; elementOfList < len; elementOfList++) {
            let currentElement = inputArr[elementOfList];
            let elementBeforeTheCurrentElement = elementOfList-1; 
            while (( elementBeforeTheCurrentElement> -1) && (currentElement.weight < inputArr[elementBeforeTheCurrentElement].weight)) {
                inputArr[elementBeforeTheCurrentElement+1] = inputArr[elementBeforeTheCurrentElement];
                elementBeforeTheCurrentElement--;
            }
            inputArr[elementBeforeTheCurrentElement+1] = currentElement;
        }
    return inputArr;
}
/**
   *Looks for a name in an array of objectsusing linear search. 
   * @param {arary of objects} inputArr -  The array to search from. 
   * @param {string} name -  The name to find. 
   * @returns {int} itemLocation- Location of the item in the array. 
*/

function linearSearchName(inputArr, name) {
  for (var itemLocation=0; itemLocation<inputArr.length; itemLocation++) {
    if (inputArr[itemLocation].name == name) {
      return itemLocation;
    }
  } return null;
}
/**
   *Looks for a weight in an array of objects using linear search. 
   * @param {arary of objects} inputArr -  The array to search from. 
   * @param {int} weight -  The weight of item to find. 
   * @returns {int} itemLocation- Location of the item in the array. 
*/
function linearSearchWeight(inputArr, weight) {
  for (var itemLocation=0; itemLocation<inputArr.length; itemLocation++) {
    if (inputArr[itemLocation].weight == weight) {
      return itemLocation;
    }
  } return -1;
}
/**
   *Looks for a weight in an array of objects using binary. 
   * @param {arary of objects} inputArr -  The array to search from. 
   * @param {int} weight -  The weight of item to find. 
   * @returns {int} i- Location of the item in the array. 
*/
function binarySearchWeight(inputArr, weight){
var lowerBound = 0
var upperBound = inputArr.length-1;

  while(true){
    var median = Math.floor((lowerBound + upperBound) / 2)
    if (inputArr[median].weight > weight){
      upperBound = median;
    } else if (inputArr[median].weight < weight){
      lowerBound = median
    } else {
      return median
    }

    if (Math.abs(lowerBound - upperBound) == 1){
      return -1
    }
  }
}

//console.log(insertionSortWeight([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/**
   *Generates random objects for racket classes
   * @param {string} typeOfRacket -  The type of racket. 
   * @returns {null} - If the string does not mention the sport of racket.
   * @returns {array/ object}- List of parameters for the classes (name, price, weight, stock, and class specific parameters) .  
   */
function createRandomObjects(typeOfRacket){ 
var name= "Random Racket";
var price= Math.round(Math.random()*100);
var weight= Math.round(Math.random()*100);
var stock= Math.round(Math.random()*100);
if (typeOfRacket== "squash"){
  var stringLength= Math.round(Math.random()*100);
  var lengthOfRacket= Math.round(Math.random()*100);
  var stringMass= Math.round(Math.random()*100);
  return [name, price, weight, stock, stringLength, lengthOfRacket, stringMass]
}
else if (typeOfRacket=="tableTennis"){
  var numberOfRubberLayers=Math.round(Math.random()*100);
  var thickness= Math.round(Math.random()*100);
  return [name, price, weight, stock, numberOfRubberLayers, thickness]

}
else if (typeOfRacket=="tennis"){
  var numberOfGrips=Math.round(Math.random()*10);
  var discount= 0.2;
  return [name, price, weight, stock, numberOfGrips, discount]
}
else{
  return null; 
}
}

var listOfRandomObjects=[]
for (var i=0; i<1000; i++){
 
  var randomSquashRacketPram= createRandomObjects("squash")
  var randomSquashRacket= new SquashRacket(randomSquashRacketPram[0]+i, randomSquashRacketPram[1], randomSquashRacketPram[2], randomSquashRacketPram[3], randomSquashRacketPram[4], randomSquashRacketPram[5], randomSquashRacketPram[6])
  listOfRandomObjects.push(randomSquashRacket)
}
listOfRandomObjects.push("uuuu", 25,25,25,25,25,25)
//console.log(listOfRandomObjects[1].name+"djskal")
listOfRandomObjects= insertionSortWeight(listOfRandomObjects)
//console.log(linearSearchName(listOfRandomObjects,"Random Racket1"))
console.log(linearSearchName(listOfRandomObjects, "Random Racket1"));
console.log(binarySearchWeight(listOfRandomObjects,25))
console.log(listOfRandomObjects[binarySearchWeight(listOfRandomObjects,25)])
/**
   *Tests whether the string is of good quality.
   * @param {int} currentFrequency - Frequency of the racket string. 
   * @returns {bool} goodStringQuality- True if string quality is good. False if the string quality is bad. 
   */
function stringQuality(currentFrequency){ 

     if (currentFrequency<0.90 && 0.76<currentFrequency){
       var goodStringQuality=true; 
    }
    else{
      var goodStringQuality= false; 
    }
      return goodStringQuality;       
    
  }
/**
   *Outputs a link of text file with the data given 
   * @param {string} content - data to be saved. 
   * @returns {string} - A link that contains the content (data to be saved) in form of a text file. 
   */
 	function saveFile(content){
		var uriContent = "data:application/octet-stream," + encodeURIComponent(content);
		return "<a href=" + uriContent + " download=\"savedfile.txt\">Here is the download link</a>";
	}
/**
 * Uses the fetch API to get data from the local squash racket text file in form of an array. 
 * Uses the fetched API, creates squash racket objects from it and create random racket function 
 * It updates it in form of a link that shows a menu of squash rackets by filtering the object lists by the price of the racket.
 * 
 */
 
fetch('textFiles/squashRacketFiles.txt')
 .then(response => response.text())
 .then(text => {
   text=text.split('\n')
   text.splice(0, 2)
   //console.log(text.length)
   var listOfSquashRacketObjects=[]
   var textBeingWritten=[]
   var textBeingWrittenSorted=[]
   for (var i = 0; i < text.length; i++){
    let dataFromTextforSquashRackets = text[i].split("---");
    let name = dataFromTextforSquashRackets[0];
    let price = parseInt(dataFromTextforSquashRackets[1]);
    let weight = parseInt(dataFromTextforSquashRackets[2]);
    let stock = parseInt(dataFromTextforSquashRackets[3]);
    let stringLength = parseInt(dataFromTextforSquashRackets[4]);
    let lengthOfRacket = parseInt(dataFromTextforSquashRackets[5]);
    let stringMass = parseInt(dataFromTextforSquashRackets[6]);
    let stringTension = parseInt(dataFromTextforSquashRackets[7]);
    let squashRacket = new SquashRacket(name, price, weight, stock, stringLength, lengthOfRacket, stringMass, stringTension);
    
   listOfSquashRacketObjects.push(squashRacket);
 };
 
 for (var i=0; i<6500; i++){
  var randomSquashRacketPram= createRandomObjects("squash")
  var randomSquashRacket= new SquashRacket(randomSquashRacketPram[0], randomSquashRacketPram[1], randomSquashRacketPram[2], randomSquashRacketPram[3], randomSquashRacketPram[4], randomSquashRacketPram[5], randomSquashRacketPram[6])
  //console.log (randomSquashRacket)
  listOfSquashRacketObjects.push(randomSquashRacket)
}
 //console.log(listOfSquashRacketObjects)
 var budget=window.prompt("What is your budget for the squash rackets?")
 while(isNaN(budget)==true){
   var budget=window.prompt("What is your budget for the squash rackets?")
   /**
    * Removes the items out of budget from the list. 
    */
 }
 var filteredList=listOfSquashRacketObjects.filter(squashRacket => squashRacket.price < budget)
 textBeingWritten.push('\n'+'\n'+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Unsorted items:"+ '\n'+'\n')
 var startingTime=performance.now()
 var sortedListByPrice= bubbleSortPrice(filteredList)
 var finishingTime=performance.now()
 document.getElementById("timeTakenForBubbleSortToSortSquashRacketByPrice").innerHTML =finishingTime-startingTime

 var startingTime=performance.now()
 insertionSortWeight(filteredList)
 var finishingTime=performance.now()
 document.getElementById("timeTakenForInsertionSortToSortSquashRacketByPrice").innerHTML =finishingTime-startingTime
  
  var startingTime=performance.now()
  /**
   * sorts the array of objects by price using the built in sort function. 
   * @pram {object in array} firstElement- Object to compare with the second object. 
   * @pram {object in array} secondElement- Object to compare with the first object. 
   * @returns {array}- array of sorted list
   */
  filteredList.sort((firstElement, secondElement) => {
    return firstElement.price - secondElement.price;
  })
  var finishingTime=performance.now()
  document.getElementById("timeTakenForBuiltInSortToSortSquashRacketByPrice").innerHTML =finishingTime-startingTime


 for (var i = 0; i < filteredList.length; i++){
  //console.log(filteredList[i].stringFrequency())
   var balance=  filteredList[i].balance();
   var qualityOfString=  stringQuality(filteredList[i].stringFrequency())
  textBeingWritten.push('\n'+"Item Number:"+ i+'\n'+ "Name: "+ filteredList[i].name +'\n'+"Price: $"+ filteredList[i].price+"\n"+ "Weight:" + filteredList[i].weight +"\n"+ "Stock:" + filteredList[i].stock + "\n"+"Free Cover: "+ filteredList[i].coverIncluded +"\n"+ "Good quality string (refer to code for calculations): "+ qualityOfString+'\n'+ "balance: "+ balance+ '\n');
 };
  textBeingWrittenSorted.push('\n'+'\n'+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Cheapest to most expensive:"+ '\n'+'\n')
 for (var i = 0; i < sortedListByPrice.length; i++){
 
   var balance=  sortedListByPrice[i].balance();
   var qualityOfString=  stringQuality(sortedListByPrice[i].stringFrequency())
  textBeingWrittenSorted.push('\n'+"Item Number:"+ i+'\n'+ "Name: "+ sortedListByPrice[i].name +'\n'+"Price: $"+ sortedListByPrice[i].price+"\n"+ "Weight:" + sortedListByPrice[i].weight +"\n"+ "Stock:" + sortedListByPrice[i].stock + "\n"+"Free Cover: "+ sortedListByPrice[i].coverIncluded +"\n"+ "Good quality string (refer to code for calculations): "+ qualityOfString+'\n'+ "balance: "+ balance+ '\n');
 };
 document.getElementById("downloadLinkForSquashRacketUnSortedFile").innerHTML = (saveFile(textBeingWritten.join('-------------------------------------------------------------------------------')))
 document.getElementById("downloadLinkForSquashRacketSortedFile").innerHTML = (saveFile(textBeingWrittenSorted.join('-------------------------------------------------------------------------------')))
 });
  /**
 * Uses the fetch API to get data from the local table tennis racket text file in form of an array.
 * Uses the fetched API and creates table tennis racket objects from it and create random racket function 
 * It updates it in form of a link that shows a menu of table tennis rackets by filtering the object lists by the price of the racket.
 * 
 */
  fetch('textFiles/tableTennisRacketFiles.txt')
 .then(response => response.text())
 .then(text => {
   text=text.split('\n')
   text.splice(0, 2)
   //console.log(text.length)
   var listOfTableTennisRacketObjects=[]
   var textBeingWritten=[]
   var itemOfWeight=[]
   for (var i = 0; i < text.length; i++){
     var dataFromTTracketText= text[i].split("---");
     let name = dataFromTTracketText[0];
     let price = parseInt(dataFromTTracketText[1]);
     let weight = parseInt(dataFromTTracketText[2]);
     let stock = parseInt(dataFromTTracketText[3]);
     let numberOfRubberLayers= parseInt(dataFromTTracketText[4]);
     let thickness=parseInt(dataFromTTracketText[4]);
     let tableTennisRacket = new TableTennisRacket(name, price, weight, stock, numberOfRubberLayers, thickness);
    listOfTableTennisRacketObjects.push(tableTennisRacket);
  };
  
  for (var i=0; i<6000; i++){
  var randomTTRacketPram= createRandomObjects("tableTennis")
  var randomTTRacket= new TableTennisRacket(randomTTRacketPram[0], randomTTRacketPram[1], randomTTRacketPram[2], randomTTRacketPram[3], randomTTRacketPram[4])
  //console.log (randomTTRacket)
  listOfTableTennisRacketObjects.push(randomTTRacket)
}
  //console.log(listOfTableTennisRacketObjects)
  var budget=window.prompt("What is your budget for the T.T rackets?")
   while(isNaN(budget)==true){
   var budget=window.prompt("What is your budget for the T.T rackets?")
   }
   var weightOfItem=window.prompt("What would you like the weight to be for the T.T rackets?")
   while(isNaN(weightOfItem)==true){
   var weightOfItem=window.prompt("What would you like the weight to be for the T.T rackets?")
   }
   textBeingWritten.push("!!!!!!!!!!!!!!!!!!Sorted from lightest to heaviest")
   /**
    * Removes the item out of budget
    */
   var filteredList=listOfTableTennisRacketObjects.filter(tableTennisRacket => tableTennisRacket.price < budget)
  var startingTime=performance.now()
  var itemInWeightLocation= linearSearchWeight(filteredList, weightOfItem) 
  var finishingTime=performance.now()
  document.getElementById("timeTakenForLinearSearchToSearchTableTennnisRacket").innerHTML =finishingTime-startingTime
  
  /**
   * sorts the array of objects by weight using the built in sort function. 
   * @pram {object in array} firstElement- Object to compare with the second object. 
   * @pram {object in array} secondElement- Object to compare with the first object. 
   * @returns {array}- array of sorted list
   */
  var startingTime=performance.now()
  filteredList.sort((firstElement, secondElement) => {
    return firstElement.weight - secondElement.weight;
  })
  
  
  var itemInWeightLocation= binarySearchWeight(filteredList, weightOfItem) 
  var finishingTime=performance.now()

    itemOfWeight.push("You asked to find item that weighs exactly:"+ weightOfItem+ " grams")
  
 
  
  document.getElementById("timeTakenForBinarySearchToSearchTableTennnisRacket").innerHTML =finishingTime-startingTime

  console.log(itemInWeightLocation)
  if (itemInWeightLocation!=-1){
  itemOfWeight.push('\n'+"Item Number:"+ i+'\n'+ "Name: "+ filteredList[itemInWeightLocation].name +'\n'+"Price: $"+ filteredList[itemInWeightLocation].price+"\n"+ "Weight:" + filteredList[itemInWeightLocation].weight +"\n"+ "Stock:" + filteredList[itemInWeightLocation].stock + "\n"+"Free Cover: "+ filteredList[itemInWeightLocation].coverIncluded +"\n"+ "Thickness: "+ filteredList[itemInWeightLocation].thickness +"\n");
  }
  else{
  itemOfWeight.push("\n"+ "Nothing in stock...")
  }
   for (var i = 0; i < filteredList.length; i++){
   
   var updatedThickness=  filteredList[i].newThickness();
   var updatedWeight=  filteredList[i].applyRubberMass()
  textBeingWritten.push('\n'+"Item Number:"+ i+'\n'+ "Name: "+ filteredList[i].name +'\n'+"Price: $"+ filteredList[i].price+"\n"+ "Weight:" + filteredList[i].weight +"\n"+ "Stock:" + filteredList[i].stock + "\n"+"Free Cover: "+ filteredList[i].coverIncluded +"\n"+ "Thickness: "+ filteredList[i].thickness +"\n"+ "Weight after adding rubber: "+ updatedWeight+"\n"+ "Thickness after applying rubber: "+ updatedThickness+"\n");
 };
   document.getElementById("downloadLinkTableTennisRacketSortedByWeight").innerHTML = (saveFile(textBeingWritten.join('-------------------------------------------------------------------------------')))
   document.getElementById("itemFoundByWeightOfTableTennisRacket").innerHTML = (saveFile(itemOfWeight))
  
 });
 /**
 * Uses the fetch API to get data from the local  tennis racket text file in form of an array.
 * Uses the fetched API and creates  tennis racket objects from it and create random racket function 
 * It updates it in form of a link that shows a menu of  tennis rackets by filtering the object lists by the price of the racket.
 * 
 */
 fetch('textFiles/tennisRacketFiles.txt')
 .then(response => response.text())
 .then(text => {
   text=text.split('\n')
   text.splice(0, 2)
   //console.log(text.length)
   var listOfTennisRacketObjects=[]
   var textBeingWritten=[]
   for (var i = 0; i < text.length; i++){
     var dataFromTennisRacketText= text[i].split("---");
     let name = dataFromTennisRacketText[0];
     let price = parseInt(dataFromTennisRacketText[1]);
     let weight = parseInt(dataFromTennisRacketText[2]);
     let stock = parseInt(dataFromTennisRacketText[3]);
     let numberOfGrips= parseInt(dataFromTennisRacketText[4]);
     let discount=parseFloat(dataFromTennisRacketText[5]);
     let tennisRacket = new TennisRacket(name, price, weight, stock, numberOfGrips, discount);
     tennisRacket.freeCover()
    listOfTennisRacketObjects.push(tennisRacket);
  };
  for (var i=0; i<20; i++){
  var randomTennisRacketPram= createRandomObjects("tennis")
  var randomTennisRacket= new TennisRacket(randomTennisRacketPram[0], randomTennisRacketPram[1], randomTennisRacketPram[2], randomTennisRacketPram[3], randomTennisRacketPram[4],randomTennisRacketPram[5] )
  //console.log (randomTennisRacket)
  listOfTennisRacketObjects.push(randomTennisRacket)
}
 // console.log(listOfTennisRacketObjects)
  var budget=window.prompt("What is your budget for the tennis rackets?")
   while(isNaN(budget)==true){
   var budget=window.prompt("What is your budget for the tennis rackets?")
   }
   /**
    *Removes items out of budget. 
    */
   var filteredList=listOfTennisRacketObjects.filter(tennisRacket => tennisRacket.price < budget)
   filteredList= insertionSortWeight(filteredList)
   
   for (var i = 0; i < filteredList.length; i++){
   
   var updatedWeight=  filteredList[i].applyWeightOfGrips();
   var updatedPrice=  filteredList[i].applyDiscount()

  textBeingWritten.push('\n'+"Item Number:"+ i+'\n'+ "Name: "+ filteredList[i].name +'\n'+"Price: $"+ filteredList[i].price+"\n"+ "Weight:" + filteredList[i].weight +"\n"+ "Stock:" + filteredList[i].stock + "\n"+"Free Cover: "+ filteredList[i].coverIncluded +"\n"+ "Weight after adding grips: "+ updatedWeight+"\n"+ "Price after applying discount: "+ updatedPrice+"\n");
 };
 (textBeingWritten)
   document.getElementById("downloadLinkTennisRacketSortedByWeight").innerHTML= (saveFile(textBeingWritten.join('-------------------------------------------------------------------------------')))
 });

 

