var ready = function(fn) {
  if (typeof fn !== 'function') return;
  if (document.readyState === 'complete') {
    return fn();
  }
  document.addEventListener( 'DOMContentLoaded', fn, false );
};

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
        'Tiefling',

        'Aarakocra',
        'Aasimar',
        'Fallen Aasimar',
        'Protector Aasimar',
        'Scourge Aasimar',
        'Bugbear',
        'Centaur',
        'Changeling',
        'Duergar Dwarf',
        'Eladrin Elf',
        'Pallid Elf',
        'Sea Elf',
        'Shadar-kai Elf',
        'Firbolg',
        'Genasi',
        'Air Genasi',
        'Earth Genasi',
        'Fire Genasi',
        'Water Genasi',
        'Gith',
        'Githyanki Gith',
        'Githzerai Gith',
        'Deep Gnome',
        'Goblin',
        'Goliath',
        'Ghostwise Halfling',
        'Lotusden Halfling',
        'Hobgoblin',
        'Kalashtar',
        'Kenku',
        'Kobold',
        'Leonin',
        'Lizardfolk',
        'Loxodon',
        'Minotaur',
        'Orc',
        'Satyr',
        'Shifter',
        'Beasthide Shifter',
        'Longtooth Shifter',
        'Swiftstride Shifter',
        'Wildhunt Shifter',
        'Simic Hybrid',
        'Tabaxi',
        'Asmodeus Tiefling',
        'Baalzebul Tiefling',
        'Dispater Tiefling',
        'Fierna Tiefling',
        'Glasya Tiefling',
        'Levistus Tiefling',
        'Mammon Tiefling',
        'Mephistopheles Tiefling',
        'Zariel Tiefling',
        'Triton',
        'Vedalken',
        'Verdan',
        'Warforged',
        'Yuan-ti Pureblood'
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

