
var race = [
  'Black Dragonborn',
  'Blue Dragonborn',
  'Brass Dragonborn',
  'Bronze Dragonborn',
  'Copper Dragonborn',
  'Gold Dragonborn',
  'Green Dragonborn',
  'Red Dragonborn',
  'Silver Dragonborn',
  'White Dragonborn',
  'Dwarf',
  'Hill Dwarf',
  'Mountain Dwarf',
  'Elf',
  'High Elf',
  'Wood Elf',
  'Drow',
  'Gnome',
  'Forest Gnome',
  'Rock Gnome',
  'Half Elf',
  'Half Orc',
  'Halfling',
  'Lightfoot Halfling',
  'Stout Halfling',
  'Human',
  'Tiefling'
];

var gender = [
  'Male',
  'Female',
  'Nonbinary'
];

var job = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard'
];

var alignment = [
  'Lawful Good',
  'Lawful Neutral',
  'Lawful Evil',
  'Neutral Good',
  'True Neutral',
  'Neutral Evil',
  'Chaotic Good',
  'Chaotic Neutral',
  'Chaotic Evil'
];

var background = [
  'Acolyte',
  'Charlatan',
  'Criminal',
  'Entertainer',
  'Folk Hero',
  'Guild Artisan',
  'Hermit',
  'Noble',
  'Outlander',
  'Sage',
  'Sailor',
  'Soldier',
  'Urchin'
];

var sheetGen = {
  "race": race,
  "gender": gender,
  "job": job,
  "alignment": alignment,
  "background": background
}

function random(maxNum){
  return Math.floor(Math.random() * (maxNum));
}

function d3Random() {
  return random(6) + random(6) + random(6) + 3;
}

function randomString(strings) {
  var randomNumber = random(strings.length);
  return strings[randomNumber]
}

function newChar() {
  var race = randomString(sheetGen["race"])
  document.getElementById('raceDisplay').innerHTML = race;

  var gender = randomString(sheetGen["gender"])
  document.getElementById('genderDisplay').innerHTML = gender;

  var job = randomString(sheetGen["job"])
  document.getElementById('jobDisplay').innerHTML = job;

  var alignment = randomString(sheetGen["alignment"])
  document.getElementById('alignmentDisplay').innerHTML = alignment;

  var background = randomString(sheetGen["background"])
  document.getElementById('backgroundDisplay').innerHTML = background;

  var str = d3Random()
  document.getElementById('strength').innerHTML = str;
  var dex = d3Random()
  document.getElementById('dexterity').innerHTML = dex;
  var con = d3Random()
  document.getElementById('constitution').innerHTML = con;
  var int = d3Random()
  document.getElementById('intelligence').innerHTML = int;
  var wis = d3Random()
  document.getElementById('wisdom').innerHTML = wis;
  var cha = d3Random()
  document.getElementById('charisma').innerHTML = cha;
}
