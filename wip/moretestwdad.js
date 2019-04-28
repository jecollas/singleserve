//my dads the best


// var id defined,
var zap = "300";
writeln(zap);

// state of a variable, it doesnt have a value. its a special value
var zap = "undefined";
writeln(zap);

// this is undefined bc the var is not defined
var zap;
writeln(zap);


/**/


// 0 is like undefined in some cases
var arr = [0, undefined];
writeln(arr[1]); // references undefined, not 0

var z1 = 303; // integer is a whole number
var z2 = 2.30; // floating value = has a decimal
var z3 = "hello"; // a string has " ", this is a string
var z4 = [] // this is an array

var z5 = [0, "hello", 3.40]; // array
writeln(z5[2]); // this would pull 3.4

var z6 = [0, "hello", 3.40, [1, 2]];
writeln(z6[3]); // this would pull [1, 2]


/**/


var race = [0, 2, 4, 13, 403, 403, 4509]; // this is an array of integers
writeln(race.length); // use this function to find the length of a lengthy var

// for is a construct that allow you to start with an initial condition (0), so as long as value i(=0) is less than race.length, itll be fine. i++ increment i by one
for(var i=0; i < race.length; i++) {
  writeIn(race[i]);
} // race[i] will always get the next element of race

// works the same as
writeln(race[0]);
writeln(race[1]);
// etc.

// we dont use strings to index to an array because it doesnt work
writeln(race["hello"]); // hello becomes defined
writeln(race[1]);

// an array is a list of anything, is is ordered. They don't all have to be the same kind of thing


/**/


var stats = [ // this is an array of two dictionaries
{ "key": 20},
{ "key": 40}
];

for(var i=0; i < stats.length; i++) {
  writeln(race[i])
  // this doesnt get much, you get [object Object]

for(var i=0; i < stats.length; i++) {
  writeln(stats[i]["key"]);
}
// this is the same as below. theyre statements

for(var i=0; i < stats.length; i++) {
  var stat = stats[i];
  writeln(stats["key"]);
}

writeln(i)
// everything in this bracket is called a block

writeln(stats.length);
//this would return as 2
//referencing things, counting starts as zero
//length will always be how many things


/**/


writeln(1 + 2); // expression

var a = true;
var b = true;

writeln(a && b); // if a is true and b is true
writeln(a == true && b == false); // this brings up nothing, false is the same as undefined

var a = false;
var b = false;

writeln(a == true || b == true)
var c = (a && b);
writeln(c); // returns as undefined because

var a = true;
var b = false;

writeln(a == true && b == false); // this returns as true

// && means 'and'
// == means 'and'
// || means 'or'


/**/


var stats = {
  "chr": 20,
  "dex": 14,
  "str": 3,
  "con": 31
}; // this is a dictionary


writeln(stats["con"]); // this is a reference to con in dictionary, would be returned as 31

var con = "str" // would return con as 3 (str)


writeln(Object.keys(stats));
// returns [chr, dex, str, con]
writeln(Object.value(stats));
// returns [20, 14, 3, 31]

writeln(Math.max(Object.values(stats)));
// returns 31

// get the maximum value's key (characteristic)
var max = 0;
var maxKey = "";
for(var key in stats) {
  if (stats[key] > max) {
    max = stats[key];
    maxKey = key;
  }
}

writeln(maxKey); // returns as 31 and con

// I know the right key name
// maxKey has the highest values

var rightVal = stats[rightKey]; // thats gonna be maxKey
var maxVal = stats[rightKey];
stats[maxVal] = rightVal;
stats[rightKey] = maxVal;

// or

var maxVal = stat[maxKey];
stats[maxKey] = stats[rightKey];
stats[rightKey] = maxVal;

// this should solve it!!


/**/


// get the max of an array of numbers
var nums = [2, 3, 4, 5, 6, 7, 3, 3003];
writeln(Math.max(nums));

var maxv = Math.max(nums);
writeln(maxv);