var religion = [
        'Auril, Goddess of Winter (NE)',
        'Azuth, God of Wizards (LN)',
        'Bane, God of Tyranny (LE)',
        'Beshaba, Goddess of Misfortune (CE)',
        'Bhaal, God of Murder (NE)',
        'Chauntea, Goddess of Agriculture (NG)',
        'Cyric, God of Lies (CE)',
        'Deneir, God of Writing (NG)',
        'Eldath, Goddess of Peace (NG)',
        'Gond, God of Craft (N)',
        'Helm, God of Protection (LN)',
        'Ilmater, God of Endurance (LG)',
        'Kelemvor, God of the Dead (LN)',
        'Lathander, God of Birth and Renewal (NG)',
        'Leira, Goddess of Illusion (CN)',
        'Lliira, Goddess of Joy (CG)',
        'Loviatar, Goddess of Pain (LE)',
        'Malar, God of the Hunt (CE)',
        'Mask, God of Thieves (CN)',
        'Mielikki, Goddess of Forests (NG)',
        'Milil, God of Poetry and Song (NG)',
        'Myrkul, God of Death (NE)',
        'Mystra, Goddess of Magic (NG)',
        'Oghma, God of Knowledge (N)',
        'Savras, God of Divination and Fate (LN)',
        'Selûne, Goddess of the Moon (CG)',
        'Shar, Goddess of Darkness and Loss (NE)',
        'Silvanus, God of Wild Nature (N)',
        'Sune, Goddess of Love and Beauty (CG)',
        'Talona, Goddess of Disease and Poison (CE)',
        'Talos, God of Storms (CE)',
        'Tempus, God of War (N)',
        'Torm, God of Courage and Self-Sacrifice (LG)',
        'Tymora, Goddess of Good Fortune (CG)',
        'Tyr, God of Justice (LG)',
        'Umberlee, Goddess of the Sea (CE)',
        'Waukeen, Goddess of Trade (N)',

        'Beory, Goddess of Nature (N)',
        'Boccob, God of Magic (N)',
        'Celestian, God of Stars and Wanderers (N)',
        'Ehlonna, Goddess of Woodlands (NG)',
        'Erythnul, God of Envy and Slaughter (CE)',
        'Fharlanghn, God of Horizons and Travel (NG)',
        'Heironeous, God of Chivalry and Valor (LG)',
        'Hextor, God of War and Discord (LE)',
        'Kord, God of Athletics and Sport (CG)',
        'Incabulos, God of Plague and Famine (NE)',
        'Istus, Goddess of Fate and Destiny (N)',
        'Iuz, God of Pain and Oppression (CE)',
        'Nerull, God of Death (NE)',
        'Obad-Hai, God of Nature (N)',
        'Olidammara, God of Revelry (CN)',
        'Pelor, God of the Sun and Healing (NG)',
        'Pholtus, God of Light and Law (LG)',
        'Ralishaz, God of Ill Luck and Insanity (CN)',
        'Rao, God of Peace and Reason (LG)',
        'St. Cuthbert, God of Common Sense and Zeal (LN)',
        'Tharizdun, God of Eternal Darkness (CE)',
        'Trithereon, God of Liberty and Retribution (CG)',
        'Ulaa, Goddess of Hills and Mountains (LG)',
        'Vecna, God of Evil Secrets (NE)',
        'Wee Jas, Goddess of Magic and Death (LN)',

        'Paladine, God of Rulers and Guardians (LG)',
        'Branchala, God of Music (NG)',
        'Habbakuk, God of Animal Life and the Sea (NG)',
        'Kiri-Jolith, God of Honor and War (LG)',
        'Majere, God of Meditation and Order (LG)',
        'Mishakal, Goddess of Healing (LG)',
        'Solinari, God of Good Magic (LG)',

        'Gilean, God of Knowledge (N)',
        'Chislev, Goddess of Nature (N)',
        'Reorx, God of Craft (N)',
        'Shinare, Goddess of Wealth and Trade (N)',
        'Sirrion, God of Fire and Change (N)',
        'Zivilyn, God of Wisdom (N)',
        'Lunitari, Goddess of Neutral Magic (N)',

        'Takhisis, Goddess of Night and Hatred (LE)',
        'Chemosh, God of the Undead (LE)',
        'Hiddukel, God of Lies and Greed (CE)',
        'Morgion, God of Disease and Secrecy (NE)',
        'Sargonnas, God of Vengeance and Fire (LE)',
        'Zaboim, Goddess of the Sea and Storms (CE)',
        'Nuitari, God of Evil Magic (LE)',

        'Arawai, Goddess of Fertility (NG)',
        'Aureon, God of Law and Knowledge (LN)',
        'Balinor, God of Beasts and the Hunt (N)',
        'Boldrei, Goddess of Community and Home (LG)',
        'Dol Arrah, Goddess of Sunlight and Honor (LG)',
        'Dol Dorn, God of Strength at Arms (CG)',
        'Kol Korran, God of Trade and Wealth (N)',
        'Olladra, Goddess of Good Fortune (NG)',
        'Onatar, God of Craft (NG)',

        'The Devourer, God of Nature/s Wrath (NE)',
        'The Fury, Goddess of Wrath and Madness (NE)',
        'The Keeper, God of Greed and Death (NE)',
        'The Mockery, God of Violence and Treachery (NE)',
        'The Shadow, God of Dark Magic (CE)',
        'The Traveler, Deity of Chaos and Change (CN)',

        'The Silver Flame, Diety of Protection and Good (LG)',
        'The Blood of Vol, Philosophy of Immortality and Undeath (LN)',
        'Cults of the Dragon Below, Deities of Madness (NE)',
        'The Path of Light, Philosophy of Light and Self-Improvement (LN)',
        'The Undying Court, Elven Ancestors (NG)',
        'The Spirits of the PAst, Elven Ancestors (CG)',

        'Bahamut, Dragon God of Good (LG)',
        'Blibdoolpoolp, Kuo-Toa Goddess (NE)',
        'Corellon Larethian, Elf Deity of Art and Magic (CG)',
        'Deep Sashelas, Elf God of the Sea (CG)',
        'Eadro, Merfolk Deity of the Sea (N)',
        'Garl Glittergold, Gnome God of Trickery and Wiles (LG)',
        'Grolantor, Hill Giant God of War (CE)',
        'Gruumsh, Orc God of Storms and War (CE)',
        'Hruggek, Bugbear God of Violence (CE)',
        'Kurtulmak, Kobold God of War and Mining (LE)',
        'Laogzed, Troglodyte God of Hunger (CE)',
        'Lolth, Drow Goddess of Spiders (CE)',
        'Maglubiyet, Goblinoid God of War (LE)',
        'Moradin, Dwarf God of Creation (LG)',
        'Rillifane Rallathil, Wood Elf God of Nature (CG)',
        'Sehanine Moonbow, Elf Goddess of the Moon (CG)',
        'Sekolah, Sahuagin God of the Hunt (LE)',
        'Semuanya, Lizardfolk Deity of Survival (N)',
        'Skerrit, Centaur and Satyr God of Nature (N)',
        'Skoraeus Stonebones, God of Stone Giants and Art (N)',
        'Surtur, God of Fire Giants and Craft (LE)',
        'Thrym, God of Frost Giants and Strength (CE)',
        'Tiamat, Dragon Goddess of Evil (LE)',
        'Yondalla, Halfling Goddess of Fertility and Protection (LG)',

        'The Daghdha, God of Weather and Crops (CG)',
        'Arawn, God of Life and Death (NE)',
        'Belenus, God of Sun, Light, and Warmth (NG)',
        'Brigantia, Goddess of Rivers and Livestock (NG)',
        'Diancecht, God of Medicine and Healing (LG)',
        'Dunatis, God of Mountains and Peaks (N)',
        'Goibhnui, God of Smiths and Healing (NG)',
        'Lugh, God of Arts, Travel, and Commerce (CN)',
        'Manannan mac Lir, God of Oceans and Sea Creatures (LN)',
        'Math Mathonwy, God of Magic (NE)',
        'Morrigan, Goddess of Battle (CE)',
        'Nuada, God of War and Warriors (N)',
        'Oghma, God of Speech and Writing (NG)',
        'Silvanus, God of Nature and Forests (N)',

        'Zeus, God of the Sky and Ruler of the Greek Pantheon (N)',
        'Aphrodite, Goddess of Love and Beauty (CG)',
        'Apollo, God of Light, Music, and Healing (CG)',
        'Ares, God of War and Strife (CE)',
        'Artemis, Goddess of Hunting and Childbirth (NG)',
        'Athena, Goddess of Wisdom and civilization (LG)',
        'Demeter, Goddess of Agriculture (NG)',
        'Dionysus, God of Mirth and Wine (CN)',
        'Hades, God of the Underworld (LE)',
        'Hecate, Goddess of Magic and the Moon (CE)',
        'Hephaestus, God of Smithing and Craft (NG)',
        'Hera, Goddess of Marriage and Intrigue (CN)',
        'Hercules, God of Strength and Adventure (CG)',
        'Hermes, God of Travel and Commerce (CG)',
        'Hestia, Goddess of Home and Family (NG)',
        'Nike, Goddess of Victory (LN)',
        'Pan, God of Nature (CN)',
        'Poseidon, God of the Sea and Earthquakes (CN)',
        'Tyche, Goddess of Good Fortune (N)',

        'Re-Horakhty, God of the Sun, Ruler of the Egyptian Pantheon (LG)',
        'Anubis, God of Judgement and Death (LN)',
        'Apep, God of Evil, Fire, and Serpents (NE)',
        'Bast, Goddess of Cats and Vengeance (CG)',
        'Bes, God of Luck and Music (CN)',
        'Hathor, Goddess of Love, Music, and Motherhood (NG)',
        'Imhotep, God of Crafts and Medicine (NG)',
        'Isis, Goddess of Fertility and Magic (NG)',
        'Nephthys, Goddess of Death and Grief (CG)',
        'Osiris, God of Nature and the Underworld (LG)',
        'Ptah God of Crafts, Knowledge, and Secrets (LN)',
        'Set, God of Darkness and Desert Storms (CE)',
        'Sobek, God of Water and Crocodiles (LE)',
        'Thoth, God of Knowledge and Wisdom (N)',

        'Odin, God of Knowledge and War (NG)',
        'Aegir, God of the Sea and Storms (NE)',
        'Balder, God of Beauty and Poetry (NG)',
        'Forseti, God of Justice and Law (N)',
        'Fre, God of Fertility and the Sun (NG)',
        'Freya, Goddess of Fertility and Love (NG)',
        'Frigga, Goddess of Birth and Fertility (N)',
        'Heimdall, God of Watchfulness and Loyalty (LG)',
        'Hel, Goddess of the Underworld (NE)',
        'Hermod, God of Luck (CN)',
        'Loki, God of Thieves and Trickery (CE)',
        'Njord, God of Sea and Wind (NG)',
        'Odur, God of Light and the Sun (CG)',
        'Sif, Goddess of War (CG)',
        'Skadi, God of Earth and Mountains (N)',
        'Surtur, God of Fire Giants and War (LE)',
        'Thor, God of Storms and Thunder (CG)',
        'Thry, God of Fire Giants and Cold (CE)',
        'Tyr, God of Courage and Strategy (LN)',
        'Uller, God of Hunting and Winter (CN)'
    ];

