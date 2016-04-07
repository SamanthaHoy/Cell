// Take the string inputs above and calculate:
//
// Who uses the most data?
// Who uses the least data?
// Who uses the most apps?
// Who uses Faceblock?
// Who doesn’t use Faceblock?
// For each person, estimate how much data each app uses. Use the data ratios from our friend at the network.
// var Walter = 'It was 67MB. Is that everything? I’m busy, you know.';
// var Jesse = 'Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.';
// var Saul = 'I think 283MB. That’s what the guy at the store said. I think it means MegaBites.';
// var Gus = 'Around 150MB. I have the receipts if you need more precise figures.';


function getPeople (inputStr1,inputStr2,inputStr3,inputStr4) {
  var inputStr1 = inputStr1.replace( /MB/g, ""); // remove the extra characters
  var inputStr2 = inputStr2.replace( /MB/g, "");
  var inputStr3 = inputStr3.replace( /MB/g, "");
  var inputStr4 = inputStr4.replace( /MB/g, "");
  var inputStr1 = inputStr1.replace(/\. /g,' ').replace(/\,/g,'').replace( /\?/g, "");
  var inputStr2 = inputStr2.replace(/\. /g,' ').replace(/\,/g,'');
  var inputStr3 = inputStr3.replace(/\. /g,' ').replace(/\,/g,'');
  var inputStr4 = inputStr4.replace(/\. /g,' ').replace(/\,/g,'');
  console.log(inputStr1);
  console.log(inputStr2);
  console.log(inputStr3);
  console.log(inputStr4);
  var walter = inputStr1.split(' '); // split
  var jesse = inputStr2.split(' ');
  var saul = inputStr3.split(' ');
  var gus = inputStr4.split(' ');
  console.log(walter);
  console.log(jesse);
  console.log(saul);
  console.log(gus);

  peopleData = [];
  for(var i = 0 ; i < walter.length ; i++) { // isolates the number
    if (!isNaN(walter[i])) {
      // peopleData.push(walter[i]);
      peopleData.push({
        name: 'Walter' ,
        data : Number(walter[i]) });
      // console.log(peopleData);
    } // if
  } // for

// console.log(peopleData);

for(var i = 0 ; i < jesse.length ; i++) { // isolates the number
  if (!isNaN(jesse[i])) {
    // peopleData.push(jesse[i]);
    peopleData.push({
      name: 'Jesse' ,
      data : Number(jesse[i]) });

    // console.log(peopleData);
  } // if
} // for

for(var i = 0 ; i < saul.length ; i++) { // isolates the number
  if (!isNaN(saul[i])) {
    // peopleData.push(saul[i]);
    // peopleData.push(jesse[i]);
    peopleData.push({
      name: 'Saul' ,
      data : Number(saul[i]) });
    // console.log(peopleData);
  } // if
} // for

for(var i = 0 ; i < gus.length ; i++) { // isolates the number
  if (!isNaN(gus[i])) {
    // peopleData.push(gus[i]);
    peopleData.push({
      name: 'Gus' ,
      data : Number(gus[i]) });
    // console.log(peopleData);
  } // if
} // for
console.log(peopleData); // the full map of names and data
console.log('__________________')

// Who uses the most data?

var highestData = 0 ;// initialising
var highestPerson = " " ;//

for (var i = 0 ; i < peopleData.length ; i++) {
  if (peopleData[i].data > highestData) {
     highestData = peopleData[i].data;
     highestPerson = peopleData[i].name;
    //  console.log("peopleData : " + i + "data: " + peopleData[i].data);
    //  console.log("highestPerson :" + highestPerson + "HighestData:" + highestData);
  } // if
} // for
// console.log('__________________')
// console.log("highestPerson : " + highestPerson + " HighestData: " + highestData);
var people = [] ;
people.push({                      // pushes the highest person to a map
  name: highestPerson ,
  data : highestData });
console.log(people);

// Who uses the least data?
var lowestData = peopleData[0].data ;// initialising
var lowestPerson = peopleData[0].name ;//

for (var i = 0 ; i < peopleData.length ; i++) {
  if (peopleData[i].data < lowestData) {
     lowestData = peopleData[i].data;
     lowestPerson = peopleData[i].name;
    //  console.log("peopleData : " + i + "data: " + peopleData[i].data);
    //  console.log("lowestPerson :" + lowestPerson + "lowestData:" + lowestData);
  } // if
} // for
// console.log('__________________')
// console.log("lowestPerson : " + lowestPerson + " lowestData: " + lowestData);
people.push({                      // pushes the highest person to a map
  name: lowestPerson ,
  data : lowestData });
console.log(people); // returning array with the objects for the highest and the lowest
console.log('__________________');
return people ;
} // function

str1 = 'Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.';
str2 = 'Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.';
str3 = 'I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.';
str4 = 'I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.';
function findWhoUsesMostApps(inputStr1,inputStr2,inputStr3,inputStr4,apps) {

var inputStr1 = inputStr1.replace(/\. /g,' ').replace(/\,/g,'');
var inputStr2 = inputStr2.replace(/\. /g,' ').replace(/\,/g,'').replace( /\!/g, "");
var inputStr3 = inputStr3.replace(/\. /g,' ').replace(/\,/g,'');
var inputStr4 = inputStr4.replace(/\. /g,' ').replace(/\,/g,'');
console.log(inputStr1);
console.log(inputStr2);
console.log(inputStr3);
console.log(inputStr4);
var walter = inputStr1.split(' '); // split
var jesse = inputStr2.split(' ');
var saul = inputStr3.split(' ');
var gus = inputStr4.split(' ');
console.log(walter);
console.log(jesse);
console.log(saul);
console.log(gus);

var people = [];
var walterTot = 0 ;
for (var i = 0 ; i < walter.length ; i++) {
  for (var j = 0 ; j < apps.length ; j++){
    if (walter[i] === apps[j]) {
      walterTot++
    } // if
  } // for
} // for
console.log("walterTot:" + walterTot);
people.push({
  name : 'Walter',                   //
  data : walterTot });
console.log(people); //
console.log('__________________');
//
console.log("jesse :" + jesse);

var jesseTot = 0 ;
for (var i = 0 ; i < jesse.length ; i++) {
  for (var j = 0 ; j < apps.length ; j++ ) {
    if (jesse[i] === apps[j]) {
      jesseTot++;
      console.log("i: " + i + " j: " + j + jesse[i] + apps[j] + jesseTot);
    } // if
  } // for
}
console.log("jessetot:" + jesseTot);
people.push({
  name : 'Jesse',                   //
  data : jesseTot });
console.log(people); //
console.log('__________________');


}  // function

var Walter = 'It was 67MB. Is that everything? I’m busy, you know.';
var Jesse = 'Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.';
var Saul = 'I think 283MB. That’s what the guy at the store said. I think it means MegaBites.';
var Gus = 'Around 150MB. I have the receipts if you need more precise figures.';

var People = getPeople (Walter,Jesse,Saul,Gus);
console.log("highestPerson : " + People[0].name + " HighestData: " + People[0].data) ;
console.log('__________________')
console.log("lowestPerson : " + People[1].name + " lowestData: " + People[1].data);

str1 = 'Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.';
str2 = 'Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.';
str3 = 'I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.';
str4 = 'I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.';

allApps = ['LankedOn','Tooter','Faceblock','Instantgam','Snaptalk'];
var mostApps = findWhoUsesMostApps(str1,str2,str3,str4,allApps);
