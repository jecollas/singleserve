var ready = function(fn) {
  if (typeof fn !== 'function') return;
  if (document.readyState === 'complete') {
    return fn();
  }
  document.addEventListener('DOMContentLoaded', fn, false);
};

var race = [
  'Aasimar (Cha +2, Wis +1)',
  'Fallen Aasimar (Cha +2, Str +1)',
  'Protector Aasimar (Cha +2, Wis +1)',
  'Scourge Aasimar (Cha +2, Con +1)',

  'Black Dragonborn (Str +2, Cha +1)',
  'Blue Dragonborn (Str +2, Cha +1)',
  'Brass Dragonborn (Str +2, Cha +1)',
  'Bronze Dragonborn(Str +2, Cha +1)',
  'Copper Dragonborn (Str +2, Cha +1)',
  'Gold Dragonborn (Str +2, Cha +1)',
  'Green Dragonborn (Str +2, Cha +1)',
  'Red Dragonborn (Str +2, Cha +1)',
  'Silver Dragonborn (Str +2, Cha +1)',
  'White Dragonborn (Str +2, Cha +1)',

  'Duergar Dwarf (Con +2, Str +1)',
  'Hill Dwarf (Con +2, Wis +1)',
  'Mountain Dwarf (Con +2, Str +2)',

  'Drow (Dex +2, Cha +1)',
  'Eladrin Elf (Dex +2, Int +1)',
  'High Elf (Dex +2, Int +1)',
  'Pallid Elf (Dex +2, Wis +1)',
  'Sea Elf (Dex +2, Con +1)',
  'Shadar-kai Elf (Dex +2, Con +1)',
  'Wood Elf (Dex +2, Wis +1)',

  'Rune-walker Felikin (Dex +2, Int +1)',
  'Kind-eye Felikin (Dex +2, Cha +1)',
  'Wild-bound Felikin (Dex +2, Wis +1)',

  'Air Genasi (Con +2, Dex +1)',
  'Earth Genasi (Con +2, Str +1)',
  'Fire Genasi (Con +2, Int +1)',
  'Water Genasi (Con +2, Wis +1)',

  'Githyanki Gith (Str +2, Int +1)',
  'Githzerai Gith (Str +2, Int +1)',

  'Deep Gnome (Int +2, Dex +1)',
  'Forest Gnome (Int +2, Dex +1)',
  'Rock Gnome (Int +2, Con +1)',

  'Ghostwise Halfling (Dex +2, Wis +1)',
  'Lightfoot Halfling (Dex +2, Cha +1)',
  'Lotusden Halfling (Dex +2, Wis +1)',
  'Stout Halfling (Dex +2, Con +1)',

  'Human (All stats +1)',
  'Variant Human (Any two unique +1)',

  'Beasthide Shifter (Con +2, Str +1)',
  'Longtooth Shifter (Str +2, Dex +1)',
  'Swiftstride Shifter (Dex +2, Cha +1)',
  'Wildhunt Shifter (Wis +2, Dex +1)',

  'Asmodeus Tiefling (Cha +2, Int +1)',
  'Baalzebul Tiefling (Cha +2, Int +1)',
  'Dispater Tiefling (Cha +2, Dex +1)',
  'Fierna Tiefling (Cha +2, Wis +1)',
  'Glasya Tiefling (Cha +2, Dex +1)',
  'Levistus Tiefling (Cha +2, Con +1)',
  'Mammon Tiefling (Cha +2, Int +1)',
  'Mephistopheles Tiefling (Cha +2, Int +1)',
  'Zariel Tiefling (Cha +2, Str +1)',

  "Variant Tiefling – Devil's Tongue (Dex or Cha +2, Int +1)",
  'Variant Tiefling – Hellfire (Dex or Cha +2, Int +1)',
  'Variant Tiefling – Infernal Legacy (Dex or Cha +2, Int +1)',
  'Variant Tiefling – Winged (Dex or Cha +2, Int +1)',

  'Aarakocra (Dex +2, Wis +1)',
  'Bugbear (Str +2, Dex +1)',
  'Centaur (Str +2, Wis +1)',
  'Changeling (Cha +2, Any other +1)',
  'Firbolg (Wis +2, Str +1)',
  'Goblin (Dex +2, Con +1)',
  'Goliath (Str +2, Con +1)',
  'Half Elf (Cha +2, Any other two unique +1)',
  'Half Orc (Str +2, Con +1)',
  'Hobgoblin (Con +2, Int +1)',
  'Kalashtar (Wis +2, Cha +1)',
  'Kenku (Dex +2, Wis +1)',
  'Kobold (Dex +2, Str -2)',
  'Leonin (Con +2, Str +1)',
  'Lizardfolk (Con +2, Wis +1)',
  'Loxodon (Con +2, Wis +1)',
  'Minotaur (Str +2, Con +1)',
  'Orc (Str +2, Con +1)',
  'Satyr (Cha +2, Dex +1)',
  'Simic Hybrid (Con +2, Any other +1)',
  'Tabaxi (Dex +2, Cha +1)',
  'Triton (Str +1, Con +1, Cha +1)',
  'Vedalken (Int +2, Wis +1)',
  'Verdan (Cha +2, Con +1)',
  'Warforged (Con +2, Any other +1)',
  'Yuan-ti Pureblood (Cha +2, Int +1)'
];

var gender = [
  'Male',
  'Male (trans)',
  'Male (intersex)',
  'Female',
  'Female (trans)',
  'Female (intersex)',
  'Nonbinary',
  'Nonbinary (intersex)',
  'Agender',
  'Genderfluid',
  'Demiboy',
  'Demigirl'
];

var jobs = {
  Barbarian: [
    'Path of the Berserker',
    'Path of the Totem Warrior',
    'Path of the Ancestral Guardian',
    'Path of the Battlerager',
    'Path of the Storm Herald',
    'Path of the Zealot',
    'Path of the Beast',
    'Path of the Wild Soul',
    'Path of the Depths'
  ],
  Bard: [
    'College of Lore',
    'College of Valor',
    'College of Glamour',
    'College of Swords',
    'College of Whispers',
    'College of Shredding',
    'College of Creation'
  ],
  Cleric: [
    'Knowledge Domain',
    'Life Domain',
    'Light Domain',
    'Nature Domain',
    'Tempest Domain',
    'Trickery Domain',
    'War Domain',
    'Arcana Domain',
    'Death Domain',
    'Forge Domain',
    'Grave Domain',
    'Order Domain',
    'Twilight Domain',
    'Unity Domain'
  ],
  Druid: [
    'Circle of the Land',
    'Circle of the Moon',
    'Circle of Dreams',
    'Circle of the Shepherd',
    'Circle of Spores',
    'Circle of the Stars',
    'Circle of Wildfire'
  ],
  Fighter: [
    'Arcane Archer',
    'Battle Master',
    'Cavalier',
    'Champion',
    'Eldritch Knight',
    'Purple Dragon Knight',
    'Samurai',
    'Gunslinger',
    'Psi Knight',
    'Rune Knight',
    'Renegade'
  ],
  Monk: [
    'Way of the Open Hand',
    'Way of Shadow',
    'Way of the Four Elements',
    'Way of the Drunken Master',
    'Way of the Kensei',
    'Way of the Long Death',
    'Way of the Sun Soul',
    'Way of Mercy',
    'Way of the Astral Self'
  ],
  Paladin: [
    'Oath of Devotion',
    'Oath of the Ancients',
    'Oath of Vengeance',
    'Oath of Conquest',
    'Oath of the Crown',
    'Oath of Redemption',
    'Oathbreaker',
    'Oath of the Watchers'
  ],
  Ranger: [
    'Hunter',
    'Beast Master',
    'Gloom Stalker',
    'Horizon Walker',
    'Monster Slayer',
    'Fey Wanderer',
    'Swarmkeeper'
  ],
  Rogue: [
    'Thief',
    'Assassin',
    'Arcane Trickster',
    'Inquisitive',
    'Mastermind',
    'Scout',
    'Swashbuckler',
    'Phantom',
    'Soulknife',
    'Wild Card'
  ],
  Sorcerer: [
    'Draconic Bloodline',
    'Wild Magic',
    'Divine Soul',
    'Shadow Magic',
    'Storm Sorcery',
    'Clockwork Soul',
    'Psionic Soul'
  ],
  Warlock: [
    // do something here so you can randomize the warlock patron and the pact. ex: the archfey, pact of the blade
    'The Archfey',
    'The Fiend',
    'The Great Old One',
    'The Celestial',
    'The Hexblade',
    'The Undying',
    'The Genie',
    'The Lurker in the Deep'
  ],
  Wizard: [
    'School of Abjuration',
    'School of Conjuration',
    'School of Divination',
    'School of Enchantment',
    'School of Evocation',
    'School of Illusion',
    'School of Necromancy',
    'School of Transmutation',
    'Bladeslinger',
    'War Magic',
    'Order of Scribes'
  ],
  Artificer: [
    'Alchemist',
    'Artillerist',
    'Battle Smith'
  ],
  'Blood Hunter': [
    'Order of the Ghostslayer',
    'Order of the Lycan',
    'Order of the Mutant',
    'Order of the Profane Soul'
  ]
};