var sheetGen = {
        "race": race,
        "gender": gender,
        "job": job,
        "alignment": alignment,
        "background": background,
        "religion": religion
    };

function random(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

function d3Random() {
    return random(6) + random(6) + random(6) + 3;
}

function newStats() {
  var str = d3Random();
  var dex = d3Random();
  var con = d3Random();
  var int = d3Random();
  var wis = d3Random();
  var cha = d3Random();

  var stats = {
      "str": str,
      "dex": dex,
      "con": con,
      "int": int,
      "wis": wis,
      "cha": cha
};

return stats;
}

function randomString(strings) {
    var randomNumber = random(strings.length);
    return strings[randomNumber];
}

// returns the key with the highest value
function maxStatsKey(stats) {
   var max = 0;
   var maxKey = "";
   for(var key in stats) {
     if (stats[key] > max) {
       max = stats[key];
       maxKey = key;
     }
   }

  return maxKey;
}

function switchJobs(stats, key1, key2) {
  var val1 = stats[key1];
  stats[key1] = stats[key2];
  stats[key2] = val1;

  return stats;
}

function newChar() {

        var stats = newStats();

        race = randomString(sheetGen["race"]);
        document.getElementById('raceDisplay').innerHTML = race;

        switch (race) {
        case 'Dwarf':
            document.getElementById('constitution').innerHTML + 2;
            break;
        case 'Hill Dwarf':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Mountain Dwarf':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('strength').innerHTML + 2;
            break;
        case 'Elf':
            document.getElementById('dexterity').innerHTML + 2;
            break;
        case 'High Elf':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('intelligence').innerHTML + 1;
            break;
        case 'Wood Elf':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Drow':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('charisma').innerHTML + 1;
            break;
        case 'Halfling':
            document.getElementById('dexterity').innerHTML + 2;
            break;
        case 'Lightfoot Halfling':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('charisma').innerHTML + 1;
            break;
        case 'Stout Halfling':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('constitution').innerHTML + 1;
            break;
        case 'Human':
            document.getElementById('strength').innerHTML + 1;
            document.getElementById('dexterity').innerHTML + 1;
            document.getElementById('constitution').innerHTML + 1;
            document.getElementById('intelligence').innerHTML + 1;
            document.getElementById('wisdom').innerHTML + 1;
            document.getElementById('charisma').innerHTML + 1;
            break;
        case 'Black Dragonborn':
        case 'Blue Dragonborn':
        case 'Brass Dragonborn':
        case 'Bronze Dragonborn':
        case 'Copper Dragonborn':
        case 'Gold Dragonborn':
        case 'Green Dragonborn':
        case 'Red Dragonborn':
        case 'Silver Dragonborn':
        case 'White Dragonborn':
            document.getElementById('strength').innerHTML + 2;
            document.getElementById('charisma').innerHTML + 1;
            break;
        case 'Gnome':
            document.getElementById('intelligence').innerHTML + 2;
            break;
        case 'Forest Gnome':
            document.getElementById('intelligence').innerHTML + 2;
            document.getElementById('dexterity').innerHTML + 1;
            break;
        case 'Rock Gnome':
            document.getElementById('intelligence').innerHTML + 2;
            document.getElementById('constitution').innerHTML + 1;
            break;
        case 'Half Elf':
            document.getElementById('charisma').innerHTML + 2;
            break;
        case 'Half Orc':
            document.getElementById('strength').innerHTML + 2;
            document.getElementById('constitution').innerHTML + 1;
            break;
        case 'Tiefling':
            document.getElementById('intelligence').innerHTML + 1;
            document.getElementById('charisma').innerHTML + 2;
            break;

        case 'Aarakocra':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Aasimar':
        case 'Protector Aasimar':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Fallen Aasimar':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('strength').innerHTML + 1;
            break;
        case 'Scourge Aasimar':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('constitution').innerHTML + 1;
            break;
        case 'Bugbear':
            document.getElementById('strength').innerHTML + 2;
            document.getElementById('dexterity').innerHTML + 1;
            break;
        case 'Centaur':
            document.getElementById('strength').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Changeling':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Duergar Dwarf':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('strength').innerHTML + 1;
            break;
        case 'Eladrin Elf':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('intelligence').innerHTML + 1;
            break;
        case 'Pallid Elf':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Sea Elf':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('constitution').innerHTML + 1;
            break;
        case 'Shadar-kai Elf':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('constitution').innerHTML + 1;
            break;
        case 'Firbolg':
            document.getElementById('wisdom').innerHTML + 2;
            document.getElementById('strength').innerHTML + 1;
            break;
        case 'Genasi':
            document.getElementById('constitution').innerHTML + 2;
            break;
        case 'Air Genasi':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('dexterity').innerHTML + 1;
            break;
        case 'Earth Genasi':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('strength').innerHTML + 1;
            break;
        case 'Fire Genasi':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('intelligence').innerHTML + 1;
            break;
        case 'Water Genasi':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Gith':
            document.getElementById('intelligence').innerHTML + 1;
            break;
        case 'Githyanki Gith':
            document.getElementById('strength').innerHTML + 2;
            document.getElementById('intelligence').innerHTML + 1;
            break;
        case 'Githzerai Gith':
            document.getElementById('wisdom').innerHTML + 2;
            document.getElementById('intelligence').innerHTML + 1;
            break;
        case 'Deep Gnome':
            document.getElementById('intelligence').innerHTML + 2;
            document.getElementById('dexterity').innerHTML + 1;
            break;
        case 'Goblin':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('constitution').innerHTML + 1;
            break;
        case 'Goliath':
            document.getElementById('strength').innerHTML + 2;
            document.getElementById('constitution').innerHTML + 1;
            break;
        case 'Ghostwise Halfling':
        case 'Lotusden Halfling':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Hobgoblin':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('intelligence').innerHTML + 1;
            break;
        case 'Kalashtar':
            document.getElementById('wisdom').innerHTML + 2;
            document.getElementById('charisma').innerHTML + 1;
            break;
        case 'Kenku':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Kobold':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('strength').innerHTML - 2;
            break;
        case 'Leonin':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('strength').innerHTML + 1;
            break;
        case 'Lizardfolk':
        case 'Loxodon':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Minotaur':
        case 'Orc':
            document.getElementById('strength').innerHTML + 2;
            document.getElementById('constitution').innerHTML + 1;
            break;
        case 'Satyr':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('dexterity').innerHTML + 1;
            break;
        case 'Beasthide Shifter':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('strength').innerHTML + 1;
            break;
        case 'Longtooth Shifter':
            document.getElementById('strength').innerHTML + 2;
            document.getElementById('dexterity').innerHTML + 1;
            break;
        case 'Swiftstride Shifter':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('charisma').innerHTML + 1;
            break;
        case 'Wildhunt Shifter':
            document.getElementById('wisdom').innerHTML + 2;
            document.getElementById('dexterity').innerHTML + 1;
            break;
        case 'Simic Hybrid':
            document.getElementById('constitution').innerHTML + 2;
            break;
        case 'Tabaxi':
            document.getElementById('dexterity').innerHTML + 2;
            document.getElementById('charisma').innerHTML + 1;
            break;
        case 'Asmodeus Tiefling':
        case 'Baalzebul Tiefling':
        case 'Mammon Tiefling':
        case 'Mephistopheles Tiefling':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('intelligence').innerHTML + 1;
            break;
        case 'Dispater Tiefling':
        case 'Glasya Tiefling':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('dexterity').innerHTML + 1;
            break;
        case 'Fierna Tiefling':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Levistus Tiefling':
        case 'Verdan':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('constitution').innerHTML + 1;
            break;
        case 'Zariel Tiefling':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('strength').innerHTML + 1;
            break;
        case 'Triton':
            document.getElementById('strength').innerHTML + 1;
            document.getElementById('constitution').innerHTML + 1;
            document.getElementById('charisma').innerHTML + 1;
            break;
        case 'Vedalken':
            document.getElementById('intelligence').innerHTML + 2;
            document.getElementById('wisdom').innerHTML + 1;
            break;
        case 'Warforged':
            document.getElementById('constitution').innerHTML + 2;
            document.getElementById('strength').innerHTML + 1;
            break;
        case 'Yuan-ti Pureblood':
            document.getElementById('charisma').innerHTML + 2;
            document.getElementById('intelligence').innerHTML + 1;
            break;
        }

        gender = randomString(sheetGen["gender"]);
        document.getElementById('genderDisplay').innerHTML = gender;

        job = randomString(sheetGen["job"]);
        switch (job) {
        case 'Barbarian':
        case 'Fighter':
            rightKey = "str";
            break;
        case 'Monk':
        case 'Ranger':
        case 'Rogue':
            rightKey = "dex";
            break;
        case 'Wizard':
            rightKey = "int";
            break;
        case 'Cleric':
        case 'Druid':
            rightKey = "wis";
            break;
        case 'Bard':
        case 'Paladin':
        case 'Sorcerer':
        case 'Warlock':
            rightKey = "cha";
            break;
        }

        var maxKey = maxStatsKey(stats);
        stats = switchJobs(stats, rightKey, maxKey);

        document.getElementById('jobDisplay').innerHTML = job;

        alignment = randomString(sheetGen["alignment"]);
        document.getElementById('alignmentDisplay').innerHTML = alignment;

        background = randomString(sheetGen["background"]);
        document.getElementById('backgroundDisplay').innerHTML = background;

        religion = randomString(sheetGen["religion"]);
        document.getElementById('religionDisplay').innerHTML = religion;

    document.getElementById('strength').innerHTML = stats["str"];
    document.getElementById('dexterity').innerHTML = stats["dex"];
    document.getElementById('constitution').innerHTML = stats["con"];
    document.getElementById('intelligence').innerHTML = stats["int"];
    document.getElementById('wisdom').innerHTML = stats["wis"];
    document.getElementById('charisma').innerHTML = stats["cha"];

}
