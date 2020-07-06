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

// var job = [
//         'Barbarian',
//         'Bard',
//         'Cleric',
//         'Druid',
//         'Fighter',
//         'Monk',
//         'Paladin',
//         'Ranger',
//         'Rogue',
//         'Sorcerer',
//         'Warlock',
//         'Wizard',
//         'Artificer'
//     ];

var jobs = {
  'Barbarian': [
    "Path of the Berserker",
    "Path of the Totem Warrior"
  ],
  'Bard': [
    "College of Lore",
    "College of Valor"
  ],
  'Cleric': [
    "Knowledge Domain",
    "Life Domain",
    "Light Domain",
    "Nature Domain",
    "Tempest Domain",
    "Trickery Domain",
    "War Domain"
  ],
  'Druid': [
    "Circle of the Land",
    "Circle of the Moon"
  ],
  'Fighter': [
    "Champion",
    "Battle Master",
    "Eldritch Knight"
  ],
  'Monk': [
    "Way of the Open Hand",
    "Way of Shadow",
    "Way of the Four Elements"
  ],
  'Paladin': [
    "Oath of Devotion",
    "Oath of the Ancients",
    "Oath of Vengeance"
  ],
  'Ranger': [
    "Hunter",
    "Beast Master"
  ],
  'Rogue': [
    "Thief",
    "Assassin",
    "Arcane Trickster"
  ],
  'Sorcerer': [
    "Draconic Bloodline",
    "Wild Magic"
  ],
  'Warlock': [
    "Pact of the Archfey",
    "Pact of the Fiend",
    "Pact of the Great Old One"
  ],
  'Wizard': [
    "School of Abjuration",
    "School of Conjuration",
    "School of Divination",
    "School of Enchantment",
    "School of Evocation",
    "School of Illusion",
    "School of Necromancy",
    "School of Transmutation"
  ],
  'Artificer': [
    "Alchemist",
    "Artillerist",
    "Battle Smith"
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
  'Acolyte': {
    'trait': [
      "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
      "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
      "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
      "Nothing can shake my optimistic attitude.",
      "I quote (or misquote) sacred texts and proverbs in almost every situation.",
      "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
      "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living rates on me.",
      "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
    ],
    'ideal': [
      "<b>Tradition.</b> The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
      "<b>Charity.</b> I always try to help those in need, no matter what the personal cost. (Good)",
      "<b>Change.</b> We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
      "<b>Power.</b> I hope to one day rise to the top of my faith's religioI trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
      "<b>Aspiration.</b> I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"
    ],
    'bond': [
      "I would die to recover an ancient relic of my faith that was lost long ago.",
      "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
      "I owe my life to the priest who took me in when my parents died.",
      "Everything I do is for the common people.",
      "I will do anything to protect the temple where I served.",
      "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
    ],
    'flaw': [
      "I judge others harshly, and myself even more severely.",
      "I put too much trust in those who wield power within my temple's hierarchy.",
      "My piety sometimes leads me to blindly trust those that profess faith in my god.",
      "I am inflexible in my thinking.",
      "I am suspicious of strangers and expect the worst of them.",
      "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
    ]
  },
  'Charlatan': {
    'trait': [
      "I fall in and out of love easily, and am always pursuing someone.",
      "I have a joke for every occasion, especially occasions where humor is inappropriate.",
      "Flattery is my preferred trick for getting what I want.",
      "I'm a born gambler who can't resist taking a risk for a potential payoff.",
      "I lie about almost everything, even when there's no reason to.",
      "Sarcasm and insults are my weapons of choice.",
      "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
      "I pocket anything I see that might have some value."
    ],
    'ideal': [
      "<b>Independence.</b> I am a free spirit—no one tells me what to do. (Chaotic)",
      "<b>Fairness.</b> I never target people who can't afford to lose a few coins. (Lawful)",
      "<b>Charity.</b> I distribute the money I acquire to the people who really need it. (Good)",
      "<b>Creativity.</b> I never run the same con twice. (Chaotic)",
      "<b>Friendship.</b> Material goods come and go. Bonds of friendship last forever. (Good)",
      "<b>Aspiration.</b> I'm determined to make something of myself. (Any)"
    ],
    'bond': [
      "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
      "I owe everything to my mentor — a horrible person who's probably rotting in jail somewhere.",
      "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
      "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
      "A powerful person killed someone I love. Some day soon, I'll have my revenge.",
      "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
    ],
    'flaw': [
      "I can't resist a pretty face.",
      "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
      "I'm convinced that no one could ever fool me the way I fool others.",
      "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
      "I can't resist swindling people who are more powerful than me.",
      "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
    ]
  },
  'Criminal': {
    'trait': [
      "I always have a plan for when things go wrong.",
      "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
      "The first thing I do in a new place is note the locations of everything valuable — or where such things could be hidden.",
      "I would rather make a new friend than a new enemy.",
      "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
      "I don't pay attention to the risks in a situation. Never tell me the odds.",
      "The best way to get me to do something is to tell me I can't do it.",
      "I blow up at the slightest insult."
    ],
    'ideal': [
      "<b>Honor.</b> I don't steal from others in the trade. (Lawful)",
      "<b>Freedom.</b> Chains are meant to be broken, as are those who would forge them. (Chaotic)",
      "<b>Charity.</b> I steal from the wealthy so that I can help people in need. (Good)",
      "<B>Greed.</b> I will do whatever it takes to become wealthy. (Evil)",
      "<b>People.</b> I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
      "<b>Redemption.</b> There's a spark of good in everyone. (Good)"
    ],
    'bond': [
      "I'm trying to pay off an old debt I owe to a generous benefactor.",
      "My ill-gotten gains go to support my family.",
      "Something important was taken from me, and I aim to steal it back.",
      "I will become the greatest thief that ever lived.",
      "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
      "Someone I loved died because of a mistake I made. That will never happen again."
    ],
    'flaw': [
      "When I see something valuable, I can't think about anything but how to steal it.",
      "When faced with a choice between money and my friends, I usually choose the money.",
      "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
      "I have a 'tell' that reveals when I'm lying.",
      "I turn tail and run when things look bad.",
      "An innocent person is in prison for a crime that I committed. I'm okay with that."
    ]
  },
  'Entertainer': {
    'trait': [
      "I know a story relevant to almost every situation.",
      "Whenever I come to a new place, I collect local rumors and spread gossip.",
      "I'm a hopeless romantic, always searching for that ''special someone''.",
      "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
      "I love a good insult, even one directed at me.",
      "I get bitter if I'm not the center of attention.",
      "I'll settle for nothing less than perfection.",
      "I change my mood or my mind as quickly as I change key in a song."
    ],
    'ideal': [
      "<b>Beauty.</b> When I perform, I make the world better than it was. (Good)",
      "<b>Tradition.</b> The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
      "<b>Creativity.</b> The world is in need of new ideas and bold action. (Chaotic)",
      "<b>Greed.</b> I'm only in it for the money and fame. (Evil)",
      "<b>People.</b> I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
      "<b>Honesty.</b> Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
    ],
    'bond': [
      "My instrument is my most treasured possession, and it reminds me of someone I love.",
      "Someone stole my precious instrument, and someday I'll get it back.",
      "I want to be famous, whatever it takes.",
      "I idolize a hero of the old tales and measure my deeds against that person's.",
      "I will do anything to prove myself superior to my hated rival.",
      "I would do anything for the other members of my old troupe."
    ],
    'flaw': [
      "I'll do anything to win fame and renown.",
      "I'm a sucker for a pretty face.",
      "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
      "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
      "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
      "Despite my best efforts, I am unreliable to my friends."
    ]
  },
  'Folk Hero': {
    'trait': [
      "I judge people by their actions, not their words.",
      "If someone is in trouble, I'm always ready to lend help.",
      "When I set my mind to something, I follow through no matter what gets in my way.",
      "I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
      "I'm confident in my own abilities and do what I can to instill confidence in others.",
      "Thinking is for other people. I prefer action.",
      "I misuse long words in an attempt to sound smarter.",
      "I get bored easily. When am I going to get on with my destiny?"
    ],
    'ideal': [
      "<b>Respect.</b> People deserve to be treated with dignity and respect. (Good)",
      "<b>Fairness.</b> No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
      "<b>Freedom.</b> Tyrants must not be allowed to oppress the people. (Chaotic)",
      "<b>Might.</b> If I become strong, I can take what I want — what I deserve. (Evil)",
      "<b>Sincerity.</b> There's no good in pretending to be something I'm not. (Neutral)",
      "<b>Destiny.</b> Nothing and no one can steer me away from my higher calling. (Any)"
    ],
    'bond': [
      "I have a family, but I have no idea where they are. One day, I hope to see them again.",
      "I worked the land, I love the land, and I will protect the land.",
      "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
      "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
      "I protect those who cannot protect themselves.",
      "I wish my childhood sweetheart had come with me to pursue my destiny."
    ],
    'flaw': [
      "The tyrant who rules my land will stop at nothing to see me killed.",
      "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
      "The people who knew me when I was young know my shameful secret, so I can never go home again.",
      "I have a weakness for the vices of the city, especially hard drink.",
      "Secretly, I believe that things would be better if I were a tyrant lording over the land.",
      "I have trouble trusting in my allies."
    ]
  },
  'Guild Artisan': {
    'trait': [
      "I believe that anything worth doing is worth doing right. I can't help it — I'm a perfectionist.",
      "I'm a snob who looks down on those who can't appreciate fine art.",
      "I always want to know how things work and what makes people tick.",
      "I'm full of witty aphorisms and have a proverb for every occasion.",
      "I'm rude to people who lack my commitment to hard work and fair play.",
      "I like to talk at length about my profession.",
      "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
      "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
    ],
    'ideal': [
      "<b>Community.</b> It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
      "<b>Generosity.</b> My talents were given to me so that I could use them to benefit the world. (Good)",
      "<b>Freedom.</b> Everyone should be free to pursue his or her own livelihood. (Chaotic)",
      "<b>Greed.</b> I'm only in it for the money. (Evil)",
      "<b>People.</b> I'm committed to the people I care about, not to ideals. (Neutral)",
      "<b>Aspiration.</b> I work hard to be the best there is at my craft. (Any)"
    ],
    'bond': [
      "The workshop where I learned my trade is the most important place in the world to me.",
      "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
      "I owe my guild a great debt for forging me into the person I am today.",
      "I pursue wealth to secure someone's love.",
      "One day I will return to my guild and prove that I am the greatest artisan of them all.",
      "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
    ],
    'flaw': [
      "I'll do anything to get my hands on something rare or priceless.",
      "I'm quick to assume that someone is trying to cheat me.",
      "No one must ever learn that I once stole money from guild coffers.",
      "I'm never satisfied with what I have — I always want more.",
      "I would kill to acquire a noble title.",
      "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
    ]
  },
  'Hermit': {
    'trait': [
      "I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
      "I am utterly serene, even in the face of disaster.",
      "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
      "I feel tremendous empathy for all who suffer.",
      "I'm oblivious to etiquette and social expectations.",
      "I connect everything that happens to me to a grand, cosmic plan.",
      "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
      "I am working on a grand philosophical theory and love sharing my ideas."
    ],
    'ideal': [
      "<b>Greater Good.</b> My gifts are meant to be shared with all, not used for my own benefit. (Good)",
      "<b>Logic.</b> Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
      "<b>Free Thinking.</b> Inquiry and curiosity are the pillars of progress. (Chaotic)",
      "<b>Power.</b> Solitude and contemplation are paths toward mystical or magical power. (Evil)",
      "<b>Live and Let Live.</b> Meddling in the affairs of others only causes trouble. (Neutral)",
      "<b>Self-Knowledge.</b> If you know yourself, there's nothing left to know. (Any)"
    ],
    'bond': [
      "Nothing is more important than the other members of my hermitage, order, or association.",
      "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
      "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
      "I entered seclusion because I loved someone I could not have.",
      "Should my discovery come to light, it could bring ruin to the world.",
      "My isolation gave me great insight into a great evil that only I can destroy."
    ],
    'flaw': [
      "Now that I've returned to the world, I enjoy its delights a little too much.",
      "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
      "I am dogmatic in my thoughts and philosophy.",
      "I let my need to win arguments overshadow friendships and harmony.",
      "I'd risk too much to uncover a lost bit of knowledge.",
      "I like keeping secrets and won't share them with anyone."
    ]
  },
  'Noble': {
    'trait': [
      "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
      "The common folk love me for my kindness and generosity.",
      "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
      "I take great pains to always look my best and follow the latest fashions.",
      "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
      "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
      "My favor, once lost, is lost forever.",
      "If you do me an injury, I will crush you, ruin your name, and salt your fields."
    ],
    'ideal': [
      "<b>Respect.</b> Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
      "<b>Responsibility.</b> It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
      "<b>Independence.</b> I must prove that I can handle myself without coddling from my family. (Chaotic)",
      "<b>Power.</b> If I can attain more power, no one will tell me what to do. (Evil)",
      "<b>Family.</b> Blood runs thicker than water. (Any)",
      "<b>Noble Obligation.</b> It is my duty to protect and care for the people beneath me. (Good)"
    ],
    'bond': [
      "I will face any challenge to win the approval of my family.",
      "My house's alliance with another noble family must be sustained at all costs.",
      "Nothing is more important than the other members of my family.",
      "I am in love with the heir of a family that my family despises.",
      "My loyalty to my sovereign is unwavering.",
      "The common folk must see me as a hero of the people."
    ],
    'flaw': [
      "I secretly believe that everyone is beneath me.",
      "I hide a truly scandalous secret that could ruin my family forever.",
      "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
      "I have an insatiable desire for carnal pleasures.",
      "In fact, the world does revolve around me.",
      "By my words and actions, I often bring shame to my family."
    ]
  },
  'Outlander': {
    'trait': [
      "I'm driven by a wanderlust that led me away from home",
      "I watch over my friends as if they were a litter of newborn pups.",
      "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
      "I have a lesson for every situation, drawn from observing nature.",
      "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
      "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
      "I feel far more comfortable around animals than people",
      "I was, in fact, raised by wolves."
    ],
    'ideal': [
      "<b>Change.</b> Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
      "<b>Greater Good.</b> It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
      "<b>Honor.</b> If I dishonor myself, I dishonor my whole clan. (Lawful)",
      "<b>Might.</b> The strongest are meant to rule. (Evil)",
      "<b>Nature.</b> The natural world is more important than all the constructs of civilization. (Neutral)",
      "<b>Glory.</b> I must earn glory in battle, for myself and my clan. (Any)"
    ],
    'bond': [
      "My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
      "An injury to the unspoiled wilderness of my home is an injury to me.",
      "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
      "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
      "I suffer awful visions of a coming disaster and will do anything to prevent it.",
      "It is my duty to provide children to sustain my tribe."
    ],
    'flaw': [
      "I am too enamored of ale, wine, and other intoxicants.",
      "There's no room for caution in a life lived to the fullest.",
      "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
      "I am slow to trust members of other races, tribes, and societies.",
      "Violence is my answer to almost any challenge.",
      "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
    ]
  },
  'Sage': {
    'trait': [
      "I use polysyllabic words that convey the impression of great erudition.",
      "I've read every book in the world's greatest libraries — or I like to boast that I have.",
      "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
      "There's nothing I like more than a good mystery.",
      "I'm willing to listen to every side of an argument before I make my own judgment.",
      "I... speak... slowly... when talking... to idiots,... which... almost... everyone... is... compared... to me.",
      "I am horribly, horribly awkward in social situations.",
      "I'm convinced that people are always trying to steal my secrets."
    ],
    'ideal': [
      "<b>Knowledge.</b> The path to power and self-improvement is through knowledge. (Neutral)",
      "<b>Beauty.</b> What is beautiful points us beyond itself toward what is true. (Good)",
      "<b>Logic.</b> Emotions must not cloud our logical thinking. (Lawful)",
      "<b>No Limits.</b> Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
      "<b>Power.</b> Knowledge is the path to power and domination. (Evil)",
      "<b>Self-Improvement.</b> The goal of a life of study is the betterment of oneself. (Any)"
    ],
    'bond': [
      "It is my duty to protect my students.",
      "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
      "I work to preserve a library, university, scriptorium, or monastery.",
      "My life's work is a series of tomes related to a specific field of lore.",
      "I've been searching my whole life for the answer to a certain question.",
      "I sold my soul for knowledge. I hope to do great deeds and win it back."
    ],
    'flaw': [
      "I am easily distracted by the promise of information.",
      "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
      "Unlocking an ancient mystery is worth the price of a civilization.",
      "I overlook obvious solutions in favor of complicated ones.",
      "I speak without really thinking through my words, invariably insulting others.",
      "I can't keep a secret to save my life, or anyone else's."
    ]
  },
  'Sailor': {
    'trait': [
      "My friends know they can rely on me, no matter what.",
      "I work hard so that I can play hard when the work is done.",
      "I enjoy sailing into new ports and making new friends over a flagon of ale.",
      "I stretch the truth for the sake of a good story.",
      "To me, a tavern brawl is a nice way to get to know a new city.",
      "I never pass up a friendly wager.",
      "My language is as foul as an otyugh nest.",
      "I like a job well done, especially if I can convince someone else to do it."
    ],
    'ideal': [
      "<b>Respect.</b> The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
      "<b>Fairness.</b> We all do the work, so we all share in the rewards. (Lawful)",
      "<b>Freedom.</b> The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)",
      "<b>Mastery.</b> I'm a predator, and the other ships on the sea are my prey. (Evil)",
      "<b>People.</b> I'm committed to my crewmates, not to ideals. (Neutral)",
      "<b>Aspiration.</b> Someday, I'll own my own ship and chart my own destiny. (Any)"
    ],
    'bond': [
      "I'm loyal to my captain first, everything else second.",
      "The ship is most important—crewmates and captains come and go.",
      "I'll always remember my first ship.",
      "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
      "I was cheated out of my fair share of the profits, and I want to get my due.",
      "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
    ],
    'flaw': [
      "I follow orders, even if I think they're wrong.",
      "I'll say anything to avoid having to do extra work.",
      "Once someone questions my courage, I never back down no matter how dangerous the situation.",
      "Once I start drinking, it's hard for me to stop.",
      "I can't help but pocket loose coins and other trinkets I come across.",
      "My pride will probably lead to my destruction."
    ]
  },
  'Soldier': {
    'trait': [
      "I'm always polite and respectful.",
      "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
      "I've lost too many friends, and I'm slow to make new ones.",
      "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
      "I can stare down a hell hound without flinching.",
      "I enjoy being strong and like breaking things.",
      "I have a crude sense of humor.",
      "I face problems head-on. A simple, direct solution is the best path to success."
    ],
    'ideal': [
      "<b>Greater Good.</b> Our lot is to lay down our lives in defense of others. (Good)",
      "<b>Responsibility.</b> I do what I must and obey just authority. (Lawful)",
      "<b>Independence.</b> When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
      "<b>Might.</b> In life as in war, the stronger force wins. (Evil)",
      "<b>Live and Let Live.</b> Ideals aren't worth killing over or going to war for. (Neutral)",
      "<b>Nation.</b> My city, nation, or people are all that matter. (Any)"
    ],
    'bond': [
      "I would still lay down my life for the people I served with.",
      "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
      "My honor is my life.",
      "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      "Those who fight beside me are those worth dying for.",
      "I fight for those who cannot fight for themselves."
    ],
    'flaw': [
      "The monstrous enemy we faced in battle still leaves me quivering with fear.",
      "I have little respect for anyone who is not a proven warrior.",
      "I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.",
      "My hatred of my enemies is blinding and unreasoning.",
      "I obey the law, even if the law causes misery.",
      "I'd rather eat my armor than admit when I'm wrong."
    ]
  },
  'Urchin': {
    'trait': [
      "I hide scraps of food and trinkets away in my pockets.",
      "I ask a lot of questions.",
      "I like to squeeze into small places where no one else can get to me.",
      "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
      "I eat like a pig and have bad manners.",
      "I think anyone who's nice to me is hiding evil intent.",
      "I don't like to bathe.",
      "I bluntly say what others are hinting at or hiding."
    ],
    'ideal': [
      "<b>Respect.</b> All people, rich or poor, deserve respect. (Good)",
      "<b>Community.</b> We have to take care of each other, because no one else is going to do it. (Lawful)",
      "<b>Change.</b> The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)",
      "<b>Retribution.</b> The rich need to be shown what life and death are like in the gutters. (Evil)",
      "<b>People.</b> I help the people who help me—that's what keeps us alive. (Neutral)",
      "<b>Aspiration.</b> I'm going to prove that I'm worthy of a better life. (Any)"
    ],
    'bond': [
      "My town or city is my home, and I'll fight to defend it.",
      "I sponsor an orphanage to keep others from enduring what I was forced to endure.",
      "I owe my survival to another urchin who taught me to live on the streets.",
      "I owe a debt I can never repay to the person who took pity on me.",
      "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
      "No one else should have to endure the hardships I've been through."
    ],
    'flaw': [
      "If I'm outnumbered, I will run away from a fight.",
      "Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
      "I will never fully trust anyone other than myself.",
      "I'd rather kill someone in their sleep than fight fair.",
      "It's not stealing if I need it more than someone else.",
      "People who can't take care of themselves get what they deserve."
    ]
  }
};

var background = Object.keys(backgrounds);

// var backgrounds = background2.keys()

// var b1 = backgrounds['Acolyte']
// b1['trait']

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
    return random(6) + random(6) + random(6) + 4;
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
          case 'Mountain Dwarf':
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
          case 'Half Orc':
          case 'Bugbear':
          case 'Centaur':
          case 'Githyanki Gith':
          case 'Goliath':
          case 'Minotaur':
          case 'Orc':
          case 'Longtooth Shifter':
            document.getElementById('strength').innerHTML + 2;
          break;

          case 'Elf':
          case 'Eladrin Elf':
          case 'High Elf':
          case 'Pallid Elf':
          case 'Sea Elf':
          case 'Shadar-kai Elf':
          case 'Wood Elf':
          case 'Drow':
          case 'Halfling':
          case 'Ghostwise Halfling':
          case 'Lightfoot Halfling':
          case 'Lotusden Halfling':
          case 'Stout Halfling':
          case 'Aarakocra':
          case 'Goblin':
          case 'Kenku':
          case 'Kobold':
          case 'Swiftstride Shifter':
          case 'Tabaxi':
            document.getElementById('dexterity').innerHTML + 2;
          break;

          case 'Dwarf':
          case 'Duergar Dwarf':
          case 'Hill Dwarf':
          case 'Mountain Dwarf':
          case 'Genasi':
          case 'Air Genasi':
          case 'Earth Genasi':
          case 'Fire Genasi':
          case 'Water Genasi':
          case 'Hobgoblin':
          case 'Leonin':
          case 'Lizardfolk':
          case 'Loxodon':
          case 'Beasthide Shifter':
          case 'Simic Hybrid':
          case 'Warforged':
            document.getElementById('constitution').innerHTML + 2;
          break;

          case 'Gnome':
          case 'Deep Gnome':
          case 'Forest Gnome':
          case 'Rock Gnome':
          case 'Vedalken':
            document.getElementById('intelligence').innerHTML + 2;
          break;

          case 'Firbolg':
          case 'Githzerai Gith':
          case 'Kalashtar':
          case 'Wildhunt Shifter':
            document.getElementById('wisdom').innerHTML + 2;
          break;

          case 'Half Elf':
          case 'Tielfling':
          case 'Asmodeus Tiefling':
          case 'Baalzebul Tiefling':
          case 'Mammon Tiefling':
          case 'Mephistopheles Tiefling':
          case 'Dispater Tiefling':
          case 'Fierna Tiefling':
          case 'Glasya Tiefling':
          case 'Levistus Tiefling':
          case 'Zariel Tiefling':
          case 'Aasimar':
          case 'Protector Aasimar':
          case 'Fallen Aasimar':
          case 'Scourge Aasimar':
          case 'Changeling':
          case 'Satyr':
          case 'Verdan':
          case 'Yuan-ti Pureblood':
            document.getElementById('charisma').innerHTML + 2;
          break;

          case 'Human':
          case 'Fallen Aasimar':
          case 'Duergar Dwarf':
          case 'Firbolg':
          case 'Earth Genasi':
          case 'Leonin':
          case 'Beasthide Shifter':
          case 'Zariel Tiefling':
          case 'Triton':
          case 'Warforged':
            document.getElementById('strength').innerHTML + 1;
          break;

          case 'Human':
          case 'Deep Gnome':
          case 'Forest Gnome':
          case 'Bugbear':
          case 'Air Genasi':
          case 'Satyr':
          case 'Longtooth Shifter':
          case 'Wildhunt Shifter':
          case 'Dispater Tiefling':
          case 'Glasya Tiefling':
            document.getElementById('dexterity').innerHTML + 1;
          break;

          case 'Stout Halfling':
          case 'Human':
          case 'Rock Gnome':
          case 'Half Orc':
          case 'Scourge Aasimar':
          case 'Sea Elf':
          case 'Shadar-kai Elf':
          case 'Goblin':
          case 'Goliath':
          case 'Minotaur':
          case 'Orc':
          case 'Levistus Tiefling':
          case 'Verdan':
          case 'Triton':
            document.getElementById('constitution').innerHTML + 1;
          break;

          case 'Eladrin Elf':
          case 'High Elf':
          case 'Human':
          case 'Tiefling':
          case 'Asmodeus Tiefling':
          case 'Baalzebul Tiefling':
          case 'Mammon Tiefling':
          case 'Mephistopheles Tiefling':
          case 'Fire Genasi':
          case 'Gith':
          case 'Githyanki Gith':
          case 'Githzerai Gith':
          case 'Hobgoblin':
          case 'Yuan-ti Pureblood':
            document.getElementById('intelligence').innerHTML + 1;
          break;

          case 'Hill Dwarf':
          case 'Pallid Elf':
          case 'Wood Elf':
          case 'Human':
          case 'Aarakocra':
          case 'Aasimar':
          case 'Protector Aasimar':
          case 'Centaur':
          case 'Changeling':
          case 'Water Genasi':
          case 'Ghostwise Halfling':
          case 'Lotusden Halfling':
          case 'Kenku':
          case 'Lizardfolk':
          case 'Loxodon':
          case 'Fierna Tiefling':
          case 'Vedalken':
            document.getElementById('wisdom').innerHTML + 1;
          break;

          case 'Drow':
          case 'Lightfoot Halfling':
          case 'Human':
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
          case 'Kalashtar':
          case 'Swiftstride Shifter':
          case 'Tabaxi':
          case 'Triton':
            document.getElementById('charisma').innerHTML + 1;
          break;

          case 'Kobold':
              document.getElementById('charisma').innerHTML - 2;
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
        case 'Artificer':
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

        var subjob = jobs[job]

        subjob = randomString(subjob);
        document.getElementById('subjobDisplay').innerHTML = subjob;

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

    var personality = backgrounds[background]

    trait = randomString(personality["trait"]);
    document.getElementById('traitDisplay').innerHTML = trait;

    ideal = randomString(personality["ideal"]);
    document.getElementById('idealDisplay').innerHTML = ideal;

    bond = randomString(personality["bond"]);
    document.getElementById('bondDisplay').innerHTML = bond;

    flaw = randomString(personality["flaw"]);
    document.getElementById('flawDisplay').innerHTML = flaw;

}