var job = Object.keys(jobs);

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

var backgrounds = {
  Acolyte: {
    trait: [
      "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
      'I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.',
      'I see omens in every event and action. The gods try to speak to us, we just need to listen.',
      'Nothing can shake my optimistic attitude.',
      'I quote (or misquote) sacred texts and proverbs in almost every situation.',
      'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.',
      "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living rates on me.",
      "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
    ],
    ideal: [
      'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)',
      'Charity. I always try to help those in need, no matter what the personal cost. (Good)',
      'Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)',
      "Power. I hope to one day rise to the top of my faith's religioI trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
      "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"
    ],
    bond: [
      'I would die to recover an ancient relic of my faith that was lost long ago.',
      'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.',
      'I owe my life to the priest who took me in when my parents died.',
      'Everything I do is for the common people.',
      'I will do anything to protect the temple where I served.',
      'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.'
    ],
    flaw: [
      'I judge others harshly, and myself even more severely.',
      "I put too much trust in those who wield power within my temple's hierarchy.",
      'My piety sometimes leads me to blindly trust those that profess faith in my god.',
      'I am inflexible in my thinking.',
      'I am suspicious of strangers and expect the worst of them.',
      'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.'
    ]
  },
  Charlatan: {
    trait: [
      'I fall in and out of love easily, and am always pursuing someone.',
      'I have a joke for every occasion, especially occasions where humor is inappropriate.',
      'Flattery is my preferred trick for getting what I want.',
      "I'm a born gambler who can't resist taking a risk for a potential payoff.",
      "I lie about almost everything, even when there's no reason to.",
      'Sarcasm and insults are my weapons of choice.',
      'I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.',
      'I pocket anything I see that might have some value.'
    ],
    ideal: [
      'Independence. I am a free spirit — no one tells me what to do. (Chaotic)',
      "Fairness. I never target people who can't afford to lose a few coins. (Lawful)",
      'Charity. I distribute the money I acquire to the people who really need it. (Good)',
      'Creativity. I never run the same con twice. (Chaotic)',
      'Friendship. Material goods come and go. Bonds of friendship last forever. (Good)',
      "Aspiration. I'm determined to make something of myself. (Any)"
    ],
    bond: [
      'I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.',
      "I owe everything to my mentor — a horrible person who's probably rotting in jail somewhere.",
      "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
      "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
      "A powerful person killed someone I love. Some day soon, I'll have my revenge.",
      "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
    ],
    flaw: [
      "I can't resist a pretty face.",
      "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
      "I'm convinced that no one could ever fool me the way I fool others.",
      "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
      "I can't resist swindling people who are more powerful than me.",
      "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
    ],
    extra: [
      '<b>Favorite Scam:</b> I cheat at games of chance.',
      '<b>Favorite Scam:</b> I shave coins or forge documents',
      "<b>Favorite Scam:</b> I insinuate myself into people's lives to prey on their weakness and secure their fortunes",
      '<b>Favorite Scam:</b> I put on new identities like clothes.',
      '<b>Favorite Scam:</b> I run sleight-of-hand cons on street corners.',
      '<b>Favorite Scam:</b> I convince people that worthless junk is worth their hard-earned money.'
    ]
  },
  Criminal: {
    trait: [
      'I always have a plan for when things go wrong.',
      '"I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.',
      'The first thing I do in a new place is note the locations of everything valuable — or where such things could be hidden.',
      'I would rather make a new friend than a new enemy.',
      'I am incredibly slow to trust. Those who seem the fairest often have the most to hide.',
      "I don't pay attention to the risks in a situation. Never tell me the odds.",
      "The best way to get me to do something is to tell me I can't do it.",
      'I blow up at the slightest insult.'
    ],
    ideal: [
      "Honor. I don't steal from others in the trade. (Lawful)",
      'Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)',
      'Charity. I steal from the wealthy so that I can help people in need. (Good)',
      'Greed. I will do whatever it takes to become wealthy. (Evil)',
      "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
      "Redemption. There's a spark of good in everyone. (Good)"
    ],
    bond: [
      "I'm trying to pay off an old debt I owe to a generous benefactor.",
      'My ill-gotten gains go to support my family.',
      'Something important was taken from me, and I aim to steal it back.',
      'I will become the greatest thief that ever lived.',
      "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
      'Someone I loved died because of a mistake I made. That will never happen again.'
    ],
    flaw: [
      "When I see something valuable, I can't think about anything but how to steal it.",
      'When faced with a choice between money and my friends, I usually choose the money.',
      "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
      "I have a 'tell' that reveals when I'm lying.",
      'I turn tail and run when things look bad.',
      "An innocent person is in prison for a crime that I committed. I'm okay with that."
    ],
    extra: [
      '<b>Criminal <b>Specialty:</b></b> Blackmailer',
      '<b>Criminal <b>Specialty:</b></b> Burglar',
      '<b>Criminal <b>Specialty:</b></b> Enforcer',
      '<b>Criminal <b>Specialty:</b></b> Fence',
      '<b>Criminal <b>Specialty:</b></b> Highway robber',
      '<b>Criminal <b>Specialty:</b></b> Hired killer',
      '<b>Criminal <b>Specialty:</b></b> Pickpocket',
      '<b>Criminal <b>Specialty:</b></b> Smuggler',
      '<b>Criminal <b>Specialty:</b></b> Spy'
    ]
  },
  Entertainer: {
    trait: [
      'I know a story relevant to almost every situation.',
      'Whenever I come to a new place, I collect local rumors and spread gossip.',
      "I'm a hopeless romantic, always searching for that ''special someone''.",
      'Nobody stays angry at me or around me for long, since I can defuse any amount of tension.',
      'I love a good insult, even one directed at me.',
      "I get bitter if I'm not the center of attention.",
      "I'll settle for nothing less than perfection.",
      'I change my mood or my mind as quickly as I change key in a song.'
    ],
    ideal: [
      'Beauty. When I perform, I make the world better than it was. (Good)',
      'Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)',
      'Creativity. The world is in need of new ideas and bold action. (Chaotic)',
      "Greed. I'm only in it for the money and fame. (Evil)",
      "People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
      'Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)'
    ],
    bond: [
      'My instrument is my most treasured possession, and it reminds me of someone I love.',
      "Someone stole my precious instrument, and someday I'll get it back.",
      'I want to be famous, whatever it takes.',
      "I idolize a hero of the old tales and measure my deeds against that person's.",
      'I will do anything to prove myself superior to my hated rival.',
      'I would do anything for the other members of my old troupe.'
    ],
    flaw: [
      "I'll do anything to win fame and renown.",
      "I'm a sucker for a pretty face.",
      'A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.',
      'I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.',
      'I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.',
      'Despite my best efforts, I am unreliable to my friends.'
    ],
    extra: [
      '<b>Entertainer Routine:</b> Actor',
      '<b>Entertainer Routine:</b> Dancer',
      '<b>Entertainer Routine:</b> Fire-eater',
      '<b>Entertainer Routine:</b> Jester',
      '<b>Entertainer Routine:</b> Juggler',
      '<b>Entertainer Routine:</b> Instrumentalist',
      '<b>Entertainer Routine:</b> Poet',
      '<b>Entertainer Routine:</b> Singer',
      '<b>Entertainer Routine:</b> Storyteller',
      '<b>Entertainer Routine:</b> Tumbler',
      '<b>Entertainer Routine:</b> Gladiator'
    ]
  },
  'Folk Hero': {
    trait: [
      'I judge people by their actions, not their words.',
      "If someone is in trouble, I'm always ready to lend help.",
      'When I set my mind to something, I follow through no matter what gets in my way.',
      'I have a strong sense of fair play and always try to find the most equitable solution to arguments.',
      "I'm confident in my own abilities and do what I can to instill confidence in others.",
      'Thinking is for other people. I prefer action.',
      'I misuse long words in an attempt to sound smarter.',
      'I get bored easily. When am I going to get on with my destiny?'
    ],
    ideal: [
      'Respect. People deserve to be treated with dignity and respect. (Good)',
      'Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)',
      'Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)',
      'Might. If I become strong, I can take what I want — what I deserve. (Evil)',
      "Sincerity. There's no good in pretending to be something I'm not. (Neutral)",
      'Destiny. Nothing and no one can steer me away from my higher calling. (Any)'
    ],
    bond: [
      'I have a family, but I have no idea where they are. One day, I hope to see them again.',
      'I worked the land, I love the land, and I will protect the land.',
      'A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.',
      'My tools are symbols of my past life, and I carry them so that I will never forget my roots.',
      'I protect those who cannot protect themselves.',
      'I wish my childhood sweetheart had come with me to pursue my destiny.'
    ],
    flaw: [
      'The tyrant who rules my land will stop at nothing to see me killed.',
      "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
      'The people who knew me when I was young know my shameful secret, so I can never go home again.',
      'I have a weakness for the vices of the city, especially hard drink.',
      'Secretly, I believe that things would be better if I were a tyrant lording over the land.',
      'I have trouble trusting in my allies.'
    ],
    extra: [
      "<b>Defining Event:</b> I stood up to a tyrant's agents.",
      '<b>Defining Event:</b> I saved people during a natural disaster.',
      '<b>Defining Event:</b> I stood alone against a terrible monster."',
      '<b>Defining Event:</b> I stole from a corrupt merchant to help the poor.',
      '<b>Defining Event:</b> I let a militia to fight off an invading army.',
      "<b>Defining Event:</b> I broke into a tyrant's casle and stole weapons to arm the people.",
      "<b>Defining Event:</b> I trained the peasantry to use farm implements as weapons against a tyrant's soldiers.",
      '<b>Defining Event:</b> A lord rescinded an unpopular decree after I led a symbolic act of protest against it.',
      '<b>Defining Event:</b> A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.',
      "<b>Defining Event:</b> Recruited into a lord's army, I rose to leadership and was commended for my heroism."
    ]
  },
  'Guild Artisan': {
    trait: [
      "I believe that anything worth doing is worth doing right. I can't help it — I'm a perfectionist.",
      "I'm a snob who looks down on those who can't appreciate fine art.",
      'I always want to know how things work and what makes people tick.',
      "I'm full of witty aphorisms and have a proverb for every occasion.",
      "I'm rude to people who lack my commitment to hard work and fair play.",
      'I like to talk at length about my profession.',
      "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
      "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
    ],
    ideal: [
      'Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)',
      'Generosity. My talents were given to me so that I could use them to benefit the world. (Good)',
      'Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)',
      "Greed. I'm only in it for the money. (Evil)",
      "People. I'm committed to the people I care about, not to ideals. (Neutral)",
      'Aspiration. I work hard to be the best there is at my craft. (Any)'
    ],
    bond: [
      'The workshop where I learned my trade is the most important place in the world to me.',
      "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
      'I owe my guild a great debt for forging me into the person I am today.',
      "I pursue wealth to secure someone's love.",
      'One day I will return to my guild and prove that I am the greatest artisan of them all.',
      'I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.'
    ],
    flaw: [
      "I'll do anything to get my hands on something rare or priceless.",
      "I'm quick to assume that someone is trying to cheat me.",
      'No one must ever learn that I once stole money from guild coffers.',
      "I'm never satisfied with what I have — I always want more.",
      'I would kill to acquire a noble title.',
      "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
    ],
    extra: [
      '<b>Guild Business:</b> Alchemists and apothecaries',
      '<b>Guild Business:</b> Armorers, locksmiths, and finesmiths',
      '<b>Guild Business:</b> Brewers, distillers, and vintners',
      '<b>Guild Business:</b> Calligraphers, scribes, and scriveners',
      '<b>Guild Business:</b> Carpenters, roofers, and plasterers',
      '<b>Guild Business:</b> Cartographers, surveryors, and chart-makers',
      '<b>Guild Business:</b> Cobblers and shoemakers',
      '<b>Guild Business:</b> Cooks and bakers',
      '<b>Guild Business:</b> Glassblowers and glaziers',
      '<b>Guild Business:</b> Jewelers and gemcutters',
      '<b>Guild Business:</b> Leatherworkers, skinners, and tanners',
      '<b>Guild Business:</b> Masons and stonecutters',
      '<b>Guild Business:</b> Painters, limners, and sign-makers',
      '<b>Guild Business:</b> Potters and tile-makers',
      '<b>Guild Business:</b> Shipwrights and sailmakers',
      '<b>Guild Business:</b> Smiths and metal-forgers',
      '<b>Guild Business:</b> Tinkers, pewterers, and casters',
      '<b>Guild Business:</b> Wagon-makers and wheelwrights',
      '<b>Guild Business:</b> Weavers and dyers',
      '<b>Guild Business:</b> Woodcarvers, coopers, and bowyers',
      '<b>Guild Business:</b> Merchants, traders, caravan masters, or shopkeepers'
    ]
  },
  Hermit: {
    trait: [
      "I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
      'I am utterly serene, even in the face of disaster.',
      'The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.',
      'I feel tremendous empathy for all who suffer.',
      "I'm oblivious to etiquette and social expectations.",
      'I connect everything that happens to me to a grand, cosmic plan.',
      'I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.',
      'I am working on a grand philosophical theory and love sharing my ideas.'
    ],
    ideal: [
      'Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)',
      'Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)',
      'Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)',
      'Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)',
      'Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)',
      "Self-Knowledge. If you know yourself, there's nothing left to know. (Any)"
    ],
    bond: [
      'Nothing is more important than the other members of my hermitage, order, or association.',
      'I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.',
      "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
      'I entered seclusion because I loved someone I could not have.',
      'Should my discovery come to light, it could bring ruin to the world.',
      'My isolation gave me great insight into a great evil that only I can destroy.'
    ],
    flaw: [
      "Now that I've returned to the world, I enjoy its delights a little too much.",
      'I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.',
      'I am dogmatic in my thoughts and philosophy.',
      'I let my need to win arguments overshadow friendships and harmony.',
      "I'd risk too much to uncover a lost bit of knowledge.",
      "I like keeping secrets and won't share them with anyone."
    ],
    extra: [
      '<b>Life of Seclusion:</b> I was searching for spiritual enlightenment.',
      '<b>Life of Seclusion:</b> I was partaking of communal living in accordance with the dictates of a religious order.',
      "<b>Life of Seclusion:</b> I was exiled for a crime I didn't commit.",
      '<b>Life of Seclusion:</b> I retreated from society after a life-altering event.',
      '<b>Life of Seclusion:</b> I needed a quiet place to work on my art, literature, music, or manifesto.',
      '<b>Life of Seclusion:</b> I needed to commune with nature, far from civilization.',
      '<b>Life of Seclusion:</b> I was the caretaker of an ancient ruin or relic.',
      '<b>Life of Seclusion:</b> I was a pilgrim in search of a person, place, or relic of spiritual significance.'
    ]
  },
  Noble: {
    trait: [
      'My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.',
      'The common folk love me for my kindness and generosity.',
      'No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.',
      'I take great pains to always look my best and follow the latest fashions.',
      "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
      'Despite my noble birth, I do not place myself above other folk. We all have the same blood.',
      'My favor, once lost, is lost forever.',
      'If you do me an injury, I will crush you, ruin your name, and salt your fields.'
    ],
    ideal: [
      'Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)',
      'Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)',
      'Independence. I must prove that I can handle myself without coddling from my family. (Chaotic)',
      'Power. If I can attain more power, no one will tell me what to do. (Evil)',
      'Family. Blood runs thicker than water. (Any)',
      'Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)'
    ],
    bond: [
      'I will face any challenge to win the approval of my family.',
      "My house's alliance with another noble family must be sustained at all costs.",
      'Nothing is more important than the other members of my family.',
      'I am in love with the heir of a family that my family despises.',
      'My loyalty to my sovereign is unwavering.',
      'The common folk must see me as a hero of the people.'
    ],
    flaw: [
      'I secretly believe that everyone is beneath me.',
      'I hide a truly scandalous secret that could ruin my family forever.',
      "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
      'I have an insatiable desire for carnal pleasures.',
      'In fact, the world does revolve around me.',
      'By my words and actions, I often bring shame to my family.'
    ]
  },
  Knight: {
    trait: [
      'My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.',
      'The common folk love me for my kindness and generosity.',
      'No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.',
      'I take great pains to always look my best and follow the latest fashions.',
      "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
      'Despite my noble birth, I do not place myself above other folk. We all have the same blood.',
      'My favor, once lost, is lost forever.',
      'If you do me an injury, I will crush you, ruin your name, and salt your fields.'
    ],
    ideal: [
      'Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)',
      'Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)',
      'Independence. I must prove that I can handle myself without coddling from my family. (Chaotic)',
      'Power. If I can attain more power, no one will tell me what to do. (Evil)',
      'Family. Blood runs thicker than water. (Any)',
      'Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)'
    ],
    bond: [
      'I will face any challenge to win the approval of my family.',
      "My house's alliance with another noble family must be sustained at all costs.",
      'Nothing is more important than the other members of my family.',
      'I am in love with the heir of a family that my family despises.',
      'My loyalty to my sovereign is unwavering.',
      'The common folk must see me as a hero of the people.'
    ],
    flaw: [
      'I secretly believe that everyone is beneath me.',
      'I hide a truly scandalous secret that could ruin my family forever.',
      "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
      'I have an insatiable desire for carnal pleasures.',
      'In fact, the world does revolve around me.',
      'By my words and actions, I often bring shame to my family.'
    ]
  },
  Outlander: {
    trait: [
      "I'm driven by a wanderlust that led me away from home",
      'I watch over my friends as if they were a litter of newborn pups.',
      "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
      'I have a lesson for every situation, drawn from observing nature.',
      "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
      "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
      'I feel far more comfortable around animals than people',
      'I was, in fact, raised by wolves.'
    ],
    ideal: [
      'Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)',
      "Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
      'Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)',
      'Might. The strongest are meant to rule. (Evil)',
      'Nature. The natural world is more important than all the constructs of civilization. (Neutral)',
      'Glory. I must earn glory in battle, for myself and my clan. (Any)'
    ],
    bond: [
      'My family, clan, or tribe is the most important thing in my life, even when they are far from me.',
      'An injury to the unspoiled wilderness of my home is an injury to me.',
      'I will bring terrible wrath down on the evildoers who destroyed my homeland.',
      'I am the last of my tribe, and it is up to me to ensure their names enter legend.',
      'I suffer awful visions of a coming disaster and will do anything to prevent it.',
      'It is my duty to provide children to sustain my tribe.'
    ],
    flaw: [
      'I am too enamored of ale, wine, and other intoxicants.',
      "There's no room for caution in a life lived to the fullest.",
      "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
      'I am slow to trust members of other races, tribes, and societies.',
      'Violence is my answer to almost any challenge.',
      "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
    ],
    extra: [
      '<b>Origin:</b> Forester',
      '<b>Origin:</b> Trapper',
      '<b>Origin:</b> Homesteader',
      '<b>Origin:</b> Guide',
      '<b>Origin:</b> Exile or outcast',
      '<b>Origin:</b> Bounty hunter',
      '<b>Origin:</b> Pilgrim',
      '<b>Origin:</b> Tribal nomad',
      '<b>Origin:</b> Hunter-gatherer',
      '<b>Origin:</b> Tribal marauder'
    ]
  },
  Sage: {
    trait: [
      'I use polysyllabic words that convey the impression of great erudition.',
      "I've read every book in the world's greatest libraries — or I like to boast that I have.",
      "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
      "There's nothing I like more than a good mystery.",
      "I'm willing to listen to every side of an argument before I make my own judgment.",
      'I... speak... slowly... when talking... to idiots,... which... almost... everyone... is... compared... to me.',
      'I am horribly, horribly awkward in social situations.',
      "I'm convinced that people are always trying to steal my secrets."
    ],
    ideal: [
      'Knowledge. The path to power and self-improvement is through knowledge. (Neutral)',
      'Beauty. What is beautiful points us beyond itself toward what is true. (Good)',
      'Logic. Emotions must not cloud our logical thinking. (Lawful)',
      'No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)',
      'Power. Knowledge is the path to power and domination. (Evil)',
      'Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)'
    ],
    bond: [
      'It is my duty to protect my students.',
      'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.',
      'I work to preserve a library, university, scriptorium, or monastery.',
      "My life's work is a series of tomes related to a specific field of lore.",
      "I've been searching my whole life for the answer to a certain question.",
      'I sold my soul for knowledge. I hope to do great deeds and win it back.'
    ],
    flaw: [
      'I am easily distracted by the promise of information.',
      'Most people scream and run when they see a demon. I stop and take notes on its anatomy.',
      'Unlocking an ancient mystery is worth the price of a civilization.',
      'I overlook obvious solutions in favor of complicated ones.',
      'I speak without really thinking through my words, invariably insulting others.',
      "I can't keep a secret to save my life, or anyone else's."
    ],
    extra: [
      '<b>Specialty:</b> Alchemist',
      '<b>Specialty:</b> Astronomer',
      '<b>Specialty:</b> Discredited academic',
      '<b>Specialty:</b> Librarian',
      '<b>Specialty:</b> Professor',
      '<b>Specialty:</b> Researcher',
      "<b>Specialty:</b> Wizard's apprentice",
      '<b>Specialty:</b> Scribe'
    ]
  },
  Sailor: {
    trait: [
      'My friends know they can rely on me, no matter what.',
      'I work hard so that I can play hard when the work is done.',
      'I enjoy sailing into new ports and making new friends over a flagon of ale.',
      'I stretch the truth for the sake of a good story.',
      'To me, a tavern brawl is a nice way to get to know a new city.',
      'I never pass up a friendly wager.',
      'My language is as foul as an otyugh nest.',
      'I like a job well done, especially if I can convince someone else to do it.'
    ],
    ideal: [
      'Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)',
      'Fairness. We all do the work, so we all share in the rewards. (Lawful)',
      'Freedom. The sea is freedom — the freedom to go anywhere and do anything. (Chaotic)',
      "Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)",
      "People. I'm committed to my crewmates, not to ideals. (Neutral)",
      "Aspiration. Someday, I'll own my own ship and chart my own destiny. (Any)"
    ],
    bond: [
      "I'm loyal to my captain first, everything else second.",
      'The ship is most important — crewmates and captains come and go.',
      "I'll always remember my first ship.",
      'In a harbor town, I have a paramour whose eyes nearly stole me from the sea.',
      'I was cheated out of my fair share of the profits, and I want to get my due.',
      'Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.'
    ],
    flaw: [
      "I follow orders, even if I think they're wrong.",
      "I'll say anything to avoid having to do extra work.",
      'Once someone questions my courage, I never back down no matter how dangerous the situation.',
      "Once I start drinking, it's hard for me to stop.",
      "I can't help but pocket loose coins and other trinkets I come across.",
      'My pride will probably lead to my destruction.'
    ]
  },
  Pirate: {
    trait: [
      'My friends know they can rely on me, no matter what.',
      'I work hard so that I can play hard when the work is done.',
      'I enjoy sailing into new ports and making new friends over a flagon of ale.',
      'I stretch the truth for the sake of a good story.',
      'To me, a tavern brawl is a nice way to get to know a new city.',
      'I never pass up a friendly wager.',
      'My language is as foul as an otyugh nest.',
      'I like a job well done, especially if I can convince someone else to do it.'
    ],
    ideal: [
      'Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)',
      'Fairness. We all do the work, so we all share in the rewards. (Lawful)',
      'Freedom. The sea is freedom — the freedom to go anywhere and do anything. (Chaotic)',
      "Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)",
      "People. I'm committed to my crewmates, not to ideals. (Neutral)",
      "Aspiration. Someday, I'll own my own ship and chart my own destiny. (Any)"
    ],
    bond: [
      "I'm loyal to my captain first, everything else second.",
      'The ship is most important — crewmates and captains come and go.',
      "I'll always remember my first ship.",
      'In a harbor town, I have a paramour whose eyes nearly stole me from the sea.',
      'I was cheated out of my fair share of the profits, and I want to get my due.',
      'Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.'
    ],
    flaw: [
      "I follow orders, even if I think they're wrong.",
      "I'll say anything to avoid having to do extra work.",
      'Once someone questions my courage, I never back down no matter how dangerous the situation.',
      "Once I start drinking, it's hard for me to stop.",
      "I can't help but pocket loose coins and other trinkets I come across.",
      'My pride will probably lead to my destruction.'
    ]
  },
  Soldier: {
    trait: [
      "I'm always polite and respectful.",
      "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
      "I've lost too many friends, and I'm slow to make new ones.",
      "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
      'I can stare down a hell hound without flinching.',
      'I enjoy being strong and like breaking things.',
      'I have a crude sense of humor.',
      'I face problems head-on. A simple, direct solution is the best path to success.'
    ],
    ideal: [
      'Greater Good. Our lot is to lay down our lives in defense of others. (Good)',
      'Responsibility. I do what I must and obey just authority. (Lawful)',
      'Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)',
      'Might. In life as in war, the stronger force wins. (Evil)',
      "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
      'Nation. My city, nation, or people are all that matter. (Any)'
    ],
    bond: [
      'I would still lay down my life for the people I served with.',
      'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.',
      'My honor is my life.',
      "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      'Those who fight beside me are those worth dying for.',
      'I fight for those who cannot fight for themselves.'
    ],
    flaw: [
      'The monstrous enemy we faced in battle still leaves me quivering with fear.',
      'I have little respect for anyone who is not a proven warrior.',
      '"I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.',
      'My hatred of my enemies is blinding and unreasoning.',
      'I obey the law, even if the law causes misery.',
      "I'd rather eat my armor than admit when I'm wrong."
    ],
    extra: [
      '<b>Specialty:</b> Officer',
      '<b>Specialty:</b> Scout',
      '<b>Specialty:</b> Infantry',
      '<b>Specialty:</b> Cavalry',
      '<b>Specialty:</b> Healer',
      '<b>Specialty:</b> Quartermaster',
      '<b>Specialty:</b> Standard bearer',
      '<b>Specialty:</b> Support staff (cook, blacksmith, or the like)'
    ]
  },
  Urchin: {
    trait: [
      'I hide scraps of food and trinkets away in my pockets.',
      'I ask a lot of questions.',
      'I like to squeeze into small places where no one else can get to me.',
      'I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.',
      'I eat like a pig and have bad manners.',
      "I think anyone who's nice to me is hiding evil intent.",
      "I don't like to bathe.",
      'I bluntly say what others are hinting at or hiding.'
    ],
    ideal: [
      'Respect. All people, rich or poor, deserve respect. (Good)',
      'Community. We have to take care of each other, because no one else is going to do it. (Lawful)',
      'Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)',
      'Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)',
      "People. I help the people who help me — that's what keeps us alive. (Neutral)",
      "Aspiration. I'm going to prove that I'm worthy of a better life. (Any)"
    ],
    bond: [
      "My town or city is my home, and I'll fight to defend it.",
      'I sponsor an orphanage to keep others from enduring what I was forced to endure.',
      'I owe my survival to another urchin who taught me to live on the streets.',
      'I owe a debt I can never repay to the person who took pity on me.',
      "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
      "No one else should have to endure the hardships I've been through."
    ],
    flaw: [
      "If I'm outnumbered, I will run away from a fight.",
      "Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
      'I will never fully trust anyone other than myself.',
      "I'd rather kill someone in their sleep than fight fair.",
      "It's not stealing if I need it more than someone else.",
      "People who can't take care of themselves get what they deserve."
    ]
  },

  Anthropologist: {
    trait: [
      "I prefer the company of those who aren't like me, including people of other races",
      "I'm a stickler when it comes to observing proper etiquette and local customs",
      'I would rather observe than meddle',
      'By living among violent people, I have become desensitized to violence.',
      'I would risk life and limb to discover a new culture or unravel the secrets of a dead one.',
      'When I arrive at a new settlement for the first time, I must learn all its customs.'
    ],
    ideal: [
      'Discovery. I want to be the first person to discover a lost culture. (Any)',
      'Distance. One must not interfere with the affairs of another culture - even one in need of aid. (Lawful)',
      'Knowledge. By understanding other races and cultures, we learn to understand ourselves. (Any)',
      'Power. Common people crave strong leadership, and I do my utmost to provide it. (Lawful)',
      'Protection. I must do everything possible to save a society facing extinction. (Good)',
      "Indifferent. Life is cruel. What's the point in saving people if they're going to die anyway? (Chaotic)"
    ],
    bond: [
      'My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.',
      'Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.',
      'Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.',
      'I want to learn more about a particular humanoid culture that fascinates me.',
      'I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.',
      'I have a trinket that I believe is the key to finding a long-lost society.'
    ],
    flaw: [
      'Boats make me seasick.',
      "I talk to myself, and I don't make friends easily.",
      "I believe that I'm intellectually superior to people from other cultures and have much to teach them.",
      "I've picked up some unpleasant habits living among goblins, lizardfolk, or orcs.",
      'I complain about everything.',
      'I wear a tribal mask and never take it off.'
    ],
    extra: [
      '<b>Adopted Culture:</b> Aarakocra',
      '<b>Adopted Culture:</b> Dwarf',
      '<b>Adopted Culture:</b> Elf',
      '<b>Adopted Culture:</b> Goblin',
      '<b>Adopted Culture:</b> Halfling',
      '<b>Adopted Culture:</b> Human',
      '<b>Adopted Culture:</b> Lizardfolk',
      '<b>Adopted Culture:</b> Orc'
    ]
  },
  Archaeologist: {
    trait: [
      'I love a good puzzle or mystery',
      "I'm a pack rat who never throws anything away.",
      'Fame is more important to me than money.',
      'I have no qualms about stealing from the dead.',
      "I'm happier in a dusty old tomb than I am in the centers of civilization.",
      "Traps don't make me nervous. Idiots who trigger traps make me nervous.",
      'I might fail, but I will never give up.',
      "You might think I'm a scholar, but I love a good brawl. These fists were made for punching."
    ],
    ideal: [
      'Preservation. That artifact belongs in a museum. (Good)',
      "Greed. I won't risk my life for nothing. I expect some kind of payment. (Any)",
      'Death Wish. Nothing is more exhilarating than a narrow escape from the jaws of death. (Chaotic)',
      'Dignity. The dead and their belongings deserve to be treated with respect. (Lawful)',
      'Immortality. All of my exploring is part of a plan to find the secret of everlasting life. (Any)',
      'Danger. With every great discovery comes grave danger. The two walk hand in hand. (Any)'
    ],
    bond: [
      "Ever since I was a child, I've heard stories about a lost city. I aim to find it, learn its secrets, and earn my place in the history books.",
      'I want to find my mentor, who disappeared on an expedition some time ago.',
      "I have a friendly rival. Only one of us can be the best, and I aim to prove it's me.",
      "I won't sell an art object or other treasure that has historical significance or is one of a kind.",
      "I'm secretly in love with the wealthy patron who sponsors my archaeological exploits.",
      'I hope to bring prestige to a library, a museum, or a university.'
    ],
    flaw: [
      'I have a secret fear of some common wild animal - and in my work, I see them everywhere.',
      "I can't leave a room without searching it for secret doors.",
      "When I'm not exploring dungeons or ruins. I get jittery and impatient.",
      'I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition.',
      'When given the choice of going left or right, I always go left.',
      "I can't sleep except in total darkness."
    ],
    extra: [
      '<b>Signature Item:</b> 10-foot pole',
      '<b>Signature Item:</b> Crowbar',
      '<b>Signature Item:</b> Hat',
      '<b>Signature Item:</b> Hooded lantern',
      '<b>Signature Item:</b> Medallion',
      '<b>Signature Item:</b> Shovel',
      '<b>Signature Item:</b> Sledgehammer',
      '<b>Signature Item:</b> Whip'
    ]
  },
  Athlete: {
    trait: [
      'I feel most at peace during physical exertion, be it exercise or battle.',
      "I don't like to sit idle.",
      'I have a daily exercise routine that I refuse to break.',
      'Obstacles exist to be overcome.',
      'When I see others struggling, I offer to help.',
      'I love to trade banter and gibes.',
      'Anything worth doing is worth doing best.',
      'I get irritated if people praise someone else and not me.'
    ],
    ideal: [
      'Competition. I strive to test myself in all things. (Chaotic)',
      'Triumph. The best part of winning is seeing my rivals brought low. (Evil)',
      'Camaraderie. The strongest bonds are forged through struggle. (Good)',
      'People. I strive to inspire my spectators. (Neutral)',
      'Tradition. Every game has rules, and the playing field must be level. (Lawful)',
      'Growth. Lessons hide in victory and defeat. (Any)'
    ],
    bond: [
      'My teammates are my family.',
      'I will overcome a rival and prove myself their better.',
      "My mistake got someone hurt. I'll never make that mistake again.",
      'I will be the best for the honor and glory of my home.',
      'The person who trained me is the most important person in my world.',
      "I strive to live up to a specific hero's example."
    ],
    flaw: [
      'I indulge in a habit that threatens my reputation or my health.',
      "I'll do absolutely anything to win.",
      "I ignore anyone who doesn't compete and anyone who loses to me.",
      'I have lingering pain from old injuries.',
      'Any defeat or failure on my part is because my opponent cheated.',
      'I must be the captain of any group I join.'
    ],
    extra: [
      '<b>Favored Event:</b> Marathon',
      '<b>Favored Event:</b> Long-distance running',
      '<b>Favored Event:</b> Wrestling',
      '<b>Favored Event:</b> Boxing',
      '<b>Favored Event:</b> Chariot or horse race',
      '<b>Favored Event:</b> Pankration (mixed unarmed combat)',
      '<b>Favored Event:</b> Hoplite race (racing in full armor with a unit)',
      '<b>Favored Event:</b> Pentathlon (running, long jump, discus, javelin, wrestling)'
    ]
  },
  Faceless: {
    trait: [
      "I'm earnest and uncommonly direct.",
      "I strive to have no personality — it's easier to forget what's hardly there.",
      '"I treasure a memento of the person or instance that set me upon my path.',
      'I sleep just as much as I need to and on an unusual schedule.',
      'I think far ahead, a detachedness often mistaken for daydreaming.',
      'I cultivate a single obscure hobby or study and eagerly discuss it at length.',
      'I am ever learning how to be among others — when to stay quiet, when to laugh.',
      'I behave like an extreme opposite of my persona.'
    ],
    ideal: [
      "Justice. Place in society shouldn't determine one's access to what is right. (Good)",
      "Security. Doing what must be done can't bring the innocent to harm. (Lawful)",
      "Confusion. Deception is a weapon. Strike from where your foes won't expect. (Chaotic)",
      'Infamy. My name will be a malediction, a curse that fulfills my will. (Evil)',
      'Incorruptibility. Be a symbol, and leave your flawed being behind. (Any)',
      "Anonymity. It's my deeds that should be remembered, not their instrument. (Any)"
    ],
    bond: [
      'I do everything for my family. My first thought is keeping them safe.',
      "What I do, I do for the world. The people don't realize how much they need me.",
      "I've seen too many in need. I must not fail them as everyone else has.",
      'I stand in opposition, lest the wicked go unopposed.',
      'I am exceptional. I do this because no one else can, and no one can stop me.',
      'I do everything for those who were taken from me.'
    ],
    flaw: [
      'I am callous about death. It comes to us all eventually.',
      'I never make eye contact or hold it unflinchingly.',
      'I have no sense of humor. Laughing is uncomfortable and embarrassing.',
      'I overexert myself, sometimes needing to recuperate for a day or more.',
      'I think far ahead, a detachedness often mistaken for daydreaming.',
      'I see morality entirely in black and white.'
    ],
    extra: [
      '<b>Faceless Persona:</b> A flamboyant spy or brigand.',
      '<b>Faceless Persona:</b> The incarnation of a nation or people.',
      '<b>Faceless Persona:</b> A scoundrel with a masked guise.',
      '<b>Faceless Persona:</b> A vengeful spirit.',
      '<b>Faceless Persona:</b> The manifestation of a deity or faith.',
      '<b>Faceless Persona:</b> One whose beauty is greatly accented using makeup.',
      '<b>Faceless Persona:</b> An impersonation of another hero.',
      '<b>Faceless Persona:</b> The embodiment of a school of magic.',
      '<b>Faceless Persona:</b> A warrior with distinctive armor.',
      '<b>Faceless Persona:</b> A disguise with animalistic or monstrous characteristics, meant to inspire fear.'
    ]
  },
  'Far Traveler': {
    trait: [
      "I have different assumptions from those around me concerning personal space, blithely invading others' space in innocence, or reacting to ignorant invasion of my own.",
      'I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting.',
      "I have a strong code of honor or sense of propriety that others don't comprehend.",
      'I express affection or contempt in ways that are unfamiliar to others.',
      'I honor my deities through practices that are foreign to this land.',
      'I begin or end my day with small traditional rituals that are unfamiliar to those around me.'
    ],
    ideal: [
      'Open. I have much to learn from the kindly folk I meet along my way. (Good)',
      'Reserved. As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)',
      "Adventure. I'm far from home, and everything is strange and wonderful! (Chaotic)",
      'Cunning. Though I may not know their ways, neither do they know mine, which can be to my advantage. (Evil)',
      'Inquisitive. Everything is new, but I have a thirst to learn. (Neutral)',
      'Suspicious. I must be careful, for I have no way of telling friend from foe here. (Any)'
    ],
    bond: [
      'So long as I have this token from my homeland, I can face any adversity in this strange land.',
      'The gods of my people are a comfort to me so far away from home.',
      'I hold no greater cause than my service to my people.',
      "My freedom is my most precious possession. I'll never let anyone take it from me again.",
      "I'm fascinated by the beauty and wonder of this new land.",
      'Though I had no choice, I lament having to leave my loved one(s) behind. I hope to see them again one day.'
    ],
    flaw: [
      'I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land.',
      'I pretend not to understand the local language in order to avoid interactions I would rather not have.',
      'I have a weakness for the new intoxicants and other pleasures of this land.',
      "I don't take kindly to some of the actions and motivations of the people of this land, because these folks are different from me.",
      'I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at worst.',
      'I have a weakness for the exotic beauty of the people of these lands.'
    ],
    extra: [
      '<b>Reason for Travel:</b> Emissary',
      '<b>Reason for Travel:</b> Exile',
      '<b>Reason for Travel:</b> Fugitive',
      '<b>Reason for Travel:</b> Pilgrim',
      '<b>Reason for Travel:</b> Sightseer',
      '<b>Reason for Travel:</b> Wanderer'
    ]
  },
  Gambler: {
    trait: [
      'I plan for every contingency. Leave nothing to chance!',
      'Every copper wants to be a silver. Each bet is an opportunity.',
      "I'm one of Lady Luck's favored. Anything I try is destined to succeed.",
      "I've lost so much to gambling that I refuse to spend money on anything anymore.",
      "Nothing is certain. Planning is a coward's act.",
      "I can't be sure who I've swindled, cheated, or defeated, so I keep a low profile in public.",
      'The perfect bet is out there somewhere. I just have to keep my eyes open.',
      "I have beaten my addiction, but all it takes is one weak moment and I'll be back at the card table."
    ],
    ideal: [
      'Knowledge. Knowledge is power, and knowing which horse to back is the key to success. (Any)',
      'Fate. Whatever happens is fated, regardless of any planning or striving. (Lawful)',
      'Bravery. If you want to succeed, you have to take risks. (Chaotic)',
      "Survival. You can't win if you're dead. Live to fight another day—when the odds might be more in your favor. (Any)",
      'Reliability. When I was in need, I was able to rely on others. Now I want to be the one others rely on. (Good)',
      'Victory. Winning is the real measure of a person. In the end, the only thing that matters is the scoreboard. (Evil)'
    ],
    bond: [
      'One person in particular owes me a lot of money, and I need to keep them alive if I want to be repaid.',
      "I'm loyal to the friend or family member who taught me how to gamble.",
      "The person who saved me from my gambling addiction is the only reason I'm alive today.",
      'A patron once fronted me money in exchange for a percentage of my winnings. I owe them a debt of gratitude. And a lot of cash.',
      "A criminal syndicate I once played for isn't happy I left the game, and its enforcers are looking for me.",
      "Urchins once helped me find marks for my games. Now I'm driven to help them escape the streets."
    ],
    flaw: [
      "I don't know when to quit. Especially when everyone else is telling me to.",
      'I save my sympathy for my friends, and I have no friends.',
      "You think we're in trouble now? Let me tell you how bad things are likely to get!",
      "You can loan me a little, right? I've got a sure thing. I'll double your money, guaranteed.",
      'I was once a terribly flawed person, like you. Let me tell you how you can save yourself.',
      "I'm a great gambler. I'm just bad at math and logic."
    ]
  },
  'Haunted One': {
    trait: [
      "I don't run from evil. Evil runs from me.",
      'I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.',
      'I spend money freely and live life to the fullest, knowing that tomorrow I might die."',
      'I lve for the thrill of the hunt.',
      "I don't talk about the thing that torments me. I'd rather not burden others with my curse.",
      'I expect danger around every corner.',
      'I refuse to become a victim, and I will not allow others to be victimized.',
      'I put no trust in divine beings.'
    ],
    ideal: [
      'I try to help those in need, no matter what the personal cost. (Good)',
      "I'll stop the spirits that haunt me or die trying. (Any)",
      'I kill monsters to make the world a safer place, and to exorcise my own demons. (Good)',
      'I have a dark calling that puts me above the law. (Chaotic)',
      "I like to know my enemy's capabilities and weaknesses before rushing into battle. (Lawful)",
      "I'm a monster that destroys other monsters, and anything else that gets in my way. (Evil)"
    ],
    bond: [
      'I keep my thoughts and discoveries in a journal. My journal is my legacy.',
      'I would sacrifice my life and my soul to protect the innocent.',
      "My torment drove away the person I love. I strive to win back the love I've lost.",
      'A terrible guilt consumes me. I hope that I can find redemption through my actions.',
      "There's evil in me, I can feel it. It must never be set free.",
      'I have a child to protect. I must make the world a safer place for them.'
    ],
    flaw: [
      'I have certain rituals that I must follow every day. I can never break them.',
      'I assume the worst in people.',
      "I feel no compassion for the dead. They're the lucky ones.",
      'I have an addiction.',
      'I am a purveyor of doom and gloom who lives in a world without hope.',
      'I talk to spirits that no one else can see.'
    ],
    extra: [
      "<b>Harrowing Event:</b> A monster that slaughtered dozens of innocent people spared my life, and I don't know why.",
      '<b>Harrowing Event:</b> I was born under a dark star. I can feel it watching me, coldly and distantly. Sometimes it beckons me in the dead of night.',
      "<b>Harrowing Event:</b> An apparition that has haunted my family for generations now haunts me. I don't know what it wants, and it won't leave me alone.",
      '<b>Harrowing Event:</b> My family has a history of practicing the dark arts. I dabbled once and felt something horrible clutch at my soul, whereupon I fled in terror.',
      '<b>Harrowing Event:</b> An oni took my sibling one cold, dark night, and I was unable to stop it.',
      '<b>Harrowing Event:</b> I was cursed with lycanthropy and later cured. I am now haunted by the innocents I slaughtered.',
      '<b>Harrowing Event:</b> A hag kidnapped and raised me. I escaped, but the hag still has a magical hold over me and fills my mind with evil thoughts.',
      '<b>Harrowing Event:</b> I opened an eldritch tome and saw things unfit for a sane mind. I burned the book, but its words and images are burned into my psyche.',
      '<b>Harrowing Event:</b> A fiend possessed me as a child. I was locked away but escaped. The fiend is still inside me, but now I try to keep it locked away.',
      '<b>Harrowing Event:</b> I did terrible things to avenge the murder of someone I loved. I became a monster, and it haunts my waking dreams.'
    ]
  },
  Shipwright: {
    trait: [
      'I love talking and being heard more than I like to listen.',
      "I'm extremely fond of puzzles.",
      'I thrive under pressure.',
      'I love sketching and designing objects, especially boats.',
      "I'm not afraid of hard work — in fact, I prefer it.",
      'A pipe, an ale, and the smell of the sea: paradise.',
      'I have an endless supply of cautionary tales related to the sea.',
      "I don't mind getting my hands dirty."
    ],
    ideal: [
      "Crew. If everyone on deck pitches in, we'll never sink. (Good)",
      'Careful Lines. A ship must be balanced according to the laws of the universe. (Lawful)',
      'Invention. Make what you need out of whatever is at hand. (Chaotic)',
      'Perfection. To measure a being and find it lacking is the greatest disappointment. (Evil)',
      'Reflection. Muddied water always clears in time. (Any)',
      'Hope. The horizon at sea holds the greatest promise. (Any)'
    ],
    bond: [
      'I must visit all the oceans of the world and behold the ships that sail there.',
      'Much of the treasure I claim will be used to enrich my community.',
      'I must find a kind of wood rumored to possess magical qualities.',
      "I repair broken things to redeem what's broken in myself.",
      'I will craft a boat capable of sailing through the most dangerous of storms.',
      "A kraken destroyed my masterpiece; it's teeth shall adorn my hearth."
    ],
    flaw: [
      "I don't know when to throw something away. You never know when it might be useful again.",
      'I get frustrated to the point of distraction by shoddy craftsmanship.',
      'Though I am an excellent crafter, my work tends to look as though it belongs on a ship.',
      'I am so obsessed with sketching my ideas for elaborate inventions that I sometimes forget little thing like eating and sleeping.',
      "I'm judgmental of those who are not skilled with tools of some kind.",
      "I sometimes take things that don't belong to me, especially if they are very well made."
    ],
    extra: [
      "<b>The Sea's Influence:</b> Grand Designs. I am working on plans and schematics for a new, very fast ship. I must examine as many different kinds of vessels as possible to help ensure the success of my design.",
      "<b>The Sea's Influence:</b> Solid and Sound. I patched up a war galley and prevented it from sinking. The local navy regards me as a friend.",
      "<b>The Sea's Influence:</b> Favored. I insisted on thicker planking for a merchant vessel's hull, which saved it from sinking when it smashed against a reef. I have a standing invitation to visit the merchant's distant mansion.",
      "<b>The Sea's Influence:</b> Master of Armaments. I specialized in designing and mounting defenses for the navy. I easily recognize and determine the quality of such items.",
      "<b>The Sea's Influence:</b> Low Places. I have contacts in the smuggling outfits along the coast; I occasionally repair the criminals' ships in exchange for coin and favors.",
      "<b>The Sea's Influence:</b> Mysteries of the Deep. I experienced an encounter with a possibly divine being while sailing alone. Work with the DM to determine the secret about the deep waters of the sea that this entity revealed to me."
    ]
  },
  Smuggler: {
    trait: [
      'I love being on the water but hate fishing.',
      'I think of everything in terms of monetary value.',
      'I never stop smiling.',
      'Nothing rattles me; I have a lie for every occasion.',
      "I love gold but won't cheat a friend.",
      'I enjoy doing things others believe to be impossible.',
      'I become wistful when I see the sun rise over the ocean.',
      'I am no common criminal; I am a mastermind.'
    ],
    ideal: [
      'Wealth. Heaps of coins in a secure vault is all I dream of. (Any)',
      "Smuggler's Code. I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents. (Lawful)",
      "All for a Coin. I'll do nearly anything if it means I turn a profit. (Evil)",
      'Peace and Prosperity. I smuggle only to achieve a greater goal that benefits my community. (Good)',
      'People. For all my many lies, I place a high value on friendship. (Any)',
      'Daring. I am most happy when risking everything. (Any)'
    ],
    bond: [
      'My vessel was stolen from me, and I burn with the desire to recover it.',
      'I intend to become the leader of the network of smugglers that I belong to.',
      'I owe a debt that cannot be repaid in gold.',
      'After one last job, I will retire from the business.',
      'I was tricked by a fellow smuggler who stole something precious from me. I will find that thief.',
      "I give most of my profits to a charitable cause, and I don't like to brag about it."
    ],
    flaw: [
      'Lying is reflexive, and I sometimes engage in it without realizing.',
      'I tend to assess my relationships in terms of profit and loss.',
      'I believe everyone has a price and am cynical toward those who present themselves as virtuous.',
      'I struggle to trust the words of others.',
      'Few people know the real me.',
      "Though I act charming, I feel nothing for others and don't know what friendship is."
    ],
    extra: [
      '<b>Claim to Fame:</b> Spirit of the Whale. I smuggled stolen dwarven spirits in the body of a dead whale being pulled behind a fishing boat. When I delivered the goods, the corpse suddenly exploded, sending whale meat and whiskey bottles for half a mile.',
      '<b>Claim to Fame:</b> Cart and Sword. I drove a cart filled with stolen art through the middle of a battlefield while singing sea shanties to confuse the combatants.',
      "<b>Claim to Fame:</b> The Recruit. I enlisted in another nation's navy for the purpose of smuggling stolen jewels to a distant port. I attained a minor rank before disappearing from the navy and making my way here.",
      '<b>Claim to Fame:</b> River of Shadows. My riverboat accidentally slipped through the veil into the Shadowfell for several hours. While I was there, I sold some stolen dragonborn artifacts before returning to this plane and paddling home.',
      '<b>Claim to Fame:</b> Gold-Hearted. I agreed to transport a family escaping a war. The baby began to cry at a checkpoint, and I gave the guards all your gold to let us pass. The family never found out about this gesture.',
      '<b>Claim to Fame:</b> Playing Both Sides. I once smuggled crates of crossbow bolts and bundles of arrows, each destined for an opposing side in a regional war, at the same time. The buyers arrived within moments of each other but did not discover my trickery.'
    ]
  }
};

var background = Object.keys(backgrounds);

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
  'The Spirits of the Past, Elven Ancestors (CG)',

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
  race: race,
  gender: gender,
  job: job,
  alignment: alignment,
  background: background,
  religion: religion
};

function random(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function d3Random() {
  return (random(6) + 1) + (random(6) + 1) + (random(6) + 1) + 2;
}

function newStats() {
  var str = d3Random();
  var dex = d3Random();
  var con = d3Random();
  var int = d3Random();
  var wis = d3Random();
  var cha = d3Random();

  var stats = {
    str: str,
    dex: dex,
    con: con,
    int: int,
    wis: wis,
    cha: cha
  };

return stats;
}

function randomString(strings) {
  if (strings.length === 0) {
    return '';
  }
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

  race = randomString(sheetGen.race)
  document.getElementById('raceDisplay').innerHTML = race;

  gender = randomString(sheetGen.gender);
  document.getElementById('genderDisplay').innerHTML = gender;

  var rightKey = 'none';
  job = randomString(sheetGen.job);
  switch (job) {
    case 'Barbarian':
    case 'Fighter':
    case 'Blood Hunter':
      rightKey = 'str';
      break;
    case 'Monk':
    case 'Ranger':
    case 'Rogue':
      rightKey = 'dex';
      break;
    case 'Wizard':
    case 'Artificer':
      rightKey = 'int';
      break;
    case 'Cleric':
    case 'Druid':
      rightKey = 'wis';
      break;
    case 'Bard':
    case 'Paladin':
    case 'Sorcerer':
    case 'Warlock':
      rightKey = 'cha';
      break;
  }

  var maxKey = maxStatsKey(stats);
  stats = switchJobs(stats, rightKey, maxKey);
  document.getElementById('jobDisplay').innerHTML = job;

  var subjob = jobs[job];
  subjob = randomString(subjob);
  document.getElementById('subjobDisplay').innerHTML = subjob;

  alignment = randomString(sheetGen.alignment);
  document.getElementById('alignmentDisplay').innerHTML = alignment;

  background = randomString(sheetGen.background);
  document.getElementById('backgroundDisplay').innerHTML = background;

  religion = randomString(sheetGen.religion);
  document.getElementById('religionDisplay').innerHTML = religion;

  document.getElementById('strength').innerHTML = stats.str;
  document.getElementById('dexterity').innerHTML = stats.dex;
  document.getElementById('constitution').innerHTML = stats.con;
  document.getElementById('intelligence').innerHTML = stats.int;
  document.getElementById('wisdom').innerHTML = stats.wis;
  document.getElementById('charisma').innerHTML = stats.cha;

  var personality = backgrounds[background];

  trait = randomString(personality.trait);
  document.getElementById('traitDisplay').innerHTML = trait;
  ideal = randomString(personality.ideal);
  document.getElementById('idealDisplay').innerHTML = ideal;
  bond = randomString(personality.bond);
  document.getElementById('bondDisplay').innerHTML = bond;
  flaw = randomString(personality.flaw);
  document.getElementById('flawDisplay').innerHTML = flaw;

  var extra = personality.extra;

  if (extra != null) {
    extra = randomString(extra);
    document.getElementById('extraDisplay').innerHTML = extra;
  } else {
    document.getElementById('extraDisplay').innerHTML = '';
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += "responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
// bro i dont even know what this is lmao
