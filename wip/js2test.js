(window.webpackJsonp = window.webpackJsonp || []).push([[0], Array(41).concat([function(e) {
    e.exports = {
        options: {
            initialisation: "{$lizardtraits=}{$goliathtraits=}{$kenkuname=}{$beard=}{$sphy1=}{$sphy2=}{$quirks=}{%str=9}{%dex=9}{%con=9}{%int=9}{%wis=9}{%cha=9}{height}{weight}{worship}{hair}{eyecolor}{tendencies}{skin}{face}{race}{occupation}{hooks}{traits}{specialphysical}{quirks}{forcealign}"
        },
        output: {
            description: {
                name: "{$name}",
                kenkuname: "{$kenkuname}",
                age: "{%age}",
                gender: "{$gender}",
                race: "{$race}",
                occupation: "{$occupation}",
                pronounMinus: "{$minPro}",
                pronounCapit: "{$majPro}"
            },
            physical: {
                hair: "{$hair}",
                eyes: "{$eyecolor} eyes",
                skin: "{$skin}{$skintype}",
                height: "{%height}",
                build: "{$build} build",
                face: "{$face} face{$beard}",
                special1: "{$sphy1}",
                special2: "{$sphy2}"
            },
            alignment: {
                good: "{%good}",
                moralneutral: "{%moralneutral}",
                evil: "{%evil}",
                lawful: "{%lawful}",
                ethicalneutral: "{%ethicalneutral}",
                chaotic: "{%chaotic}"
            },
            relationship: {
                orientation: "{orientation}",
                status: "{relationshipstatus}"
            },
            religion: {
                description: [{
                    w: 8,
                    v: "{$majPro}{$worship} worships {$god}{$goddescr}"
                }, {
                    w: 1,
                    v: "{$majPro}doesn't worship any god."
                }]
            },
            ptraits: {
                traitslizards: "{$lizardtraits}",
                traitsgoliaths: "{$goliathtraits}",
                traits1: "{$traits1}",
                traits2: "{$traits2}"
            },
            pquirks: {
                description: "{$quirks}"
            },
            hook: {
                description: "{$hook}"
            },
            abilities: {
                str: "{%str}",
                dex: "{%dex}",
                con: "{%con}",
                int: "{%int}",
                wis: "{%wis}",
                cha: "{%cha}"
            }
        }
    }
}, , , , , , , , , , , , , , function(e) {
    e.exports = {
        name: "dnd-generator",
        version: "0.3.0",
        private: !0,
        dependencies: {
            react: "^16.6.0",
            "react-dom": "^16.6.0",
            "react-scripts": "git+https://github.com/Cellule/dnd-generator-react-scripts.git",
            typescript: "^3.2.2"
        },
        scripts: {
            start: "react-scripts start",
            build: "react-scripts build",
            test: "mocha -r ./mocha-setup src/**/*.spec.ts",
            eject: "react-scripts eject"
        },
        eslintConfig: {
            extends: "react-app"
        },
        browserslist: [">0.2%", "not dead", "not ie <= 11", "not op_mini all"],
        devDependencies: {
            "@types/chai": "^4.1.7",
            "@types/mocha": "^5.2.5",
            "@types/node": "^10.12.18",
            "@types/react": "^16.7.20",
            "@types/react-bootstrap": "^0.32.15",
            "@types/react-dom": "^16.0.11",
            "@types/webpack-env": "^1.13.7",
            bootstrap: "^3.3.7",
            chai: "^4.2.0",
            mocha: "^5.2.0",
            "react-bootstrap": "^0.32.4",
            "ts-node": "^8.0.2"
        }
    }
}, , , , , function(e, a, n) {
    e.exports = n(399)
}, , , , , function(e, a, n) {}, , , function(e, a, n) {
    var o = {
        "./aasimarevilquirk.json": 69,
        "./aasimargoodorevil.json": 70,
        "./aasimargoodquirk.json": 71,
        "./abstractword.json": 72,
        "./age.json": 73,
        "./ageBonus.json": 74,
        "./alignment.json": 75,
        "./aliment.json": 76,
        "./amonster.json": 77,
        "./animaltat.json": 78,
        "./archdevil.json": 79,
        "./atattooadj.json": 80,
        "./attractiveness.json": 81,
        "./badfacemod.json": 82,
        "./badlooking.json": 83,
        "./badsmell.json": 84,
        "./beard.json": 85,
        "./beardlength.json": 86,
        "./beardshape.json": 87,
        "./bodypart.json": 88,
        "./bodypart1.json": 89,
        "./bodypart2.json": 90,
        "./bodyparttat.json": 91,
        "./brand.json": 92,
        "./class.json": 93,
        "./collection.json": 94,
        "./color.json": 95,
        "./contest.json": 96,
        "./degree.json": 97,
        "./degree2.json": 98,
        "./demongod.json": 99,
        "./devilgod.json": 100,
        "./dragonborngender.json": 101,
        "./dragonbornname.json": 102,
        "./dragongod.json": 103,
        "./dragonhair.json": 104,
        "./dragonquirks.json": 105,
        "./dragons.json": 106,
        "./dragonskin.json": 107,
        "./drowgod.json": 108,
        "./drowquirks.json": 109,
        "./dwarfgender.json": 110,
        "./dwarfgod.json": 111,
        "./dwarfquirks.json": 112,
        "./dwarfsurname.json": 113,
        "./elfgender.json": 114,
        "./elfgod.json": 115,
        "./elfquirks.json": 116,
        "./elfskin.json": 117,
        "./elfsurname.json": 118,
        "./entertainer.json": 119,
        "./evilgod.json": 120,
        "./evilworship.json": 121,
        "./extrafinger.json": 122,
        "./eyecolor.json": 123,
        "./face.json": 124,
        "./faceshape.json": 125,
        "./feathertexture.json": 126,
        "./female.json": 127,
        "./femaledwarfname.json": 128,
        "./femaleelfname.json": 129,
        "./femalegnomename1.json": 130,
        "./femalegnomename2.json": 131,
        "./femalegnomename3.json": 132,
        "./femalegnomename4.json": 133,
        "./femalehalflingname.json": 134,
        "./femalehumanname.json": 135,
        "./femaleorcname.json": 136,
        "./femaletritonname.json": 137,
        "./firbolgquirk.json": 138,
        "./firbolgskin.json": 139,
        "./forcealign.json": 140,
        "./frequency.json": 141,
        "./furniture.json": 142,
        "./gender.json": 143,
        "./getevilgod.json": 144,
        "./gnomegender.json": 145,
        "./gnomegod.json": 146,
        "./gnomequirks.json": 147,
        "./goblinname.json": 148,
        "./goliathadj.json": 149,
        "./goliathanimalaction.json": 150,
        "./goliathanimalnoun.json": 151,
        "./goliathcraftaction.json": 152,
        "./goliathcraftnoun.json": 153,
        "./goliathfightingaction.json": 154,
        "./goliathfightingnoun.json": 155,
        "./goliathhair.json": 156,
        "./goliathmysticaction.json": 157,
        "./goliathmysticnoun.json": 158,
        "./goliathname.json": 159,
        "./goliathnoun.json": 160,
        "./goliathquirks.json": 161,
        "./goliathtraits1.json": 162,
        "./goodface.json": 163,
        "./goodfacemod.json": 164,
        "./goodgod.json": 165,
        "./goodlooking.json": 166,
        "./goodorevil.json": 167,
        "./goodsmell.json": 168,
        "./hair.json": 169,
        "./hairColor.json": 170,
        "./hairLength.json": 171,
        "./hairType.json": 172,
        "./halfelfgender.json": 173,
        "./halfelfskin.json": 174,
        "./halflinggender.json": 175,
        "./halflinggod.json": 176,
        "./halflingsurname.json": 177,
        "./halforcgender.json": 178,
        "./halforcskin.json": 179,
        "./halfquirks.json": 180,
        "./head.json": 181,
        "./height.json": 182,
        "./hiCha.json": 183,
        "./hiCon.json": 184,
        "./hiDex.json": 185,
        "./hiInt.json": 186,
        "./hiStr.json": 187,
        "./hiWis.json": 188,
        "./highattractiveness.json": 189,
        "./hooks.json": 190,
        "./hooks1.json": 191,
        "./hooks2.json": 192,
        "./humangender.json": 193,
        "./humangod.json": 194,
        "./humanskin.json": 195,
        "./humansurname.json": 196,
        "./inheritance.json": 197,
        "./kenkucolor.json": 198,
        "./kenkuname.json": 199,
        "./kenkunameanimal.json": 200,
        "./kenkunamefighting.json": 201,
        "./kenkunamemetal.json": 202,
        "./kenkunamequiet.json": 203,
        "./kenkuquirks.json": 204,
        "./kenkuskin.json": 205,
        "./language.json": 206,
        "./learned.json": 207,
        "./lesserNobility.json": 208,
        "./lightweight.json": 209,
        "./lizardcolors.json": 210,
        "./lizardgender.json": 211,
        "./lizardquirks.json": 212,
        "./lizardskin.json": 213,
        "./lizardtraits1.json": 214,
        "./longbeard.json": 215,
        "./longbeard1.json": 216,
        "./lowCha.json": 217,
        "./lowCon.json": 218,
        "./lowDex.json": 219,
        "./lowInt.json": 220,
        "./lowStr.json": 221,
        "./lowWis.json": 222,
        "./male.json": 223,
        "./maledwarfname.json": 224,
        "./maleelfname.json": 225,
        "./malegnomename1.json": 226,
        "./malegnomename2.json": 227,
        "./malegnomename3.json": 228,
        "./malegnomename4.json": 229,
        "./malehalflingname.json": 230,
        "./malehumanname.json": 231,
        "./maleorcname.json": 232,
        "./maletritonname.json": 233,
        "./martial.json": 234,
        "./martialfinesse.json": 235,
        "./martialranged.json": 236,
        "./martialweapon.json": 237,
        "./medCha.json": 238,
        "./medCon.json": 239,
        "./medDex.json": 240,
        "./medInt.json": 241,
        "./medStr.json": 242,
        "./medWis.json": 243,
        "./medusa.json": 244,
        "./medusahair.json": 245,
        "./medusaname.json": 246,
        "./medusaveil.json": 247,
        "./militaryquirk.json": 248,
        "./missingeye.json": 249,
        "./missingfingers.json": 250,
        "./missinglimb.json": 251,
        "./mod.json": 252,
        "./monster.json": 253,
        "./monster1.json": 254,
        "./monster2.json": 255,
        "./mundaneobject.json": 256,
        "./naturequirk.json": 257,
        "./nonhumanskin.json": 258,
        "./normallooking.json": 259,
        "./occupation.json": 260,
        "./orcgender.json": 261,
        "./orcgod.json": 262,
        "./orcskin.json": 263,
        "./orcsurname.json": 264,
        "./organisation.json": 265,
        "./orientation.json": 266,
        "./personality.json": 267,
        "./petanimal.json": 268,
        "./petname.json": 269,
        "./petname1.json": 270,
        "./piercingnumber.json": 271,
        "./poorquirk.json": 272,
        "./precious.json": 273,
        "./preciousitem.json": 274,
        "./profession.json": 275,
        "./professional.json": 276,
        "./quirks.json": 277,
        "./race.json": 278,
        "./raceallergy.json": 279,
        "./racedwarf.json": 280,
        "./raceelf.json": 281,
        "./racegnome.json": 282,
        "./racehalfling.json": 283,
        "./randomquirks.json": 284,
        "./randomtraits1.json": 285,
        "./randomtraits2.json": 286,
        "./relationship.json": 287,
        "./relationshipstatus.json": 288,
        "./religiousquirk.json": 289,
        "./richquirk.json": 290,
        "./rl.json": 291,
        "./rlb.json": 292,
        "./scaletexture.json": 293,
        "./simplefinesse.json": 294,
        "./simpleranged.json": 295,
        "./simpleweapon.json": 296,
        "./size.json": 297,
        "./skin.json": 298,
        "./skinTexture.json": 299,
        "./skinTone.json": 300,
        "./snakecolor.json": 301,
        "./specialphysical.json": 302,
        "./specialphysical1.json": 303,
        "./specialphysical2.json": 304,
        "./strongweight.json": 305,
        "./tabaxifirstname.json": 306,
        "./tabaxilastname.json": 307,
        "./tabaxiname.json": 308,
        "./tabaxinounname.json": 309,
        "./tabaxinumbername.json": 310,
        "./tabaxiobsession.json": 311,
        "./tabaxiquirks.json": 312,
        "./tabaxiskin.json": 313,
        "./tabaxiskincolor.json": 314,
        "./tabaxiskinpattern.json": 315,
        "./tabaxiskintexture.json": 316,
        "./tattoo.json": 317,
        "./tattooadj.json": 318,
        "./tendencies.json": 319,
        "./texttat.json": 320,
        "./tieflingevilname.json": 321,
        "./tieflinggoodname.json": 322,
        "./tieflinggoodorevil.json": 323,
        "./tieflingname.json": 324,
        "./tieflingneutralname.json": 325,
        "./tieflingskin.json": 326,
        "./traits.json": 327,
        "./tritongender.json": 328,
        "./tritonhair.json": 329,
        "./tritonhaircolor.json": 330,
        "./tritonquirks.json": 331,
        "./tritonskin.json": 332,
        "./tritonsurname.json": 333,
        "./underclass.json": 334,
        "./weapon.json": 335,
        "./weight.json": 336,
        "./weirdQuirk.json": 337,
        "./werebeast.json": 338,
        "./whitehair.json": 339,
        "./workClass.json": 340,
        "./worship.json": 341
    };
    function r(e) {
        var a = i(e);
        return n(a)
    }
    function i(e) {
        var a = o[e];
        if (!(a + 1)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND", n
        }
        return a
    }
    r.keys = function() {
        return Object.keys(o)
    }, r.resolve = i, e.exports = r, r.id = 68
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to spread misery and despair. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to spread lies and fear. }{%int+3}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to spread sadness and sorrow. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to raise an army of followers. }{%cha+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to eradicate good aasimars. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to eradicate followers of good gods. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks mindless destruction }{%chaotic+3}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{%good+3}{%moralneutral-2}{%evil-3}{aasimargoodquirk}"
    }, {
        w: 2,
        v: "{%good-3}{%moralneutral-2}{%evil+3}{getevilgod}{aasimarevilquirk}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to spread compassion and hope. }{%good+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to spread knowledge and wisdom. }{%int+2}{%wis+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to spread humor and joy. }{%cha+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to teach people how to fight against evil. }{%int+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to forgive and reform evil creatures. }{%good+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to eradicate evil in all its forms. }{%chaotic+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to destroy fallen aasimars. }{%chaotic+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to punish wrongdoers. }{%lawful+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to nurture }{$quirks+$minPoss}{$quirks+community and help it grow.}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+seeks to undo all of evil's misdeeds. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$aword=bravery}"
    }, {
        w: 1,
        v: "{$aword=fear}"
    }, {
        w: 1,
        v: "{$aword=pain}"
    }, {
        w: 1,
        v: "{$aword=freedom}"
    }, {
        w: 1,
        v: "{$aword=happiness}"
    }, {
        w: 1,
        v: "{$aword=joy}"
    }, {
        w: 1,
        v: "{$aword=death}"
    }, {
        w: 1,
        v: "{$aword=life}"
    }, {
        w: 1,
        v: "{$aword=daylight}"
    }, {
        w: 1,
        v: "{$aword=night}"
    }, {
        w: 1,
        v: "{$aword=philosophy}"
    }, {
        w: 1,
        v: "{$aword=music}"
    }, {
        w: 1,
        v: "{$aword=love}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%age=14}{%dex+2}{%height-25}{$beard=}"
    }, {
        w: 1,
        v: "{%age=15}{%dex+2}{%height-8}{$beard=}"
    }, {
        w: 1,
        v: "{%age=16}{%dex+1}{%height-5}{$beard=}"
    }, {
        w: 2,
        v: "{%age=18}{%str+1}{%con+1}{%height-2}{$beard=}"
    }, {
        w: 2,
        v: "{%age=20}{%str+2}{%con+2}"
    }, {
        w: 2,
        v: "{%age=23}{%str+2}{%con+2}"
    }, {
        w: 2,
        v: "{%age=26}{%str+2}{%con+2}"
    }, {
        w: 2,
        v: "{%age=29}{%str+1}{%con+1}"
    }, {
        w: 2,
        v: "{%age=32}{%str+1}{%con+1}"
    }, {
        w: 2,
        v: "{%age=35}"
    }, {
        w: 2,
        v: "{%age=38}{%int+1}{%wis+1}{%dex-1}"
    }, {
        w: 2,
        v: "{%age=41}{%int+1}{%wis+1}{%dex-1}"
    }, {
        w: 2,
        v: "{%age=44}{%int+1}{%wis+1}{%dex-1}"
    }, {
        w: 2,
        v: "{%age=47}{%int+1}{%wis+1}{%str-1}{%con-1}{%dex-1}"
    }, {
        w: 2,
        v: "{%age=50}{%int+1}{%wis+1}{%str-1}{%con-1}{%dex-1}"
    }, {
        w: 2,
        v: "{%age=53}{%int+1}{%wis+2}{%str-1}{%con-1}{%dex-1}"
    }, {
        w: 1,
        v: "{%age=56}{%int+1}{%wis+2}{%str-1}{%con-1}{%dex-1}{%height-3}"
    }, {
        w: 1,
        v: "{%age=59}{%int+1}{%wis+2}{%str-1}{%con-1}{%dex-1}{%height-3}"
    }, {
        w: 1,
        v: "{%age=62}{%int+2}{%wis+3}{%str-2}{%con-2}{%dex-2}{%height-3}"
    }, {
        w: 1,
        v: "{%age=65}{%int+2}{%wis+3}{%str-2}{%con-2}{%dex-2}{%height-3}"
    }, {
        w: 1,
        v: "{%age=70}{%int+2}{%wis+3}{%str-2}{%con-2}{%dex-2}{%height-3}"
    }, {
        w: 1,
        v: "{%age=75}{%int+1}{%wis+3}{%str-2}{%con-2}{%dex-2}{%height-3}"
    }, {
        w: 1,
        v: "{%age=80}{%int+1}{%wis+3}{%str-2}{%con-3}{%dex-3}{%height-5}"
    }, {
        w: 1,
        v: "{%age=90}{%wis+4}{%str-3}{%con-3}{%dex-4}{%height-5}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%age+%age}{%age+%age}"
    }, {
        w: 1,
        v: "{%age+%age}{%age+%age}{%age+1}"
    }, {
        w: 1,
        v: "{%age+%age}{%age+%age}{%age+2}"
    }, {
        w: 1,
        v: "{%age+%age}{%age+%age}{%age+3}"
    }, {
        w: 1,
        v: "{%age+%age}{%age+%age}{%age+4}"
    }, {
        w: 1,
        v: "{%age+%age}{%age+%age}{%age+5}"
    }, {
        w: 1,
        v: "{%age+%age}{%age+%age}{%age+6}"
    }, {
        w: 1,
        v: "{%age+%age}{%age+%age}{%age+7}"
    }, {
        w: 1,
        v: "{%age+%age}{%age+%age}{%age+8}"
    }, {
        w: 1,
        v: "{%age+%age}{%age+%age}{%age+9}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{%align=0}"
    }, {
        w: 3,
        v: "{%align=1}"
    }, {
        w: 4,
        v: "{%align=2}"
    }, {
        w: 3,
        v: "{%align=3}"
    }, {
        w: 2,
        v: "{%align=4}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$sphy2+nuts}"
    }, {
        w: 1,
        v: "{$sphy2+bread}"
    }, {
        w: 4,
        v: "{$sphy2+gluten}"
    }, {
        w: 1,
        v: "{$sphy2+rice}"
    }, {
        w: 1,
        v: "{$sphy2+carrots}"
    }, {
        w: 1,
        v: "{$sphy2+fruits}"
    }, {
        w: 1,
        v: "{$sphy2+apples}"
    }, {
        w: 1,
        v: "{$sphy2+berries}"
    }, {
        w: 1,
        v: "{$sphy2+tomatoes}"
    }, {
        w: 1,
        v: "{$sphy2+strawberries}"
    }, {
        w: 1,
        v: "{$sphy2+blueberries}"
    }, {
        w: 1,
        v: "{$sphy2+milk}"
    }, {
        w: 1,
        v: "{$sphy2+eggs}"
    }, {
        w: 1,
        v: "{$sphy2+sheep}"
    }, {
        w: 1,
        v: "{$sphy2+chicken}"
    }, {
        w: 1,
        v: "{$sphy2+peanuts}"
    }, {
        w: 1,
        v: "{$sphy2+beef}"
    }, {
        w: 1,
        v: "{$sphy2+meat}"
    }, {
        w: 1,
        v: "{$sphy2+red meat}"
    }, {
        w: 1,
        v: "{$sphy2+salmon}"
    }, {
        w: 1,
        v: "{$sphy2+fish}"
    }, {
        w: 1,
        v: "{$sphy2+crab}"
    }, {
        w: 1,
        v: "{$sphy2+scallops}"
    }, {
        w: 1,
        v: "{$sphy2+sea fruits}"
    }, {
        w: 1,
        v: "{$sphy2+lobster}"
    }]
}, function(e) {
    e.exports = [{
        w: 13,
        v: "{$monster=a }{monster1}"
    }, {
        w: 2,
        v: "{$monster=an }{monster2}"
    }]
}, function(e) {
    e.exports = [{
        w: 8,
        v: "{$sphy1+tattoo of a skull}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a wolf}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a bear}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of an eagle}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a falcon}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a fish}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a shark}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a cobra}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a snake}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a crocodile}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a deer}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a gorilla}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of an elephant}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a horse}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a rabbit}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a goat}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a gecko}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a lizard}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a turtle}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a panther}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a dog}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a cat}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a scorpion}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a scarab}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a spider}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a fly}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a rat}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a mouse}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a fox}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a tiger}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of a lion}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of an armadillo}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a dragon}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a wyvern}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of an octopus}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a medusa}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a minotaur}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a manatee}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a giraffe}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a koala}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of an unicorn}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of an umber hulk}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a ghost}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a demon}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a wurm}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a zombie}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a jellyfish}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a chimera}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a kraken}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$devil=the archdevil Bel}"
    }, {
        w: 1,
        v: "{$devil=the archdevil Dispater}"
    }, {
        w: 1,
        v: "{$devil=the archdevil Mammon}"
    }, {
        w: 1,
        v: "{$devil=the archdevil Fierna}"
    }, {
        w: 1,
        v: "{$devil=the archdevil Belial}"
    }, {
        w: 1,
        v: "{$devil=the archdevil Prince Levistus}"
    }, {
        w: 1,
        v: "{$devil=the archdevil Glasya}"
    }, {
        w: 1,
        v: "{$devil=the archdevil Baalzebul}"
    }, {
        w: 1,
        v: "{$devil=the archdevil Mephistopheles}"
    }, {
        w: 1,
        v: "{$devil=the archdevil Asmodeus}"
    }]
}, function(e) {
    e.exports = [{
        w: 10,
        v: "{$tadj=a }"
    }, {
        w: 4,
        v: "{$tadj=an unfinished }"
    }, {
        w: 2,
        v: "{$tadj=a small }"
    }, {
        w: 2,
        v: "{$tadj=a large }"
    }, {
        w: 2,
        v: "{$tadj=a tiny }"
    }, {
        w: 1,
        v: "{$tadj=an elaborate }"
    }, {
        w: 1,
        v: "{$tadj=a beautiful }"
    }, {
        w: 1,
        v: "{$tadj=a badly done }"
    }, {
        w: 1,
        v: "{$tadj=a colorful }"
    }, {
        w: 1,
        v: "{$tadj=a complicated }"
    }, {
        w: 1,
        v: "{$tadj=a shocking }"
    }, {
        w: 1,
        v: "{$tadj=a provocative }"
    }, {
        w: 1,
        v: "{$tadj=a bland }"
    }, {
        w: 1,
        v: "{$tadj=an exceptional }"
    }]
}, function(e) {
    e.exports = [{
        w: 6,
        v: "{goodfacemod}{goodlooking}{$faceshape+$mod}"
    }, {
        w: 14,
        v: "{goodlooking}"
    }, {
        w: 4,
        v: "{badfacemod}{badlooking}{$faceshape+$mod}"
    }, {
        w: 10,
        v: "{badlooking}"
    }, {
        w: 8,
        v: "{mod}{normallooking}{$faceshape+$mod}"
    }, {
        w: 30,
        v: "{normallooking}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$mod=slightly }{%cha-1}"
    }, {
        w: 2,
        v: "{$mod=very }{%cha-2}"
    }, {
        w: 1,
        v: "{$mod=incredibly }{%cha-3}"
    }, {
        w: 1,
        v: "{$mod=extremely }{%cha-4}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$attractiveness=asymmetrical}"
    }, {
        w: 1,
        v: "{$attractiveness=ugly}"
    }, {
        w: 1,
        v: "{$attractiveness=repulsive}"
    }, {
        w: 1,
        v: "{$attractiveness=pockmarked}"
    }, {
        w: 1,
        v: "{$attractiveness=hideous}"
    }, {
        w: 1,
        v: "{$attractiveness=repugnant}"
    }, {
        w: 1,
        v: "{$attractiveness=bulbous}"
    }, {
        w: 1,
        v: "{$attractiveness=awful}"
    }, {
        w: 1,
        v: "{$attractiveness=disfigured}"
    }, {
        w: 1,
        v: "{$attractiveness=revolting}"
    }, {
        w: 1,
        v: "{$attractiveness=disgusting}"
    }, {
        w: 2,
        v: "{$attractiveness=creepy}"
    }, {
        w: 3,
        v: "{$attractiveness=mediocre}"
    }]
}, function(e) {
    e.exports = [{
        w: 8,
        v: "{$sphy1+of sweat}"
    }, {
        w: 2,
        v: "{$sphy1+of dogs}"
    }, {
        w: 2,
        v: "{$sphy1+of garbage}"
    }, {
        w: 2,
        v: "{$sphy1+of horses}"
    }, {
        w: 2,
        v: "{$sphy1+of sewage}"
    }, {
        w: 1,
        v: "{$sphy1+of cabbage}"
    }, {
        w: 1,
        v: "{$sphy1+of sour milk}"
    }, {
        w: 2,
        v: "{$sphy1+of dirt}"
    }, {
        w: 4,
        v: "{$sphy1+of unwashed clothes}"
    }, {
        w: 4,
        v: "{$sphy1+of tobacco}"
    }, {
        w: 4,
        v: "{$sphy1+of alcohol}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{beardlength}{beardshape}"
    }, {
        w: 3,
        v: "{$beard=}"
    }]
}, function(e) {
    e.exports = [{
        w: 6,
        v: "{$beard= with a very short}"
    }, {
        w: 8,
        v: "{$beard= with a short}"
    }, {
        w: 6,
        v: "{$beard= with a medium}"
    }, {
        w: 3,
        v: "{$beard= with a long}"
    }, {
        w: 2,
        v: "{$beard= with a long, braided}"
    }, {
        w: 1,
        v: "{$beard= with a very long}"
    }, {
        w: 1,
        v: "{$beard= with a very long, braided}"
    }, {
        w: 1,
        v: "{$beard= with a gigantic}"
    }, {
        w: 1,
        v: "{$beard= with a gigantic, braided}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$beard+ chinstrap beard}"
    }, {
        w: 1,
        v: "{$beard+ neckbeard}"
    }, {
        w: 12,
        v: "{$beard+ beard}"
    }, {
        w: 2,
        v: "{$beard+ squared beard}"
    }, {
        w: 2,
        v: "{$beard+ goatee}"
    }, {
        w: 2,
        v: "{$beard+ spotty beard}"
    }, {
        w: 2,
        v: "{$beard+ sideburns}"
    }, {
        w: 1,
        v: "{$beard+ goat patch beard}"
    }, {
        w: 1,
        v: "{$beard+ soul patch}"
    }, {
        w: 1,
        v: "{$beard+ german goatee}"
    }, {
        w: 1,
        v: "{$beard+ mutton chops beard}"
    }, {
        w: 1,
        v: "{$beard+ chin strap}"
    }, {
        w: 1,
        v: "{$beard+ van dyke beard}"
    }, {
        w: 1,
        v: "{$beard+ handlebar moustache}"
    }, {
        w: 1,
        v: "{$beard+ pencil moustache}"
    }, {
        w: 1,
        v: "{$beard+ fu manchu moustache}"
    }, {
        w: 5,
        v: "{$beard+ moustache}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{rl}{$bp=$rl}{bodypart1}"
    }, {
        w: 1,
        v: "{bodypart2}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        v: "{$bp+arm}"
    }, {
        w: 5,
        v: "{$bp+hand}"
    }, {
        w: 1,
        v: "{$bp+leg}"
    }, {
        w: 2,
        v: "{$bp+foot}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$bp=neck}"
    }, {
        w: 3,
        v: "{$bp=chest}"
    }, {
        w: 4,
        v: "{head}"
    }, {
        w: 3,
        v: "{$bp=back}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{rl}{$bp=$rl}{bodypart1}"
    }, {
        w: 1,
        v: "{bodypart2}"
    }]
}, function(e) {
    e.exports = [{
        w: 8,
        v: "{$sphy1+slave}"
    }, {
        w: 2,
        v: "{$sphy1+felon}"
    }, {
        w: 5,
        v: "{$sphy1+prisoner}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        name: "Artificier",
        v: "{$occupation=artificier}{medStr}{medDex}{medCon}{hiInt}{medWis}{medCha}{richquirk}{weirdQuirk}{kenkunamemetal}"
    }, {
        w: 3,
        name: "Barbarian",
        v: "{$occupation=barbarian}{hiStr}{medDex}{hiCon}{lowInt}{lowWis}{medCha}{%moralneutral+2}{%chaotic+2}{%lawful-1}{poorquirk}{militaryquirk}{kenkunamefighting}"
    }, {
        w: 4,
        name: "Bard",
        v: "{$occupation=bard}{medStr}{hiDex}{medCon}{hiInt}{lowWis}{hiCha}{richquirk}{kenkuname}"
    }, {
        w: 9,
        name: "Cleric",
        v: "{$occupation=cleric}{medStr}{lowDex}{hiCon}{medInt}{hiWis}{medCha}{religiousquirk}{kenkuname}"
    }, {
        w: 2,
        name: "Druid",
        v: "{$occupation=druid}{lowStr}{medDex}{medCon}{medInt}{hiWis}{medCha}{%good-2}{%evil-2}{%lawful-2}{%chaotic-2}{%moralneutral+2}{%ethicalneutral+2}{religiousquirk}{naturequirk}{kenkunameanimal}"
    }, {
        w: 12,
        name: "Fighter",
        v: "{$occupation=fighter}{hiStr}{medDex}{hiCon}{lowInt}{medWis}{medCha}{militaryquirk}{kenkunamefighting}"
    }, {
        w: 6,
        name: "Monk",
        v: "{$occupation=monk}{hiStr}{hiDex}{hiCon}{medInt}{hiWis}{medCha}{%ethicalneutral-2}{%chaotic-2}{%lawful+2}{militaryquirk}{kenkunamequiet}"
    }, {
        w: 3,
        name: "Mystic",
        v: "{$occupation=mystic}{lowStr}{medDex}{lowCon}{hiInt}{hiWis}{medCha}{weirdQuirk}{kenkunamequiet}"
    }, {
        w: 8,
        name: "Paladin",
        v: "{$occupation=paladin}{hiStr}{lowDex}{hiCon}{lowInt}{medWis}{hiCha}{%evil-3}{%chaotic-1}{%lawful+3}{%good+3}{religiousquirk}{militaryquirk}{kenkuname}"
    }, {
        w: 3,
        name: "Ranger",
        v: "{$occupation=ranger}{medStr}{hiDex}{hiCon}{lowInt}{medWis}{medCha}{%moralneutral+2}{%chaotic+2}{naturequirk}{kenkunameanimal}"
    }, {
        w: 5,
        name: "Rogue",
        v: "{$occupation=rogue}{lowStr}{hiDex}{medCon}{hiInt}{lowWis}{medCha}{%chaotic+3}{%evil+1}{poorquirk}{kenkuname}"
    }, {
        w: 2,
        name: "Sorcerer",
        v: "{$occupation=sorcerer}{lowStr}{medDex}{medCon}{medInt}{medWis}{hiCha}{weirdQuirk}{kenkunamequiet}"
    }, {
        w: 2,
        name: "Warlock",
        v: "{$occupation=warlock}{lowStr}{medDex}{medCon}{medInt}{lowWis}{hiCha}{%evil+1}{weirdQuirk}{kenkuname}"
    }, {
        w: 3,
        name: "Wizard",
        v: "{$occupation=wizard}{lowStr}{medDex}{medCon}{hiInt}{medWis}{lowCha}{richquirk}{weirdQuirk}{kenkunamequiet}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$quirks+old pennies. }"
    }, {
        w: 1,
        v: "{$quirks+teeth from cadavers. }{%evil+1}"
    }, {
        w: 2,
        v: "{$quirks+cute rocks. }"
    }, {
        w: 2,
        v: "{$quirks+weird bones. }"
    }, {
        w: 2,
        v: "{$quirks+bottle corks. }"
    }, {
        w: 2,
        v: "{$quirks+iridescent feathers. }"
    }, {
        w: 2,
        v: "{$quirks+sea shells. }"
    }, {
        w: 2,
        v: "{$quirks+dried rose petals. }"
    }, {
        w: 1,
        v: "{$quirks+tiny animal skulls. }{%evil+1}"
    }, {
        w: 2,
        v: "{$quirks+handkerchiefs. }"
    }, {
        w: 2,
        v: "{$quirks+buttons. }"
    }, {
        w: 2,
        v: "{$quirks+thimbles. }"
    }, {
        w: 2,
        v: "{$quirks+labels. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$color=blue}"
    }, {
        w: 1,
        v: "{$color=red}"
    }, {
        w: 1,
        v: "{$color=green}"
    }, {
        w: 1,
        v: "{$color=yellow}"
    }, {
        w: 1,
        v: "{$color=pink}"
    }, {
        w: 1,
        v: "{$color=brown}"
    }, {
        w: 2,
        v: "{$color=black}"
    }, {
        w: 2,
        v: "{$color=white}"
    }, {
        w: 1,
        v: "{$color=gray}"
    }, {
        w: 1,
        v: "{$color=purple}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$hook+horse riding contest}"
    }, {
        w: 2,
        v: "{$hook+drinking competition}"
    }, {
        w: 2,
        v: "{$hook+hunting competition}"
    }, {
        w: 2,
        v: "{$hook+monster slaying tournament}"
    }, {
        w: 2,
        v: "{$hook+shooting contest}"
    }, {
        w: 4,
        v: "{$hook+fighting competition}"
    }, {
        w: 2,
        v: "{$hook+hot coals race}"
    }, {
        w: 2,
        v: "{$hook+book reading competition}"
    }, {
        w: 2,
        v: "{$hook+grand melee tournament}"
    }, {
        w: 2,
        v: "{$hook+pie eating competition}"
    }, {
        w: 3,
        v: "{$hook+race}"
    }, {
        w: 2,
        v: "{$hook+pumpkin tossing contest}"
    }, {
        w: 2,
        v: "{$hook+rock throwing competition}"
    }, {
        w: 2,
        v: "{$hook+tree trunk tossing contest}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$degree=a slight }"
    }, {
        w: 2,
        v: "{$degree=a light }"
    }, {
        w: 5,
        v: "{$degree=a }"
    }, {
        w: 2,
        v: "{$degree=an impressive }"
    }, {
        w: 2,
        v: "{$degree=a heavy }"
    }, {
        w: 1,
        v: "{$degree=a severe }"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$degree=lightly }"
    }, {
        w: 2,
        v: "{$degree=slightly }"
    }, {
        w: 5,
        v: "{$degree=}"
    }, {
        w: 3,
        v: "{$degree=heavily }"
    }, {
        w: 2,
        v: "{$degree=severely }"
    }, {
        w: 1,
        v: "{$degree=mightily }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$god=the demon prince Baphomet}{%chaotic+3}{%evil+3}{$goddescr=, Demon lord of minotaurs, beasts, vengeance. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=the demon prince Demogorgon, the Iron Duke}{%chaotic+3}{%evil+3}{$goddescr=, Prince of Demons. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=the demon prince Eltab}{%chaotic+3}{%evil+3}{$goddescr=, Demon lord of hatred, retribution. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=the demon prince Graz'zt}{%chaotic+3}{%evil+3}{$goddescr=, Demon lord of darkness, seduction, guilde, debauchery. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=the demon prince Kostchtchie}{%chaotic+3}{%evil+3}{$goddescr=, Demon lord of frost giants, wrath, rage. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=the demon prince Orcus}{%chaotic+3}{%evil+3}{$goddescr=, Demon lord of undeath. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=the demon prince Pazrael, the Archduchess }{%chaotic+3}{%evil+3}{$goddescr=, Demon lord of evil flying creatures, corruption. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=the demon prince Sess'Innek, the Slug Archduke}{%chaotic+3}{%evil+3}{$goddescr=, Demon lord of khaastas, lizard kings, civilization, domination. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=the demon prince Yeenoghu}{%chaotic+3}{%evil+3}{$goddescr=, Demon lord of gnolls. (Chaotic Evil)}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$god=the archdevil Bel}{%lawful+2}{%evil+3}{$goddescr=, Lord of the First. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=the archdevil Dispater, the Iron Duke}{%lawful+2}{%evil+3}{$goddescr=, Lord of the Second. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=the archdevil Mammon}{%lawful+2}{%evil+3}{$goddescr=, Lord of the Third. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=the archdevil Fierna}{%lawful+2}{%evil+3}{$goddescr=, Lord of the Fourth. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=the archdevil Belial}{%lawful+2}{%evil+3}{$goddescr=, Lord of the Fourth. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=the archdevil Prince Levistus}{%lawful+2}{%evil+3}{$goddescr=, Lord of the Fifth. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=the archdevil Glasya, the Archduchess}{%lawful+2}{%evil+3}{$goddescr=, Lord of the Sixth. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=the archdevil Baalzebul, the Slug Archduke}{%lawful+2}{%evil+3}{$goddescr=, Lord of the Seventh. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=the archdevil Mephistopheles}{%lawful+2}{%evil+3}{$goddescr=, Lord of the Eighth. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=the archdevil Asmodeus}{%lawful+2}{%evil+3}{$goddescr=, Lord of the Ninth. (Lawful Evil)}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{dragonbornname}"
    }, {
        w: 1,
        v: "{female}{dragonbornname}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Askook}"
    }, {
        w: 1,
        v: "{$name=Avrae}"
    }, {
        w: 1,
        v: "{$name=Benarg}"
    }, {
        w: 1,
        v: "{$name=Beroan}"
    }, {
        w: 1,
        v: "{$name=Bevurth}"
    }, {
        w: 1,
        v: "{$name=Caydranth}"
    }, {
        w: 1,
        v: "{$name=Chenth}"
    }, {
        w: 1,
        v: "{$name=Cheselth}"
    }, {
        w: 1,
        v: "{$name=Ciamathy}"
    }, {
        w: 1,
        v: "{$name=Corinth}"
    }, {
        w: 1,
        v: "{$name=Daganae}"
    }, {
        w: 1,
        v: "{$name=Deventh}"
    }, {
        w: 1,
        v: "{$name=Erfolg}"
    }, {
        w: 1,
        v: "{$name=Franae}"
    }, {
        w: 1,
        v: "{$name=Fundor}"
    }, {
        w: 1,
        v: "{$name=Galzra}"
    }, {
        w: 1,
        v: "{$name=Gavarenth}"
    }, {
        w: 1,
        v: "{$name=Ginarth}"
    }, {
        w: 1,
        v: "{$name=Gretiem}"
    }, {
        w: 1,
        v: "{$name=Inilthud}"
    }, {
        w: 1,
        v: "{$name=Jura}"
    }, {
        w: 1,
        v: "{$name=Kaleth}"
    }, {
        w: 1,
        v: "{$name=Kamirth}"
    }, {
        w: 1,
        v: "{$name=Kimerth}"
    }, {
        w: 1,
        v: "{$name=Kindrael}"
    }, {
        w: 1,
        v: "{$name=Livjatan}"
    }, {
        w: 1,
        v: "{$name=Livjatan}"
    }, {
        w: 1,
        v: "{$name=Malliath}"
    }, {
        w: 1,
        v: "{$name=Margantha}"
    }, {
        w: 1,
        v: "{$name=Mesarth}"
    }, {
        w: 1,
        v: "{$name=Miath}"
    }, {
        w: 1,
        v: "{$name=Mirelth}"
    }, {
        w: 1,
        v: "{$name=Mnerolth}"
    }, {
        w: 1,
        v: "{$name=Morelth}"
    }, {
        w: 1,
        v: "{$name=Mylanth}"
    }, {
        w: 1,
        v: "{$name=Nessonth}"
    }, {
        w: 1,
        v: "{$name=Norrutus}"
    }, {
        w: 1,
        v: "{$name=Peddrenth}"
    }, {
        w: 1,
        v: "{$name=Perenth}"
    }, {
        w: 1,
        v: "{$name=Perrath}"
    }, {
        w: 1,
        v: "{$name=Porath}"
    }, {
        w: 1,
        v: "{$name=Rasenth}"
    }, {
        w: 1,
        v: "{$name=Rusorth}"
    }, {
        w: 1,
        v: "{$name=Salanth}"
    }, {
        w: 1,
        v: "{$name=Serelath}"
    }, {
        w: 1,
        v: "{$name=Sirath}"
    }, {
        w: 1,
        v: "{$name=Sorth}"
    }, {
        w: 1,
        v: "{$name=Syralth}"
    }, {
        w: 1,
        v: "{$name=Syrreth}"
    }, {
        w: 1,
        v: "{$name=Talurth}"
    }, {
        w: 1,
        v: "{$name=Tavrinth}"
    }, {
        w: 1,
        v: "{$name=Tenelth}"
    }, {
        w: 1,
        v: "{$name=Tessith}"
    }, {
        w: 1,
        v: "{$name=Tulvir}"
    }, {
        w: 1,
        v: "{$name=Tulvir}"
    }, {
        w: 1,
        v: "{$name=Umbaroth}"
    }, {
        w: 1,
        v: "{$name=Vinarth}"
    }, {
        w: 1,
        v: "{$name=Vaatnilaus}"
    }, {
        w: 1,
        v: "{$name=Reluthkrein}"
    }, {
        w: 1,
        v: "{$name=Ammunro}"
    }, {
        w: 1,
        v: "{$name=Aakfaasoth}"
    }, {
        w: 1,
        v: "{$name=Kulgutfrul}"
    }, {
        w: 1,
        v: "{$name=Wahlfusbel}"
    }, {
        w: 1,
        v: "{$name=Kestmuzven}"
    }, {
        w: 1,
        v: "{$name=Qethondbex}"
    }, {
        w: 1,
        v: "{$name=Praanviik}"
    }, {
        w: 1,
        v: "{$name=Qothfunt}"
    }, {
        w: 1,
        v: "{$name=Diiniddein}"
    }, {
        w: 1,
        v: "{$name=Feyngraagkol}"
    }, {
        w: 1,
        v: "{$name=Gronmonwol}"
    }, {
        w: 1,
        v: "{$name=Kaanhaaldir}"
    }, {
        w: 1,
        v: "{$name=Lehkraskol}"
    }, {
        w: 1,
        v: "{$name=Nosbelbeyn}"
    }, {
        w: 1,
        v: "{$name=Vengraagmon}"
    }, {
        w: 1,
        v: "{$name=Ruthloninhus}"
    }, {
        w: 1,
        v: "{$name=Viirtu}"
    }, {
        w: 1,
        v: "{$name=Kulmey}"
    }, {
        w: 1,
        v: "{$name=Haalsaanthur}"
    }, {
        w: 1,
        v: "{$name=Suldrembrod}"
    }, {
        w: 1,
        v: "{$name=Koorshulkril}"
    }, {
        w: 1,
        v: "{$name=Pahbelrii}"
    }, {
        w: 1,
        v: "{$name=Kolpelgeh}"
    }, {
        w: 1,
        v: "{$name=Kriistbodrem}"
    }, {
        w: 1,
        v: "{$name=Malkiimkrin}"
    }, {
        w: 1,
        v: "{$name=Strundrogkrii}"
    }, {
        w: 1,
        v: "{$name=Faadbii}"
    }, {
        w: 1,
        v: "{$name=Leinol}"
    }, {
        w: 1,
        v: "{$name=Achuak}"
    }, {
        w: 1,
        v: "{$name=Aryte}"
    }, {
        w: 1,
        v: "{$name=Baeshra}"
    }, {
        w: 1,
        v: "{$name=Darastrix}"
    }, {
        w: 1,
        v: "{$name=Garurt}"
    }, {
        w: 1,
        v: "{$name=Irhtos}"
    }, {
        w: 1,
        v: "{$name=Jhank}"
    }, {
        w: 1,
        v: "{$name=Kepesk}"
    }, {
        w: 1,
        v: "{$name=Kethend}"
    }, {
        w: 1,
        v: "{$name=Korth}"
    }, {
        w: 1,
        v: "{$name=Kosj}"
    }, {
        w: 1,
        v: "{$name=Kothar}"
    }, {
        w: 1,
        v: "{$name=Litrix}"
    }, {
        w: 1,
        v: "{$name=Mirik}"
    }, {
        w: 1,
        v: "{$name=Othokent}"
    }, {
        w: 1,
        v: "{$name=Sauriv}"
    }, {
        w: 1,
        v: "{$name=Throden}"
    }, {
        w: 1,
        v: "{$name=Thurkear}"
    }, {
        w: 1,
        v: "{$name=Usk}"
    }, {
        w: 1,
        v: "{$name=Valignat}"
    }, {
        w: 1,
        v: "{$name=Vargach}"
    }, {
        w: 1,
        v: "{$name=Verthica}"
    }, {
        w: 1,
        v: "{$name=Vutha}"
    }, {
        w: 1,
        v: "{$name=Vyth}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{$god=Asgorath}{$goddescr=, the Ninefold Dragon, head deity of dragonkind.(All alignments)}"
    }, {
        w: 1,
        v: "{$god=Astilabor}{%moralneutral+2}{%lawful+2}{$goddescr=, Goddess of acquisitiveness, status, wealth. (Lawful Neutral)}"
    }, {
        w: 1,
        v: "{$god=Bahamut}{%lawful+2}{%good+2}{$goddescr=, God of good dragons, wind, wisdom, justice. (Lawful Good)}"
    }, {
        w: 1,
        v: "{$god=Faluzure}{%chaotic+2}{%evil+2}{$goddescr=, God of decay, undeath, exhaustion. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=Garyx}{%chaotic+2}{%evil+2}{$goddescr=, God of fire, destruction, renewal. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=Hlal}{%chaotic+2}{%moralneutral+2}{$goddescr=, Goddess of humor, tricks, messages. (Chaotic Neutral)}"
    }, {
        w: 1,
        v: "{$god=Kereska}{%good+2}{%ethicalneutral+2}{$goddescr=, Goddess of dragon magic and magical creativity. (Neutral Good)}"
    }, {
        w: 1,
        v: "{$god=Lendys}{%moralneutral+2}{%lawful+2}{$goddescr=, God of balance, justice. (Lawful Neutral)}"
    }, {
        w: 1,
        v: "{$god=Tamara}{%lawful+2}{%good+2}{$goddescr=, Goddess of life, light, mercy. (Lawful Good)}"
    }, {
        w: 1,
        v: "{$god=Task}{%chaotic+2}{%moralneutral+2}{$goddescr=, God of greed, selfishness. (Chaotic Neutral)}"
    }, {
        w: 4,
        v: "{$god=Zorquan}{$goddescr=, God of the essence of dragons.(All alignments)}"
    }, {
        w: 15,
        v: "{humangod}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$hair=a spiked head and }"
    }, {
        w: 3,
        v: "{$hair=a ridged head and }"
    }, {
        w: 3,
        v: "{$hair=a crested head and }"
    }, {
        w: 3,
        v: "{$hair=a bumpy head and }"
    }, {
        w: 3,
        v: "{$hair=a plated head and }"
    }, {
        w: 1,
        v: "{$hair=a bright frill and }"
    }, {
        w: 1,
        v: "{$hair=a colorful frill and }"
    }, {
        w: 1,
        v: "{$hair=a dark frill and }"
    }, {
        w: 1,
        v: "{$hair=a bony frill and }"
    }, {
        w: 8,
        v: "{$hair=a smooth head and }"
    }]
}, function(e) {
    e.exports = [{
        w: 18,
        v: "{$quirks+}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+never asks for help. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+seeks extreme mastery of what }{$quirks+$minPro}{$quirks+does. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+sees other races as inferior. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+keeps all of }{$quirks+$minPoss}{$quirks+promises. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+despises fear and cowardice. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+treats adversaries with respect. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+values honor above all. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+cannot use }{$quirks+$minPoss}{$quirks+breath weapon. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a secret dragon master. }"
    }, {
        w: 6,
        v: "{$quirks+$majPro}{$quirks+values }{$quirks+$minPoss}{$quirks+clan above anything else. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$dragon=black}"
    }, {
        w: 1,
        v: "{$dragon=blue}"
    }, {
        w: 1,
        v: "{$dragon=brass}"
    }, {
        w: 1,
        v: "{$dragon=bronze}"
    }, {
        w: 1,
        v: "{$dragon=copper}"
    }, {
        w: 1,
        v: "{$dragon=gold}"
    }, {
        w: 1,
        v: "{$dragon=green}"
    }, {
        w: 1,
        v: "{$dragon=red}"
    }, {
        w: 1,
        v: "{$dragon=silver}"
    }, {
        w: 1,
        v: "{$dragon=white}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{dragons}{scaletexture}{$skin=$scaletexture}{$skin+ }{$skin+$dragon}{$skintype= scales}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{$god=Lolth}{%chaotic+2}{%evil+2}{$goddescr=, Goddess of drows, spiders, darkness, chaos, evil, assassination. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=Ghaunadaur}{%chaotic+2}{%evil+2}{$goddescr=, Patron of abominations, oozes, slimes, jellies, outcasts, ropers and rebels. (Chaotic Evil)}"
    }, {
        w: 4,
        v: "{humangod}"
    }]
}, function(e) {
    e.exports = [{
        w: 30,
        v: "{$quirks+}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is disgusted by human architecture. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+doesn't understand patriarchal society. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+feels more comfortable when away from the sun. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is secretly captivated by humans. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a deep knowledge of ancient secrets. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a deep knowledge of ancient magic. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+knows all the best ways to torture someone. }{%evil+3}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+enjoys torturing small animals. }{%evil+2}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+will only speak common if absolutely forced to. }"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+never knows the current time and date. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ uses terms from a different language as }{$quirks+$minPro}{$quirks+speaks. }"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+is always late. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is deeply xenophobic. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{maledwarfname}{dwarfsurname}"
    }, {
        w: 1,
        v: "{female}{femaledwarfname}{dwarfsurname}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$god=Moradin}{$goddescr=, God of dwarves, creation, smithing, protection, metalcraft, stonework. (Lawful Good)}"
    }, {
        w: 2,
        v: "{humangod}"
    }]
}, function(e) {
    e.exports = [{
        w: 40,
        v: "{$quirks+}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+always has a good ale at hand. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+feels ill at ease in open spaces. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is more comfortable underground. }"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ hums old dwarven songs. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+misses the world as }{$quirks+$minPro}{$quirks+used to know it. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is strongly rooted within tradition. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+will take on any bet while drinking. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is always covered in dirt. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has almost never been above ground. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+doesn't feel comfortable when away from }{$quirks+$minPoss}{$quirks+axe. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+is always seen sharpening }{$quirks+$minPoss}{$quirks+axe. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+cannot take a halfling seriously. }"
    }, {
        w: 5,
        v: "{$quirks+$majPro}{$quirks+harbours a deep hatred of orcs and goblins. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has gemcutting as a hobby. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is secretly captivated by elves. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Strongmaster}"
    }, {
        w: 1,
        v: "{$name+ Brightmaker}"
    }, {
        w: 1,
        v: "{$name+ Minebreaker}"
    }, {
        w: 1,
        v: "{$name+ Earthdelver}"
    }, {
        w: 1,
        v: "{$name+ Brightmaster}"
    }, {
        w: 1,
        v: "{$name+ Forgemaul}"
    }, {
        w: 1,
        v: "{$name+ Bonegrip}"
    }, {
        w: 1,
        v: "{$name+ Forgegrog}"
    }, {
        w: 1,
        v: "{$name+ Brickbrow}"
    }, {
        w: 1,
        v: "{$name+ Frostmail}"
    }, {
        w: 1,
        v: "{$name+ Metalbreaker}"
    }, {
        w: 1,
        v: "{$name+ Sapphirebraids}"
    }, {
        w: 1,
        v: "{$name+ Magmabrew}"
    }, {
        w: 1,
        v: "{$name+ Hammermail}"
    }, {
        w: 1,
        v: "{$name+ Underfury}"
    }, {
        w: 1,
        v: "{$name+ Kegshaper}"
    }, {
        w: 1,
        v: "{$name+ Mountainriver}"
    }, {
        w: 1,
        v: "{$name+ Merrybringer}"
    }, {
        w: 1,
        v: "{$name+ Goldback}"
    }, {
        w: 1,
        v: "{$name+ Drakegut}"
    }, {
        w: 1,
        v: "{$name+ Steelback}"
    }, {
        w: 1,
        v: "{$name+ Wraithmail}"
    }, {
        w: 1,
        v: "{$name+ Noblebringer}"
    }, {
        w: 1,
        v: "{$name+ Reddigger}"
    }, {
        w: 1,
        v: "{$name+ Wyvernflayer}"
    }, {
        w: 1,
        v: "{$name+ Hardhelm}"
    }, {
        w: 1,
        v: "{$name+ Bottlehelm}"
    }, {
        w: 1,
        v: "{$name+ Smeltmaster}"
    }, {
        w: 1,
        v: "{$name+ Coalgrog}"
    }, {
        w: 1,
        v: "{$name+ Thunderhead}"
    }, {
        w: 1,
        v: "{$name+ Lavashield}"
    }, {
        w: 1,
        v: "{$name+ Bittershaper}"
    }, {
        w: 1,
        v: "{$name+ Thunderdelver}"
    }, {
        w: 1,
        v: "{$name+ Largegut}"
    }, {
        w: 1,
        v: "{$name+ Whitestone}"
    }, {
        w: 1,
        v: "{$name+ Hardcloak}"
    }, {
        w: 1,
        v: "{$name+ Rubyminer}"
    }, {
        w: 1,
        v: "{$name+ Frosthand}"
    }, {
        w: 1,
        v: "{$name+ Pebbleback}"
    }, {
        w: 1,
        v: "{$name+ Blackbender}"
    }, {
        w: 1,
        v: "{$name+ Flintmace}"
    }, {
        w: 1,
        v: "{$name+ Shadowhand}"
    }, {
        w: 1,
        v: "{$name+ Mudbelt}"
    }, {
        w: 1,
        v: "{$name+ Flintgranite}"
    }, {
        w: 1,
        v: "{$name+ Graybelt}"
    }, {
        w: 1,
        v: "{$name+ Barrelchin}"
    }, {
        w: 1,
        v: "{$name+ Bronzehide}"
    }, {
        w: 1,
        v: "{$name+ Bloodgrip}"
    }, {
        w: 1,
        v: "{$name+ Bluntchin}"
    }, {
        w: 1,
        v: "{$name+ Brightbeard}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{maleelfname}{elfsurname}"
    }, {
        w: 1,
        v: "{female}{femaleelfname}{elfsurname}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$god=Angharradh}{$goddescr=, Goddess of spring, fertility, planting, birth, defense, wisdom. (Chaotic Good)}"
    }, {
        w: 3,
        v: "{$god=Corellon Larethian}{$goddescr=, God of elves, magic, music, arts, crafts, war, poetry, bards, warriors. (Chaotic Good)}"
    }, {
        w: 3,
        v: "{humangod}"
    }]
}, function(e) {
    e.exports = [{
        w: 35,
        v: "{$quirks+}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is disgusted by human architecture. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+feels more comfortable while surrounded by nature. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is secretly captivated by dwarves. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a deep knowledge of ancient secrets. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a deep knowledge of ancient magic. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+knows the name of all the local plants. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+will only speak common if absolutely forced to. }"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+never knows the current time and date. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+paints }{goodlooking}{$quirks+$attractiveness}{$quirks+ paintings in }{$quirks+$minPoss}{$quirks+spare time. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ uses terms from a different language as }{$quirks+$minPro}{$quirks+speaks. }"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+is always late. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+has never declared himself an adult. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is deeply xenophobic. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$skin+blueish}"
    }, {
        w: 2,
        v: "{$skin+pink}"
    }, {
        w: 2,
        v: "{$skin+golden}"
    }, {
        w: 2,
        v: "{$skin+silver}"
    }, {
        w: 3,
        v: "{$skin+green}"
    }, {
        w: 2,
        v: "{$skin+copper}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Aeraagamae}"
    }, {
        w: 1,
        v: "{$name+ Aerabriniel}"
    }, {
        w: 1,
        v: "{$name+ Aldarina}"
    }, {
        w: 1,
        v: "{$name+ Aldaviel}"
    }, {
        w: 1,
        v: "{$name+ Bertanonel}"
    }, {
        w: 1,
        v: "{$name+ Birdiir}"
    }, {
        w: 1,
        v: "{$name+ Birlond}"
    }, {
        w: 1,
        v: "{$name+ Cromelon}"
    }, {
        w: 1,
        v: "{$name+ Cromviel}"
    }, {
        w: 1,
        v: "{$name+ Dlaralthor}"
    }, {
        w: 1,
        v: "{$name+ Dlarraithar}"
    }, {
        w: 1,
        v: "{$name+ Elendiir}"
    }, {
        w: 1,
        v: "{$name+ Eleneth}"
    }, {
        w: 1,
        v: "{$name+ Elervir}"
    }, {
        w: 1,
        v: "{$name+ Falavaul}"
    }, {
        w: 1,
        v: "{$name+ Gadilinion}"
    }, {
        w: 1,
        v: "{$name+ Galamin}"
    }, {
        w: 1,
        v: "{$name+ Galarina}"
    }, {
        w: 1,
        v: "{$name+ Galathaniel}"
    }, {
        w: 1,
        v: "{$name+ Garaitinu}"
    }, {
        w: 1,
        v: "{$name+ Gwamiel}"
    }, {
        w: 1,
        v: "{$name+ Haelond}"
    }, {
        w: 1,
        v: "{$name+ Isilielenion}"
    }, {
        w: 1,
        v: "{$name+ Kevadirtinu}"
    }, {
        w: 1,
        v: "{$name+ Kithollal}"
    }, {
        w: 1,
        v: "{$name+ Lantaththar}"
    }, {
        w: 1,
        v: "{$name+ Laranonel}"
    }, {
        w: 1,
        v: "{$name+ Larentansel}"
    }, {
        w: 1,
        v: "{$name+ Lithtaur}"
    }, {
        w: 1,
        v: "{$name+ Maerethar}"
    }, {
        w: 1,
        v: "{$name+ Maltanthir}"
    }, {
        w: 1,
        v: "{$name+ Mithanmae}"
    }, {
        w: 1,
        v: "{$name+ Mithanmyr}"
    }, {
        w: 1,
        v: "{$name+ Mithmirelen}"
    }, {
        w: 1,
        v: "{$name+ Nalllithe}"
    }, {
        w: 1,
        v: "{$name+ Nellynnthar}"
    }, {
        w: 1,
        v: "{$name+ Nhaendrin}"
    }, {
        w: 1,
        v: "{$name+ Noroelwa}"
    }, {
        w: 1,
        v: "{$name+ Orren}"
    }, {
        w: 1,
        v: "{$name+ Orrina}"
    }, {
        w: 1,
        v: "{$name+ Rhuivaul}"
    }, {
        w: 1,
        v: "{$name+ Runelenrin}"
    }, {
        w: 1,
        v: "{$name+ Runlithmae}"
    }, {
        w: 1,
        v: "{$name+ Sharondalan}"
    }, {
        w: 1,
        v: "{$name+ Taldilindar}"
    }, {
        w: 1,
        v: "{$name+ Talraidal}"
    }, {
        w: 1,
        v: "{$name+ Talthanryl}"
    }, {
        w: 1,
        v: "{$name+ Tathviel}"
    }, {
        w: 1,
        v: "{$name+ Wervanion}"
    }, {
        w: 1,
        v: "{$name+ Yraudhen}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        name: "Acrobat",
        v: "{$occupation=acrobat}{%dex+2}{kenkuname}"
    }, {
        w: 1,
        name: "Actor",
        v: "{$occupation=actor}{%cha+2}{kenkuname}"
    }, {
        w: 1,
        name: "Clown",
        v: "{$occupation=clown}{%cha+2}{kenkuname}"
    }, {
        w: 1,
        name: "Dancer",
        v: "{$occupation=dancer}{%dex+2}{%con+2}{kenkuname}"
    }, {
        w: 1,
        name: "Fortune-Teller",
        v: "{$occupation=fortune-teller}{%int+3}{%wis+5}{%cha+1}{kenkuname}"
    }, {
        w: 1,
        name: "Juggler",
        v: "{$occupation=juggler}{%dex+2}{kenkuname}"
    }, {
        w: 1,
        name: "Prestidigitator",
        v: "{$occupation=prestidigitator}{%int+4}{%dex+1}{kenkuname}"
    }, {
        w: 1,
        name: "Funambulist",
        v: "{$occupation=funambulist}{%dex+3}{kenkuname}"
    }, {
        w: 1,
        name: "Storyteller",
        v: "{$occupation=storyteller}{%int+2}{%wis+2}{%cha+2}{kenkuname}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$god=Talos}{%evil+2}{%chaotic+2}{$goddescr=, God of storms, destruction, rebellion, conflagration, earthquakes, vortices. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=Asmodeus}{%lawful+2}{%evil+2}{$goddescr=, God of sin, King of the Nine Hells. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=Bane}{%lawful+2}{%evil+2}{$goddescr=, God of hatred, fear and tiranny. (Lawful Evil)}"
    }, {
        w: 1,
        v: "{$god=Cyric}{%chaotic+2}{%evil+2}{$goddescr=, God of murder, lies, intrigue, strife, deception, illusion. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=Lolth}{%chaotic+2}{%evil+2}{$goddescr=, Goddess of drows, spiders, darkness, chaos, evil, assassination. (Chaotic Evil)}"
    }, {
        w: 1,
        v: "{$god=Shar}{%evil+2}{%ethicalneutral+2}{$goddescr=, Goddess of dark, night, loss, forgetfulness, unrevealed secrets, caverns, dungeons, the Underdark.(NE)}"
    }, {
        w: 2,
        v: "{demongod}"
    }, {
        w: 2,
        v: "{devilgod}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$worship+ claims to worship }{$worship+$god}{$worship+, but secretly}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{$sphy2+has an extra finger on }"
    }, {
        w: 1,
        v: "{$sphy2+has two extra fingers on }"
    }, {
        w: 4,
        v: "{$sphy2+has an extra thumb on }"
    }]
}, function(e) {
    e.exports = [{
        w: 8,
        v: "{$eyecolor=brown}"
    }, {
        w: 4,
        v: "{$eyecolor=blue}"
    }, {
        w: 4,
        v: "{$eyecolor=green}"
    }, {
        w: 2,
        v: "{$eyecolor=golden}"
    }, {
        w: 1,
        v: "{$eyecolor=cyan}"
    }, {
        w: 2,
        v: "{$eyecolor=gray}"
    }, {
        w: 2,
        v: "{$eyecolor=black}"
    }, {
        w: 1,
        v: "{$eyecolor=red}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{faceshape}{attractiveness}{$face=$faceshape}{$face+$attractiveness}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$faceshape=a sharp, }"
    }, {
        w: 3,
        v: "{$faceshape=a round, }"
    }, {
        w: 4,
        v: "{$faceshape=an oval, }"
    }, {
        w: 1,
        v: "{$faceshape=a soft, }"
    }, {
        w: 1,
        v: "{$faceshape=a diamond-shaped, }"
    }, {
        w: 1,
        v: "{$faceshape=a triangular, }"
    }, {
        w: 2,
        v: "{$faceshape=an oblong, }"
    }, {
        w: 2,
        v: "{$faceshape=an edgy, }"
    }, {
        w: 3,
        v: "{$faceshape=a square, }"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$feathertexture=rough}"
    }, {
        w: 1,
        v: "{$feathertexture=smooth}"
    }, {
        w: 1,
        v: "{$feathertexture=shiny}"
    }, {
        w: 1,
        v: "{$feathertexture=lustrous}"
    }, {
        w: 1,
        v: "{$feathertexture=soft}"
    }, {
        w: 1,
        v: "{$feathertexture=fluffy}"
    }, {
        w: 1,
        v: "{$feathertexture=fuzzy}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$gender=female}{%str-1}{%dex+1}{%con-1}{%wis+1}{%cha+1}{$majPoss=Her }{$minPoss=her }{$majPro=She }{$minPro=she }{%height-10}{$workGender=woman}{$minHim=her}{$beard=}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Ahan}"
    }, {
        w: 1,
        v: "{$name=Akag}"
    }, {
        w: 1,
        v: "{$name=Alin}"
    }, {
        w: 1,
        v: "{$name=Anzin}"
    }, {
        w: 1,
        v: "{$name=Askad}"
    }, {
        w: 1,
        v: "{$name=Aznar}"
    }, {
        w: 1,
        v: "{$name=Bali}"
    }, {
        w: 1,
        v: "{$name=Bifund}"
    }, {
        w: 1,
        v: "{$name=Bori}"
    }, {
        w: 1,
        v: "{$name=Dainan}"
    }, {
        w: 1,
        v: "{$name=Disanz}"
    }, {
        w: 1,
        v: "{$name=Duli}"
    }, {
        w: 1,
        v: "{$name=Dwali}"
    }, {
        w: 1,
        v: "{$name=Fari}"
    }, {
        w: 1,
        v: "{$name=Frasanz}"
    }, {
        w: 1,
        v: "{$name=Gili}"
    }, {
        w: 1,
        v: "{$name=Gimli}"
    }, {
        w: 1,
        v: "{$name=Kada}"
    }, {
        w: 1,
        v: "{$name=Kali}"
    }, {
        w: 1,
        v: "{$name=Khainan}"
    }, {
        w: 1,
        v: "{$name=Kilmul}"
    }, {
        w: 1,
        v: "{$name=Latelch}"
    }, {
        w: 1,
        v: "{$name=Latur}"
    }, {
        w: 1,
        v: "{$name=Luri}"
    }, {
        w: 1,
        v: "{$name=Mili}"
    }, {
        w: 1,
        v: "{$name=Orin}"
    }, {
        w: 1,
        v: "{$name=Rainan}"
    }, {
        w: 1,
        v: "{$name=Rinarv}"
    }, {
        w: 1,
        v: "{$name=Sanzir}"
    }, {
        w: 1,
        v: "{$name=Shari}"
    }, {
        w: 1,
        v: "{$name=Telchal}"
    }, {
        w: 1,
        v: "{$name=Telchar}"
    }, {
        w: 1,
        v: "{$name=Tharkar}"
    }, {
        w: 1,
        v: "{$name=Thori}"
    }, {
        w: 1,
        v: "{$name=Thrinain}"
    }, {
        w: 1,
        v: "{$name=Thrinan}"
    }, {
        w: 1,
        v: "{$name=Thrinarv}"
    }, {
        w: 1,
        v: "{$name=Throri}"
    }, {
        w: 1,
        v: "{$name=Turi}"
    }, {
        w: 1,
        v: "{$name=Ukhund}"
    }, {
        w: 1,
        v: "{$name=Umrag}"
    }, {
        w: 1,
        v: "{$name=Umund}"
    }, {
        w: 1,
        v: "{$name=Urdul}"
    }, {
        w: 1,
        v: "{$name=Urin}"
    }, {
        w: 1,
        v: "{$name=Urun}"
    }, {
        w: 1,
        v: "{$name=Zaghak}"
    }, {
        w: 1,
        v: "{$name=Zigam}"
    }, {
        w: 1,
        v: "{$name=Zigil}"
    }, {
        w: 1,
        v: "{$name=Zigiml}"
    }, {
        w: 1,
        v: "{$name=Zuri}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Adriel}"
    }, {
        w: 1,
        v: "{$name=Alotel}"
    }, {
        w: 1,
        v: "{$name=Aloth}"
    }, {
        w: 1,
        v: "{$name=Altalas}"
    }, {
        w: 1,
        v: "{$name=Alwel}"
    }, {
        w: 1,
        v: "{$name=Amas}"
    }, {
        w: 1,
        v: "{$name=Anelyen}"
    }, {
        w: 1,
        v: "{$name=Anen}"
    }, {
        w: 1,
        v: "{$name=Aninyel}"
    }, {
        w: 1,
        v: "{$name=Anithren}"
    }, {
        w: 1,
        v: "{$name=Aredhel}"
    }, {
        w: 1,
        v: "{$name=Arelel}"
    }, {
        w: 1,
        v: "{$name=Arelen}"
    }, {
        w: 1,
        v: "{$name=Arwel}"
    }, {
        w: 1,
        v: "{$name=Atiel}"
    }, {
        w: 1,
        v: "{$name=Celaser}"
    }, {
        w: 1,
        v: "{$name=Earwenen}"
    }, {
        w: 1,
        v: "{$name=Ellaloth}"
    }, {
        w: 1,
        v: "{$name=Elwindith}"
    }, {
        w: 1,
        v: "{$name=Elyel}"
    }, {
        w: 1,
        v: "{$name=Enwenen}"
    }, {
        w: 1,
        v: "{$name=Eris}"
    }, {
        w: 1,
        v: "{$name=Erwel}"
    }, {
        w: 1,
        v: "{$name=Finde}"
    }, {
        w: 1,
        v: "{$name=Findelye}"
    }, {
        w: 1,
        v: "{$name=Finduilye}"
    }, {
        w: 1,
        v: "{$name=Galaser}"
    }, {
        w: 1,
        v: "{$name=Gilme}"
    }, {
        w: 1,
        v: "{$name=Gilmirie}"
    }, {
        w: 1,
        v: "{$name=Idrinden}"
    }, {
        w: 1,
        v: "{$name=Ilmindel}"
    }, {
        w: 1,
        v: "{$name=Iming}"
    }, {
        w: 1,
        v: "{$name=Imithren}"
    }, {
        w: 1,
        v: "{$name=Imrodel}"
    }, {
        w: 1,
        v: "{$name=Inding}"
    }, {
        w: 1,
        v: "{$name=Inyelyen}"
    }, {
        w: 1,
        v: "{$name=Iririen}"
    }, {
        w: 1,
        v: "{$name=Ladrilye}"
    }, {
        w: 1,
        v: "{$name=Laserie}"
    }, {
        w: 1,
        v: "{$name=Minimrie}"
    }, {
        w: 1,
        v: "{$name=Neladrie}"
    }, {
        w: 1,
        v: "{$name=Nelalwe}"
    }, {
        w: 1,
        v: "{$name=Nelaser}"
    }, {
        w: 1,
        v: "{$name=Nerduilye}"
    }, {
        w: 1,
        v: "{$name=Nimlalwe}"
    }, {
        w: 1,
        v: "{$name=Nimlenwe}"
    }, {
        w: 1,
        v: "{$name=Serilye}"
    }, {
        w: 1,
        v: "{$name=Serode}"
    }, {
        w: 1,
        v: "{$name=Tanye}"
    }, {
        w: 1,
        v: "{$name=Tarielye}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Galmiphi}"
    }, {
        w: 1,
        v: "{$name=Galssa}"
    }, {
        w: 1,
        v: "{$name=Grenceli}"
    }, {
        w: 1,
        v: "{$name=Heswyse}"
    }, {
        w: 1,
        v: "{$name=Inahani}"
    }, {
        w: 1,
        v: "{$name=Selmyn}"
    }, {
        w: 1,
        v: "{$name=Tifaceli}"
    }, {
        w: 1,
        v: "{$name=Trigani}"
    }, {
        w: 1,
        v: "{$name=Carzyre}"
    }, {
        w: 1,
        v: "{$name=Celgyra}"
    }, {
        w: 1,
        v: "{$name=Celniana}"
    }, {
        w: 1,
        v: "{$name=Celwyn}"
    }, {
        w: 1,
        v: "{$name=Celza}"
    }, {
        w: 1,
        v: "{$name=Xyrowyn}"
    }, {
        w: 1,
        v: "{$name=Banmila}"
    }, {
        w: 1,
        v: "{$name=Xamyra}"
    }, {
        w: 1,
        v: "{$name=Xaphina}"
    }, {
        w: 1,
        v: "{$name=Xyroli}"
    }, {
        w: 1,
        v: "{$name=Xyronoa}"
    }, {
        w: 1,
        v: "{$name=Fenkasys}"
    }, {
        w: 1,
        v: "{$name=Fenna}"
    }, {
        w: 1,
        v: "{$name=Fenphina}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Fensys}"
    }, {
        w: 1,
        v: "{$name+ Lilfyx}"
    }, {
        w: 1,
        v: "{$name+ Mybys}"
    }, {
        w: 1,
        v: "{$name+ Mydira}"
    }, {
        w: 1,
        v: "{$name+ Niniana}"
    }, {
        w: 1,
        v: "{$name+ Odagyra}"
    }, {
        w: 1,
        v: "{$name+ Inaxi}"
    }, {
        w: 1,
        v: "{$name+ Isodira}"
    }, {
        w: 1,
        v: "{$name+ Isona}"
    }, {
        w: 1,
        v: "{$name+ Isowyse}"
    }, {
        w: 1,
        v: "{$name+ Jolin}"
    }, {
        w: 1,
        v: "{$name+ Jomila}"
    }, {
        w: 1,
        v: "{$name+ Jonove}"
    }, {
        w: 1,
        v: "{$name+ Kriceli}"
    }, {
        w: 1,
        v: "{$name+ Lilbys}"
    }, {
        w: 1,
        v: "{$name+ Ylodysa}"
    }, {
        w: 1,
        v: "{$name+ Ylofyx}"
    }, {
        w: 1,
        v: "{$name+ Yohani}"
    }, {
        w: 1,
        v: "{$name+ Yowyse}"
    }, {
        w: 1,
        v: "{$name+ Yoxis}"
    }, {
        w: 1,
        v: "{$name+ Odakini}"
    }, {
        w: 1,
        v: "{$name+ Odawyn}"
    }, {
        w: 1,
        v: "{$name+ Orwyse}"
    }, {
        w: 1,
        v: "{$name+ Pritra}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Qihani}"
    }, {
        w: 1,
        v: "{$name+ Qili}"
    }, {
        w: 1,
        v: "{$name+ Qimyra}"
    }, {
        w: 1,
        v: "{$name+ Qitra}"
    }, {
        w: 1,
        v: "{$name+ Receli}"
    }, {
        w: 1,
        v: "{$name+ Remyra}"
    }, {
        w: 1,
        v: "{$name+ Rosikini}"
    }, {
        w: 1,
        v: "{$name+ Sakini}"
    }, {
        w: 1,
        v: "{$name+ Zanikini}"
    }, {
        w: 1,
        v: "{$name+ Zinlin}"
    }, {
        w: 1,
        v: "{$name+ Daphikini}"
    }, {
        w: 1,
        v: "{$name+ Trimyra}"
    }, {
        w: 1,
        v: "{$name+ Trina}"
    }, {
        w: 1,
        v: "{$name+ Triniana}"
    }, {
        w: 1,
        v: "{$name+ Urikini}"
    }, {
        w: 1,
        v: "{$name+ Venzyre}"
    }, {
        w: 1,
        v: "{$name+ Voci}"
    }, {
        w: 1,
        v: "{$name+ Wropine}"
    }, {
        w: 1,
        v: "{$name+ Xahana}"
    }, {
        w: 1,
        v: "{$name+ Elkini}"
    }, {
        w: 1,
        v: "{$name+ Elsys}"
    }, {
        w: 1,
        v: "{$name+ Elwyse}"
    }, {
        w: 1,
        v: "{$name+ Faeza}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Xyroqys}"
    }, {
        w: 1,
        v: "{$name+ Wrossa}"
    }, {
        w: 1,
        v: "{$name+ Klorhana}"
    }, {
        w: 1,
        v: "{$name+ Elphina}"
    }, {
        w: 1,
        v: "{$name+ Daphici}"
    }, {
        w: 1,
        v: "{$name+ Carkasys}"
    }, {
        w: 1,
        v: "{$name+ Carnove}"
    }, {
        w: 1,
        v: "{$name+ Carnove}"
    }, {
        w: 1,
        v: "{$name+ Carwyse}"
    }, {
        w: 1,
        v: "{$name+ Zinnove}"
    }, {
        w: 1,
        v: "{$name+ Zinyaris}"
    }, {
        w: 1,
        v: "{$name+ Qiqaryn}"
    }, {
        w: 1,
        v: "{$name+ Satina}"
    }, {
        w: 1,
        v: "{$name+ Helmyn}"
    }, {
        w: 1,
        v: "{$name+ Aluroe}"
    }, {
        w: 1,
        v: "{$name+ Banceli}"
    }, {
        w: 1,
        v: "{$name+ Banfyx}"
    }, {
        w: 1,
        v: "{$name+ Trinove}"
    }, {
        w: 1,
        v: "{$name+ Nyhani}"
    }, {
        w: 1,
        v: "{$name+ Queyore}"
    }, {
        w: 1,
        v: "{$name+ Spiqys}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Amilly}"
    }, {
        w: 1,
        v: "{$name=Amuby}"
    }, {
        w: 1,
        v: "{$name=Apphine}"
    }, {
        w: 1,
        v: "{$name=Ararl}"
    }, {
        w: 1,
        v: "{$name=Arget}"
    }, {
        w: 1,
        v: "{$name=Audreyn}"
    }, {
        w: 1,
        v: "{$name=Belba}"
    }, {
        w: 1,
        v: "{$name=Benne}"
    }, {
        w: 1,
        v: "{$name=Cecie}"
    }, {
        w: 1,
        v: "{$name=Cilia}"
    }, {
        w: 1,
        v: "{$name=Cora}"
    }, {
        w: 1,
        v: "{$name=Damay}"
    }, {
        w: 1,
        v: "{$name=Dora}"
    }, {
        w: 1,
        v: "{$name=Dralda}"
    }, {
        w: 1,
        v: "{$name=Drigold}"
    }, {
        w: 1,
        v: "{$name=Ecil}"
    }, {
        w: 1,
        v: "{$name=Ecin}"
    }, {
        w: 1,
        v: "{$name=Elanth}"
    }, {
        w: 1,
        v: "{$name=Elix}"
    }, {
        w: 1,
        v: "{$name=Endell}"
    }, {
        w: 1,
        v: "{$name=Ervina}"
    }, {
        w: 1,
        v: "{$name=Eryn}"
    }, {
        w: 1,
        v: "{$name=Esmell}"
    }, {
        w: 1,
        v: "{$name=Fira}"
    }, {
        w: 1,
        v: "{$name=Gilla}"
    }, {
        w: 1,
        v: "{$name=Hily}"
    }, {
        w: 1,
        v: "{$name=Ilian}"
    }, {
        w: 1,
        v: "{$name=Ilin}"
    }, {
        w: 1,
        v: "{$name=Jane}"
    }, {
        w: 1,
        v: "{$name=Joane}"
    }, {
        w: 1,
        v: "{$name=Kater}"
    }, {
        w: 1,
        v: "{$name=Lalia}"
    }, {
        w: 1,
        v: "{$name=Maly}"
    }, {
        w: 1,
        v: "{$name=Mara}"
    }, {
        w: 1,
        v: "{$name=Marger}"
    }, {
        w: 1,
        v: "{$name=Mary}"
    }, {
        w: 1,
        v: "{$name=Mentha}"
    }, {
        w: 1,
        v: "{$name=Merey}"
    }, {
        w: 1,
        v: "{$name=Metha}"
    }, {
        w: 1,
        v: "{$name=Mimay}"
    }, {
        w: 1,
        v: "{$name=Mira}"
    }, {
        w: 1,
        v: "{$name=Munda}"
    }, {
        w: 1,
        v: "{$name=Negerd}"
    }, {
        w: 1,
        v: "{$name=Peony}"
    }, {
        w: 1,
        v: "{$name=Prantha}"
    }, {
        w: 1,
        v: "{$name=Prose}"
    }, {
        w: 1,
        v: "{$name=Rimay}"
    }, {
        w: 1,
        v: "{$name=Rine}"
    }, {
        w: 1,
        v: "{$name=Rose}"
    }, {
        w: 1,
        v: "{$name=Sybeatr}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Adelaide}"
    }, {
        w: 1,
        v: "{$name=Aleida}"
    }, {
        w: 1,
        v: "{$name=Alexia}"
    }, {
        w: 1,
        v: "{$name=Alianor}"
    }, {
        w: 1,
        v: "{$name=Alice}"
    }, {
        w: 1,
        v: "{$name=Alys}"
    }, {
        w: 1,
        v: "{$name=Amelia}"
    }, {
        w: 1,
        v: "{$name=Amity}"
    }, {
        w: 1,
        v: "{$name=Anastas}"
    }, {
        w: 1,
        v: "{$name=Angmar}"
    }, {
        w: 1,
        v: "{$name=Anne}"
    }, {
        w: 1,
        v: "{$name=Arabella}"
    }, {
        w: 1,
        v: "{$name=Ariana}"
    }, {
        w: 1,
        v: "{$name=Ariel}"
    }, {
        w: 1,
        v: "{$name=Atheena}"
    }, {
        w: 1,
        v: "{$name=Avery}"
    }, {
        w: 1,
        v: "{$name=Ayleth}"
    }, {
        w: 1,
        v: "{$name=Beatrix}"
    }, {
        w: 1,
        v: "{$name=Benevolence}"
    }, {
        w: 1,
        v: "{$name=Bertha}"
    }, {
        w: 1,
        v: "{$name=Bess}"
    }, {
        w: 1,
        v: "{$name=Beverly}"
    }, {
        w: 1,
        v: "{$name=Brangian}"
    }, {
        w: 1,
        v: "{$name=Brunhild}"
    }, {
        w: 1,
        v: "{$name=Catherine}"
    }, {
        w: 1,
        v: "{$name=Catrain}"
    }, {
        w: 1,
        v: "{$name=Cedany}"
    }, {
        w: 1,
        v: "{$name=Cristiana}"
    }, {
        w: 1,
        v: "{$name=Diana}"
    }, {
        w: 1,
        v: "{$name=Dimia}"
    }, {
        w: 1,
        v: "{$name=Duraina}"
    }, {
        w: 1,
        v: "{$name=Eleanor}"
    }, {
        w: 1,
        v: "{$name=Eliose}"
    }, {
        w: 1,
        v: "{$name=Elizabeth}"
    }, {
        w: 1,
        v: "{$name=Ella}"
    }, {
        w: 1,
        v: "{$name=Ellyn}"
    }, {
        w: 1,
        v: "{$name=Emeline}"
    }, {
        w: 1,
        v: "{$name=Emma}"
    }, {
        w: 1,
        v: "{$name=Enndolynn}"
    }, {
        w: 1,
        v: "{$name=Esme}"
    }, {
        w: 1,
        v: "{$name=Evelyn}"
    }, {
        w: 1,
        v: "{$name=Farfelee}"
    }, {
        w: 1,
        v: "{$name=Fay}"
    }, {
        w: 1,
        v: "{$name=Fira}"
    }, {
        w: 1,
        v: "{$name=Gith}"
    }, {
        w: 1,
        v: "{$name=Gloriana}"
    }, {
        w: 1,
        v: "{$name=Godiva}"
    }, {
        w: 1,
        v: "{$name=Guinevere}"
    }, {
        w: 1,
        v: "{$name=Gussalen}"
    }, {
        w: 1,
        v: "{$name=Gwendolyn}"
    }, {
        w: 1,
        v: "{$name=Harley}"
    }, {
        w: 1,
        v: "{$name=Helena}"
    }, {
        w: 1,
        v: "{$name=Helewys}"
    }, {
        w: 1,
        v: "{$name=Hildegard}"
    }, {
        w: 1,
        v: "{$name=Idla}"
    }, {
        w: 1,
        v: "{$name=Isabel}"
    }, {
        w: 1,
        v: "{$name=Isolde}"
    }, {
        w: 1,
        v: "{$name=Ivy}"
    }, {
        w: 1,
        v: "{$name=Jacquelyn}"
    }, {
        w: 1,
        v: "{$name=Jade}"
    }, {
        w: 1,
        v: "{$name=Janet}"
    }, {
        w: 1,
        v: "{$name=Jasmine}"
    }, {
        w: 1,
        v: "{$name=Jetta}"
    }, {
        w: 1,
        v: "{$name=Josselyn}"
    }, {
        w: 1,
        v: "{$name=Juliana}"
    }, {
        w: 1,
        v: "{$name=Katelyn}"
    }, {
        w: 1,
        v: "{$name=Katrina}"
    }, {
        w: 1,
        v: "{$name=Kaylein}"
    }, {
        w: 1,
        v: "{$name=Krea}"
    }, {
        w: 1,
        v: "{$name=Laila}"
    }, {
        w: 1,
        v: "{$name=Lily}"
    }, {
        w: 1,
        v: "{$name=Lindsey}"
    }, {
        w: 1,
        v: "{$name=Loreena}"
    }, {
        w: 1,
        v: "{$name=Luanda}"
    }, {
        w: 1,
        v: "{$name=Maerwynn}"
    }, {
        w: 1,
        v: "{$name=Malkyn}"
    }, {
        w: 1,
        v: "{$name=Margaret}"
    }, {
        w: 1,
        v: "{$name=Maria}"
    }, {
        w: 1,
        v: "{$name=Marigold}"
    }, {
        w: 1,
        v: "{$name=Mary}"
    }, {
        w: 1,
        v: "{$name=Matilda}"
    }, {
        w: 1,
        v: "{$name=Millicent}"
    }, {
        w: 1,
        v: "{$name=Mirabelle}"
    }, {
        w: 1,
        v: "{$name=Muriel}"
    }, {
        w: 1,
        v: "{$name=Peronell}"
    }, {
        w: 1,
        v: "{$name=Phrowenia}"
    }, {
        w: 1,
        v: "{$name=Rainydayas}"
    }, {
        w: 1,
        v: "{$name=Rosa}"
    }, {
        w: 1,
        v: "{$name=Rose}"
    }, {
        w: 1,
        v: "{$name=Ryia}"
    }, {
        w: 1,
        v: "{$name=Seraphina}"
    }, {
        w: 1,
        v: "{$name=Susanna}"
    }, {
        w: 1,
        v: "{$name=Sybbyl}"
    }, {
        w: 1,
        v: "{$name=Thea}"
    }, {
        w: 1,
        v: "{$name=Velma}"
    }, {
        w: 1,
        v: "{$name=Victoria}"
    }, {
        w: 1,
        v: "{$name=Wendy}"
    }, {
        w: 1,
        v: "{$name=Winifred}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Atub}"
    }, {
        w: 1,
        v: "{$name=Bagrak}"
    }, {
        w: 1,
        v: "{$name=Bagrak}"
    }, {
        w: 1,
        v: "{$name=Bogdub}"
    }, {
        w: 1,
        v: "{$name=Bolar}"
    }, {
        w: 1,
        v: "{$name=Borba}"
    }, {
        w: 1,
        v: "{$name=Bugdurash}"
    }, {
        w: 1,
        v: "{$name=Bula}"
    }, {
        w: 1,
        v: "{$name=Bulak}"
    }, {
        w: 1,
        v: "{$name=Bum}"
    }, {
        w: 1,
        v: "{$name=Durgat}"
    }, {
        w: 1,
        v: "{$name=Durgat}"
    }, {
        w: 1,
        v: "{$name=Durz}"
    }, {
        w: 1,
        v: "{$name=Gashnakh}"
    }, {
        w: 1,
        v: "{$name=Ghak}"
    }, {
        w: 1,
        v: "{$name=Gharol}"
    }, {
        w: 1,
        v: "{$name=Ghob}"
    }, {
        w: 1,
        v: "{$name=Glasha}"
    }, {
        w: 1,
        v: "{$name=Gluronk}"
    }, {
        w: 1,
        v: "{$name=Gonk}"
    }, {
        w: 1,
        v: "{$name=Kharzug}"
    }, {
        w: 1,
        v: "{$name=Lambug}"
    }, {
        w: 1,
        v: "{$name=Lash}"
    }, {
        w: 1,
        v: "{$name=Lazgar}"
    }, {
        w: 1,
        v: "{$name=Mor}"
    }, {
        w: 1,
        v: "{$name=Murbol}"
    }, {
        w: 1,
        v: "{$name=Nargol}"
    }, {
        w: 1,
        v: "{$name=Nargol}"
    }, {
        w: 1,
        v: "{$name=Orbul}"
    }, {
        w: 1,
        v: "{$name=Ragash}"
    }, {
        w: 1,
        v: "{$name=Rolfish}"
    }, {
        w: 1,
        v: "{$name=Rulfim}"
    }, {
        w: 1,
        v: "{$name=Sharn}"
    }, {
        w: 1,
        v: "{$name=Shazgob}"
    }, {
        w: 1,
        v: "{$name=Snak}"
    }, {
        w: 1,
        v: "{$name=Snak}"
    }, {
        w: 1,
        v: "{$name=Ugor}"
    }, {
        w: 1,
        v: "{$name=Ulumpha}"
    }, {
        w: 1,
        v: "{$name=Umog}"
    }, {
        w: 1,
        v: "{$name=Urzoth}"
    }, {
        w: 1,
        v: "{$name=Urzul}"
    }, {
        w: 1,
        v: "{$name=Ushat}"
    }, {
        w: 1,
        v: "{$name=Ushug}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Uslyn}"
    }, {
        w: 1,
        v: "{$name=Onryn}"
    }, {
        w: 1,
        v: "{$name=Laddyn}"
    }, {
        w: 1,
        v: "{$name=Shirryn}"
    }, {
        w: 1,
        v: "{$name=Bhaltyn}"
    }, {
        w: 1,
        v: "{$name=Eddanyn}"
    }, {
        w: 1,
        v: "{$name=Othedyn}"
    }, {
        w: 1,
        v: "{$name=Lonthilyn}"
    }, {
        w: 1,
        v: "{$name=Otlunen}"
    }, {
        w: 1,
        v: "{$name=Yahnohyn}"
    }, {
        w: 1,
        v: "{$name=Orryn}"
    }, {
        w: 1,
        v: "{$name=Floslyn}"
    }, {
        w: 1,
        v: "{$name=Yesnen}"
    }, {
        w: 1,
        v: "{$name=Bhotlyn}"
    }, {
        w: 1,
        v: "{$name=Ethryn}"
    }, {
        w: 1,
        v: "{$name=Dhuthinyn}"
    }, {
        w: 1,
        v: "{$name=Etlolen}"
    }, {
        w: 1,
        v: "{$name=Atredyn}"
    }, {
        w: 1,
        v: "{$name=Hustelyn}"
    }, {
        w: 1,
        v: "{$name=Dathodyn}"
    }, {
        w: 1,
        v: "{$name=Orlyn}"
    }, {
        w: 1,
        v: "{$name=Hunryn}"
    }, {
        w: 1,
        v: "{$name=Funryn}"
    }, {
        w: 1,
        v: "{$name=Bodyn}"
    }, {
        w: 1,
        v: "{$name=Bhahnyn}"
    }, {
        w: 1,
        v: "{$name=Yathlomyn}"
    }, {
        w: 1,
        v: "{$name=Monlanyn}"
    }, {
        w: 1,
        v: "{$name=Noddehyn}"
    }, {
        w: 1,
        v: "{$name=Mostamyn}"
    }, {
        w: 1,
        v: "{$name=Uromyn}"
    }, {
        w: 1,
        v: "{$name=Danryn}"
    }, {
        w: 1,
        v: "{$name=Vleshyn}"
    }, {
        w: 1,
        v: "{$name=Alyn}"
    }, {
        w: 1,
        v: "{$name=Moltyn}"
    }, {
        w: 1,
        v: "{$name=Dhethyn}"
    }, {
        w: 1,
        v: "{$name=Birnahyn}"
    }, {
        w: 1,
        v: "{$name=Alrohyn}"
    }, {
        w: 1,
        v: "{$name=Bhinlalyn}"
    }, {
        w: 1,
        v: "{$name=Yalamyn}"
    }, {
        w: 1,
        v: "{$name=Welrilyn}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$quirks+$majPro}{$quirks+has been outcast for a murder }{$quirks+$minPro}{$quirks+was forced to commit. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+has been outcast for a murder }{$quirks+$minPro}{$quirks+committed. }{%evil+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+got lost years ago and could never find }{$quirks+$minPoss}{$quirks+home. }{%int-2}"
    }, {
        w: 2,
        v: "{$quirks+$majPoss}{$quirks+clan was slain by }{raceallergy}{$quirks+$racea}{$quirks+. }"
    }, {
        w: 1,
        v: "{$quirks+$majPoss}{$quirks+homeland was destroyed by an earthquake. }"
    }, {
        w: 1,
        v: "{$quirks+$majPoss}{$quirks+homeland was destroyed by a tsunami. }"
    }, {
        w: 1,
        v: "{$quirks+$majPoss}{$quirks+homeland was destroyed by a viscious storm. }"
    }, {
        w: 1,
        v: "{$quirks+$majPoss}{$quirks+can sit for hours watching plants grow. }"
    }, {
        w: 1,
        v: "{$quirks+$majPoss}{$quirks+tries to keep away from crowds. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+follows omens to determine }{$quirks+$minPoss}{$quirks+ daily actions. }{%good+1}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$skin+gray}"
    }, {
        w: 1,
        v: "{$skin+brown}"
    }, {
        w: 1,
        v: "{$skin+green}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$do nothing=}"
    }, {
        w: 0,
        name: "Good",
        v: "{%good+3}{%evil-5}{goodgod}"
    }, {
        w: 0,
        name: "Evil",
        v: "{%good-5}{%evil+3}{evilgod}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$fr=sporadically}"
    }, {
        w: 2,
        v: "{$fr=occasionally}"
    }, {
        w: 2,
        v: "{$fr=intermittently}"
    }, {
        w: 2,
        v: "{$fr=frequently}"
    }, {
        w: 1,
        v: "{$fr=constantly}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$furniture=desk}"
    }, {
        w: 1,
        v: "{$furniture=table}"
    }, {
        w: 1,
        v: "{$furniture=chair}"
    }, {
        w: 1,
        v: "{$furniture=ladder}"
    }, {
        w: 1,
        v: "{$furniture=couch}"
    }, {
        w: 1,
        v: "{$furniture=bed}"
    }, {
        w: 1,
        v: "{$furniture=rocking chair}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        name: "Male",
        v: "{$gender=male}{$majPro=He }{$minPro=he }{$workGender=man}{$majPoss=His }{$minPoss=his }{$minHim=him}"
    }, {
        w: 1,
        name: "Female",
        v: "{$gender=female}{%str-1}{%dex+1}{%con-1}{%wis+1}{%cha+1}{$majPoss=Her }{$minPoss=her }{$majPro=She }{$minPro=she }{%height-10}{$workGender=woman}{$minHim=her}{$beard=}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        v: "{%good-3}{evilgod}{evilworship}"
    }, {
        w: 1,
        v: "{$god=}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{malegnomename1}{malegnomename2}{malegnomename3}{malegnomename4}"
    }, {
        w: 1,
        v: "{female}{femalegnomename1}{femalegnomename2}{femalegnomename3}{femalegnomename4}"
    }, {
        w: 1,
        v: "{male}{malegnomename1}{malegnomename2}{malegnomename4}{malegnomename3}"
    }, {
        w: 1,
        v: "{male}{malegnomename1}{malegnomename3}{malegnomename2}{malegnomename4}"
    }, {
        w: 1,
        v: "{male}{malegnomename1}{malegnomename3}{malegnomename4}{malegnomename2}"
    }, {
        w: 1,
        v: "{male}{malegnomename1}{malegnomename4}{malegnomename2}{malegnomename3}"
    }, {
        w: 1,
        v: "{male}{malegnomename1}{malegnomename4}{malegnomename3}{malegnomename2}"
    }, {
        w: 1,
        v: "{female}{femalegnomename1}{femalegnomename2}{femalegnomename4}{femalegnomename3}"
    }, {
        w: 1,
        v: "{female}{femalegnomename1}{femalegnomename3}{femalegnomename2}{femalegnomename4}"
    }, {
        w: 1,
        v: "{female}{femalegnomename1}{femalegnomename3}{femalegnomename4}{femalegnomename2}"
    }, {
        w: 1,
        v: "{female}{femalegnomename1}{femalegnomename4}{femalegnomename2}{femalegnomename3}"
    }, {
        w: 1,
        v: "{female}{femalegnomename1}{femalegnomename4}{femalegnomename3}{femalegnomename2}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$god=Garl Glittergold}{$goddescr=, God of gnomes, protection, humour, trickery, gem cutting. (Neutral Good)}"
    }, {
        w: 2,
        v: "{humangod}"
    }]
}, function(e) {
    e.exports = [{
        w: 6,
        v: "{$quirks+}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+makes the best out of any situation. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+is always tinkering in }{$quirks+$minPoss}{$quirks+ free time. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+has a solution for everything. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+explains everything in great detail. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+has a fascination with explosions. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+never stops talking. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+complicates simple situations. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+is always scribbling notes. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+keeps a very precise journal. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+always has plans for a new invention. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+has a detailed map of everywhere }{$quirks+$minPro}{$quirks+has been to. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+loves shiny objects. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+has a fascination with alchemy. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+is fascinated by magic and its history. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+is way too curious. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+talks so fast that }{$quirks+$minPro}{$quirks+is very difficult to understand. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Roxeek}"
    }, {
        w: 1,
        v: "{$name=Rolee}"
    }, {
        w: 1,
        v: "{$name=Kwyixle}"
    }, {
        w: 1,
        v: "{$name=Zotinkle}"
    }, {
        w: 1,
        v: "{$name=Greexuek}"
    }, {
        w: 1,
        v: "{$name=Kaidink}"
    }, {
        w: 1,
        v: "{$name=Nixgail}"
    }, {
        w: 1,
        v: "{$name=Zixgeez}"
    }, {
        w: 1,
        v: "{$name=Greerax}"
    }, {
        w: 1,
        v: "{$name=Zerex}"
    }, {
        w: 1,
        v: "{$name=Zotdizeel}"
    }, {
        w: 1,
        v: "{$name=Qiard}"
    }, {
        w: 1,
        v: "{$name=Baeek}"
    }, {
        w: 1,
        v: "{$name=Greenimax}"
    }, {
        w: 1,
        v: "{$name=Zeeaz}"
    }, {
        w: 1,
        v: "{$name=Zexez}"
    }, {
        w: 1,
        v: "{$name=Zeeaz}"
    }, {
        w: 1,
        v: "{$name=Zexteex}"
    }, {
        w: 1,
        v: "{$name=Soxegxaz}"
    }, {
        w: 1,
        v: "{$name=Wixlee}"
    }, {
        w: 1,
        v: "{$name=Kazeqxik}"
    }, {
        w: 1,
        v: "{$name=Zexink}"
    }, {
        w: 1,
        v: "{$name=Greexold}"
    }, {
        w: 1,
        v: "{$name=Zotlee}"
    }, {
        w: 1,
        v: "{$name=Rizkiold}"
    }, {
        w: 1,
        v: "{$name=Kixxiz}"
    }, {
        w: 1,
        v: "{$name=Greeqemax}"
    }, {
        w: 1,
        v: "{$name=Rezto}"
    }, {
        w: 1,
        v: "{$name=Jizelex}"
    }, {
        w: 1,
        v: "{$name=Giet}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Keen}{%wis+2}"
    }, {
        w: 1,
        v: "{$name=Strong}{%str+2}"
    }, {
        w: 1,
        v: "{$name=Lone}{%con+2}"
    }, {
        w: 1,
        v: "{$name=Wise}{%wis+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+killer}"
    }, {
        w: 1,
        v: "{$name+tamer}{%wis+1}"
    }, {
        w: 1,
        v: "{$name+hunter}"
    }, {
        w: 1,
        v: "{$name+stalker}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Dragon}"
    }, {
        w: 1,
        v: "{$name=Bear}"
    }, {
        w: 1,
        v: "{$name=Lion}"
    }, {
        w: 1,
        v: "{$name=Tiger}"
    }, {
        w: 1,
        v: "{$name=Snake}"
    }, {
        w: 1,
        v: "{$name=Wolf}"
    }, {
        w: 1,
        v: "{$name=Eagle}"
    }, {
        w: 1,
        v: "{$name=Elephant}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+carver}"
    }, {
        w: 1,
        v: "{$name+maker}"
    }, {
        w: 1,
        v: "{$name+finder}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=House}"
    }, {
        w: 1,
        v: "{$name=Flint}"
    }, {
        w: 1,
        v: "{$name=Gold}"
    }, {
        w: 1,
        v: "{$name=Diamond}"
    }, {
        w: 1,
        v: "{$name=Tool}"
    }, {
        w: 1,
        v: "{$name=Fort}"
    }, {
        w: 1,
        v: "{$name=Horn}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+shaker}"
    }, {
        w: 1,
        v: "{$name+breaker}"
    }, {
        w: 1,
        v: "{$name+crusher}"
    }, {
        w: 1,
        v: "{$name+smasher}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Heart}"
    }, {
        w: 1,
        v: "{$name=Bone}"
    }, {
        w: 1,
        v: "{$name=Skull}"
    }, {
        w: 1,
        v: "{$name=Fort}"
    }, {
        w: 1,
        v: "{$name=Earth}"
    }]
}, function(e) {
    e.exports = [{
        w: 8,
        v: "{$hair=a bald head and }"
    }, {
        w: 5,
        v: "{$hair=a bald head with tribal tatoos and }"
    }, {
        w: 2,
        v: "{$hair=a bald head with abstract tatoos and }"
    }, {
        w: 2,
        v: "{$hair=a bald head with fancy tatoos and }"
    }, {
        w: 2,
        v: "{$hair=a bald head with vivid tatoos and }"
    }, {
        w: 2,
        v: "{$hair=a bald head with bulky tatoos and }"
    }, {
        w: 2,
        v: "{$hair=a bald head with gorgeous tatoos and }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+caller}"
    }, {
        w: 1,
        v: "{$name+watcher}"
    }, {
        w: 1,
        v: "{$name+seer}"
    }, {
        w: 1,
        v: "{$name+walker}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Sky}"
    }, {
        w: 1,
        v: "{$name=Sun}"
    }, {
        w: 1,
        v: "{$name=Moon}"
    }, {
        w: 1,
        v: "{$name=Fire}"
    }, {
        w: 1,
        v: "{$name=Water}"
    }, {
        w: 1,
        v: "{$name=Air}"
    }, {
        w: 1,
        v: "{$name=Earth}"
    }, {
        w: 1,
        v: "{$name=Night}"
    }, {
        w: 1,
        v: "{$name=Light}"
    }, {
        w: 1,
        v: "{$name=Dark}"
    }, {
        w: 1,
        v: "{$name=Word}{%cha+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{goliathmysticnoun}{goliathmysticaction}{%int+2}{%wis+2}"
    }, {
        w: 3,
        v: "{goliathfightingnoun}{goliathfightingaction}{%str+2}{%con+2}"
    }, {
        w: 2,
        v: "{goliathcraftnoun}{goliathcraftaction}{%dex+2}{%int+1}"
    }, {
        w: 3,
        v: "{goliathanimalnoun}{goliathanimalaction}{%str+2}{%wis+2}"
    }, {
        w: 3,
        v: "{goliathadj}{goliathnoun}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+killer}"
    }, {
        w: 1,
        v: "{$name+eye}"
    }, {
        w: 1,
        v: "{$name+hunter}"
    }, {
        w: 1,
        v: "{$name+stalker}"
    }, {
        w: 1,
        v: "{$name+wolf}"
    }, {
        w: 1,
        v: "{$name+bear}"
    }, {
        w: 1,
        v: "{$name+dragon}"
    }, {
        w: 1,
        v: "{$name+fighter}"
    }, {
        w: 1,
        v: "{$name+arm}"
    }, {
        w: 1,
        v: "{$name+heart}"
    }]
}, function(e) {
    e.exports = [{
        w: 15,
        v: "{$quirks+}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+only respects powerful and competent leaders. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+openly mocks human society's structure. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ challenges others to duels to the death. }{%chaotic+2}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+feels at home in high altitude. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+enjoys winter and cold temperatures. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+will turn anything into an opportunity for training. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+enjoys messing with other humanoids with }{$quirks+$minPoss}{$quirks+stature. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+dislikes depending on others. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+maintains a friendly relationships with nearby giants. }"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$goliathtraits=$majPro}{$goliathtraits+is very competitive. }"
    }, {
        w: 2,
        v: "{$goliathtraits=$majPro}{$goliathtraits+sees everything as a challenge. }"
    }, {
        w: 2,
        v: "{$goliathtraits=$majPro}{$goliathtraits+values skill and talent over all else. }"
    }, {
        w: 2,
        v: "{$goliathtraits=$majPro}{$goliathtraits+always keeps score. }"
    }, {
        w: 2,
        v: "{$goliathtraits=$majPro}{$goliathtraits+is constantly trying to outdo }{$goliathtraits+$minHim}{$goliathtraits+self. }"
    }, {
        w: 2,
        v: "{$goliathtraits=$majPro}{$goliathtraits+is always fair play. }"
    }, {
        w: 2,
        v: "{$goliathtraits=$majPro}{$goliathtraits+is very dedicated. }"
    }, {
        w: 2,
        v: "{$goliathtraits=$majPro}{$goliathtraits+will always give a fighting chance to }{$goliathtraits+$minPoss}{$goliathtraits+opponents. }"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{faceshape}{highattractiveness}{$face=$faceshape}{$face+$attractiveness}"
    }, {
        w: 1,
        v: "{face}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{$mod=slightly }{%cha+1}"
    }, {
        w: 4,
        v: "{$mod=very }{%cha+2}"
    }, {
        w: 2,
        v: "{$mod=incredibly }{%cha+3}"
    }, {
        w: 1,
        v: "{$mod=extremely }{%cha+5}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$god=Akadi}{%moralneutral+2}{%ethicalneutral+2}{$goddescr=, Goddess of air, movement and speed. (True Neutral)}"
    }, {
        w: 1,
        v: "{$god=Chauntea}{%good+2}{%ethicalneutral+2}{$goddescr=, Goddess of agriculture, farmers, gardeners and summer. (Neutral Good)}"
    }, {
        w: 1,
        v: "{$god=Grumbar}{%moralneutral+2}{%ethicalneutral+2}{$goddescr=, God of earth, solidity, changelessness, oaths. (True Neutral)}"
    }, {
        w: 1,
        v: "{$god=Istishia}{%moralneutral+2}{%ethicalneutral+2}{$goddescr=, God of water, purification, wetness. (True Neutral)}"
    }, {
        w: 1,
        v: "{$god=Kelemvor}{%moralneutral+2}{%lawful+2}{$goddescr=, God of death and the dead. (Lawful Neutral)}"
    }, {
        w: 1,
        v: "{$god=Kossuth}{%moralneutral+2}{%ethicalneutral+2}{$goddescr=, God of fire, purification through fire. (True Neutral)}"
    }, {
        w: 1,
        v: "{$god=Lathander}{%good+2}{%ethicalneutral+2}{$goddescr=, God of spring, dawn, birth, youth, vitality, athletics. (Neutral Good)}"
    }, {
        w: 1,
        v: "{$god=Mystra}{%good+2}{%ethicalneutral+2}{$goddescr=, Goddess of magic, spells, the Weave. (Neutral Good)}"
    }, {
        w: 1,
        v: "{$god=Oghma}{%moralneutral+2}{%ethicalneutral+2}{$goddescr=, God of knowledge, invention, inspiration, bards. (True Neutral)}"
    }, {
        w: 1,
        v: "{$god=Selune}{%good+2}{%ethicalneutral+2}{$goddescr=, Goddess of the moon, stars, navigation, prophecy, questers, lycanthropes. (Neutral Good)}"
    }, {
        w: 1,
        v: "{$god=Silvanus}{%moralneutral+2}{%ethicalneutral+2}{$goddescr=, God of wild nature, druids. (True Neutral)}"
    }, {
        w: 1,
        v: "{$god=Sune}{%chaotic+2}{%good+2}{$goddescr=, Goddess of beauty, love, passion. (Chaotic Good)}"
    }, {
        w: 1,
        v: "{$god=Tempus}{%moralneutral+2}{%chaotic+2}{$goddescr=, God of war, battle, warriors. (Chaotic Neutral)}"
    }, {
        w: 1,
        v: "{$god=Torm}{%lawful+2}{%good+2}{$goddescr=, God of duty, loyalty, obedience, paladins. (Lawful Good)}"
    }, {
        w: 1,
        v: "{$god=Tyr}{%lawful+2}{%good+2}{$goddescr=, God of justice. (Lawful Good)}"
    }, {
        w: 1,
        v: "{$god=Ubtao}{%moralneutral+2}{%ethicalneutral+2}{$goddescr=, God of creation, jungles, Chult, the Chultans, dinosaurs. (True Neutral)}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        v: "{$attractiveness=cute}"
    }, {
        w: 5,
        v: "{$attractiveness=attractive}"
    }, {
        w: 5,
        v: "{$attractiveness=beautiful}"
    }, {
        w: 3,
        v: "{$attractiveness=glamorous}"
    }, {
        w: 3,
        v: "{$attractiveness=innocent}"
    }, {
        w: 2,
        v: "{$attractiveness=stunning}"
    }, {
        w: 3,
        v: "{$attractiveness=fanciable}"
    }, {
        w: 3,
        v: "{$attractiveness=pretty}"
    }, {
        w: 2,
        v: "{$attractiveness=magnificent}"
    }, {
        w: 3,
        v: "{$attractiveness=sightly}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%good+3}{%moralneutral-2}{%evil-3}"
    }, {
        w: 1,
        v: "{%good-3}{%moralneutral-2}{%evil+3}{getevilgod}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$sphy1+of cheap cologne}"
    }, {
        w: 3,
        v: "{$sphy1+of cologne}"
    }, {
        w: 2,
        v: "{$sphy1+of expensive cologne}"
    }, {
        w: 3,
        v: "{$sphy1+of cedar wood}"
    }, {
        w: 3,
        v: "{$sphy1+of lavender}"
    }, {
        w: 3,
        v: "{$sphy1+of honey}"
    }, {
        w: 3,
        v: "{$sphy1+of flowers}"
    }, {
        w: 3,
        v: "{$sphy1+of incense}"
    }, {
        w: 3,
        v: "{$sphy1+of baking}"
    }, {
        w: 3,
        v: "{$sphy1+like rain}"
    }, {
        w: 3,
        v: "{$sphy1+like a forest}"
    }, {
        w: 3,
        v: "{$sphy1+of the sea}"
    }, {
        w: 3,
        v: "{$sphy1+of cookies}"
    }, {
        w: 3,
        v: "{$sphy1+of spices}"
    }, {
        w: 3,
        v: "{$sphy1+of autumn leaves}"
    }, {
        w: 4,
        v: "{$sphy1+of soap}"
    }, {
        w: 4,
        v: "{$sphy1+of roses}"
    }]
}, function(e) {
    e.exports = [{
        w: 35,
        v: "{hairLength}{$hair+, }{hairType}{$hair+, }{hairColor}{$hair+hair and }"
    }, {
        w: 4,
        v: "{hairLength}{$hair+, }{hairType}{$hair+, }{hairColor}{$hair+hair shaved on }{rlb}{$hair+$rl}{$hair+side and }"
    }, {
        w: 3,
        v: "{hairLength}{$hair+, }{hairColor}{$hair+mohawk and }"
    }, {
        w: 8,
        v: "{$hair=a bald head and }"
    }]
}, function(e) {
    e.exports = [{
        w: 25,
        v: "{$hair+brown }"
    }, {
        w: 20,
        v: "{$hair+auburn }"
    }, {
        w: 12,
        v: "{$hair+blond }"
    }, {
        w: 14,
        v: "{$hair+red }"
    }, {
        w: 8,
        v: "{$hair+golden }"
    }, {
        w: 5,
        v: "{$hair+silver }"
    }, {
        w: 16,
        v: "{$hair+gray }"
    }, {
        w: 8,
        v: "{$hair+white }"
    }, {
        w: 20,
        v: "{$hair+black }"
    }, {
        w: 5,
        v: "{$hair+dyed black }"
    }, {
        w: 1,
        v: "{$hair+dyed blue }"
    }, {
        w: 1,
        v: "{$hair+dyed purple }"
    }, {
        w: 1,
        v: "{$hair+dyed pink }"
    }, {
        w: 1,
        v: "{$hair+dyed yellow }"
    }, {
        w: 1,
        v: "{$hair+dyed red }"
    }, {
        w: 1,
        v: "{$hair+dyed orange }"
    }, {
        w: 1,
        v: "{$hair+dyed green }"
    }, {
        w: 1,
        v: "{$hair+dyed teal }"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$hair=cropped}"
    }, {
        w: 5,
        v: "{$hair=short}"
    }, {
        w: 5,
        v: "{$hair=long}"
    }, {
        w: 3,
        v: "{$hair=very long}"
    }, {
        w: 1,
        v: "{$hair=extremely long}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$hair+straight}"
    }, {
        w: 3,
        v: "{$hair+wavy}"
    }, {
        w: 3,
        v: "{$hair+curled}"
    }, {
        w: 1,
        v: "{$hair+braided}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{malehumanname}{humansurname}"
    }, {
        w: 1,
        v: "{female}{femalehumanname}{humansurname}"
    }, {
        w: 1,
        v: "{male}{maleelfname}{elfsurname}"
    }, {
        w: 1,
        v: "{female}{femaleelfname}{elfsurname}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{humanskin}"
    }, {
        w: 1,
        v: "{elfskin}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{malehalflingname}{halflingsurname}"
    }, {
        w: 1,
        v: "{female}{femalehalflingname}{halflingsurname}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$god=Yondalla}{$goddescr=, Goddess of halflings, bounty, protection, children, security, leadership, wisdom, creation and family. (Lawful Good)}"
    }, {
        w: 2,
        v: "{humangod}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Ater}"
    }, {
        w: 1,
        v: "{$name+ Banksi}"
    }, {
        w: 1,
        v: "{$name+ Beddye}"
    }, {
        w: 1,
        v: "{$name+ Bolge}"
    }, {
        w: 1,
        v: "{$name+ Bophill}"
    }, {
        w: 1,
        v: "{$name+ Bophubb}"
    }, {
        w: 1,
        v: "{$name+ Bophubb}"
    }, {
        w: 1,
        v: "{$name+ Borne}"
    }, {
        w: 1,
        v: "{$name+ Buck}"
    }, {
        w: 1,
        v: "{$name+ Burrow}"
    }, {
        w: 1,
        v: "{$name+ Chilly}"
    }, {
        w: 1,
        v: "{$name+ Chilly}"
    }, {
        w: 1,
        v: "{$name+ Chinell}"
    }, {
        w: 1,
        v: "{$name+ Chylle}"
    }, {
        w: 1,
        v: "{$name+ Dane}"
    }, {
        w: 1,
        v: "{$name+ Derhubb}"
    }, {
        w: 1,
        v: "{$name+ Finchey}"
    }, {
        w: 1,
        v: "{$name+ Fordye}"
    }, {
        w: 1,
        v: "{$name+ Galbolg}"
    }, {
        w: 1,
        v: "{$name+ Geddye}"
    }, {
        w: 1,
        v: "{$name+ Gelnne}"
    }, {
        w: 1,
        v: "{$name+ Gerop}"
    }, {
        w: 1,
        v: "{$name+ Gerubb}"
    }, {
        w: 1,
        v: "{$name+ Growort}"
    }, {
        w: 1,
        v: "{$name+ Hawe}"
    }, {
        w: 1,
        v: "{$name+ Lacey}"
    }, {
        w: 1,
        v: "{$name+ Maycey}"
    }, {
        w: 1,
        v: "{$name+ Midgee}"
    }, {
        w: 1,
        v: "{$name+ Mugwes}"
    }, {
        w: 1,
        v: "{$name+ Mugwort}"
    }, {
        w: 1,
        v: "{$name+ Mynge}"
    }, {
        w: 1,
        v: "{$name+ Nete}"
    }, {
        w: 1,
        v: "{$name+ Ophirn}"
    }, {
        w: 1,
        v: "{$name+ Rowich}"
    }, {
        w: 1,
        v: "{$name+ Tunnell}"
    }, {
        w: 1,
        v: "{$name+ Urrort}"
    }, {
        w: 1,
        v: "{$name+ Wake}"
    }, {
        w: 1,
        v: "{$name+ Oldbuck}"
    }, {
        w: 1,
        v: "{$name+ Twofoot}"
    }, {
        w: 1,
        v: "{$name+ Longfoot}"
    }, {
        w: 1,
        v: "{$name+ Goold}"
    }, {
        w: 1,
        v: "{$name+ Hornblower}"
    }, {
        w: 1,
        v: "{$name+ Bottomhill}"
    }, {
        w: 1,
        v: "{$name+ Featherbottom}"
    }, {
        w: 1,
        v: "{$name+ Cotton}"
    }, {
        w: 1,
        v: "{$name+ Smallburrow}"
    }, {
        w: 1,
        v: "{$name+ Greenhill}"
    }, {
        w: 1,
        v: "{$name+ Headstrong}"
    }, {
        w: 1,
        v: "{$name+ Barrowes}"
    }, {
        w: 1,
        v: "{$name+ Brandywood}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{malehumanname}{humansurname}"
    }, {
        w: 1,
        v: "{female}{femalehumanname}{humansurname}"
    }, {
        w: 1,
        v: "{male}{maleorcname}{orcsurname}"
    }, {
        w: 1,
        v: "{female}{femaleorcname}{orcsurname}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{orcskin}"
    }, {
        w: 2,
        v: "{humanskin}"
    }]
}, function(e) {
    e.exports = [{
        w: 12,
        v: "{$quirks+}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+tries to stay home as much as possible. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+usually tries not to get noticed. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+is very shy. }{%cha-1}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+has several pet animals. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+rides a pony everywhere. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+always has a good joke to tell. }{%cha+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+knows all there is to know about farms. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+lived }{$quirks+$minPoss}{$quirks+early years in a caravan. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+never goes anywhere without }{$quirks+$minPoss}{$quirks+best friend. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+smiles constantly. }{%cha+1}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+values }{$quirks+$minPoss}{$quirks+community very highly. }"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$bp=lip}"
    }, {
        w: 1,
        v: "{rl}{$bp=$rl}{$bp+cheek}"
    }, {
        w: 1,
        v: "{$bp=forehead}"
    }, {
        w: 2,
        v: "{$bp=nose}"
    }, {
        w: 3,
        v: "{rl}{$bp=$rl}{$bp+eyebrow}"
    }, {
        w: 5,
        v: "{rl}{$bp=$rl}{$bp+ear}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%height=142}{%str-2}{%dex+2}{%con-2}"
    }, {
        w: 1,
        v: "{%height=147}{%str-2}{%dex+2}{%con-2}"
    }, {
        w: 3,
        v: "{%height=152}{%str-1}{%dex+1}{%con-1}"
    }, {
        w: 3,
        v: "{%height=157}{%str-1}{%dex+1}{%con-1}"
    }, {
        w: 3,
        v: "{%height=162}"
    }, {
        w: 5,
        v: "{%height=167}"
    }, {
        w: 5,
        v: "{%height=172}"
    }, {
        w: 5,
        v: "{%height=177}"
    }, {
        w: 5,
        v: "{%height=182}{%str+1}{%dex-1}{%con+1}"
    }, {
        w: 2,
        v: "{%height=187}{%str+1}{%dex-1}{%con+1}"
    }, {
        w: 2,
        v: "{%height=192}{%str+2}{%dex-2}{%con+2}"
    }, {
        w: 1,
        v: "{%height=197}{%str+2}{%dex-2}{%con+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%cha+2}"
    }, {
        w: 2,
        v: "{%cha+4}"
    }, {
        w: 2,
        v: "{%cha+5}{goodface}"
    }, {
        w: 1,
        v: "{%cha+6}{goodface}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%con+2}"
    }, {
        w: 2,
        v: "{%con+4}"
    }, {
        w: 2,
        v: "{%con+5}"
    }, {
        w: 1,
        v: "{%con+6}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%dex+2}"
    }, {
        w: 2,
        v: "{%dex+4}"
    }, {
        w: 2,
        v: "{%dex+5}"
    }, {
        w: 1,
        v: "{%dex+6}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%int+2}"
    }, {
        w: 2,
        v: "{%int+4}"
    }, {
        w: 2,
        v: "{%int+5}"
    }, {
        w: 1,
        v: "{%int+6}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%str+2}"
    }, {
        w: 2,
        v: "{%str+4}"
    }, {
        w: 2,
        v: "{%str+5}"
    }, {
        w: 1,
        v: "{%str+6}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%wis+2}"
    }, {
        w: 2,
        v: "{%wis+4}"
    }, {
        w: 2,
        v: "{%wis+5}"
    }, {
        w: 1,
        v: "{%wis+6}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{goodfacemod}{goodlooking}{$faceshape+$mod}"
    }, {
        w: 2,
        v: "{goodlooking}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        name: "Classic",
        v: "{hooks1}"
    }, {
        w: 2,
        name: "Funky",
        v: "{hooks2}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$hook=$majPro}{$hook+has recently obtained a map to a great treasure.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has recently obtained a map to an old and forgotten civilization.}"
    }, {
        w: 2,
        v: "{$hook=$majPoss}{$hook+house was recently burned down by a mysterious fire.}"
    }, {
        w: 2,
        v: "{$hook=$majPoss}{$hook+house was recently destroyed by a mysterious earthquake.}"
    }, {
        w: 2,
        v: "{$hook=$majPoss}{$hook+house was recently destroyed by a mysterious tornado.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is looking for }{$hook+$minPoss}{$hook+lost }{relationship}{$hook+$rela}{$hook+.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is looking for }{$hook+$minPoss}{$hook+lost }{preciousitem}{$hook+$precious}{$hook+.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+needs help finding a }{preciousitem}{$hook+$precious}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+needs help stealing a }{preciousitem}{$hook+$precious}{$hook+ from a nearby house.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+needs help stealing a }{preciousitem}{$hook+$precious}{$hook+ from a nearby commerce.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+needs help stealing a }{preciousitem}{$hook+$precious}{$hook+ from a nearby castle.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+seeks revenge for the death of }{$hook+$minPoss}{relationship}{$hook+$rela}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+needs help fighting a rebellious organization who wants to take control of the governement.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+needs help fighting a rebellious organization who wants to take control of the clergy.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is part of a secret rebellious organization who wants to take control of the government.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is part of a secret rebellious organization who wants to take control of the clergy.}"
    }, {
        w: 4,
        v: "{$hook=$majPro}{$hook+needs the party to deliver a }{preciousitem}{$hook+$precious}{$hook+ to }{$hook+$minPoss}{relationship}{$hook+$rela}{$hook+.}"
    }, {
        w: 4,
        v: "{$hook=$majPro}{$hook+needs the party to deliver a }{preciousitem}{$hook+$precious}{$hook+ to the local }{organisation}{$hook+$org}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is obsessed with a nearby cavern with amazing waterfalls.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is obsessed with a nearby cliff with an eerily beautiful view.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is obsessed with a nearby grove with extraordinary flowers.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is obsessed with a nearby valley with luxurious vegetation.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is obsessed with a nearby tavern with absolutely incredible ale.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is spying the players on behalf of an organization of }{raceallergy}{$hook+$racea}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is spying the players on behalf of the local }{organisation}{$hook+$org}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+needs help gathering information on an organization of }{raceallergy}{$hook+$racea}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+needs help gathering information on the local }{organisation}{$hook+$org}{$hook+.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+has a duel to the death on the morrow but }{$hook+$minPro}{$hook+is afraid to lose it.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+challenges a PC to a duel to the death.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is being blackmailed into challenging a PC to a duel to the death.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+has recently come into possession of a powerful magical }{$precious=}{precious}{$hook+$precious}{$hook+, and nobody knows how.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+has recently woken up with a magical rune on }{$hook+$minPoss}{bodypart}{$hook+$bp}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is being haunted by a ghost.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is being haunted by the ghost of }{$hook+$minPoss}{$hook+dead }{relationship}{$hook+$rela}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+was tricked into wearing a cursed }{$precious=}{precious}{$hook+$precious}{$hook+.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+has discovered a secret passage under }{$hook+$minPoss}{$hook+house leading to a mysterious cave.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+has discovered a secret passage under }{$hook+$minPoss}{$hook+house leading to a secret organisation.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+has discovered a secret passage under }{$hook+$minPoss}{$hook+house leading to an hidden temple.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+has been pressured by local drug dealers into selling drugs.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is part of a local drug dealing circle.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is the head of a local drug dealing circle.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+is the head of an international drug dealing circle.}"
    }, {
        w: 4,
        v: "{$hook=$majPro}{$hook+is organizing a }{contest}{$hook+. The prize will be a }{preciousitem}{$hook+$precious}{$hook+.}"
    }, {
        w: 4,
        v: "{$hook=$majPro}{$hook+needs help organizing a }{contest}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is possessed by an evil spirit who makes }{$hook+$minHim}{$hook+ do horrible things at night, without remembering them.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is possessed by an evil spirit during the day and can only control }{$hook+$minHim}{$hook+self at night.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is currently being chased by a band of bandits attempting to rob }{$hook+$minHim}{$hook+and asks the PCs for protection.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is currently chasing a bandit and asks the PCs for help.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is currently being chased by law enforcement and asks the PCs for protection.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has been hired to steal items from the PCs.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has been hired to steal money from the PCs.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has been hired to assassinate the PCs.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is the host of a terrible and deadly sickness.}"
    }, {
        w: 3,
        v: "{$hook=$majPoss}{$hook+blood is the cure to a terrible and deadly sickness.}"
    }, {
        w: 2,
        v: "{$hook=$majPoss}{$hook+home has been infested by zombies.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+needs help exorcising }{$hook+$minPoss}{relationship}{$hook+$rela}{$hook+.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is in dire need of some }{monster}{$hook+$monster}{$hook+ blood.}"
    }, {
        w: 2,
        v: "{$hook=$majPoss}{$hook+house has been eaten by a purple worm. Further inspection of the tunnel reveals a complex cave system.}"
    }, {
        w: 2,
        v: "{$hook=$majPoss}{$hook+house has been eaten by a purple worm. Further inspection of the tunnel reveals an ancient catacomb.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+wants the PCs to help }{$hook+$minHim}{$hook+kill }{amonster}{$hook+$monster}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+wants the PCs to help }{$hook+$minHim}{$hook+capture }{amonster}{$hook+$monster}{$hook+.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+has learned of the existence of a shrine to }{archdevil}{$hook+$devil}{$hook+.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+has angered }{archdevil}{$hook+$devil}{$hook+ and needs help avoiding the consequences.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is a fountain of wild magic and cannot control it.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+gives the PCs a magical }{$precious=}{precious}{$hook+$precious}{$hook+. Turns out }{$hook+$minPro}{$hook+had stolen it from a wizard who is hellbent on recovering it.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is secretly a vampire.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+carries around a large }{color}{$hook+$color}{$hook+ egg of unknown origin.}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$hook=$majPro}{$hook+is looking for }{$hook+$minPoss}{$hook+lost }{relationship}{$hook+$rela}{$hook+, who never actually existed.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has recently obtained a fake map to a great treasure.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+seeks revenge for the death of }{$hook+$minPoss}{relationship}{$hook+$rela}{$hook+, who never actually existed.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+needs the party to deliver a tamed }{monster}{$hook+$monster}{$hook+ to a local wizard.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+needs the party to deliver a tamed }{monster}{$hook+$monster}{$hook+ to a local zoo.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+needs the party to deliver a tamed }{monster}{$hook+$monster}{$hook+ to a local circus.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+needs the party to deliver a tamed }{monster}{$hook+$monster}{$hook+ to a local museum.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+is followed day and night by a }{personality}{$hook+$personality}{$hook+ speaking crow.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+is followed day and night by a }{personality}{$hook+$personality}{$hook+ speaking mouse.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+is followed day and night by a }{personality}{$hook+$personality}{$hook+ speaking snake.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+is followed day and night by a }{personality}{$hook+$personality}{$hook+ speaking cat.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is followed day and night by an animated }{furniture}{$hook+$furniture}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has been cursed into speaking only gibberish.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is willingly wearing a cursed }{$precious=}{precious}{$hook+$precious}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has been hexed into constantly hallucinating.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has been hexed and is now constantly hungry.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+has been hexed into becoming minuscule.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+has been hexed into becoming gigantic.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is being constantly pranked by a leprechaun.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is being constantly psychologically tortured by a crazed leprechaun.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+needs help sabotaging a }{contest}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a were}{werebeast}{$hook+$wb}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a were}{werebeast}{$hook+$wb}{$hook+ and tries to convince the PCs to let }{$hook+$minHim}{$hook+ change them as well.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a were}{werebeast}{$hook+$wb}{$hook+ and wants to get rid of it.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a were}{werebeast}{$hook+$wb}{$hook+ and is looking for acceptance within society.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+approaches the PC by falling from the sky. }{$hook+$majPro}{$hook+has 50% chance of surviving the landing.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is currently chasing a band of bandits and asks the PCs for help.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is currently being chased by a band of bandits }{$hook+$minPro}{$hook+just stole from and asks the PCs for protection.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a doppleganger.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is actually a doppleganger who killed }{$hook+$name}{$hook+ and is living }{$hook+$minPoss}{$hook+life.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a doppleganger posing as one of the PCs.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+lives with an incubus.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+lives with a succubus.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+lives with an incubus. They are trying to fit in with society.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+lives with a succubus. They are trying to fit in with society.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is raising an Otyugh in the town's sewer system. It's always hungry.}"
    }, {
        w: 2,
        v: "{$hook=$majPoss}{$hook+home has been infested by zombies. Upon further inquiry, the zombies are asking for help.}"
    }, {
        w: 2,
        v: "{$hook=All of }{$hook+$minPoss}{$hook+furniture has suddenly become animated.}"
    }, {
        w: 2,
        v: "{$hook=$majPoss}{$hook+home has been infested by zombies. Upon further inquiry, the zombies are asking for brains.}"
    }, {
        w: 2,
        v: "{$hook=$majPoss}{$hook+home has been infested by zombies. Upon further inquiry, the zombies used to live there, and are claiming the house as belonging to them.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is a serial killer at night.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a cannibal.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+is a cannibal. }{$hook+$majPro}{$hook+wants to convert the PCs to }{$hook+$minPoss}{$hook+ways.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is a secret vigilante.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a secret vigilante, and considers the PCs a threat to society.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is addicted to }{monster}{$hook+$monster}{$hook+ blood.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+wants the PCs to help }{$hook+$minPoss}{$hook+tame }{amonster}{$hook+$monster}{$hook+.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is being stalked by a gibbering mouth at night}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is actually an Oni posing as a }{$hook+$race}{$hook+.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has fallen in love with a dryad from a local forest.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has fallen in love with a mermaid from the nearest water source.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has fallen in love with a fairy from the nearby woods.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+is obsessively in love with a dryad. }{$hook+$majPro}{$hook+keeps her locked up in }{$hook+$minPoss}{$hook+basement.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+is obsessively in love with a mermaid. }{$hook+$majPro}{$hook+keeps her locked up in }{$hook+$minPoss}{$hook+basement.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+is obsessively in love with a fairy. }{$hook+$majPro}{$hook+keeps her locked up in }{$hook+$minPoss}{$hook+basement.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+has been enslaved by a demon.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is being controlled by an illithid.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is being harassed about a threat of impending doom by a pseudodragon.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is slowly becoming a plant.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is followed by multiple animals at all time.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is openly a vampire.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+talks very fast and incomprehensibly to the NPCs before turning to stone.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+talks very fast and incomprehensibly to the NPCs before turning to dust.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is actually a }{dragons}{$hook+$dragon}{$hook+ dragon.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has recently come into possession of an unreasonable amount of fish, and it's not clear why.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+gives the PCs a magical }{$precious=}{precious}{$hook+$precious}{$hook+. Turns out }{$hook+$minPro}{$hook+had stolen it from an imp who is hellbent on recovering it.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a time traveller from a distant past.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a time traveller from a distant past. }{$hook+$majPro}{$hook+is obsessed with finding her descendants.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a time traveller from a distant past. }{$hook+$majPro}{$hook+is obsessed with finding the treasure }{$hook+$minPro}{$hook+buried thousands of years ago.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+is a time traveller from a distant future. }{$hook+$majPro}{$hook+needs help sleeping for a few thousand years.}"
    }, {
        w: 1,
        v: "{$hook=$majPro}{$hook+is a time traveller from a distant future. }{$hook+$majPro}{$hook+is trying to alter the course of history.}"
    }, {
        w: 3,
        v: "{$hook=$majPro}{$hook+is possessed by an evil spirit. They argue constantly.}"
    }, {
        w: 2,
        v: "{$hook=$majPro}{$hook+has started using snakes as currency, and it's starting to catch on.}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{malehumanname}{humansurname}"
    }, {
        w: 1,
        v: "{female}{femalehumanname}{humansurname}"
    }]
}, function(e) {
    e.exports = [{
        w: 70,
        v: "{goodgod}"
    }, {
        w: 5,
        v: "{evilgod}"
    }, {
        w: 1,
        v: "{dragongod}"
    }, {
        w: 1,
        v: "{drowgod}"
    }, {
        w: 1,
        v: "{dwarfgod}"
    }, {
        w: 2,
        v: "{elfgod}"
    }, {
        w: 1,
        v: "{gnomegod}"
    }, {
        w: 1,
        v: "{halflinggod}"
    }, {
        w: 1,
        v: "{orcgod}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$skin+white}"
    }, {
        w: 1,
        v: "{$skin+pink}"
    }, {
        w: 1,
        v: "{$skin+red}"
    }, {
        w: 1,
        v: "{$skin+brown}"
    }, {
        w: 1,
        v: "{$skin+black}"
    }, {
        w: 1,
        v: "{$skin+golden}"
    }, {
        w: 1,
        v: "{$skin+chocolate}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Cartwright}"
    }, {
        w: 1,
        v: "{$name+ de Bolbec}"
    }, {
        w: 1,
        v: "{$name+ Fenwick}"
    }, {
        w: 1,
        v: "{$name+ Cromwell}"
    }, {
        w: 1,
        v: "{$name+ McKinnon}"
    }, {
        w: 1,
        v: "{$name+ Writingham}"
    }, {
        w: 1,
        v: "{$name+ deGrey}"
    }, {
        w: 1,
        v: "{$name+ de Mowbray}"
    }, {
        w: 1,
        v: "{$name+ Rowntree}"
    }, {
        w: 1,
        v: "{$name+ Chaucer}"
    }, {
        w: 1,
        v: "{$name+ Cornwallis}"
    }, {
        w: 1,
        v: "{$name+ Drake}"
    }, {
        w: 1,
        v: "{$name+ Crewe}"
    }, {
        w: 1,
        v: "{$name+ Montagu}"
    }, {
        w: 1,
        v: "{$name+ Cleves}"
    }, {
        w: 1,
        v: "{$name+ Woodleaf}"
    }, {
        w: 1,
        v: "{$name+ Serpentwind}"
    }, {
        w: 1,
        v: "{$name+ Hillless}"
    }, {
        w: 1,
        v: "{$name+ Mournhell}"
    }, {
        w: 1,
        v: "{$name+ Farlight}"
    }, {
        w: 1,
        v: "{$name+ Bladewalker}"
    }, {
        w: 1,
        v: "{$name+ Ashglade}"
    }, {
        w: 1,
        v: "{$name+ Wheatflow}"
    }, {
        w: 1,
        v: "{$name+ Morningfall}"
    }, {
        w: 1,
        v: "{$name+ Glorybluff}"
    }, {
        w: 1,
        v: "{$name+ Redstream}"
    }, {
        w: 1,
        v: "{$name+ Commonbrook}"
    }, {
        w: 1,
        v: "{$name+ Cloudfang}"
    }, {
        w: 1,
        v: "{$name+ Darkdraft}"
    }, {
        w: 1,
        v: "{$name+ Mistsplitter}"
    }, {
        w: 1,
        v: "{$name+ Lunadream}"
    }, {
        w: 1,
        v: "{$name+ Truegust}"
    }, {
        w: 1,
        v: "{$name+ Twoorb}"
    }, {
        w: 1,
        v: "{$name+ Duststone}"
    }, {
        w: 1,
        v: "{$name+ Caskbow}"
    }, {
        w: 1,
        v: "{$name+ Keenseeker}"
    }, {
        w: 1,
        v: "{$name+ Boulderdown}"
    }, {
        w: 1,
        v: "{$name+ Laughingsteel}"
    }, {
        w: 1,
        v: "{$name+ Stonesworn}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$quirks+castle}"
    }, {
        w: 4,
        v: "{$quirks+farm}"
    }, {
        w: 2,
        v: "{$quirks+manor}"
    }, {
        w: 2,
        v: "{$quirks+small forest}"
    }, {
        w: 2,
        v: "{$quirks+creepy house}"
    }, {
        w: 1,
        v: "{$quirks+palace}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$kenkucolor=black}"
    }, {
        w: 1,
        v: "{$kenkucolor=dark blue}"
    }, {
        w: 1,
        v: "{$kenkucolor=dark gray}"
    }, {
        w: 1,
        v: "{$kenkucolor=dark brown}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$kenkuname=Wind}"
    }, {
        w: 3,
        v: "{$kenkuname=Gust}"
    }, {
        w: 3,
        v: "{$kenkuname=Stream}"
    }, {
        w: 3,
        v: "{$kenkuname=Coins}"
    }, {
        w: 3,
        v: "{$kenkuname=Keys}"
    }, {
        w: 3,
        v: "{$kenkuname=Laugh}"
    }, {
        w: 3,
        v: "{$kenkuname=Thunder}"
    }, {
        w: 3,
        v: "{$kenkuname=Door Slam}"
    }, {
        w: 3,
        v: "{$kenkuname=Knock Knock}"
    }, {
        w: 3,
        v: "{$kenkuname=Small Bell}"
    }, {
        w: 3,
        v: "{$kenkuname=Big Bell}"
    }, {
        w: 3,
        v: "{$kenkuname=Yawn}"
    }, {
        w: 3,
        v: "{$kenkuname=Waterfall}"
    }, {
        w: 3,
        v: "{$kenkuname=Applause}"
    }, {
        w: 3,
        v: "{$kenkuname=Clap}"
    }, {
        w: 3,
        v: "{$kenkuname=Shatter}"
    }, {
        w: 1,
        v: "{$kenkuname=Fog Horn}"
    }, {
        w: 3,
        v: "{$kenkuname=Crickets}"
    }, {
        w: 2,
        v: "{$kenkuname=Fart}"
    }, {
        w: 3,
        v: "{$kenkuname=Tap Tap}"
    }, {
        w: 3,
        v: "{$kenkuname=Whirr}"
    }, {
        w: 3,
        v: "{$kenkuname=Grill}"
    }, {
        w: 3,
        v: "{$kenkuname=Bubble}"
    }, {
        w: 3,
        v: "{$kenkuname=Steam}"
    }, {
        w: 3,
        v: "{$kenkuname=Crash}"
    }, {
        w: 3,
        v: "{$kenkuname=Cough}"
    }, {
        w: 3,
        v: "{$kenkuname=Rattle}"
    }]
}, function(e) {
    e.exports = [{
        w: 30,
        v: "{$kenkuname+}"
    }, {
        w: 1,
        v: "{$kenkuname=Meow}"
    }, {
        w: 1,
        v: "{$kenkuname=Purr}"
    }, {
        w: 1,
        v: "{$kenkuname=Rat Scratch}"
    }, {
        w: 1,
        v: "{$kenkuname=Hoot}"
    }, {
        w: 1,
        v: "{$kenkuname=Raven}"
    }, {
        w: 1,
        v: "{$kenkuname=Bark}"
    }, {
        w: 1,
        v: "{$kenkuname=Growl}"
    }, {
        w: 1,
        v: "{$kenkuname=Squeak}"
    }, {
        w: 1,
        v: "{$kenkuname=Batwing}"
    }, {
        w: 1,
        v: "{$kenkuname=Howl}"
    }, {
        w: 1,
        v: "{$kenkuname=Falcon}"
    }, {
        w: 1,
        v: "{$kenkuname=Eagle}"
    }, {
        w: 1,
        v: "{$kenkuname=Bleat}"
    }, {
        w: 1,
        v: "{$kenkuname=Squawk}"
    }, {
        w: 1,
        v: "{$kenkuname=Cluck}"
    }, {
        w: 1,
        v: "{$kenkuname=Moo}"
    }, {
        w: 1,
        v: "{$kenkuname=Hiss}"
    }, {
        w: 1,
        v: "{$kenkuname=Fox}"
    }]
}, function(e) {
    e.exports = [{
        w: 30,
        v: "{$kenkuname+}"
    }, {
        w: 1,
        v: "{$kenkuname=Cut}"
    }, {
        w: 1,
        v: "{$kenkuname=Scream}"
    }, {
        w: 1,
        v: "{$kenkuname=Shout}"
    }, {
        w: 1,
        v: "{$kenkuname=Battle}"
    }, {
        w: 1,
        v: "{$kenkuname=Stab}"
    }, {
        w: 1,
        v: "{$kenkuname=Blades Clashing}"
    }, {
        w: 1,
        v: "{$kenkuname=Arrow}"
    }, {
        w: 1,
        v: "{$kenkuname=Crossbow}"
    }, {
        w: 1,
        v: "{$kenkuname=Unsheathing}"
    }, {
        w: 1,
        v: "{$kenkuname=Groan}"
    }, {
        w: 1,
        v: "{$kenkuname=Punch}"
    }, {
        w: 1,
        v: "{$kenkuname=Slap}"
    }, {
        w: 1,
        v: "{$kenkuname=Boom}"
    }, {
        w: 1,
        v: "{$kenkuname=Catapult}"
    }, {
        w: 1,
        v: "{$kenkuname=Trebuchet}"
    }]
}, function(e) {
    e.exports = [{
        w: 12,
        v: "{$kenkuname+}"
    }, {
        w: 1,
        v: "{$kenkuname=Bang}"
    }, {
        w: 1,
        v: "{$kenkuname=Clang}"
    }, {
        w: 1,
        v: "{$kenkuname=Scissor}"
    }, {
        w: 1,
        v: "{$kenkuname=Hammer}"
    }, {
        w: 1,
        v: "{$kenkuname=Click}"
    }, {
        w: 1,
        v: "{$kenkuname=Anvil}"
    }]
}, function(e) {
    e.exports = [{
        w: 20,
        v: "{$kenkuname+}"
    }, {
        w: 1,
        v: "{$kenkuname=Whisper}"
    }, {
        w: 1,
        v: "{$kenkuname=Breeze}"
    }, {
        w: 1,
        v: "{$kenkuname=Light Step}"
    }, {
        w: 1,
        v: "{$kenkuname=Breath}"
    }, {
        w: 1,
        v: "{$kenkuname=Rustling Leaves}"
    }, {
        w: 1,
        v: "{$kenkuname=Page Turning}"
    }, {
        w: 1,
        v: "{$kenkuname=Murmur}"
    }, {
        w: 1,
        v: "{$kenkuname=Pitter-Patter}"
    }, {
        w: 1,
        v: "{$kenkuname=Flutter}"
    }, {
        w: 1,
        v: "{$kenkuname=Quill Scratch}"
    }]
}, function(e) {
    e.exports = [{
        w: 18,
        v: "{$quirks+}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+will always try to perch }{$quirks+$minHim}{$quirks+self on furniture. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+spends most of }{$quirks+$minPoss}{$quirks+free time on the top of buildings. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+finds repetitive tasks soothing. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+enjoys drawing copies of other drawings. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+excels at sculpting wooden replicas of objects. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+highly values }{$quirks+$minPoss}{$quirks+flock's teachings. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+enjoys mimicking the voice of }{$quirks+$minPoss}{$quirks+non-kenku friends. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+uses a different voice for every word }{$quirks+$minPro}{$quirks+speaks. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is often found staring at the sky. }"
    }, {
        w: 3,
        v: "{$quirks+$majPoss}{$quirks+sentences are always ponctuated with seemingly random sounds. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{dragons}{feathertexture}{kenkucolor}{$skin=$feathertexture}{$skin+ }{$skin+$kenkucolor}{$skintype= feathers}"
    }]
}, function(e) {
    e.exports = [{
        w: 8,
        v: "{$lang=elvish}"
    }, {
        w: 2,
        v: "{$lang=celestial}"
    }, {
        w: 5,
        v: "{$lang=draconic}"
    }, {
        w: 6,
        v: "{$lang=dwarvish}"
    }, {
        w: 2,
        v: "{$lang=infernal}"
    }, {
        w: 2,
        v: "{$lang=sylvan}"
    }, {
        w: 2,
        v: "{$lang=orcish}"
    }, {
        w: 2,
        v: "{$lang=deep speech}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        name: "Astrologer",
        v: "{$occupation=astrologer}{kenkunamequiet}"
    }, {
        w: 1,
        name: "Cartographer",
        v: "{$occupation=cartographer}{kenkunamequiet}"
    }, {
        w: 1,
        name: "Historian",
        v: "{$occupation=historian}{kenkunamequiet}"
    }, {
        w: 1,
        name: "Poet",
        v: "{$occupation=poet}{%cha+1}{kenkuname}"
    }, {
        w: 1,
        name: "Philosopher",
        v: "{$occupation=philosopher}{%wis+1}{%moralneutral+1}{religiousquirk}{kenkunamequiet}"
    }, {
        w: 1,
        name: "Hermit",
        v: "{$occupation=hermit}{%wis+1}{religiousquirk}{kenkunameanimal}"
    }, {
        w: 1,
        name: "Wandering Pilgrim",
        v: "{$occupation=wandering pilgrim}{%wis+1}{%good+3}{%evil-1}{religiousquirk}{kenkunamequiet}"
    }, {
        w: 2,
        name: "Barber",
        v: "{$occupation=barber}{%dex+3}{kenkuname}"
    }, {
        w: 1,
        name: "Doctor",
        v: "{$occupation=doctor}{%dex+2}{%int+2}{kenkuname}"
    }, {
        w: 1,
        name: "Medic",
        v: "{$occupation=medic}{%dex+1}{kenkuname}"
    }, {
        w: 1,
        name: "Barrister",
        v: "{$occupation=barrister}{%cha+2}{%lawful+3}{kenkuname}"
    }, {
        w: 1,
        name: "Herald",
        v: "{$occupation=herald}{%cha+3}{kenkuname}"
    }, {
        w: 2,
        name: "Scribe",
        v: "{$occupation=scribe}{%dex+1}{religiousquirk}{kenkunamequiet}"
    }, {
        w: 2,
        name: "Acolyte",
        v: "{$occupation=acolyte}{%wis+1}{religiousquirk}{kenkunamequiet}"
    }, {
        w: 2,
        name: "Neophyte",
        v: "{$occupation=neophyte}{religiousquirk}{kenkunamequiet}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        name: "Explorer",
        v: "{$occupation=explorer}{%wis+1}{%dex+1}{%con+1}{kenkuname}"
    }, {
        w: 2,
        name: "Diplomat",
        v: "{$occupation=diplomat}{%cha+1}{%int+1}{kenkunamequiet}"
    }, {
        w: 2,
        name: "Knight",
        v: "{$occupation=knight}{%dex+1}{%str+2}{%con+2}{militaryquirk}{kenkunamefighting}"
    }, {
        w: 1,
        name: "Minister",
        v: "{$occupation=minister}{%cha+1}{religiousquirk}{kenkunamequiet}"
    }, {
        w: 1,
        name: "Page",
        v: "{$occupation=page}{%dex+1}{%str+1}{%int-1}{militaryquirk}{kenkunamequiet}"
    }, {
        w: 2,
        name: "Squire",
        v: "{$occupation=squire}{%str+1}{%dex+1}{militaryquirk}{kenkunamefighting}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{$build=an anorexic}{%str-3}{%con-2}"
    }, {
        w: 30,
        v: "{$build=a skinny}{%str-2}{%dex+1}{%con-2}"
    }, {
        w: 40,
        v: "{$build=a lean}{%str-1}{%dex+1}"
    }, {
        w: 30,
        v: "{$build=an athletic}{%str+1}{%dex+1}{%con+1}"
    }, {
        w: 16,
        v: "{$build=a muscular}{%str+2}{%con+1}"
    }, {
        w: 20,
        v: "{$build=a regular}"
    }, {
        w: 5,
        v: "{$build=a beefy}{%str+2}{%dex-1}{%con+2}{%height+3}"
    }, {
        w: 2,
        v: "{$build=a massive}{%str+3}{%dex-2}{%con+3}{%height+5}"
    }, {
        w: 10,
        v: "{$build=a round}{%dex-1}{%con+1}"
    }, {
        w: 3,
        v: "{$build=a fat}{%dex-1}{%str+1}"
    }, {
        w: 2,
        v: "{$build=an overweight}{%str+1}{%dex-2}{%con-1}{%cha-1}"
    }, {
        w: 1,
        v: "{$build=an obese}{%dex-4}{%str+1}{%con-2}{%cha-2}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$lizardcolor=black}"
    }, {
        w: 2,
        v: "{$lizardcolor=gray}"
    }, {
        w: 2,
        v: "{$lizardcolor=brown}"
    }, {
        w: 3,
        v: "{$lizardcolor=emerald}"
    }, {
        w: 3,
        v: "{$lizardcolor=dark green}"
    }, {
        w: 3,
        v: "{$lizardcolor=green}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{dragonbornname}{$race=lizardman}"
    }, {
        w: 1,
        v: "{female}{dragonbornname}{$race=lizardwoman}"
    }]
}, function(e) {
    e.exports = [{
        w: 12,
        v: "{$quirks+}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has no respect for creatures without scales. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+pities creatures without armor, natural or made. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a hard time taking clothes seriously. }"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+considers dead bodies as food, no matter who they were while alive. }"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+loves making small knives and tools out of bones. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+longs for a life in the marshes. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+sleeps best when mostly underwater. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+prefers swimming to walking. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+doesn't understand the concept of money. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has learned to laugh by observation. }{$quirks+$majPro}{$quirks+ still doesn't understand humor.}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a preference for live food. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+doesn't understand sarcasm. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a hard time understanding and remembering names that aren't descriptive. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{lizardcolors}{scaletexture}{$skin=$scaletexture}{$skin+ }{$skin+$lizardcolor}{$skintype= scales}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$lizardtraits=$majPro}{$lizardtraits+never acts on impulse. }{%wis+1}"
    }, {
        w: 2,
        v: "{$lizardtraits=$majPro}{$lizardtraits+is very detached from }{$lizardtraits+$minPoss}{$lizardtraits+emotions. }"
    }, {
        w: 2,
        v: "{$lizardtraits=$majPro}{$lizardtraits+has a hard time understanding other humanoids' emotions. }"
    }, {
        w: 2,
        v: "{$lizardtraits=$majPro}{$lizardtraits+has no concept of empathy. }"
    }, {
        w: 2,
        v: "{$lizardtraits=$majPro}{$lizardtraits+seems emotionally distant. }"
    }, {
        w: 2,
        v: "{$lizardtraits=$majPro}{$lizardtraits+is always cold and calculating. }"
    }, {
        w: 2,
        v: "{$lizardtraits=$majPro}{$lizardtraits+feels no attachment to the past. }"
    }, {
        w: 2,
        v: "{$lizardtraits=$majPro}{$lizardtraits+values }{$lizardtraits+$minPoss}{$lizardtraits+survival above everything else. }"
    }]
}, function(e) {
    e.exports = [{
        w: 100,
        v: "{longbeard1}{beardshape}"
    }, {
        w: 1,
        v: "{$beard=}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$beard= with a medium}"
    }, {
        w: 3,
        v: "{$beard= with a long}"
    }, {
        w: 2,
        v: "{$beard= with a long, braided}"
    }, {
        w: 3,
        v: "{$beard= with a very long}"
    }, {
        w: 2,
        v: "{$beard= with a very long, braided}"
    }, {
        w: 3,
        v: "{$beard= with a gigantic}"
    }, {
        w: 2,
        v: "{$beard= with a gigantic, braided}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%cha-4}"
    }, {
        w: 2,
        v: "{%cha-2}"
    }, {
        w: 1,
        v: "{%cha+0}"
    }, {
        w: 1,
        v: "{%cha+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%con-4}"
    }, {
        w: 2,
        v: "{%con-2}"
    }, {
        w: 1,
        v: "{%con+0}"
    }, {
        w: 1,
        v: "{%con+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%dex-4}"
    }, {
        w: 2,
        v: "{%dex-2}"
    }, {
        w: 1,
        v: "{%dex+0}"
    }, {
        w: 1,
        v: "{%dex+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%int-4}"
    }, {
        w: 2,
        v: "{%int-2}"
    }, {
        w: 1,
        v: "{%int+0}"
    }, {
        w: 1,
        v: "{%int+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%str-4}"
    }, {
        w: 2,
        v: "{%str-2}"
    }, {
        w: 1,
        v: "{%str+0}"
    }, {
        w: 1,
        v: "{%str+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{%wis-4}"
    }, {
        w: 2,
        v: "{%wis-2}"
    }, {
        w: 1,
        v: "{%wis+0}"
    }, {
        w: 1,
        v: "{%wis+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$gender=male}{$majPro=He }{$minPro=he }{$workGender=man}{$majPoss=His }{$minPoss=his }{$minHim=him}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Akan}"
    }, {
        w: 1,
        v: "{$name=Arin}"
    }, {
        w: 1,
        v: "{$name=Arkud}"
    }, {
        w: 1,
        v: "{$name=Arvin}"
    }, {
        w: 1,
        v: "{$name=Atur}"
    }, {
        w: 1,
        v: "{$name=Azal}"
    }, {
        w: 1,
        v: "{$name=Bali}"
    }, {
        w: 1,
        v: "{$name=Banain}"
    }, {
        w: 1,
        v: "{$name=Bifund}"
    }, {
        w: 1,
        v: "{$name=Bori}"
    }, {
        w: 1,
        v: "{$name=Dinain}"
    }, {
        w: 1,
        v: "{$name=Disanz}"
    }, {
        w: 1,
        v: "{$name=Duli}"
    }, {
        w: 1,
        v: "{$name=Dwali}"
    }, {
        w: 1,
        v: "{$name=Fari}"
    }, {
        w: 1,
        v: "{$name=Funda}"
    }, {
        w: 1,
        v: "{$name=Gamah}"
    }, {
        w: 1,
        v: "{$name=Gamal}"
    }, {
        w: 1,
        v: "{$name=Gamin}"
    }, {
        w: 1,
        v: "{$name=Geda}"
    }, {
        w: 1,
        v: "{$name=Gili}"
    }, {
        w: 1,
        v: "{$name=Glatur}"
    }, {
        w: 1,
        v: "{$name=Gluri}"
    }, {
        w: 1,
        v: "{$name=Grakilm}"
    }, {
        w: 1,
        v: "{$name=Iklal}"
    }, {
        w: 1,
        v: "{$name=Irim}"
    }, {
        w: 1,
        v: "{$name=Kari}"
    }, {
        w: 1,
        v: "{$name=Khali}"
    }, {
        w: 1,
        v: "{$name=Kurdu}"
    }, {
        w: 1,
        v: "{$name=Loinarv}"
    }, {
        w: 1,
        v: "{$name=Lukhal}"
    }, {
        w: 1,
        v: "{$name=Nainarv}"
    }, {
        w: 1,
        v: "{$name=Orim}"
    }, {
        w: 1,
        v: "{$name=Rainan}"
    }, {
        w: 1,
        v: "{$name=Thainarv}"
    }, {
        w: 1,
        v: "{$name=Thali}"
    }, {
        w: 1,
        v: "{$name=Thori}"
    }, {
        w: 1,
        v: "{$name=Thrari}"
    }, {
        w: 1,
        v: "{$name=Thrasanz}"
    }, {
        w: 1,
        v: "{$name=Thrimal}"
    }, {
        w: 1,
        v: "{$name=Throri}"
    }, {
        w: 1,
        v: "{$name=Thrukurd}"
    }, {
        w: 1,
        v: "{$name=Thunda}"
    }, {
        w: 1,
        v: "{$name=Thundu}"
    }, {
        w: 1,
        v: "{$name=Ukhur}"
    }, {
        w: 1,
        v: "{$name=Undil}"
    }, {
        w: 1,
        v: "{$name=Urdur}"
    }, {
        w: 1,
        v: "{$name=Uril}"
    }, {
        w: 1,
        v: "{$name=Urin}"
    }, {
        w: 1,
        v: "{$name=Zaghain}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Annaeleth}"
    }, {
        w: 1,
        v: "{$name=Caresta}"
    }, {
        w: 1,
        v: "{$name=Celenwe}"
    }, {
        w: 1,
        v: "{$name=Celorfin}"
    }, {
        w: 1,
        v: "{$name=Cirdaere}"
    }, {
        w: 1,
        v: "{$name=Cirdire}"
    }, {
        w: 1,
        v: "{$name=Cirdore}"
    }, {
        w: 1,
        v: "{$name=Danore}"
    }, {
        w: 1,
        v: "{$name=Delemmak}"
    }, {
        w: 1,
        v: "{$name=Dirinor}"
    }, {
        w: 1,
        v: "{$name=Dorophil}"
    }, {
        w: 1,
        v: "{$name=Eahtadan}"
    }, {
        w: 1,
        v: "{$name=Egoron}"
    }, {
        w: 1,
        v: "{$name=Egos}"
    }, {
        w: 1,
        v: "{$name=Elegnos}"
    }, {
        w: 1,
        v: "{$name=Elel}"
    }, {
        w: 1,
        v: "{$name=Elered}"
    }, {
        w: 1,
        v: "{$name=Ellas}"
    }, {
        w: 1,
        v: "{$name=Elromior}"
    }, {
        w: 1,
        v: "{$name=Elurir}"
    }, {
        w: 1,
        v: "{$name=Endinwel}"
    }, {
        w: 1,
        v: "{$name=Enengod}"
    }, {
        w: 1,
        v: "{$name=Enereg}"
    }, {
        w: 1,
        v: "{$name=Erelmil}"
    }, {
        w: 1,
        v: "{$name=Erodh}"
    }, {
        w: 1,
        v: "{$name=Finaeli}"
    }, {
        w: 1,
        v: "{$name=Finare}"
    }, {
        w: 1,
        v: "{$name=Finasaer}"
    }, {
        w: 1,
        v: "{$name=Findire}"
    }, {
        w: 1,
        v: "{$name=Finerdhil}"
    }, {
        w: 1,
        v: "{$name=Finethil}"
    }, {
        w: 1,
        v: "{$name=Galadher}"
    }, {
        w: 1,
        v: "{$name=Galebre}"
    }, {
        w: 1,
        v: "{$name=Galegal}"
    }, {
        w: 1,
        v: "{$name=Galure}"
    }, {
        w: 1,
        v: "{$name=Golemmoth}"
    }, {
        w: 1,
        v: "{$name=Golineth}"
    }, {
        w: 1,
        v: "{$name=Gonethin}"
    }, {
        w: 1,
        v: "{$name=Hilore}"
    }, {
        w: 1,
        v: "{$name=Ingon}"
    }, {
        w: 1,
        v: "{$name=Ladore}"
    }, {
        w: 1,
        v: "{$name=Lemmaegli}"
    }, {
        w: 1,
        v: "{$name=Lionerdhon}"
    }, {
        w: 1,
        v: "{$name=Mironwe}"
    }, {
        w: 1,
        v: "{$name=Olond}"
    }, {
        w: 1,
        v: "{$name=Ophin}"
    }, {
        w: 1,
        v: "{$name=Oron}"
    }, {
        w: 1,
        v: "{$name=Penlador}"
    }, {
        w: 1,
        v: "{$name=Thilenwe}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Bilbar}"
    }, {
        w: 1,
        v: "{$name=Bilcorin}"
    }, {
        w: 1,
        v: "{$name=Bilgrim}"
    }, {
        w: 1,
        v: "{$name=Briwor}"
    }, {
        w: 1,
        v: "{$name=Orpip}"
    }, {
        w: 1,
        v: "{$name=Orros}"
    }, {
        w: 1,
        v: "{$name=Panaziver}"
    }, {
        w: 1,
        v: "{$name=Podon}"
    }, {
        w: 1,
        v: "{$name=Quoji}"
    }, {
        w: 1,
        v: "{$name=Wrezu}"
    }, {
        w: 1,
        v: "{$name=Orutor}"
    }, {
        w: 1,
        v: "{$name=Oruver}"
    }, {
        w: 1,
        v: "{$name=Yexim}"
    }, {
        w: 1,
        v: "{$name=Yosston}"
    }, {
        w: 1,
        v: "{$name=Enitix}"
    }, {
        w: 1,
        v: "{$name=Felver}"
    }, {
        w: 1,
        v: "{$name=Grapip}"
    }, {
        w: 1,
        v: "{$name=Hisni}"
    }, {
        w: 1,
        v: "{$name=Histix}"
    }, {
        w: 1,
        v: "{$name=Horhik}"
    }, {
        w: 1,
        v: "{$name=Ianlin}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Ianxim}"
    }, {
        w: 1,
        v: "{$name+ Jegim}"
    }, {
        w: 1,
        v: "{$name+ Jelen}"
    }, {
        w: 1,
        v: "{$name+ Jorros}"
    }, {
        w: 1,
        v: "{$name+ Nibis}"
    }, {
        w: 1,
        v: "{$name+ Orlin}"
    }, {
        w: 1,
        v: "{$name+ Yosvyn}"
    }, {
        w: 1,
        v: "{$name+ Zanybar}"
    }, {
        w: 1,
        v: "{$name+ Davgim}"
    }, {
        w: 1,
        v: "{$name+ Caldri}"
    }, {
        w: 1,
        v: "{$name+ Caltix}"
    }, {
        w: 1,
        v: "{$name+ Dorrug}"
    }, {
        w: 1,
        v: "{$name+ Enidon}"
    }, {
        w: 1,
        v: "{$name+ Enimorn}"
    }, {
        w: 1,
        v: "{$name+ Lokas}"
    }, {
        w: 1,
        v: "{$name+ Yegim}"
    }, {
        w: 1,
        v: "{$name+ Davlin}"
    }, {
        w: 1,
        v: "{$name+ Yeben}"
    }, {
        w: 1,
        v: "{$name+ Quomop}"
    }, {
        w: 1,
        v: "{$name+ Rasji}"
    }, {
        w: 1,
        v: "{$name+ Salben}"
    }, {
        w: 1,
        v: "{$name+ Salgim}"
    }, {
        w: 1,
        v: "{$name+ Saljin}"
    }, {
        w: 1,
        v: "{$name+ Tover}"
    }, {
        w: 1,
        v: "{$name+ Traser}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Traziver}"
    }, {
        w: 1,
        v: "{$name+ Ummop}"
    }, {
        w: 1,
        v: "{$name+ Uricorin}"
    }, {
        w: 1,
        v: "{$name+ Urigrim}"
    }, {
        w: 1,
        v: "{$name+ Uriros}"
    }, {
        w: 1,
        v: "{$name+ Vormop}"
    }, {
        w: 1,
        v: "{$name+ Gadri}"
    }, {
        w: 1,
        v: "{$name+ Gamop}"
    }, {
        w: 1,
        v: "{$name+ Gaxif}"
    }, {
        w: 1,
        v: "{$name+ Jorxif}"
    }, {
        w: 1,
        v: "{$name+ Kelbar}"
    }, {
        w: 1,
        v: "{$name+ Kelfiz}"
    }, {
        w: 1,
        v: "{$name+ Lanvyn}"
    }, {
        w: 1,
        v: "{$name+ Merwor}"
    }, {
        w: 1,
        v: "{$name+ Warmorn}"
    }, {
        w: 1,
        v: "{$name+ Warryn}"
    }, {
        w: 1,
        v: "{$name+ Wilbis}"
    }, {
        w: 1,
        v: "{$name+ Wrefan}"
    }, {
        w: 1,
        v: "{$name+ Yetix}"
    }, {
        w: 1,
        v: "{$name+ Oruben}"
    }, {
        w: 1,
        v: "{$name+ Orujin}"
    }, {
        w: 1,
        v: "{$name+ Jorkur}"
    }, {
        w: 1,
        v: "{$name+ Quorug}"
    }, {
        w: 1,
        v: "{$name+ Yosser}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Calser}"
    }, {
        w: 1,
        v: "{$name+ Lanfan}"
    }, {
        w: 1,
        v: "{$name+ Warrug}"
    }, {
        w: 1,
        v: "{$name+ Xalbis}"
    }, {
        w: 1,
        v: "{$name+ Xaltor}"
    }, {
        w: 1,
        v: "{$name+ Sayur}"
    }, {
        w: 1,
        v: "{$name+ Sinkur}"
    }, {
        w: 1,
        v: "{$name+ Tohim}"
    }, {
        w: 1,
        v: "{$name+ Toryn}"
    }, {
        w: 1,
        v: "{$name+ Xopip}"
    }, {
        w: 1,
        v: "{$name+ Erben}"
    }, {
        w: 1,
        v: "{$name+ Erfan}"
    }, {
        w: 1,
        v: "{$name+ Ertix}"
    }, {
        w: 1,
        v: "{$name+ Fargrim}"
    }, {
        w: 1,
        v: "{$name+ Felben}"
    }, {
        w: 1,
        v: "{$name+ Felcorin}"
    }, {
        w: 1,
        v: "{$name+ Bilver}"
    }, {
        w: 1,
        v: "{$name+ Brijin}"
    }, {
        w: 1,
        v: "{$name+ Briros}"
    }, {
        w: 1,
        v: "{$name+ Felhim}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Adald}"
    }, {
        w: 1,
        v: "{$name=Algast}"
    }, {
        w: 1,
        v: "{$name=Ancin}"
    }, {
        w: 1,
        v: "{$name=Ardic}"
    }, {
        w: 1,
        v: "{$name=Arryn}"
    }, {
        w: 1,
        v: "{$name=Artin}"
    }, {
        w: 1,
        v: "{$name=Baldo}"
    }, {
        w: 1,
        v: "{$name=Cottolm}"
    }, {
        w: 1,
        v: "{$name=Daso}"
    }, {
        w: 1,
        v: "{$name=Falco}"
    }, {
        w: 1,
        v: "{$name=Fastinbr}"
    }, {
        w: 1,
        v: "{$name=Fastolph}"
    }, {
        w: 1,
        v: "{$name=Fastrard}"
    }, {
        w: 1,
        v: "{$name=Feric}"
    }, {
        w: 1,
        v: "{$name=Ferim}"
    }, {
        w: 1,
        v: "{$name=Fosco}"
    }, {
        w: 1,
        v: "{$name=Gariad}"
    }, {
        w: 1,
        v: "{$name=Gauwis}"
    }, {
        w: 1,
        v: "{$name=George}"
    }, {
        w: 1,
        v: "{$name=Gery}"
    }, {
        w: 1,
        v: "{$name=Giles}"
    }, {
        w: 1,
        v: "{$name=Gorme}"
    }, {
        w: 1,
        v: "{$name=Griffin}"
    }, {
        w: 1,
        v: "{$name=Gyleon}"
    }, {
        w: 1,
        v: "{$name=Halfo}"
    }, {
        w: 1,
        v: "{$name=Halfroc}"
    }, {
        w: 1,
        v: "{$name=Hamfo}"
    }, {
        w: 1,
        v: "{$name=Harand}"
    }, {
        w: 1,
        v: "{$name=Hardo}"
    }, {
        w: 1,
        v: "{$name=Herim}"
    }, {
        w: 1,
        v: "{$name=Hildo}"
    }, {
        w: 1,
        v: "{$name=Holfo}"
    }, {
        w: 1,
        v: "{$name=Holme}"
    }, {
        w: 1,
        v: "{$name=Igoc}"
    }, {
        w: 1,
        v: "{$name=Johny}"
    }, {
        w: 1,
        v: "{$name=Lasym}"
    }, {
        w: 1,
        v: "{$name=Mado}"
    }, {
        w: 1,
        v: "{$name=Perin}"
    }, {
        w: 1,
        v: "{$name=Phames}"
    }, {
        w: 1,
        v: "{$name=Phomas}"
    }, {
        w: 1,
        v: "{$name=Pinas}"
    }, {
        w: 1,
        v: "{$name=Reward}"
    }, {
        w: 1,
        v: "{$name=Rewilh}"
    }, {
        w: 1,
        v: "{$name=Rime}"
    }, {
        w: 1,
        v: "{$name=Sengras}"
    }, {
        w: 1,
        v: "{$name=Tinbrand}"
    }, {
        w: 1,
        v: "{$name=Tiny}"
    }, {
        w: 1,
        v: "{$name=Tolme}"
    }, {
        w: 1,
        v: "{$name=Vigo}"
    }, {
        w: 1,
        v: "{$name=Wilhye}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Althalos}"
    }, {
        w: 1,
        v: "{$name=Arthur}"
    }, {
        w: 1,
        v: "{$name=Asher}"
    }, {
        w: 1,
        v: "{$name=Barda}"
    }, {
        w: 1,
        v: "{$name=Benedict}"
    }, {
        w: 1,
        v: "{$name=Berinon}"
    }, {
        w: 1,
        v: "{$name=Borin}"
    }, {
        w: 1,
        v: "{$name=Brom}"
    }, {
        w: 1,
        v: "{$name=Bryce}"
    }, {
        w: 1,
        v: "{$name=Carac}"
    }, {
        w: 1,
        v: "{$name=Cassius}"
    }, {
        w: 1,
        v: "{$name=Cedric}"
    }, {
        w: 1,
        v: "{$name=Charles}"
    }, {
        w: 1,
        v: "{$name=Clifton}"
    }, {
        w: 1,
        v: "{$name=Dain}"
    }, {
        w: 1,
        v: "{$name=Destrian}"
    }, {
        w: 1,
        v: "{$name=Donald}"
    }, {
        w: 1,
        v: "{$name=Doran}"
    }, {
        w: 1,
        v: "{$name=Edmund}"
    }, {
        w: 1,
        v: "{$name=Falk}"
    }, {
        w: 1,
        v: "{$name=Favian}"
    }, {
        w: 1,
        v: "{$name=Fendrel}"
    }, {
        w: 1,
        v: "{$name=Forthwind}"
    }, {
        w: 1,
        v: "{$name=Francis}"
    }, {
        w: 1,
        v: "{$name=Frederick}"
    }, {
        w: 1,
        v: "{$name=Gavin}"
    }, {
        w: 1,
        v: "{$name=Gavin}"
    }, {
        w: 1,
        v: "{$name=Geoffrey}"
    }, {
        w: 1,
        v: "{$name=Gorvenal}"
    }, {
        w: 1,
        v: "{$name=Gregory}"
    }, {
        w: 1,
        v: "{$name=Hadrian}"
    }, {
        w: 1,
        v: "{$name=Henry}"
    }, {
        w: 1,
        v: "{$name=Janshai}"
    }, {
        w: 1,
        v: "{$name=Jarin}"
    }, {
        w: 1,
        v: "{$name=John}"
    }, {
        w: 1,
        v: "{$name=Joseph}"
    }, {
        w: 1,
        v: "{$name=Justice}"
    }, {
        w: 1,
        v: "{$name=Kelvin}"
    }, {
        w: 1,
        v: "{$name=Leo}"
    }, {
        w: 1,
        v: "{$name=Leofrick}"
    }, {
        w: 1,
        v: "{$name=Letholdus}"
    }, {
        w: 1,
        v: "{$name=Lief}"
    }, {
        w: 1,
        v: "{$name=Merek}"
    }, {
        w: 1,
        v: "{$name=Oliver}"
    }, {
        w: 1,
        v: "{$name=Peter}"
    }, {
        w: 1,
        v: "{$name=Peyton}"
    }, {
        w: 1,
        v: "{$name=Quinn}"
    }, {
        w: 1,
        v: "{$name=Robin}"
    }, {
        w: 1,
        v: "{$name=Roger}"
    }, {
        w: 1,
        v: "{$name=Ronald}"
    }, {
        w: 1,
        v: "{$name=Rowan}"
    }, {
        w: 1,
        v: "{$name=Rulf}"
    }, {
        w: 1,
        v: "{$name=Sadon}"
    }, {
        w: 1,
        v: "{$name=Simon}"
    }, {
        w: 1,
        v: "{$name=Terrowin}"
    }, {
        w: 1,
        v: "{$name=Terryn}"
    }, {
        w: 1,
        v: "{$name=Thomas}"
    }, {
        w: 1,
        v: "{$name=Tristan}"
    }, {
        w: 1,
        v: "{$name=Ulric}"
    }, {
        w: 1,
        v: "{$name=Walter}"
    }, {
        w: 1,
        v: "{$name=William}"
    }, {
        w: 1,
        v: "{$name=Xalvador}"
    }, {
        w: 1,
        v: "{$name=Zane}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Dalthu}"
    }, {
        w: 1,
        v: "{$name=Derthag}"
    }, {
        w: 1,
        v: "{$name=Eghuglat}"
    }, {
        w: 1,
        v: "{$name=Fozhug}"
    }, {
        w: 1,
        v: "{$name=Gelub}"
    }, {
        w: 1,
        v: "{$name=Glush}"
    }, {
        w: 1,
        v: "{$name=Gomatug}"
    }, {
        w: 1,
        v: "{$name=Hugmug}"
    }, {
        w: 1,
        v: "{$name=Jorgagu}"
    }, {
        w: 1,
        v: "{$name=Jughragh}"
    }, {
        w: 1,
        v: "{$name=Kebub}"
    }, {
        w: 1,
        v: "{$name=Kurbag}"
    }, {
        w: 1,
        v: "{$name=Maknok}"
    }, {
        w: 1,
        v: "{$name=Nofhug}"
    }, {
        w: 1,
        v: "{$name=Oakgu}"
    }, {
        w: 1,
        v: "{$name=Oogorim}"
    }, {
        w: 1,
        v: "{$name=Orgug}"
    }, {
        w: 1,
        v: "{$name=Ortguth}"
    }, {
        w: 1,
        v: "{$name=Pofhug}"
    }, {
        w: 1,
        v: "{$name=Poogugh}"
    }, {
        w: 1,
        v: "{$name=Puiltag}"
    }, {
        w: 1,
        v: "{$name=Quomaugh}"
    }, {
        w: 1,
        v: "{$name=Rurigig}"
    }, {
        w: 1,
        v: "{$name=Sargulg}"
    }, {
        w: 1,
        v: "{$name=Sarod}"
    }, {
        w: 1,
        v: "{$name=Shamar}"
    }, {
        w: 1,
        v: "{$name=Smegugh}"
    }, {
        w: 1,
        v: "{$name=Zog}"
    }, {
        w: 1,
        v: "{$name=Sogugh}"
    }, {
        w: 1,
        v: "{$name=Sugorim}"
    }, {
        w: 1,
        v: "{$name=Tozhug}"
    }, {
        w: 1,
        v: "{$name=Trugagh}"
    }, {
        w: 1,
        v: "{$name=Tulgan}"
    }, {
        w: 1,
        v: "{$name=Ulmragha}"
    }, {
        w: 1,
        v: "{$name=Urg}"
    }, {
        w: 1,
        v: "{$name=Vakmu}"
    }, {
        w: 1,
        v: "{$name=Varthurg}"
    }, {
        w: 1,
        v: "{$name=Vitgurat}"
    }, {
        w: 1,
        v: "{$name=Vlorg}"
    }, {
        w: 1,
        v: "{$name=Woglug}"
    }, {
        w: 1,
        v: "{$name=Xarlug}"
    }, {
        w: 1,
        v: "{$name=Xepug}"
    }, {
        w: 1,
        v: "{$name=Xig}"
    }, {
        w: 1,
        v: "{$name=Xug}"
    }, {
        w: 1,
        v: "{$name=Xugha}"
    }, {
        w: 1,
        v: "{$name=Xugor}"
    }, {
        w: 1,
        v: "{$name=Xuk}"
    }, {
        w: 1,
        v: "{$name=Yambagorn}"
    }, {
        w: 1,
        v: "{$name=Zarod}"
    }, {
        w: 1,
        v: "{$name=Zonagh}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Zumnus}"
    }, {
        w: 1,
        v: "{$name=Dheldes}"
    }, {
        w: 1,
        v: "{$name=Jhelmes}"
    }, {
        w: 1,
        v: "{$name=Kurlus}"
    }, {
        w: 1,
        v: "{$name=Migis}"
    }, {
        w: 1,
        v: "{$name=Nenles}"
    }, {
        w: 1,
        v: "{$name=Dhomnos}"
    }, {
        w: 1,
        v: "{$name=Khorlos}"
    }, {
        w: 1,
        v: "{$name=Kaldas}"
    }, {
        w: 1,
        v: "{$name=Kuhlus}"
    }, {
        w: 1,
        v: "{$name=Julgus}"
    }, {
        w: 1,
        v: "{$name=Kinris}"
    }, {
        w: 1,
        v: "{$name=Vunnus}"
    }, {
        w: 1,
        v: "{$name=Minvis}"
    }, {
        w: 1,
        v: "{$name=Dhohlos}"
    }, {
        w: 1,
        v: "{$name=Cerzes}"
    }, {
        w: 1,
        v: "{$name=Mavnas}"
    }, {
        w: 1,
        v: "{$name=Ciglis}"
    }, {
        w: 1,
        v: "{$name=Zunrus}"
    }, {
        w: 1,
        v: "{$name=Dhulmus}"
    }, {
        w: 1,
        v: "{$name=Junus}"
    }, {
        w: 1,
        v: "{$name=Vurzus}"
    }, {
        w: 1,
        v: "{$name=Dhilis}"
    }, {
        w: 1,
        v: "{$name=Cinvis}"
    }, {
        w: 1,
        v: "{$name=Jilnis}"
    }, {
        w: 1,
        v: "{$name=Jannas}"
    }, {
        w: 1,
        v: "{$name=Jarlas}"
    }, {
        w: 1,
        v: "{$name=Nalas}"
    }, {
        w: 1,
        v: "{$name=Khinnis}"
    }, {
        w: 1,
        v: "{$name=Malzas}"
    }, {
        w: 1,
        v: "{$name=Marzas}"
    }, {
        w: 1,
        v: "{$name=Cendes}"
    }, {
        w: 1,
        v: "{$name=Kondos}"
    }, {
        w: 1,
        v: "{$name=Mivnis}"
    }, {
        w: 1,
        v: "{$name=Zonlos}"
    }, {
        w: 1,
        v: "{$name=Jhindis}"
    }, {
        w: 1,
        v: "{$name=Dhinlis}"
    }, {
        w: 1,
        v: "{$name=Vunrus}"
    }, {
        w: 1,
        v: "{$name=Minlis}"
    }, {
        w: 1,
        v: "{$name=Jhihris}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        name: "Bodyguard",
        v: "{$occupation=bodyguard}{%wis+2}{militaryquirk}{kenkunamefighting}"
    }, {
        w: 1,
        name: "Bounty Hunter",
        v: "{$occupation=bounty hunter}{%int+3}{militaryquirk}{kenkunamefighting}"
    }, {
        w: 1,
        name: "Forester",
        v: "{$occupation=forester}{%wis+2}{%dex+1}{naturequirk}{kenkunameanimal}"
    }, {
        w: 1,
        name: "Gladiator",
        v: "{$occupation=gladiator}{%str+2}{%dex+1}{%con+1}{militaryquirk}{kenkunamefighting}"
    }, {
        w: 1,
        name: "Jailer",
        v: "{$occupation=jailer}{kenkuname}"
    }, {
        w: 3,
        name: "Soldier",
        v: "{$occupation=soldier}{%dex+1}{%str+1}{%con+1}{militaryquirk}{kenkunamefighting}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$weapon=rapier}"
    }, {
        w: 1,
        v: "{$weapon=scimitar}"
    }, {
        w: 1,
        v: "{$weapon=short sword}"
    }, {
        w: 1,
        v: "{$weapon=whip}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$weapon=blowgun}"
    }, {
        w: 3,
        v: "{$weapon=crossbow}"
    }, {
        w: 1,
        v: "{$weapon=net}"
    }, {
        w: 3,
        v: "{$weapon=longbow}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$weapon=battleaxe}"
    }, {
        w: 1,
        v: "{$weapon=flail}"
    }, {
        w: 1,
        v: "{$weapon=greataxe}"
    }, {
        w: 1,
        v: "{$weapon=glaive}"
    }, {
        w: 1,
        v: "{$weapon=greatsword}"
    }, {
        w: 1,
        v: "{$weapon=lance}"
    }, {
        w: 1,
        v: "{$weapon=longsword}"
    }, {
        w: 1,
        v: "{$weapon=maul}"
    }, {
        w: 1,
        v: "{$weapon=morningstar}"
    }, {
        w: 1,
        v: "{$weapon=pike}"
    }, {
        w: 1,
        v: "{$weapon=trident}"
    }, {
        w: 1,
        v: "{$weapon=warhammer}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{%cha-2}"
    }, {
        w: 6,
        v: "{%cha+0}"
    }, {
        w: 2,
        v: "{%cha+2}"
    }, {
        w: 1,
        v: "{%cha+4}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{%con-2}"
    }, {
        w: 6,
        v: "{%con+0}"
    }, {
        w: 2,
        v: "{%con+2}"
    }, {
        w: 1,
        v: "{%con+4}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{%dex-2}"
    }, {
        w: 6,
        v: "{%dex+0}"
    }, {
        w: 2,
        v: "{%dex+2}"
    }, {
        w: 1,
        v: "{%dex+4}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{%int-2}"
    }, {
        w: 6,
        v: "{%int+0}"
    }, {
        w: 2,
        v: "{%int+2}"
    }, {
        w: 1,
        v: "{%int+4}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{%str-2}"
    }, {
        w: 6,
        v: "{%str+0}"
    }, {
        w: 2,
        v: "{%str+2}"
    }, {
        w: 1,
        v: "{%str+4}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{%wis-2}"
    }, {
        w: 6,
        v: "{%wis+0}"
    }, {
        w: 2,
        v: "{%wis+2}"
    }, {
        w: 1,
        v: "{%wis+4}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$gender=female}{$majPoss=Her }{$minPoss=her }{$majPro=She }{$minPro=she }{$workGender=woman}{$minHim=her}{$beard=}{medusahair}"
    }]
}, function(e) {
    e.exports = [{
        w: 19,
        v: "{$hair=hair made of }{snakecolor}{$hair+snakes and }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{femaleelfname}{elfsurname}"
    }, {
        w: 1,
        v: "{femalehumanname}{humansurname}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        v: "{$quirks+$majPro}{$quirks+always wears a veil to mask her eyes. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+always wears a hood to mask her eyes. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+never opens her eyes. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+always wears dark glasses to mask her eyes. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+always wears a mask to hide her gaze. }"
    }]
}, function(e) {
    e.exports = [{
        w: 7,
        v: "{$quirks+}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+spends every morning training. }{%str+2}{%con+2}{%dex+2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+will never say no to a duel. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+can see an opening in any defense. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+never surrenders. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+loves training people. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+compares everything to a fight. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+sees fighting as a solution to any problem. }{%wis-2}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+judges people on their fighting skills. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+used to be bullied as a child and learned to fight so that it wouldn't happen again. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+always obeys }{$quirks+$minPoss}{$quirks+ superiors. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+always has a battle story to tell. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$sphy2+wears an eyepatch on }{$sphy1+$minPoss}"
    }, {
        w: 1,
        v: "{$sphy2+has a glass }"
    }, {
        w: 1,
        v: "{$sphy2+is blind from }{$sphy1+$minPoss}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        v: "{$sphy2+is missing a single finger from }{%dex-1}"
    }, {
        w: 3,
        v: "{$sphy2+is missing two fingers from }{%dex-1}"
    }, {
        w: 3,
        v: "{$sphy2+is missing three fingers from }{%dex-2}"
    }, {
        w: 1,
        v: "{$sphy2+is missing four fingers from }{%dex-2}"
    }, {
        w: 1,
        v: "{$sphy2+is missing all the fingers from }{%dex-4}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$sphy2+hand}"
    }, {
        w: 1,
        v: "{$sphy2+arm}"
    }, {
        w: 1,
        v: "{$sphy2+foot}"
    }, {
        w: 1,
        v: "{$sphy2+leg}"
    }]
}, function(e) {
    e.exports = [{
        w: 6,
        v: "{$mod=slightly }"
    }, {
        w: 3,
        v: "{$mod=very }"
    }, {
        w: 1,
        v: "{$mod=incredibly }"
    }, {
        w: 1,
        v: "{$mod=extremely }"
    }]
}, function(e) {
    e.exports = [{
        w: 13,
        v: "{$monster=}{monster1}"
    }, {
        w: 2,
        v: "{$monster=}{monster2}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$monster+vampire}"
    }, {
        w: 2,
        v: "{$monster+dragon}"
    }, {
        w: 2,
        v: "{$monster+troll}"
    }, {
        w: 2,
        v: "{$monster+lycanthrope}"
    }, {
        w: 2,
        v: "{$monster+basilisk}"
    }, {
        w: 2,
        v: "{$monster+medusa}"
    }, {
        w: 2,
        v: "{$monster+beholder}"
    }, {
        w: 2,
        v: "{$monster+chimera}"
    }, {
        w: 2,
        v: "{$monster+cloaker}"
    }, {
        w: 2,
        v: "{$monster+doppelganger}"
    }, {
        w: 2,
        v: "{$monster+gnoll}"
    }, {
        w: 2,
        v: "{$monster+griffon}"
    }, {
        w: 2,
        v: "{$monster+cockatrice}"
    }, {
        w: 2,
        v: "{$monster+demon}"
    }, {
        w: 2,
        v: "{$monster+devil}"
    }, {
        w: 2,
        v: "{$monster+golem}"
    }, {
        w: 1,
        v: "{$monster+water elemental}"
    }, {
        w: 1,
        v: "{$monster+fire elemental}"
    }, {
        w: 1,
        v: "{$monster+earth elemental}"
    }, {
        w: 1,
        v: "{$monster+air elemental}"
    }, {
        w: 2,
        v: "{$monster+hydra}"
    }, {
        w: 2,
        v: "{$monster+minotaur}"
    }, {
        w: 2,
        v: "{$monster+naga}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$monster+ankheg}"
    }, {
        w: 1,
        v: "{$monster+angel}"
    }, {
        w: 1,
        v: "{$monster+unicorn}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$quirks+gloves. }"
    }, {
        w: 1,
        v: "{$quirks+hats. }"
    }, {
        w: 1,
        v: "{$quirks+belts. }"
    }, {
        w: 1,
        v: "{$quirks+feathers. }"
    }, {
        w: 1,
        v: "{$quirks+fruits. }"
    }, {
        w: 1,
        v: "{$quirks+leaves. }"
    }, {
        w: 1,
        v: "{$quirks+branches. }"
    }, {
        w: 1,
        v: "{$quirks+coins. }"
    }, {
        w: 1,
        v: "{$quirks+rocks. }"
    }, {
        w: 1,
        v: "{$quirks+pens. }"
    }, {
        w: 1,
        v: "{$quirks+scarves. }"
    }, {
        w: 1,
        v: "{$quirks+weapons. }"
    }, {
        w: 1,
        v: "{$quirks+small animals. }"
    }, {
        w: 1,
        v: "{$quirks+books. }"
    }, {
        w: 1,
        v: "{$quirks+kitchenware. }"
    }, {
        w: 1,
        v: "{$quirks+grass. }"
    }, {
        w: 1,
        v: "{$quirks+weird clothes. }"
    }]
}, function(e) {
    e.exports = [{
        w: 16,
        v: "{$quirks+}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+spends every morning training. }{%str+2}{%con+2}{%dex+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+spends every morning meditating. }{%int+2}{%wis+2}{%chaotic-3}"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+likes animals more than people. }{%chaotic+2}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is a vocal vegetarian. }{%good+1}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is a vegetarian. }{%good+1}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is a secret vegetarian. }{%good+1}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+is a vegan. }{%good+1}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+is a vocal vegan. }{%good+1}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+is a secret vegan. }{%good+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ talks to plants. }"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+feels uncomfortable in a urban setting. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is a very proficient herbalist. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+can make a potion out of anything. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+sleeps best in a tree. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+can always find }{$quirks+$minPoss}{$quirks+way in the woods. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+loves eating fresh aliments. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+can tame any animal. }{%wis+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+will never take a life if given the choice. }{%good+2}{%evil-2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$skin+white}"
    }, {
        w: 1,
        v: "{$skin+pink}"
    }, {
        w: 1,
        v: "{$skin+brown}"
    }, {
        w: 1,
        v: "{$skin+gray}"
    }, {
        w: 1,
        v: "{$skin+golden}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$attractiveness=average}"
    }, {
        w: 1,
        v: "{$attractiveness=bland}"
    }, {
        w: 1,
        v: "{$attractiveness=unremarkable}"
    }, {
        w: 1,
        v: "{$attractiveness=forgettable}"
    }, {
        w: 1,
        v: "{$attractiveness=typical}"
    }, {
        w: 1,
        v: "{$attractiveness=common}"
    }, {
        w: 1,
        v: "{$attractiveness=ordinary}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{class}"
    }, {
        w: 4,
        v: "{profession}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{maleorcname}{orcsurname}"
    }, {
        w: 1,
        v: "{female}{femaleorcname}{orcsurname}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        v: "{$god=Gruumsh}{$goddescr=, God of orcs, conquest, survival, strength, territory. (Chaotic Evil)}"
    }, {
        w: 2,
        v: "{humangod}"
    }]
}, function(e) {
    e.exports = [{
        w: 6,
        v: "{$skin+green}"
    }, {
        w: 2,
        v: "{$skin+brown}"
    }, {
        w: 1,
        v: "{$skin+red}"
    }, {
        w: 4,
        v: "{$skin+gray}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Axeblade}"
    }, {
        w: 1,
        v: "{$name+ Battlefury}"
    }, {
        w: 1,
        v: "{$name+ Blackarm}"
    }, {
        w: 1,
        v: "{$name+ Blackblade}"
    }, {
        w: 1,
        v: "{$name+ Bloodbasher}"
    }, {
        w: 1,
        v: "{$name+ Burningarm}"
    }, {
        w: 1,
        v: "{$name+ Burningsong}"
    }, {
        w: 1,
        v: "{$name+ Clanfang}"
    }, {
        w: 1,
        v: "{$name+ Clanripper}"
    }, {
        w: 1,
        v: "{$name+ Clansword}"
    }, {
        w: 1,
        v: "{$name+ Darkhorn}"
    }, {
        w: 1,
        v: "{$name+ Deathhammer}"
    }, {
        w: 1,
        v: "{$name+ Deathsong}"
    }, {
        w: 1,
        v: "{$name+ Doomhorn}"
    }, {
        w: 1,
        v: "{$name+ Doommaul}"
    }, {
        w: 1,
        v: "{$name+ Dreamslayer}"
    }, {
        w: 1,
        v: "{$name+ Forebinder}"
    }, {
        w: 1,
        v: "{$name+ Foreeye}"
    }, {
        w: 1,
        v: "{$name+ Gorecleaver}"
    }, {
        w: 1,
        v: "{$name+ Gorefang}"
    }, {
        w: 1,
        v: "{$name+ Hellaxe}"
    }, {
        w: 1,
        v: "{$name+ Hellfang}"
    }, {
        w: 1,
        v: "{$name+ Ironfury}"
    }, {
        w: 1,
        v: "{$name+ Ironscream}"
    }, {
        w: 1,
        v: "{$name+ Ironseeker}"
    }, {
        w: 1,
        v: "{$name+ Laughingfang}"
    }, {
        w: 1,
        v: "{$name+ Laughingseeker}"
    }, {
        w: 1,
        v: "{$name+ Ragemaw}"
    }, {
        w: 1,
        v: "{$name+ Redbleeder}"
    }, {
        w: 1,
        v: "{$name+ Redrage}"
    }, {
        w: 1,
        v: "{$name+ Rockbasher}"
    }, {
        w: 1,
        v: "{$name+ Shadowslayer}"
    }, {
        w: 1,
        v: "{$name+ Skullbinder}"
    }, {
        w: 1,
        v: "{$name+ Steelfang}"
    }, {
        w: 1,
        v: "{$name+ Steelslayer}"
    }, {
        w: 1,
        v: "{$name+ Steelsplitter}"
    }, {
        w: 1,
        v: "{$name+ Stonesplitter}"
    }, {
        w: 1,
        v: "{$name+ Thunderbasher}"
    }, {
        w: 1,
        v: "{$name+ Thundersword}"
    }, {
        w: 1,
        v: "{$name+ Tuskhorn}"
    }, {
        w: 1,
        v: "{$name+ Tusksnarl}"
    }, {
        w: 1,
        v: "{$name+ Tuskwolf}"
    }, {
        w: 1,
        v: "{$name+ Wareye}"
    }, {
        w: 1,
        v: "{$name+ Warmaw}"
    }, {
        w: 1,
        v: "{$name+ Wolfripper}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$org=wizards' guild}"
    }, {
        w: 3,
        v: "{$org=fighters' club}"
    }, {
        w: 3,
        v: "{$org=thiefs' guild}"
    }, {
        w: 3,
        v: "{$org=witchs' coven}"
    }, {
        w: 2,
        v: "{$org=assassins' guild}"
    }, {
        w: 1,
        v: "{$org=cult's hideout}"
    }, {
        w: 3,
        v: "{$org=clergy}"
    }, {
        w: 3,
        v: "{$org=monks' monastery}"
    }, {
        w: 3,
        v: "{$org=traders' guild}"
    }]
}, function(e) {
    e.exports = [{
        w: 80,
        v: "Straight"
    }, {
        w: 5,
        v: "Gay"
    }, {
        w: 3,
        v: "Bisexual"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$personality=an annoying}"
    }, {
        w: 1,
        v: "{$personality=a patronizing}"
    }, {
        w: 1,
        v: "{$personality=a sarcastic}"
    }, {
        w: 1,
        v: "{$personality=an impetuous}"
    }, {
        w: 1,
        v: "{$personality=a sardonic}"
    }, {
        w: 1,
        v: "{$personality=a stoic}"
    }, {
        w: 1,
        v: "{$personality=a fabulous}"
    }, {
        w: 1,
        v: "{$personality=a critical}"
    }, {
        w: 1,
        v: "{$personality=a seductive}"
    }, {
        w: 1,
        v: "{$personality=an inquisitive}"
    }, {
        w: 1,
        v: "{$personality=a lascivious}"
    }, {
        w: 1,
        v: "{$personality=an ironic}"
    }, {
        w: 1,
        v: "{$personality=a shy}"
    }, {
        w: 1,
        v: "{$personality=an aggressive}"
    }, {
        w: 1,
        v: "{$personality=a passive aggressive}"
    }, {
        w: 1,
        v: "{$personality=a confrontational}"
    }, {
        w: 1,
        v: "{$personality=an apathetic}"
    }, {
        w: 1,
        v: "{$personality=a sailor-mouthed}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$quirks+a pet zombie }"
    }, {
        w: 1,
        v: "{$quirks+a pet dragon hatchling }"
    }, {
        w: 1,
        v: "{$quirks+a pet kobold }"
    }, {
        w: 1,
        v: "{$quirks+a tiny pet golem }"
    }, {
        w: 1,
        v: "{$quirks+a tiny pet ooze }"
    }, {
        w: 4,
        v: "{$quirks+a pet pidgeon }"
    }, {
        w: 4,
        v: "{$quirks+a pet mouse }"
    }, {
        w: 18,
        v: "{$quirks+a pet dog }"
    }, {
        w: 14,
        v: "{$quirks+a pet cat }"
    }, {
        w: 4,
        v: "{$quirks+a pet fox }"
    }, {
        w: 4,
        v: "{$quirks+a pet turtle }"
    }, {
        w: 4,
        v: "{$quirks+a pet rat }"
    }, {
        w: 4,
        v: "{$quirks+a pet rock }"
    }, {
        w: 4,
        v: "{$quirks+a pet falcon }"
    }, {
        w: 4,
        v: "{$quirks+a pet guinea pig }"
    }, {
        w: 4,
        v: "{$quirks+a pet hamster }"
    }, {
        w: 4,
        v: "{$quirks+a pet gecko }"
    }, {
        w: 5,
        v: "{$quirks+a pet rabbit }"
    }, {
        w: 6,
        v: "{$quirks+a pet parrot }"
    }, {
        w: 4,
        v: "{$quirks+a pet ferret }"
    }, {
        w: 2,
        v: "{$quirks+a pet pseudodragon }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{petname1}{$quirks+. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$quirks+Max}"
    }, {
        w: 1,
        v: "{$quirks+Jack}"
    }, {
        w: 1,
        v: "{$quirks+Mister Man}"
    }, {
        w: 1,
        v: "{$quirks+Lady}"
    }, {
        w: 1,
        v: "{$quirks+Bear}"
    }, {
        w: 1,
        v: "{$quirks+Smokey}"
    }, {
        w: 1,
        v: "{$quirks+Jacky}"
    }, {
        w: 1,
        v: "{$quirks+Puddle}"
    }, {
        w: 1,
        v: "{$quirks+Kitty}"
    }, {
        w: 1,
        v: "{$quirks+Molly}"
    }, {
        w: 1,
        v: "{$quirks+Buddy}"
    }, {
        w: 1,
        v: "{$quirks+Brandy}"
    }, {
        w: 1,
        v: "{$quirks+Charlie}"
    }, {
        w: 1,
        v: "{$quirks+Bailey}"
    }, {
        w: 1,
        v: "{$quirks+Ninja}"
    }, {
        w: 1,
        v: "{$quirks+Daisy}"
    }, {
        w: 1,
        v: "{$quirks+Rexy}"
    }, {
        w: 1,
        v: "{$quirks+Bella}"
    }, {
        w: 1,
        v: "{$quirks+Buddy}"
    }, {
        w: 1,
        v: "{$quirks+Peanut}"
    }, {
        w: 1,
        v: "{$quirks+Cooper}"
    }, {
        w: 1,
        v: "{$quirks+Snickers}"
    }, {
        w: 1,
        v: "{$quirks+Stella}"
    }, {
        w: 1,
        v: "{$quirks+Teddy}"
    }, {
        w: 1,
        v: "{$quirks+Maggie}"
    }, {
        w: 1,
        v: "{$quirks+Lucy}"
    }, {
        w: 1,
        v: "{$quirks+Lily}"
    }, {
        w: 1,
        v: "{$quirks+Tiger}"
    }, {
        w: 1,
        v: "{$quirks+Sunny}"
    }, {
        w: 1,
        v: "{$quirks+Coco}"
    }, {
        w: 1,
        v: "{$quirks+Rocky}"
    }, {
        w: 1,
        v: "{$quirks+Bandit}"
    }, {
        w: 1,
        v: "{$quirks+Fuzzy}"
    }, {
        w: 1,
        v: "{$quirks+Bagel}"
    }, {
        w: 1,
        v: "{$quirks+Biscuit}"
    }, {
        w: 1,
        v: "{$quirks+Bobby}"
    }, {
        w: 1,
        v: "{$quirks+Bubbles}"
    }, {
        w: 1,
        v: "{$quirks+Button}"
    }, {
        w: 1,
        v: "{$quirks+Cupcake}"
    }, {
        w: 1,
        v: "{$quirks+Goofy}"
    }, {
        w: 1,
        v: "{$quirks+Marshmellow}"
    }, {
        w: 1,
        v: "{$quirks+Monkey}"
    }, {
        w: 1,
        v: "{$quirks+Mister Big}"
    }, {
        w: 1,
        v: "{$quirks+Mooshie}"
    }, {
        w: 1,
        v: "{$quirks+Noodle}"
    }, {
        w: 1,
        v: "{$quirks+Nugget}"
    }, {
        w: 1,
        v: "{$quirks+Paddington}"
    }, {
        w: 1,
        v: "{$quirks+Peanut}"
    }, {
        w: 1,
        v: "{$quirks+Roxie}"
    }, {
        w: 1,
        v: "{$quirks+Pixie}"
    }, {
        w: 1,
        v: "{$quirks+Rufus}"
    }, {
        w: 1,
        v: "{$quirks+Spark}"
    }, {
        w: 1,
        v: "{$quirks+Stitch}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$sphy1+2 }"
    }, {
        w: 2,
        v: "{$sphy1+3 }"
    }, {
        w: 1,
        v: "{$sphy1+4 }"
    }]
}, function(e) {
    e.exports = [{
        w: 20,
        v: "{$quirks+}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+feels uncomfortable in a rich setting. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ misuses long words to sound smarter. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is totally oblivious to etiquette and social expectations. }{%cha-1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+enjoys tavern brawls. }{%chaotic+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+has no concept of propriety. }{%chaotic+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+always has time to help others. }{%good+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+despises the aristocracy. }{%chaotic+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+sleeps fully dressed, ready to run. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+always knows where to hide. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ asks for help. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+always eat like it's }{$quirks+$minPoss}{$quirks+ last meal. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+shares everything }{$quirks+$minPro}{$quirks+ owns. }{%good+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+uses very foul language. }{%chaotic+2}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+doesn't bathe. }{%cha-2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$precious+pendant}"
    }, {
        w: 1,
        v: "{$precious+ring}"
    }, {
        w: 1,
        v: "{$precious+robe}"
    }, {
        w: 1,
        v: "{$precious+trinket}"
    }, {
        w: 1,
        v: "{$precious+bracelet}"
    }, {
        w: 1,
        v: "{$precious+watch}"
    }, {
        w: 1,
        v: "{$precious+amulet}"
    }, {
        w: 1,
        v: "{$precious+tiara}"
    }, {
        w: 1,
        v: "{$precious+gem}"
    }, {
        w: 1,
        v: "{$precious+coin}"
    }, {
        w: 2,
        v: "{weapon}{$precious+$weapon}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{$precious=precious }{precious}"
    }, {
        w: 2,
        v: "{$precious=magical }{precious}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        name: "Learned",
        table: "learned",
        v: "{learned}{%int+4}{%wis+3}{%str-2}{%moralneutral+2}{richquirk}"
    }, {
        w: 2,
        name: "Lesser Nobility",
        table: "lesserNobility",
        v: "{lesserNobility}{%int+2}{%cha+2}{%lawful+2}{%good+2}{richquirk}"
    }, {
        w: 3,
        name: "Professional",
        table: "professional",
        v: "{professional}{%str+1}{%dex+1}{richquirk}"
    }, {
        w: 5,
        name: "Working Class",
        table: "workClass",
        v: "{workClass}{%str+2}{%con+2}{%int-1}{%cha-1}{%moralneutral+2}{poorquirk}"
    }, {
        w: 3,
        name: "Martial",
        table: "martial",
        v: "{martial}{%str+3}{%con+3}{%int-1}{%cha+1}{%lawful+3}"
    }, {
        w: 3,
        name: "Underclass",
        table: "underclass",
        v: "{underclass}{%str+1}{%dex+2}{%int-1}{%cha-1}{%chaotic+3}{%lawful-1}{poorquirk}"
    }, {
        w: 1,
        name: "Entertainer",
        table: "entertainer",
        v: "{entertainer}{%dex+2}{%cha+2}{%chaotic+3}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        name: "Armorer",
        v: "{$occupation=armorer}{kenkunamemetal}"
    }, {
        w: 1,
        name: "Painter",
        v: "{$occupation=painter}{%dex+1}{kenkunamequiet}"
    }, {
        w: 1,
        name: "Baker",
        v: "{$occupation=baker}{kenkuname}"
    }, {
        w: 1,
        name: "Banker",
        v: "{$occupation=banker}{kenkunamequiet}"
    }, {
        w: 3,
        name: "Blacksmith",
        v: "{$occupation=blacksmith}{kenkunamemetal}"
    }, {
        w: 1,
        name: "Bowyer",
        v: "{$occupation=bowyer}{kenkuname}"
    }, {
        w: 2,
        name: "Brewer",
        v: "{$occupation=brewer}{kenkuname}"
    }, {
        w: 2,
        name: "Butcher",
        v: "{$occupation=butcher}{kenkunameanimal}"
    }, {
        w: 3,
        name: "Carpenter",
        v: "{$occupation=carpenter}{%int+1}{kenkuname}"
    }, {
        w: 1,
        name: "Clothier",
        v: "{$occupation=clothier}{kenkuname}"
    }, {
        w: 2,
        name: "Cook",
        v: "{$occupation=cook}{kenkuname}"
    }, {
        w: 1,
        name: "Furrier",
        v: "{$occupation=furrier}{kenkunameanimal}"
    }, {
        w: 1,
        name: "Goldsmith",
        v: "{$occupation=goldsmith}{kenkunamemetal}"
    }, {
        w: 4,
        name: "Innkeeper",
        v: "{$occupation=innkeeper}{%cha+2}{kenkuname}"
    }, {
        w: 2,
        name: "Jeweler",
        v: "{$occupation=jeweler}{%int+1}{%dex+1}{kenkuname}"
    }, {
        w: 3,
        name: "Leatherworker",
        v: "{$occupation=leatherworker}{kenkuname}"
    }, {
        w: 2,
        name: "Locksmith",
        v: "{$occupation=locksmith}{%dex+1}{kenkunamemetal}"
    }, {
        w: 2,
        name: "Mason",
        v: "{$occupation=mason}{kenkuname}"
    }, {
        w: 3,
        name: "Merchant",
        v: "{$occupation=merchant}{%cha+2}{kenkuname}"
    }, {
        w: 3,
        name: "Musician",
        v: "{$occupation=musician}{%cha+4}{%dex+2}{kenkuname}"
    }, {
        w: 1,
        name: "Tinker",
        v: "{$occupation=tinker}{%int+3}{%dex+2}{kenkunamemetal}"
    }, {
        w: 1,
        name: "Torturer",
        v: "{$occupation=torturer}{%cha+2}{%str+2}{%dex+1}{%evil+2}{getevilgod}{kenkunamefighting}"
    }, {
        w: 2,
        name: "Trader",
        v: "{$occupation=trader}{%cha+2}{%int+3}{kenkuname}"
    }, {
        w: 3,
        name: "Weaver",
        v: "{$occupation=weaver}{%dex+1}{kenkuname}"
    }]
}, function(e) {
    e.exports = [{
        w: 10,
        v: "{randomquirks}"
    }, {
        w: 1,
        v: "{randomquirks}{randomquirks}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        name: "Aasimar",
        table: "aasimar",
        v: "{$race=aasimar}{%str+1}{%con+1}{%wis+1}{%cha+3}{humangender}{humangod}{aasimargoodorevil}{humanskin}{age}"
    }, {
        w: 4,
        name: "Dragonborn",
        table: "dragonborn",
        v: "{$race=dragonborn}{%str+3}{%dex-2}{%con+2}{%int+2}{%wis-1}{%cha+2}{%height+20}{strongweight}{goodorevil}{dragongod}{dragonskin}{age}{$beard=}{dragonhair}{dragonborngender}{dragonquirks}"
    }, {
        w: 11,
        name: "Dwarf",
        table: "dwarf",
        v: "{racedwarf}{%height-38}{strongweight}{dwarfgod}{nonhumanskin}{longbeard}{age}{dwarfgender}{ageBonus}{dwarfquirks}"
    }, {
        w: 16,
        name: "Elf",
        table: "elf",
        v: "{elfgender}{raceelf}{%height-5}{lightweight}{goodface}{$beard=}{age}{ageBonus}"
    }, {
        w: 2,
        name: "Firbolg",
        table: "firbolg",
        v: "{$race=firbolg}{%str+3}{%dex-2}{%con+2}{%wis+2}{%height+60}{%chaotic+3}{%good+2}{%moralneutral+2}{strongweight}{elfgod}{firbolgskin}{age}{elfgender}{ageBonus}{naturequirk}{firbolgquirk}"
    }, {
        w: 7,
        name: "Gnome",
        table: "gnome",
        v: "{racegnome}{%height-58}{gnomegod}{nonhumanskin}{beard}{age}{gnomegender}{ageBonus}{gnomequirks}"
    }, {
        w: 1,
        name: "Goblin",
        table: "goblin",
        v: "{$race=goblin}{%str-2}{%dex+2}{%con-2}{%int-4}{%wis-3}{%cha-1}{%height-50}{%ethicalneutral+2}{%lawful-2}{%evil+3}{humangod}{orcskin}{$beard=}{age}{gender}{goblinname}"
    }, {
        w: 2,
        name: "Goliath",
        table: "goliath",
        v: "{$race=goliath}{%str+3}{%dex-2}{%con+3}{%int-2}{%height+60}{%lawful+3}{%chaotic-2}{%good-2}{%evil-2}{%moralneutral+2}{elfgod}{nonhumanskin}{age}{gender}{goliathhair}{strongweight}{goliathtraits1}{goliathname}"
    }, {
        w: 8,
        name: "Halfling",
        table: "halfling",
        v: "{racehalfling}{%height-63}{halflinggod}{nonhumanskin}{beard}{age}{halflinggender}{halfquirks}"
    }, {
        w: 25,
        name: "Half-Elf",
        table: "halfelf",
        v: "{$race=half-elf}{%dex+1}{%int+1}{%cha+2}{%height-5}{%chaotic+2}{humangod}{halfelfskin}{beard}{age}{halfelfgender}"
    }, {
        w: 5,
        name: "Half-Orc",
        table: "halforc",
        v: "{$race=half-orc}{%str+4}{%dex-1}{%con+3}{%int-3}{%wis-3}{%cha-1}{%height+15}{%chaotic+3}{%good-2}{strongweight}{humangod}{halforcskin}{beard}{age}{halforcgender}"
    }, {
        w: 70,
        name: "Human",
        table: "human",
        v: "{$race=human}{%str+1}{%dex+1}{%con+1}{%int+1}{%wis+1}{%cha+1}{humangod}{humanskin}{beard}{age}{humangender}"
    }, {
        w: 2,
        name: "Kenku",
        table: "kenku",
        v: "{$race=kenku}{%str-2}{%dex+3}{%int+1}{%wis+1}{%cha+1}{%height-28}{%lawful-2}{%chaotic+3}{%good-1}{%evil-1}{%moralneutral+2}{humangod}{kenkuskin}{age}{%age-6}{gender}{kenkuquirks}{$beard=}{$hair=}{kenkuname}{$name=$kenkuname}"
    }, {
        w: 2,
        name: "Lizardfolk",
        table: "lizardfolk",
        v: "{$race=lizardfolk}{%str+2}{%int+2}{%con+1}{%wis+2}{%cha-2}{%height+15}{%lawful+2}{%chaotic-3}{%good-1}{%evil-1}{%moralneutral+2}{dragongod}{lizardskin}{age}{%age-4}{lizardgender}{lizardtraits1}{lizardquirks}{$beard=}{dragonhair}"
    }, {
        w: 1,
        name: "Medusa",
        table: "medusa",
        v: "{$race=medusa}{%dex+3}{%con+2}{%int+1}{%wis+2}{%cha+3}{medusa}{%lawful+2}{lightweight}{goodface}{humangod}{orcskin}{age}{ageBonus}{medusaname}{medusaveil}"
    }, {
        w: 3,
        name: "Orc",
        table: "orc",
        v: "{$race=orc}{%str+5}{%dex-1}{%con+5}{%int-4}{%wis-3}{%height+20}{%good-2}{%chaotic+3}{%evil+2}{strongweight}{orcgod}{orcskin}{beard}{age}{orcgender}"
    }, {
        w: 2,
        name: "Tabaxi",
        table: "tabaxi",
        v: "{$race=tabaxi}{%str-1}{%dex+4}{%con+1}{%int+2}{%wis-2}{%cha+1}{%height+10}{%good+1}{%chaotic+3}{lightweight}{humangod}{$hair=}{$beard=}{age}{gender}{$name=}{tabaxiname}{tabaxiskin}{tabaxiobsession}{tabaxiquirks}"
    }, {
        w: 4,
        name: "Tiefling",
        table: "tiefling",
        v: "{$race=tiefling}{%con-1}{%int+2}{%cha+3}{%chaotic+3}{lightweight}{humangod}{tieflinggoodorevil}{tieflingskin}{beard}{age}{gender}{ageBonus}"
    }, {
        w: 4,
        name: "Triton",
        table: "triton",
        v: "{$race=triton}{%str+2}{%con+2}{%cha+1}{%lawful+2}{%good+3}{%evil-3}{humangod}{tritonskin}{tritonhair}{tritongender}{$beard=}{age}{%age+%age}{tritonquirks}"
    }, {
        w: 1,
        name: "Troglodyte",
        table: "troglodyte",
        v: "{$race=troglodyte}{%str+1}{%con+1}{%int-4}{%cha-4}{%good-2}{%chaotic+3}{%evil+2}{humangod}{lizardskin}{$beard=}{dragonhair}{age}{gender}{goblinname}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$racea=dwarves}"
    }, {
        w: 2,
        v: "{$racea=elves}"
    }, {
        w: 2,
        v: "{$racea=tieflings}"
    }, {
        w: 2,
        v: "{$racea=dragonborns}"
    }, {
        w: 1,
        v: "{$racea=demons}"
    }, {
        w: 1,
        v: "{$racea=dragons}"
    }, {
        w: 2,
        v: "{$racea=gnomes}"
    }, {
        w: 2,
        v: "{$racea=halflings}"
    }, {
        w: 1,
        v: "{$racea=orcs}"
    }, {
        w: 1,
        v: "{$racea=goblins}"
    }, {
        w: 1,
        v: "{$racea=kobolds}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        name: "Mountain Dwarf",
        v: "{$race=mountain dwarf}{%con+3}{%str+4}{%dex-2}{%int-1}{%wis+1}{%lawful+2}{%chaotic-2}{%evil-2}"
    }, {
        w: 6,
        name: "Hill Dwarf",
        v: "{$race=hill dwarf}{%con+4}{%str+2}{%dex-2}{%int-1}{%wis+3}{%lawful+2}{%chaotic-2}{%evil-2}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        name: "Drow",
        v: "{$race=drow}{%str-1}{%dex+2}{%con-2}{%wis+2}{%int+2}{%cha+4}{%chaotic+3}{%evil+3}{drowgod}{$skin+black}{whitehair}{drowquirks}"
    }, {
        w: 6,
        name: "High Elf",
        v: "{$race=high elf}{%str-1}{%dex+2}{%con-2}{%wis+2}{%int+2}{%cha+2}{%chaotic+3}{%good+2}{elfgod}{elfskin}{elfquirks}"
    }, {
        w: 8,
        name: "Wood Elf",
        v: "{$race=wood elf}{%str-1}{%dex+4}{%con-2}{%wis+4}{%int+4}{%cha+2}{%chaotic+3}{%good+2}{elfgod}{elfskin}{elfquirks}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        name: "Forest Gnome",
        v: "{$race=forest gnome}{%str-2}{%dex+3}{%con-1}{%int+4}{%wis-1}{%good+3}{%evil-1}"
    }, {
        w: 3,
        name: "Rock Gnome",
        v: "{$race=rock gnome}{%str-2}{%dex+1}{%con+2}{%int+4}{%wis-1}{%good+3}{%evil-1}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        name: "Lightfoot Halfling",
        v: "{$race=lightfoot halfling}{%str-2}{%dex+4}{%con-1}{%cha+2}{%lawful+3}{%good+3}"
    }, {
        w: 4,
        name: "Stout Halfling",
        v: "{$race=stout halfling}{%str-2}{%dex+4}{%con+1}{%lawful+3}{%good+3}{%chaotic-1}{%evil-1}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$quirks+$majPro}{$quirks+has a constant wanderlust and is unable to live at the same place for more than a few months. }{%chaotic+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+doesn't like change. }{%lawful+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ quotes }{$quirks+$minPoss}{$quirks+father. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ quotes proverbs. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ misquotes proverbs. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+falls in and out of love easily. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+believes in soulmates. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is always joking, even at innapropriate times. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+has a joke for every situation. }{%cha+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+doesn't like listening to jokes. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is constantly flattering people }{$quirks+$minPro}{$quirks+talks to. } {%cha+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is a compulsive gambler. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is an alcoholic. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ lies. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+believes in whatever deity is most helpful to }{$quirks+$minPoss}{$quirks+at a given moment. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is kleptomaniac. }{%dex+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+always does what }{$quirks+$minPro}{$quirks+is told not to. }{%chaotic+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+gets very mad at any semblance of an insult. }{%chaotic+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+has a story for everything. }{%wis+1}{%cha+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+sees insults as an art. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is a cross-dresser. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+runs everywhere instead of walking. }{%con+2}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+dreams of becoming rich and famous. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+admires the local lord. }"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+knows all the gossip around town. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is always sharing }{$quirks+$minPoss}{$quirks+wisdom. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+believes in destiny. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+argues about everything. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+spaces out often, lost in thought. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+makes anyone }{$quirks+$minPro}{$quirks+speaks to feel like the most important person in the world. }{%cha+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+cares about }{$quirks+$minPoss}{$quirks+friends and will do anything for them. }{%good+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+reads every book }{$quirks+$minPro}{$quirks+comes across. }{%int+1}"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+loves discovering new mysteries and solving them. }{%int+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+wants to know every side of a story before expressing an opinion. }{%moralneutral+2}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is }{mod}{$quirks+$mod}{$quirks+paranoid. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+works hard to play hard afterwards. }{%chaotic+1}"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+stretches the truth to tell a good story. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is haunted by horrible memories. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+has lost many friends. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+has a crude sense of humour. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+likes finding direct solutions to problems. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+always carries food in }{$quirks+$minPoss}{$quirks+pockets. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ asks questions. }{%int+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is a local sport champion. }{%cha+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ laughs at inappropriate times. }{%cha-1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+reacts violently to }{mundaneobject}{%chaotic+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is fascinated by }{mundaneobject}"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+doesn't like }{$quirks+$minPoss}{$quirks+profession, has always dreamed of becoming a }{$quirks+$occupation}{$quirks+. }{occupation}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+believes that all }{raceallergy}{$quirks+$racea}{$quirks+ are planning to destroy the world. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+goes out at night secretly looking for }{mundaneobject}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+owns a box full of dead animals. }{%evil+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+sets up local dance clubs. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+believes that }{$quirks+$minPro}{$quirks+is related to }{$quirks+$god}{$quirks+. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+goes to church to pick up sexual partners. }{%cha+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+lies poorly on purpose. }"
    }, {
        w: 5,
        v: "{$quirks+$majPro}{$quirks+collects }{collection}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+secretly wants to become the ruler of the city. }"
    }, {
        w: 8,
        v: "{$quirks+$majPro}{$quirks+has }{petanimal}{$quirks+companion named }{petname}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+likes to swim. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+has a beautiful singing voice. }{%cha+1}"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ thinks aloud. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is addicted to a local drug}{%str-1}{%con-1}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+is heavily addicted to an exotic drug}{%str-2}{%dex-2}{%con-2}{%int-2}{%wis-2}{%cha-2}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$traits1=$majPro}{$traits1+acts on impulse. }{%wis-1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+has an even temper. }{%wis+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+would rather act than talk or think. }{%chaotic+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+will ponder the pros and cons before making a decision. }{%chaotic-1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+gets bored easily. }{%chaotic+2}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+has a highly variable mood. }{%chaotic+2}"
    }, {
        w: 1,
        v: "{$traits1=$majPro}{$traits1+is bipolar. }{%chaotic+3}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is always serene. }{%wis+2}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is very patient. }{%wis+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is very impatient. }{%wis-1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+rarely thinks ahead. }{%wis-1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is always very calm. }{%wis+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is always prepared. }{%chaotic-1}{%wis+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is always very excited. }{%dex+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+always has a backup plan. }{%int+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is very focused. }{%int+1}{%wis+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is very cynical. }"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is an hopeless romantic. }"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+uses sarcasm and insults commonly. }{%evil+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+always goes straight to the point. }"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is very direct. }"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+always keeps score. }"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is very competitive. }"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+changes subject very often. }"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is always ironic. }"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is very selfish. }{%good-1}{%evil+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+will always prioritize }{$traits1+$minPoss}{$traits1+needs. }{%evil+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+will always prioritize the needs of other people, even to }{$traits1+$minPoss}{$traits1+detriment. }{%evil-2}{%good+2}{%wis-2}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+shows very little empathy towards others. }"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is very empathic towards others. }{%wis+2}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is always ready to help others. }{%good+2}{%evil-1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is polite and respectful. }{%lawful+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is a pacifist. }{%chaotic+2}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is kind and generous. }{%evil-1}{%good+2}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+easily holds grudges. }{%evil+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is very benevolent. }{%good+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is quick to forgive. }{%good+1}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is prone to violence. }{%chaotic+2}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is a very good diplomat and always works towards resolution of conflict. } {%lawful+2}{%moralneutral+2}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+is very good at defusing tensions. }{%moralneutral+2}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+often spies on other people. }"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+always plays fair. }{%lawful+2}{%chaotic-2}"
    }, {
        w: 2,
        v: "{$traits1=$majPro}{$traits1+hates fair play. }{%lawful-2}{%chaotic+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very quick to trust other people. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very slow to trust other people. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very obstinate. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is not very obstinate. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very optimistic. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very pessimistic. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is an example of modesty. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is }{mod}{$traits2+$mod}{$traits2+conceited. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very self-confident. }{%cha+1}"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+has no self-confidence. }{%cha-1}"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+rarely speaks. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very talkative. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+only talks in whispers. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+only talks loudly. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very generous. }{%good+2}"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very greedy. }{%evil+2}"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is materialistic. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is non-materialistic. }{%chaotic+1}"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very cowardly. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very courageous, to a fault. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+doesn't care about risks or odds. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+judges people by their actions, not their words. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+takes everything at face-value. }"
    }, {
        w: 2,
        v: "{$traits2=$majPro}{$traits2+constantly looks for the loophole. }{%lawful-2}{%chaotic+2}{%int+1}"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is a perfectionist. }{%str+1}{%dex+1}{%con+1}{%int+1}{%wis+1}{%cha+1}"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is }{mod}{$traits2+$mod}{$traits2+lazy. }"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+can't stand laziness. }{%lawful+2}"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+can't keep a secret. }{%wis-1}"
    }, {
        w: 1,
        v: "{$traits2=$majPro}{$traits2+is very good at keeping secrets. }{%wis-1}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$rela=brother}"
    }, {
        w: 1,
        v: "{$rela=sister}"
    }, {
        w: 1,
        v: "{$rela=daughter}"
    }, {
        w: 1,
        v: "{$rela=son}"
    }, {
        w: 1,
        v: "{$rela=cousin}"
    }, {
        w: 1,
        v: "{$rela=friend}"
    }, {
        w: 1,
        v: "{$rela=childhood friend}"
    }, {
        w: 1,
        v: "{$rela=partner}"
    }]
}, function(e) {
    e.exports = [{
        w: 20,
        v: "Single"
    }, {
        w: 17,
        v: "In a relationship{%lawful+1}"
    }, {
        w: 15,
        v: "Married{%lawful+2}"
    }, {
        w: 3,
        v: "Divorced"
    }, {
        w: 3,
        v: "Widowed"
    }, {
        w: 2,
        v: "Recently broke up{%chaotic+1}"
    }, {
        w: 2,
        v: "Recently divorced{%chaotic+1}"
    }, {
        w: 2,
        v: "Recently widowed{%chaotic+1}"
    }, {
        w: 3,
        v: "Seeing someone who is married{%chaotic+1}{%evil+1}"
    }, {
        w: 4,
        v: "Married and having an affair{%chaotic+2}{%evil+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 22,
        v: "{$quirks+}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+sees divine omens in everything. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ talks aloud to }{$quirks+$minPoss}{$quirks+god. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ quotes sacred texts. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ misquotes sacred texts. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is very intolerant towards other faiths. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+carries blessed water everywhere. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+spends a lot of time studying other religions. }{%int+1}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has story about }{$quirks+$minPoss}{$quirks+god for every occasion. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+will share }{$quirks+$minPoss}{$quirks+god's wisdom when appropriate. }{%wis+1}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+keeps everything about }{$quirks+$minPoss}{$quirks+god a secret. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+carries out a complicated religious ritual every morning. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+will }{frequency}{$quirks+$fr}{$quirks+ pray at inopportune moments. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+tries to convert everyone }{$quirks+$minPro}{$quirks+meets. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+idolizes a religious hero. }"
    }]
}, function(e) {
    e.exports = [{
        w: 20,
        v: "{$quirks+}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+cannot tolerate rough living conditions. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ uses long words to sound smart. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ gives money to the poor. }{%good+1}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+disregards poorer people. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+inherited a }{inheritance}{$quirks+. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+only dresses in very expensive clothes. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+always wears a fancy hat. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+loves partying. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+uses a beautiful walking cane. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+wears a lot of cheap jewelry. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+wears a lot of beautiful jewelry. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+wears fancy spectacles. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+wears cheap spectacles. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is always accompanied by }{$quirks+$minPoss}{$quirks+servants. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+likes to know how things work. }{%int+2}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+doesn't like parting with }{$quirks+$minPoss}{$quirks+money or possessions. } {%evil+1}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a very regal look. }{%cha+1}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+considers everyone else as idiots. }{%int+1}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has very little practical experience. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$rl=left }"
    }, {
        w: 1,
        v: "{$rl=right }"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{$rl=the left }"
    }, {
        w: 5,
        v: "{$rl=the right }"
    }, {
        w: 2,
        v: "{$rl=both }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$scaletexture=rough}"
    }, {
        w: 1,
        v: "{$scaletexture=smooth}"
    }, {
        w: 1,
        v: "{$scaletexture=shiny}"
    }, {
        w: 1,
        v: "{$scaletexture=rugged}"
    }, {
        w: 1,
        v: "{$scaletexture=dirty}"
    }, {
        w: 1,
        v: "{$scaletexture=pointy}"
    }, {
        w: 1,
        v: "{$scaletexture=broad}"
    }, {
        w: 1,
        v: "{$scaletexture=ridged}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$weapon=dagger}"
    }, {
        w: 1,
        v: "{$weapon=shortsword}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$weapon=light crossbow}"
    }, {
        w: 1,
        v: "{$weapon=shortbow}"
    }, {
        w: 1,
        v: "{$weapon=sling}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$weapon=club}"
    }, {
        w: 1,
        v: "{$weapon=greatclub}"
    }, {
        w: 1,
        v: "{$weapon=javelin}"
    }, {
        w: 1,
        v: "{$weapon=light hammer}"
    }, {
        w: 1,
        v: "{$weapon=mace}"
    }, {
        w: 1,
        v: "{$weapon=quarterstaff}"
    }, {
        w: 1,
        v: "{$weapon=spear}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$size=a very small }"
    }, {
        w: 3,
        v: "{$size=a small }"
    }, {
        w: 10,
        v: "{$size=a }"
    }, {
        w: 3,
        v: "{$size=a large }"
    }, {
        w: 1,
        v: "{$size=a very large }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{skinTone}{skinTexture}{$skin=$skintexture}{$skin+$skintone}{$skintype= skin}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        v: "{$skintexture=smooth}"
    }, {
        w: 4,
        v: "{$skintexture=soft}"
    }, {
        w: 5,
        v: "{$skintexture=rough}"
    }, {
        w: 3,
        v: "{$skintexture=rugged}"
    }, {
        w: 2,
        v: "{$skintexture=silky}"
    }, {
        w: 1,
        v: "{$skintexture=veiny}"
    }]
}, function(e) {
    e.exports = [{
        w: 20,
        v: "{$skintone= }"
    }, {
        w: 3,
        v: "{$skintone=, sunburned, }"
    }, {
        w: 1,
        v: "{$skintone=, dirty, }"
    }, {
        w: 3,
        v: "{$skintone=, pockmarked, }"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$hair+dark green }"
    }, {
        w: 2,
        v: "{$hair+light green }"
    }, {
        w: 3,
        v: "{$hair+black }"
    }, {
        w: 3,
        v: "{$hair+brown }"
    }, {
        w: 1,
        v: "{$hair+white }"
    }, {
        w: 2,
        v: "{$hair+green }"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$sphy1+$majPro}{specialphysical1}{$sphy1+.}"
    }, {
        w: 2,
        v: "{$sphy2+$majPro}{specialphysical2}{$sphy2+.}"
    }, {
        w: 1,
        v: "{$sphy1+$majPro}{specialphysical1}{$sphy2+$majPro}{specialphysical2}{$sphy1+.}{$sphy2+.}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        v: "{$sphy1+has }{size}{$sphy1+$size}{$sphy1+scar on }{$sphy1+$minPoss}{bodypart}{$sphy1+$bp}"
    }, {
        w: 1,
        v: "{$sphy1+has }{size}{$sphy1+$size}{$sphy1+scar on }{$sphy1+$minPoss}{bodypart}{$sphy1+$bp}{$sphy1+and }{size}{$sphy1+$size}{$sphy1+scar on }{$sphy1+$minPoss}{bodypart}{$sphy1+$bp}"
    }, {
        w: 4,
        v: "{$sphy1+has }{atattooadj}{$sphy1+$tadj}{$sphy1+piercing on }{$sphy1+$minPoss}{head}{$sphy1+$bp}"
    }, {
        w: 2,
        v: "{$sphy1+has }{atattooadj}{$sphy1+$tadj}{$sphy1+piercing on }{$sphy1+$minPoss}{head}{$sphy1+$bp}{$sphy1+ and }{atattooadj}{$sphy1+$tadj}{$sphy1+piercing on }{$sphy1+$minPoss}{head}{$sphy1+$bp}"
    }, {
        w: 1,
        v: "{$sphy1+has }{atattooadj}{$sphy1+$tadj}{$sphy1+piercing on }{$sphy1+$minPoss}{head}{$sphy1+$bp}{$sphy1+, }{atattooadj}{$sphy1+$tadj}{$sphy1+piercing on }{$sphy1+$minPoss}{head}{$sphy1+$bp}{$sphy1+ and }{atattooadj}{$sphy1+$tadj}{$sphy1+piercing on }{$sphy1+$minPoss}{head}{$sphy1+$bp}"
    }, {
        w: 3,
        v: "{$sphy1+has }{piercingnumber}{tattooadj}{$sphy1+$tadj}{$sphy1+piercings on }{$sphy1+$minPoss}{head}{$sphy1+$bp}"
    }, {
        w: 2,
        v: "{$sphy1+has }{piercingnumber}{tattooadj}{$sphy1+$tadj}{$sphy1+piercings on }{$sphy1+$minPoss}{head}{$sphy1+$bp}{$sphy1+ and }{piercingnumber}{tattooadj}{$sphy1+$tadj}{$sphy1+piercings on }{$sphy1+$minPoss}{head}{$sphy1+$bp}"
    }, {
        w: 2,
        v: "{$sphy1+has }{degree}{$sphy1+$degree}{$sphy1+limp}{%dex-2}"
    }, {
        w: 1,
        v: "{$sphy1+has }{degree}{$sphy1+$degree}{$sphy1+hunch}{%dex-1}{%cha-2}"
    }, {
        w: 5,
        v: "{$sphy1+has }{atattooadj}{$sphy1+$tadj}{tattoo}{$sphy1+ on }{$sphy1+$minPoss}{bodyparttat}{$sphy1+$bp}"
    }, {
        w: 2,
        v: "{$sphy1+has }{atattooadj}{$sphy1+$tadj}{tattoo}{$sphy1+ on }{$sphy1+$minPoss}{bodyparttat}{$sphy1+$bp}{$sphy1+ and }{atattooadj}{$sphy1+$tadj}{tattoo}{$sphy1+ on }{$sphy1+$minPoss}{bodyparttat}{$sphy1+$bp}"
    }, {
        w: 1,
        v: "{$sphy1+has }{atattooadj}{$sphy1+$tadj}{tattoo}{$sphy1+ on }{$sphy1+$minPoss}{bodyparttat}{$sphy1+$bp}{$sphy1+, }{atattooadj}{$sphy1+$tadj}{tattoo}{$sphy1+ on }{$sphy1+$minPoss}{bodyparttat}{$sphy1+$bp}{$sphy1+ and }{atattooadj}{$sphy1+$tadj}{tattoo}{$sphy1+ on }{$sphy1+$minPoss}{bodyparttat}{$sphy1+$bp}"
    }, {
        w: 2,
        v: "{$sphy1+is branded as a }{brand}{$sphy1+ on }{$sphy1+$minPoss}{bodypart}{$sphy1+$bp}"
    }, {
        w: 1,
        v: "{$sphy1+has }{degree}{$sphy1+$degree}{$sphy1+scoliose}{%dex-1}"
    }, {
        w: 3,
        v: "{$sphy1+smells }{degree2}{$sphy1+$degree}{badsmell}{%cha-1}"
    }, {
        w: 3,
        v: "{$sphy1+smells }{degree2}{$sphy1+$degree}{goodsmell}{%cha+1}"
    }, {
        w: 2,
        v: "{$sphy1+is very nimble}{%dex+2}"
    }, {
        w: 2,
        v: "{$sphy1+is very clumsy}{%dex-3}"
    }, {
        w: 3,
        v: "{$sphy1+gestures profusely during a conversation}"
    }, {
        w: 2,
        v: "{$sphy1+has a high-pitched voice}"
    }, {
        w: 2,
        v: "{$sphy1+has a low-toned voice}"
    }, {
        w: 3,
        v: "{$sphy1+is easily out of breath}{%con-2}"
    }, {
        w: 1,
        v: "{$sphy1+has a sunken breastbone}"
    }, {
        w: 2,
        v: "{$sphy1+cannot whistle}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$sphy2+twitches }{frequency}{$sphy2+$fr}{$sphy2+ from }{$sphy2+$minPoss}{bodypart}{$sphy2+$bp}"
    }, {
        w: 2,
        v: "{$sphy2+fidgets }{frequency}{$sphy2+$fr}"
    }, {
        w: 2,
        v: "{$sphy2+smokes the pipe }{frequency}{$sphy2+$fr}{%con-1}"
    }, {
        w: 1,
        v: "{$sphy2+is }{mod}{$sphy2+$mod}{$sphy2+bow-legged}{%dex-1}"
    }, {
        w: 1,
        v: "{$sphy2+is missing }{$sphy2+$minPoss}{rl}{$sphy2+$rl}{$sphy2+ear}"
    }, {
        w: 1,
        v: "{$sphy2+is deaf from }{rlb}{$sphy2+$rl}{$sphy2+ear}"
    }, {
        w: 1,
        v: "{missingfingers}{$sphy2+$minPoss}{rl}{$sphy2+$rl}{$sphy2+hand}"
    }, {
        w: 1,
        v: "{missingeye}{rl}{$sphy2+$rl}{$sphy2+eye}"
    }, {
        w: 1,
        v: "{$sphy2+is blind}"
    }, {
        w: 1,
        v: "{$sphy2+is mute}"
    }, {
        w: 1,
        v: '{$sphy2+rolls }{$sphy2+$minPoss}{$sphy2+"R"s profusely}'
    }, {
        w: 2,
        v: "{frequency}{$sphy2+$fr}{$sphy2+ squints}"
    }, {
        w: 1,
        v: "{$sphy2+has }{degree}{$sphy2+$degree}{$sphy2+lisp}{%cha-2}"
    }, {
        w: 1,
        v: "{$sphy2+is missing }{$sphy2+$minPoss}{rl}{$sphy2+$rl}{missinglimb}{%dex-3}{%str-2}"
    }, {
        w: 1,
        v: "{$sphy2+is }{mod}{$sphy2+$mod}{$sphy2+colorblind}"
    }, {
        w: 1,
        v: "{$sphy2+is }{mod}{$sphy2+$mod}{$sphy2+cross-eyed}"
    }, {
        w: 1,
        v: "{$sphy2+has }{mod}{$sphy2+$mod}{$sphy2+webbed fingers}"
    }, {
        w: 2,
        v: "{$sphy2+has }{mod}{$sphy2+$mod}{$sphy2+long nails}"
    }, {
        w: 1,
        v: "{$sphy2+has }{mod}{$sphy2+$mod}{$sphy2+long fingers}"
    }, {
        w: 1,
        v: "{extrafinger}{$sphy2+$minPoss}{rl}{$sphy2+$rl}{$sphy2+hand}"
    }, {
        w: 1,
        v: "{$sphy2+can't feel pain}{%con+2}"
    }, {
        w: 2,
        v: "{$sphy2+is }{degree2}{$sphy2+$degree}{$sphy2+allergic to }{aliment}"
    }, {
        w: 2,
        v: "{$sphy2+is }{degree2}{$sphy2+$degree}{$sphy2+allergic to }{raceallergy}{$sphy2+$racea}"
    }, {
        w: 1,
        v: "{$sphy2+is albino}{whitehair}{$eyecolor=red}{$skin=$skintexture}{$skin+, ghostly, white}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$build=a skinny}{%str-2}{%dex+1}{%con-2}"
    }, {
        w: 2,
        v: "{$build=a lean}{%str-1}{%dex+1}"
    }, {
        w: 4,
        v: "{$build=an athletic}{%str+1}{%dex+1}{%con+1}"
    }, {
        w: 12,
        v: "{$build=a muscular}{%str+2}{%con+1}"
    }, {
        w: 6,
        v: "{$build=a regular}"
    }, {
        w: 16,
        v: "{$build=a beefy}{%str+2}{%dex-1}{%con+2}{%height+3}"
    }, {
        w: 8,
        v: "{$build=a massive}{%str+3}{%dex-2}{%con+3}{%height+5}"
    }, {
        w: 4,
        v: "{$build=a round}{%dex-1}{%con+1}"
    }, {
        w: 3,
        v: "{$build=a fat}{%dex-1}{%str+1}"
    }, {
        w: 1,
        v: "{$build=an overweight}{%str+1}{%dex-2}{%con-1}{%cha-1}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$name+Swift}"
    }, {
        w: 3,
        v: "{$name+Wandering}"
    }, {
        w: 2,
        v: "{$name+Jade}"
    }, {
        w: 2,
        v: "{$name+Iron}"
    }, {
        w: 2,
        v: "{$name+Steel}"
    }, {
        w: 2,
        v: "{$name+Wooden}"
    }, {
        w: 2,
        v: "{$name+Left-Handed}"
    }, {
        w: 2,
        v: "{$name+Right-Handed}"
    }, {
        w: 3,
        v: "{$name+Quick}"
    }, {
        w: 2,
        v: "{$name+Wise}"
    }, {
        w: 2,
        v: "{$name+Keen}"
    }, {
        w: 2,
        v: "{$name+Bright}"
    }, {
        w: 2,
        v: "{$name+Shining}"
    }, {
        w: 2,
        v: "{$name+Vivid}"
    }, {
        w: 2,
        v: "{$name+Noble}"
    }, {
        w: 2,
        v: "{$name+Strong}"
    }, {
        w: 2,
        v: "{$name+Fair}"
    }, {
        w: 2,
        v: "{$name+Distant}"
    }, {
        w: 2,
        v: "{$name+Lone}"
    }, {
        w: 2,
        v: "{$name+Brave}"
    }, {
        w: 2,
        v: "{$name+Ancient}"
    }, {
        w: 1,
        v: "{$name+Doomed}"
    }, {
        w: 2,
        v: "{$name+Discreet}"
    }, {
        w: 2,
        v: "{$name+Fiery}"
    }, {
        w: 2,
        v: "{$name+Blazing}"
    }, {
        w: 2,
        v: "{$name+Frozen}"
    }, {
        w: 2,
        v: "{$name+Lost}"
    }, {
        w: 2,
        v: "{$name+Magical}"
    }, {
        w: 3,
        v: "{$name+Mystic}"
    }, {
        w: 2,
        v: "{$name+Secret}"
    }, {
        w: 2,
        v: "{$name+Hidden}"
    }, {
        w: 2,
        v: "{$name+Fleeting}"
    }, {
        w: 2,
        v: "{$name+Valorous}"
    }, {
        w: 3,
        v: "{$name+Curious}"
    }, {
        w: 2,
        v: "{$name+Thieving}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$name+on the Mountaintop}"
    }, {
        w: 2,
        v: "{$name+in the Wind}"
    }, {
        w: 2,
        v: "{$name+under the Earth}"
    }, {
        w: 2,
        v: "{$name+in the Night}"
    }, {
        w: 2,
        v: "{$name+in the Rain}"
    }, {
        w: 2,
        v: "{$name+in the Forest}"
    }, {
        w: 2,
        v: "{$name+by the Lake}"
    }, {
        w: 2,
        v: "{$name+by the River}"
    }, {
        w: 2,
        v: "{$name+in the Darkness}"
    }, {
        w: 1,
        v: "{$name+Dancing in the Rain}"
    }, {
        w: 1,
        v: "{$name+Running like the Wind}"
    }, {
        w: 1,
        v: "{$name+Walking on Water}"
    }, {
        w: 1,
        v: "{$name+Shadowed by the Clouds}"
    }, {
        w: 1,
        v: "{$name+Lost in Song}"
    }, {
        w: 1,
        v: "{$name+Blessed by the Fire}"
    }, {
        w: 1,
        v: "{$name+Embraced by the Gods}"
    }, {
        w: 1,
        v: "{$name+Comforted by the Winds}"
    }, {
        w: 1,
        v: "{$name+Forever at Peace}"
    }, {
        w: 1,
        v: "{$name+Smiling in the Face of Death}"
    }, {
        w: 1,
        v: "{$name+Fighting the Tide}"
    }]
}, function(e) {
    e.exports = [{
        w: 10,
        v: "{tabaxifirstname}{$name+ }{tabaxinounname}"
    }, {
        w: 4,
        v: "{tabaxinounname}{$name+ }{tabaxilastname}"
    }, {
        w: 8,
        v: "{tabaxinounname}{$name+s }{tabaxilastname}"
    }, {
        w: 6,
        v: "{tabaxinumbername}{$name+ }{tabaxinounname}{$name+s}"
    }, {
        w: 4,
        v: "{tabaxinumbername}{$name+ }{tabaxinounname}{$name+s }{tabaxilastname}"
    }, {
        w: 4,
        v: "{tabaxinumbername}{$name+ }{tabaxifirstname}{$name+ }{tabaxinounname}{$name+s}"
    }, {
        w: 1,
        v: "{tabaxinumbername}{$name+ }{tabaxifirstname}{$name+ }{tabaxinounname}{$name+s}{tabaxilastname}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+Star}"
    }, {
        w: 1,
        v: "{$name+Light}"
    }, {
        w: 1,
        v: "{$name+Mirror}"
    }, {
        w: 1,
        v: "{$name+Blade}"
    }, {
        w: 1,
        v: "{$name+Spider}"
    }, {
        w: 1,
        v: "{$name+Hummingbird}"
    }, {
        w: 1,
        v: "{$name+Falcon}"
    }, {
        w: 1,
        v: "{$name+Snake}"
    }, {
        w: 1,
        v: "{$name+Bat}"
    }, {
        w: 1,
        v: "{$name+Fang}"
    }, {
        w: 1,
        v: "{$name+Thundercloud}"
    }, {
        w: 1,
        v: "{$name+Tree}"
    }, {
        w: 1,
        v: "{$name+Root}"
    }, {
        w: 1,
        v: "{$name+Tail}"
    }, {
        w: 1,
        v: "{$name+Wisp}"
    }, {
        w: 1,
        v: "{$name+Harp}"
    }, {
        w: 1,
        v: "{$name+Whisper}"
    }, {
        w: 1,
        v: "{$name+Flame}"
    }, {
        w: 1,
        v: "{$name+Howl}"
    }, {
        w: 1,
        v: "{$name+Relic}"
    }, {
        w: 1,
        v: "{$name+Paw}"
    }, {
        w: 1,
        v: "{$name+Claw}"
    }, {
        w: 1,
        v: "{$name+Eagle}"
    }, {
        w: 1,
        v: "{$name+Bull}"
    }, {
        w: 1,
        v: "{$name+Guardian}"
    }, {
        w: 1,
        v: "{$name+Seer}"
    }, {
        w: 1,
        v: "{$name+Magpie}"
    }, {
        w: 1,
        v: "{$name+Dragon}"
    }, {
        w: 1,
        v: "{$name+Eye}"
    }, {
        w: 1,
        v: "{$name+Heart}"
    }, {
        w: 1,
        v: "{$name+Mind}"
    }, {
        w: 1,
        v: "{$name+Lord}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{$name+Two}"
    }, {
        w: 5,
        v: "{$name+Three}"
    }, {
        w: 4,
        v: "{$name+Four}"
    }, {
        w: 5,
        v: "{$name+Five}"
    }, {
        w: 3,
        v: "{$name+Six}"
    }, {
        w: 5,
        v: "{$name+Seven}"
    }, {
        w: 5,
        v: "{$name+Eight}"
    }, {
        w: 5,
        v: "{$name+Nine}"
    }, {
        w: 5,
        v: "{$name+Eleven}"
    }, {
        w: 5,
        v: "{$name+Twelve}"
    }, {
        w: 5,
        v: "{$name+Fourteen}"
    }, {
        w: 5,
        v: "{$name+Eighteen}"
    }, {
        w: 4,
        v: "{$name+Twenty}"
    }, {
        w: 3,
        v: "{$name+Fourty}"
    }, {
        w: 2,
        v: "{$name+A Hundred}"
    }, {
        w: 1,
        v: "{$name+One Thousand}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{$quirks+$majPro}{$monster=}{monster1}{$quirks+is currently obsessed by }{$quirks+$monster}{$quirks+s. }"
    }, {
        w: 5,
        v: "{$quirks+$majPro}{raceallergy}{$quirks+is currently obsessed by }{$quirks+$racea}{$quirks+. }"
    }, {
        w: 5,
        v: "{$quirks+$majPro}{preciousitem}{$quirks+is currently obsessed by a }{$quirks+$precious}{$quirks+. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is currently obsessed by the current town. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is currently obsessed by a nearby house. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is currently obsessed by the nearest castle. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is currently obsessed by a nearby cave. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is currently obsessed by a forgotten legend. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is currently obsessed by a local legend. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{abstractword}{$quirks+is currently obsessed by a song about }{$quirks+$aword}{$quirks+. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{abstractword}{$quirks+is currently obsessed by a poem about }{$quirks+$aword}{$quirks+. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{abstractword}{$quirks+is currently obsessed by a book about }{$quirks+$aword}{$quirks+. }"
    }]
}, function(e) {
    e.exports = [{
        w: 14,
        v: "{$quirks+}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is curious to a fault. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ complains about how cold the weather is. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+dislikes water. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ wags }{$quirks+$minPoss}{$quirks+tail. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is constantly talking about }{$quirks+$minPoss}{$quirks+newest obsession. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+can often be found purring when happy. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a very deep knowledge of unusual facts and events. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has a tendency to steal curious items to study them. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+knows everything there is to know about old prophecies. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+spends all of }{$quirks+$minPoss}{$quirks+money on old baubles. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+can often be found narrating ongoing events. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$skintexture=}{$skintone=}{tabaxiskintexture}{tabaxiskinpattern}{$skin=$skintexture}{$skin+$skintone}{tabaxiskincolor}{$skintype= fur}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$skin+ golden}"
    }, {
        w: 3,
        v: "{$skin+ black}"
    }, {
        w: 3,
        v: "{$skin+ gray}"
    }, {
        w: 4,
        v: "{$skin+ dark gray}"
    }, {
        w: 2,
        v: "{$skin+ orange}"
    }, {
        w: 1,
        v: "{$skin+ red}"
    }, {
        w: 2,
        v: "{$skin+ chestnut}"
    }, {
        w: 2,
        v: "{$skin+ yellow}"
    }, {
        w: 3,
        v: "{$skin+ white}"
    }]
}, function(e) {
    e.exports = [{
        w: 5,
        v: "{$skintexture+}"
    }, {
        w: 1,
        v: "{$skintexture+, spotted,}"
    }, {
        w: 1,
        v: "{$skintexture+, patterned,}"
    }, {
        w: 1,
        v: "{$skintexture+, striped,}"
    }]
}, function(e) {
    e.exports = [{
        w: 2,
        v: "{$skintexture=lustrous}"
    }, {
        w: 6,
        v: "{$skintexture=soft}"
    }, {
        w: 1,
        v: "{$skintexture=dirty}"
    }, {
        w: 1,
        v: "{$skintexture=rough}"
    }, {
        w: 3,
        v: "{$skintexture=fluffy}"
    }, {
        w: 5,
        v: "{$skintexture=short}"
    }, {
        w: 3,
        v: "{$skintexture=long}"
    }, {
        w: 3,
        v: "{$skintexture=shiny}"
    }, {
        w: 1,
        v: "{$skintexture=luxurious}"
    }, {
        w: 2,
        v: "{$skintexture=dense}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{texttat}"
    }, {
        w: 4,
        v: "{animaltat}"
    }, {
        w: 1,
        v: "{$sphy1+tattoo of a }{weapon}{$sphy1+$weapon}"
    }, {
        w: 2,
        v: "{$sphy1+abstract tattoo}"
    }, {
        w: 3,
        v: "{$sphy1+tribal tattoo}"
    }]
}, function(e) {
    e.exports = [{
        w: 12,
        v: "{$tadj=}"
    }, {
        w: 1,
        v: "{$tadj=fresh }"
    }, {
        w: 1,
        v: "{$tadj=small }"
    }, {
        w: 1,
        v: "{$tadj=large }"
    }, {
        w: 1,
        v: "{$tadj=tiny }"
    }, {
        w: 1,
        v: "{$tadj=elaborate }"
    }, {
        w: 1,
        v: "{$tadj=badly done }"
    }, {
        w: 1,
        v: "{$tadj=complicated }"
    }, {
        w: 1,
        v: "{$tadj=shocking }"
    }, {
        w: 1,
        v: "{$tadj=provocative }"
    }, {
        w: 1,
        v: "{$tadj=bland }"
    }, {
        w: 1,
        v: "{$tadj=exceptional }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{alignment}{%good=%align}{alignment}{%moralneutral=%align}{alignment}{%evil=%align}{alignment}{%lawful=%align}{alignment}{%ethicalneutral=%align}{alignment}{%chaotic=%align}"
    }]
}, function(e) {
    e.exports = [{
        w: 10,
        v: "{$sphy1+tattoo of the word }{abstractword}{$sphy1+$aword}"
    }, {
        w: 4,
        v: "{$sphy1+tattoo of a poem about }{abstractword}{$sphy1+$aword}"
    }, {
        w: 4,
        v: "{$sphy1+tattoo of the lyrics of a song quote about }{abstractword}{$sphy1+$aword}"
    }, {
        w: 6,
        v: "{$sphy1+tattoo of an inspirational quote about }{abstractword}{$sphy1+$aword}"
    }, {
        w: 4,
        v: "{$sphy1+tattoo of the word }{abstractword}{$sphy1+$aword}{$sphy1+ translated into }{language}{$sphy1+$lang}"
    }, {
        w: 2,
        v: "{$sphy1+tattoo of a poem about }{abstractword}{$sphy1+$aword}{$sphy1+ translated into }{language}{$sphy1+$lang}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of an inspirational quote about }{abstractword}{$sphy1+$aword}{$sphy1+ translated into }{language}{$sphy1+$lang}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of the lyrics of a song quote about }{abstractword}{$sphy1+$aword}{$sphy1+ written in }{language}{$sphy1+$lang}"
    }, {
        w: 3,
        v: "{$sphy1+tattoo of the name of }{$sphy1+$minPoss}{relationship}{$sphy1+$rela}{$sphy1+.}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Abomination}"
    }, {
        w: 1,
        v: "{$name=Agony}"
    }, {
        w: 1,
        v: "{$name=Barbary}"
    }, {
        w: 1,
        v: "{$name=Battle}"
    }, {
        w: 1,
        v: "{$name=Conflict}"
    }, {
        w: 1,
        v: "{$name=Corruption}"
    }, {
        w: 1,
        v: "{$name=Death}"
    }, {
        w: 1,
        v: "{$name=Defiance}"
    }, {
        w: 1,
        v: "{$name=Demise}"
    }, {
        w: 1,
        v: "{$name=Destruction}"
    }, {
        w: 1,
        v: "{$name=Dissenssion}"
    }, {
        w: 1,
        v: "{$name=Distress}"
    }, {
        w: 1,
        v: "{$name=Fear}"
    }, {
        w: 1,
        v: "{$name=Filth}"
    }, {
        w: 1,
        v: "{$name=Fright}"
    }, {
        w: 1,
        v: "{$name=Hate}"
    }, {
        w: 1,
        v: "{$name=Hatred}"
    }, {
        w: 1,
        v: "{$name=Horror}"
    }, {
        w: 1,
        v: "{$name=Hurt}"
    }, {
        w: 1,
        v: "{$name=Misery}"
    }, {
        w: 1,
        v: "{$name=Pain}"
    }, {
        w: 1,
        v: "{$name=Panic}"
    }, {
        w: 1,
        v: "{$name=Ruination}"
    }, {
        w: 1,
        v: "{$name=Stifle}"
    }, {
        w: 1,
        v: "{$name=Strife}"
    }, {
        w: 1,
        v: "{$name=Terror}"
    }, {
        w: 1,
        v: "{$name=Trouble}"
    }, {
        w: 1,
        v: "{$name=War}"
    }, {
        w: 1,
        v: "{$name=Torment}"
    }, {
        w: 1,
        v: "{$name=Grief}"
    }, {
        w: 1,
        v: "{$name=Despair}"
    }, {
        w: 1,
        v: "{$name=Anguish}"
    }, {
        w: 1,
        v: "{$name=Gloom}"
    }, {
        w: 1,
        v: "{$name=Melancholy}"
    }, {
        w: 1,
        v: "{$name=Woe}"
    }, {
        w: 1,
        v: "{$name=Sorrow}"
    }, {
        w: 1,
        v: "{$name=Misfortune}"
    }, {
        w: 1,
        v: "{$name=Deceit}"
    }, {
        w: 1,
        v: "{$name=Extreme}"
    }, {
        w: 1,
        v: "{$name=End}"
    }, {
        w: 1,
        v: "{$name=Trickery}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Acceptance}"
    }, {
        w: 1,
        v: "{$name=Beauty}"
    }, {
        w: 1,
        v: "{$name=Benevolence}"
    }, {
        w: 1,
        v: "{$name=Bravery}"
    }, {
        w: 1,
        v: "{$name=Caring}"
    }, {
        w: 1,
        v: "{$name=Caution}"
    }, {
        w: 1,
        v: "{$name=Charity}"
    }, {
        w: 1,
        v: "{$name=Compassion}"
    }, {
        w: 1,
        v: "{$name=Cooperation}"
    }, {
        w: 1,
        v: "{$name=Courage}"
    }, {
        w: 1,
        v: "{$name=Creativity}"
    }, {
        w: 1,
        v: "{$name=Curiosity}"
    }, {
        w: 1,
        v: "{$name=Eloquence}"
    }, {
        w: 1,
        v: "{$name=Empathy}"
    }, {
        w: 1,
        v: "{$name=Enthusiasm}"
    }, {
        w: 1,
        v: "{$name=Faithfulness}"
    }, {
        w: 1,
        v: "{$name=Flexibility}"
    }, {
        w: 1,
        v: "{$name=Forbearance}"
    }, {
        w: 1,
        v: "{$name=Forgiveness}"
    }, {
        w: 1,
        v: "{$name=Friendliness}"
    }, {
        w: 1,
        v: "{$name=Frugality}"
    }, {
        w: 1,
        v: "{$name=Generosity}"
    }, {
        w: 1,
        v: "{$name=Gentleness}"
    }, {
        w: 1,
        v: "{$name=Gratitude}"
    }, {
        w: 1,
        v: "{$name=Helpfulness}"
    }, {
        w: 1,
        v: "{$name=Honesty}"
    }, {
        w: 1,
        v: "{$name=Hope}"
    }, {
        w: 1,
        v: "{$name=Humbleness}"
    }, {
        w: 1,
        v: "{$name=Humility}"
    }, {
        w: 1,
        v: "{$name=Humor}"
    }, {
        w: 1,
        v: "{$name=Innocence}"
    }, {
        w: 1,
        v: "{$name=Integrity}"
    }, {
        w: 1,
        v: "{$name=Joyfulness}"
    }, {
        w: 1,
        v: "{$name=Life}"
    }, {
        w: 1,
        v: "{$name=Love}"
    }, {
        w: 1,
        v: "{$name=Meekness}"
    }, {
        w: 1,
        v: "{$name=Mercy}"
    }, {
        w: 1,
        v: "{$name=Moderation}"
    }, {
        w: 1,
        v: "{$name=Modesty}"
    }, {
        w: 1,
        v: "{$name=Peace}"
    }, {
        w: 1,
        v: "{$name=Piety}"
    }, {
        w: 1,
        v: "{$name=Purity}"
    }, {
        w: 1,
        v: "{$name=Restraint}"
    }, {
        w: 1,
        v: "{$name=Reverance}"
    }, {
        w: 1,
        v: "{$name=Righteousness}"
    }, {
        w: 1,
        v: "{$name=Simplicity}"
    }, {
        w: 1,
        v: "{$name=Sincerity}"
    }, {
        w: 1,
        v: "{$name=Sobriety}"
    }, {
        w: 1,
        v: "{$name=Temperance}"
    }, {
        w: 1,
        v: "{$name=Tolerance}"
    }, {
        w: 1,
        v: "{$name=Tranquility}"
    }, {
        w: 1,
        v: "{$name=Trust}"
    }, {
        w: 1,
        v: "{$name=Glee}"
    }, {
        w: 1,
        v: "{$name=Sanctity}"
    }, {
        w: 1,
        v: "{$name=Bliss}"
    }, {
        w: 1,
        v: "{$name=Cherish}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        v: "{%good+3}{%moralneutral-2}{%evil-3}{tieflinggoodname}"
    }, {
        w: 2,
        v: "{%good+3}{%moralneutral-2}{%evil-3}{tieflingneutralname}"
    }, {
        w: 5,
        v: "{%good+3}{%moralneutral-2}{%evil-3}{tieflingname}"
    }, {
        w: 3,
        v: "{%good-3}{%moralneutral-2}{%evil+3}{getevilgod}{tieflingevilname}"
    }, {
        w: 2,
        v: "{%good-3}{%moralneutral-2}{%evil+3}{getevilgod}{tieflingneutralname}"
    }, {
        w: 5,
        v: "{%good-3}{%moralneutral-2}{%evil+3}{getevilgod}{tieflingname}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Akchar}"
    }, {
        w: 1,
        v: "{$name=Ammeros}"
    }, {
        w: 1,
        v: "{$name=Andlech}"
    }, {
        w: 1,
        v: "{$name=Aradani}"
    }, {
        w: 1,
        v: "{$name=Arkzer}"
    }, {
        w: 1,
        v: "{$name=Arrias}"
    }, {
        w: 1,
        v: "{$name=Ashes}"
    }, {
        w: 1,
        v: "{$name=Beldani}"
    }, {
        w: 1,
        v: "{$name=Damthos}"
    }, {
        w: 1,
        v: "{$name=Dharxes}"
    }, {
        w: 1,
        v: "{$name=Dibis}"
    }, {
        w: 1,
        v: "{$name=Dimwure}"
    }, {
        w: 1,
        v: "{$name=Ekthor}"
    }, {
        w: 1,
        v: "{$name=Euphoria}"
    }, {
        w: 1,
        v: "{$name=Grilia}"
    }, {
        w: 1,
        v: "{$name=Iathor}"
    }, {
        w: 1,
        v: "{$name=Karzire}"
    }, {
        w: 1,
        v: "{$name=Kosus}"
    }, {
        w: 1,
        v: "{$name=Kyris}"
    }, {
        w: 1,
        v: "{$name=Lokeus}"
    }, {
        w: 1,
        v: "{$name=Magoria}"
    }, {
        w: 1,
        v: "{$name=Maledos}"
    }, {
        w: 1,
        v: "{$name=Maloth}"
    }, {
        w: 1,
        v: "{$name=Mavrakas}"
    }, {
        w: 1,
        v: "{$name=Natari}"
    }, {
        w: 1,
        v: "{$name=Nephira}"
    }, {
        w: 1,
        v: "{$name=Nithyis}"
    }, {
        w: 1,
        v: "{$name=Pescyra}"
    }, {
        w: 1,
        v: "{$name=Reakas}"
    }, {
        w: 1,
        v: "{$name=Royola}"
    }, {
        w: 1,
        v: "{$name=Salthor}"
    }, {
        w: 1,
        v: "{$name=Seirilypsis}"
    }, {
        w: 1,
        v: "{$name=Shalech}"
    }, {
        w: 1,
        v: "{$name=Shazer}"
    }, {
        w: 1,
        v: "{$name=Skaros}"
    }, {
        w: 1,
        v: "{$name=Urakos}"
    }, {
        w: 1,
        v: "{$name=Uricis}"
    }, {
        w: 1,
        v: "{$name=Urixikas}"
    }, {
        w: 1,
        v: "{$name=Valshoon}"
    }, {
        w: 1,
        v: "{$name=Yorazis}"
    }, {
        w: 1,
        v: "{$name=Yuzis}"
    }, {
        w: 1,
        v: "{$name=Zorcius}"
    }, {
        w: 1,
        v: "{$name=Zorris}"
    }, {
        w: 1,
        v: "{$name=Zorrut}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name=Ambition}"
    }, {
        w: 1,
        v: "{$name=Confidence}"
    }, {
        w: 1,
        v: "{$name=Diligence}"
    }, {
        w: 1,
        v: "{$name=Detachment}"
    }, {
        w: 1,
        v: "{$name=Determination}"
    }, {
        w: 1,
        v: "{$name=Devotion}"
    }, {
        w: 1,
        v: "{$name=Discernment}"
    }, {
        w: 1,
        v: "{$name=Discretion}{%dex+1}"
    }, {
        w: 1,
        v: "{$name=Discipline}{%wis+1}"
    }, {
        w: 1,
        v: "{$name=Faith}"
    }, {
        w: 1,
        v: "{$name=Chaos}{%chaotic+2}"
    }, {
        w: 1,
        v: "{$name=Fortitude}"
    }, {
        w: 1,
        v: "{$name=Focus}"
    }, {
        w: 1,
        v: "{$name=Grace}"
    }, {
        w: 1,
        v: "{$name=Idealism}"
    }, {
        w: 1,
        v: "{$name=Honor}"
    }, {
        w: 1,
        v: "{$name=Impartiality}{%moralneutral+5}{%ethicalneutral+5}"
    }, {
        w: 1,
        v: "{$name=Justice}{%lawful+2}"
    }, {
        w: 1,
        v: "{$name=Knowledge}{%int+2}"
    }, {
        w: 1,
        v: "{$name=Liberality}"
    }, {
        w: 1,
        v: "{$name=Loyalty}"
    }, {
        w: 1,
        v: "{$name=Magnanimity}"
    }, {
        w: 1,
        v: "{$name=Majesty}"
    }, {
        w: 1,
        v: "{$name=Obedience}"
    }, {
        w: 1,
        v: "{$name=Perseverance}"
    }, {
        w: 1,
        v: "{$name=Persistence}"
    }, {
        w: 1,
        v: "{$name=Patience}"
    }, {
        w: 1,
        v: "{$name=Reliability}"
    }, {
        w: 1,
        v: "{$name=Resolution}"
    }, {
        w: 1,
        v: "{$name=Silence}"
    }, {
        w: 1,
        v: "{$name=Toughness}{%con+2}"
    }, {
        w: 1,
        v: "{$name=Strength}{%str+2}"
    }, {
        w: 1,
        v: "{$name=Truth}"
    }, {
        w: 1,
        v: "{$name=Unity}"
    }, {
        w: 1,
        v: "{$name=Vigor}{%con+2}"
    }, {
        w: 1,
        v: "{$name=Vitality}{%con+2}"
    }, {
        w: 1,
        v: "{$name=Wisdom}{%wis+2}"
    }, {
        w: 1,
        v: "{$name=Wonder}"
    }, {
        w: 1,
        v: "{$name=Zeal}"
    }, {
        w: 1,
        v: "{$name=Desire}"
    }, {
        w: 1,
        v: "{$name=Possession}"
    }, {
        w: 1,
        v: "{$name=Reverence}"
    }, {
        w: 1,
        v: "{$name=Song}"
    }, {
        w: 1,
        v: "{$name=Atonement}"
    }, {
        w: 1,
        v: "{$name=Art}"
    }, {
        w: 1,
        v: "{$name=Skilled}"
    }, {
        w: 1,
        v: "{$name=Order}{%lawful+2}"
    }, {
        w: 1,
        v: "{$name=Prudence}{%wis+2}"
    }, {
        w: 1,
        v: "{$name=Wit}{%int+2}"
    }]
}, function(e) {
    e.exports = [{
        w: 4,
        v: "{$skin+red}"
    }, {
        w: 2,
        v: "{$skin+purple}"
    }, {
        w: 1,
        v: "{humanskin}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{randomtraits1}{randomtraits2}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{male}{maletritonname}{tritonsurname}"
    }, {
        w: 1,
        v: "{female}{femaletritonname}{tritonsurname}"
    }]
}, function(e) {
    e.exports = [{
        w: 35,
        v: "{hairLength}{$hair+, }{hairType}{$hair+, }{tritonhaircolor}{$hair+hair and }"
    }, {
        w: 8,
        v: "{$hair=a bald head and }"
    }]
}, function(e) {
    e.exports = [{
        w: 25,
        v: "{$hair+green }"
    }, {
        w: 25,
        v: "{$hair+blue }"
    }, {
        w: 25,
        v: "{$hair+teal }"
    }, {
        w: 10,
        v: "{$hair+brown }"
    }, {
        w: 10,
        v: "{$hair+gray }"
    }, {
        w: 16,
        v: "{$hair+white }"
    }, {
        w: 16,
        v: "{$hair+black }"
    }, {
        w: 1,
        v: "{$hair+dyed black }"
    }, {
        w: 1,
        v: "{$hair+dyed blue }"
    }, {
        w: 1,
        v: "{$hair+dyed purple }"
    }, {
        w: 1,
        v: "{$hair+dyed pink }"
    }, {
        w: 1,
        v: "{$hair+dyed yellow }"
    }, {
        w: 1,
        v: "{$hair+dyed red }"
    }, {
        w: 1,
        v: "{$hair+dyed orange }"
    }, {
        w: 1,
        v: "{$hair+dyed green }"
    }, {
        w: 1,
        v: "{$hair+dyed teal }"
    }]
}, function(e) {
    e.exports = [{
        w: 25,
        v: "{$quirks+}"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is disgusted by human architecture. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+feels more comfortable underwater. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+will boast the greatness of Triton civilization at every opportunity. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+speaks an antiquated version of common. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+has a hard time understanding sarcasm. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is fascinated by the surface world, and can often be seen scribbling notes or drawings. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+is surprised when people don't know everything about Triton culture. }"
    }, {
        w: 4,
        v: "{$quirks+$majPro}{$quirks+is still struggling to understand the surface's culture. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+always knows if it's going to rain. }"
    }, {
        w: 3,
        v: "{$quirks+$majPro}{$quirks+goes swimming every day. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+views other cultures as barbaric. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+is deeply xenophobic. }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$skin+light blue}"
    }, {
        w: 1,
        v: "{$skin+dark blue}"
    }, {
        w: 1,
        v: "{$skin+blue}"
    }, {
        w: 1,
        v: "{$skin+green}"
    }, {
        w: 1,
        v: "{$skin+cyan}"
    }, {
        w: 1,
        v: "{$skin+aqua}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$name+ Dhugozath}"
    }, {
        w: 1,
        v: "{$name+ Ousath}"
    }, {
        w: 1,
        v: "{$name+ Gomurath}"
    }, {
        w: 1,
        v: "{$name+ Galaxath}"
    }, {
        w: 1,
        v: "{$name+ Muledath}"
    }, {
        w: 1,
        v: "{$name+ Vuhrellath}"
    }, {
        w: 1,
        v: "{$name+ Muhnosnath}"
    }, {
        w: 1,
        v: "{$name+ Valesnath}"
    }, {
        w: 1,
        v: "{$name+ Dhodomath}"
    }, {
        w: 1,
        v: "{$name+ Jamaxath}"
    }, {
        w: 1,
        v: "{$name+ Zahmonzath}"
    }, {
        w: 1,
        v: "{$name+ Uuhrenzath}"
    }, {
        w: 1,
        v: "{$name+ Agasath}"
    }, {
        w: 1,
        v: "{$name+ Uhmalvath}"
    }, {
        w: 1,
        v: "{$name+ Ubuzath}"
    }, {
        w: 1,
        v: "{$name+ Naghusnath}"
    }, {
        w: 1,
        v: "{$name+ Bhubadath}"
    }, {
        w: 1,
        v: "{$name+ Parallath}"
    }, {
        w: 1,
        v: "{$name+ Nahnonzath}"
    }, {
        w: 1,
        v: "{$name+ Ehralnath}"
    }, {
        w: 1,
        v: "{$name+ Zanonsath}"
    }, {
        w: 1,
        v: "{$name+ Jahnanzath}"
    }, {
        w: 1,
        v: "{$name+ Pogenath}"
    }, {
        w: 1,
        v: "{$name+ Lamanath}"
    }, {
        w: 1,
        v: "{$name+ Omasath}"
    }, {
        w: 1,
        v: "{$name+ Jubelath}"
    }, {
        w: 1,
        v: "{$name+ Dhuromath}"
    }, {
        w: 1,
        v: "{$name+ Judemath}"
    }, {
        w: 1,
        v: "{$name+ Lamaxath}"
    }, {
        w: 1,
        v: "{$name+ Dhuvelnath}"
    }, {
        w: 1,
        v: "{$name+ Avegath}"
    }, {
        w: 1,
        v: "{$name+ Bhemoxath}"
    }, {
        w: 1,
        v: "{$name+ Ahnosath}"
    }, {
        w: 1,
        v: "{$name+ Abolath}"
    }, {
        w: 1,
        v: "{$name+ Zeghalmath}"
    }, {
        w: 1,
        v: "{$name+ Jarolmath}"
    }, {
        w: 1,
        v: "{$name+ Bahlelvath}"
    }, {
        w: 1,
        v: "{$name+ Uhrolvath}"
    }, {
        w: 1,
        v: "{$name+ Ughazath}"
    }, {
        w: 1,
        v: "{$name+ Nolamnath}"
    }, {
        w: 1,
        v: "{$name+ Muhrogath}"
    }, {
        w: 1,
        v: "{$name+ Dunallath}"
    }, {
        w: 1,
        v: "{$name+ Nuhnozath}"
    }, {
        w: 1,
        v: "{$name+ Bhaghollath}"
    }, {
        w: 1,
        v: "{$name+ Doghorath}"
    }, {
        w: 1,
        v: "{$name+ Rumegath}"
    }, {
        w: 1,
        v: "{$name+ Vahrollath}"
    }, {
        w: 1,
        v: "{$name+ Vagolvath}"
    }, {
        w: 1,
        v: "{$name+ Molomnath}"
    }, {
        w: 1,
        v: "{$name+ Dhugosath}"
    }]
}, function(e) {
    e.exports = [{
        w: 3,
        name: "Bandit",
        v: "{$occupation=bandit}{%str+1}{%con+1}{%evil+2}{getevilgod}{militaryquirk}{kenkunamefighting}"
    }, {
        w: 3,
        name: "Beggar",
        v: "{$occupation=beggar}{%str-2}{%dex-2}{%con-2}{%int-2}{%wis-2}{%cha-2}{kenkuname}"
    }, {
        w: 1,
        name: "Fence",
        v: "{$occupation=fence}{%cha+4}{kenkuname}"
    }, {
        w: 2,
        name: "Pickpocket",
        v: "{$occupation=pickpocket}{%dex+3}{%evil+2}{kenkuname}"
    }, {
        w: 1,
        name: "Procurer",
        v: "{$occupation=procurer}{%int+3}{%cha+3}{kenkuname}"
    }, {
        w: 2,
        name: "Prostitute",
        v: "{$occupation=prostitute}{%cha+4}{kenkuname}"
    }, {
        w: 1,
        name: "Slaver",
        v: "{$occupation=slaver}{%int+3}{%evil+1}{getevilgod}{kenkuname}"
    }, {
        w: 1,
        name: "Smuggler",
        v: "{$occupation=smuggler}{%int+3}{kenkuname}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{simpleweapon}"
    }, {
        w: 1,
        v: "{simplefinesse}"
    }, {
        w: 1,
        v: "{simpleranged}"
    }, {
        w: 3,
        v: "{martialweapon}"
    }, {
        w: 1,
        v: "{martialfinesse}"
    }, {
        w: 1,
        v: "{martialranged}"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        v: "{$build=an anorexic}{%str-3}{%con-2}"
    }, {
        w: 5,
        v: "{$build=a skinny}{%str-2}{%dex+1}{%con-2}"
    }, {
        w: 12,
        v: "{$build=a lean}{%str-1}{%dex+1}"
    }, {
        w: 10,
        v: "{$build=an athletic}{%str+1}{%dex+1}{%con+1}"
    }, {
        w: 12,
        v: "{$build=a muscular}{%str+2}{%con+1}"
    }, {
        w: 18,
        v: "{$build=a regular}"
    }, {
        w: 10,
        v: "{$build=a beefy}{%str+2}{%dex-1}{%con+2}{%height+3}"
    }, {
        w: 4,
        v: "{$build=a massive}{%str+3}{%dex-2}{%con+3}{%height+5}"
    }, {
        w: 18,
        v: "{$build=a round}{%dex-1}{%con+1}"
    }, {
        w: 4,
        v: "{$build=a fat}{%dex-1}{%str+1}"
    }, {
        w: 2,
        v: "{$build=an overweight}{%str+1}{%dex-2}{%con-1}{%cha-1}"
    }, {
        w: 1,
        v: "{$build=an obese}{%dex-4}{%str+1}{%con-2}{%cha-2}"
    }]
}, function(e) {
    e.exports = [{
        w: 30,
        v: "{$quirks+}"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+mostly wears }{color}{$quirks+$color}{$quirks+ clothes. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+never wears }{color}{$quirks+$color}{$quirks+ clothes. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+only wears }{color}{$quirks+$color}{$quirks+ clothes. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+never takes off }{$quirks+$minPoss}{$quirks+footwear. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+never wears footwear. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+always wears a mask. }"
    }, {
        w: 1,
        v: "{$quirks+$majPro}{$quirks+always wears a veil. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+never sleeps in a bed. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+refuses to light fires. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+refuses to write. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+never sits on a chair. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+speaks only in riddles. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+doesn't tolerate nicknames. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+keeps a list of all }{$quirks+$minPoss}{$quirks+fallen enemies. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{$quirks+has an imaginary friend. }"
    }, {
        w: 2,
        v: "{$quirks+$majPro}{frequency}{$quirks+$fr}{$quirks+ changes name. }"
    }]
}, function(e) {
    e.exports = [{
        w: 15,
        v: "{$wb=wolf}"
    }, {
        w: 1,
        v: "{$wb=bear}"
    }, {
        w: 1,
        v: "{$wb=rat}"
    }, {
        w: 1,
        v: "{$wb=boar}"
    }, {
        w: 1,
        v: "{$wb=bat}"
    }, {
        w: 1,
        v: "{$wb=cat}"
    }, {
        w: 1,
        v: "{$wb=owl}"
    }, {
        w: 1,
        v: "{$wb=pig}"
    }, {
        w: 1,
        v: "{$wb=badger}"
    }, {
        w: 1,
        v: "{$wb=eagle}"
    }, {
        w: 1,
        v: "{$wb=tiger}"
    }]
}, function(e) {
    e.exports = [{
        w: 30,
        v: "{hairLength}{$hair+, }{hairType}{$hair+, white }{$hair+hair and }"
    }, {
        w: 3,
        v: "{hairLength}{$hair+, }{hairType}{$hair+, white }{$hair+hair shaved on }{rlb}{$hair+$rl}{$hair+side and }"
    }, {
        w: 2,
        v: "{hairLength}{$hair+, white }{$hair+mohawk and }"
    }, {
        w: 8,
        v: "{$hair=a bald head and }"
    }]
}, function(e) {
    e.exports = [{
        w: 1,
        name: "Boat",
        v: "{$occupation=boat}{$occupation+$workGender}{kenkuname}"
    }, {
        w: 1,
        name: "Coach",
        v: "{$occupation=coach}{$occupation+$workGender}{kenkuname}"
    }, {
        w: 3,
        name: "Farmer",
        v: "{$occupation=farmer}{naturequirk}{kenkunameanimal}"
    }, {
        w: 3,
        name: "Fisher",
        v: "{$occupation=fisher}{$occupation+$workGender}{%wis+1}{kenkuname}"
    }, {
        w: 1,
        name: "Gravedigger",
        v: "{$occupation=gravedigger}{kenkuname}"
    }, {
        w: 1,
        name: "Sheppard",
        v: "{$occupation=sheppard}{%wis+1}{kenkunameanimal}"
    }, {
        w: 2,
        name: "Trapper",
        v: "{$occupation=trapper}{kenkunameanimal}"
    }, {
        w: 1,
        name: "Messenger",
        v: "{$occupation=messenger}{kenkuname}"
    }, {
        w: 2,
        name: "Miller",
        v: "{$occupation=miller}{kenkuname}"
    }, {
        w: 2,
        name: "Miner",
        v: "{$occupation=miner}{%str+2}{%con+2}{kenkunamemetal}"
    }, {
        w: 1,
        name: "Peddler",
        v: "{$occupation=peddler}{%cha+2}{kenkuname}"
    }, {
        w: 1,
        name: "Ratcatcher",
        v: "{$occupation=ratcatcher}{%dex+2}{kenkunameanimal}"
    }, {
        w: 3,
        name: "Sailor",
        v: "{$occupation=sailor}{%dex+2}{%str+1}{kenkuname}"
    }]
}, function(e) {
    e.exports = [{
        w: 7,
        v: "{$worship=discretely}"
    }, {
        w: 4,
        v: "{$worship=quietly}"
    }, {
        w: 3,
        v: "{$worship=openly}"
    }, {
        w: 2,
        v: "{$worship=proudly}"
    }, {
        w: 1,
        v: "{$worship=loudly}"
    }, {
        w: 1,
        v: "{$worship=zealously}"
    }, {
        w: 1,
        v: "{$worship=fervently}"
    }]
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, a, n) {}, , function(e, a, n) {}, , function(e, a, n) {}, , function(e, a, n) {
    "use strict";
    n.r(a);
    var o = n(0),
        r = n.n(o),
        i = n(36),
        t = n.n(i),
        s = n(8),
        $ = n(13),
        m = n(11),
        w = n(9),
        v = n(10),
        l = n(404),
        u = n(23),
        h = n(402),
        c = n(400),
        d = n(55),
        k = (n(65), function(e) {
            function a() {
                return Object(s.a)(this, a), Object(m.a)(this, Object(w.a)(a).apply(this, arguments))
            }
            return Object(v.a)(a, e), Object($.a)(a, [{
                key: "render",
                value: function() {
                    return r.a.createElement("footer", {
                        className: "bs-docs-footer",
                        role: "contentinfo"
                    }, r.a.createElement("ul", {
                        className: "bs-docs-social-buttons"
                    }, r.a.createElement("li", null, r.a.createElement("div", null, r.a.createElement("p", {
                        className: "footer-outline"
                    }, r.a.createElement("b", null, "Check out my video game!")), r.a.createElement("a", {
                        href: "http://store.steampowered.com/app/769410/Electromaze_Tower_Defense/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("div", {
                        className: "center-block EMD-button"
                    })))), r.a.createElement("li", null, r.a.createElement("div", null, r.a.createElement("p", {
                        className: "footer-outline"
                    }, r.a.createElement("b", null, "Follow my next RPG on discord!")), r.a.createElement("a", {
                        href: "https://discord.gg/VVb6hDr",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("div", {
                        className: "center-block GM-button"
                    }))))), r.a.createElement("div", null, r.a.createElement("p", {
                        className: "footer-outline"
                    }, r.a.createElement("b", null, " Comments, suggestions, crazy hook or trait idea? ")), r.a.createElement("p", null, " Email me at: ", r.a.createElement("a", {
                        href: "mailto:etienspb@gmail.com"
                    }, "EtiensPB@gmail.com"), "!")), r.a.createElement("div", {
                        className: "bs-docs-social"
                    }, r.a.createElement("ul", {
                        className: "bs-docs-social-buttons"
                    }, r.a.createElement("li", null, r.a.createElement("iframe", {
                        className: "github-btn",
                        src: "https://ghbtns.com/github-btn.html?user=cellule&repo=dndGenerator&type=watch&count=true",
                        width: 95,
                        height: 20,
                        title: "Star on GitHub"
                    })), r.a.createElement("li", null, r.a.createElement("iframe", {
                        className: "github-btn",
                        src: "https://ghbtns.com/github-btn.html?user=cellule&repo=dndGenerator&type=fork&count=true",
                        width: 92,
                        height: 20,
                        title: "Fork on GitHub"
                    })))), r.a.createElement("p", null, "Code licensed under ", r.a.createElement("a", {
                        href: "https://github.com/cellule/dndGenerator/blob/master/LICENSE",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "MIT"), "."), r.a.createElement("ul", {
                        className: "bs-docs-footer-links muted"
                    }, r.a.createElement("li", null, "Currently v", d.version), r.a.createElement("li", null, "\xb7"), r.a.createElement("li", null, r.a.createElement("a", {
                        href: "https://github.com/cellule/dndGenerator/"
                    }, "GitHub")), r.a.createElement("li", null, "\xb7"), r.a.createElement("li", null, r.a.createElement("a", {
                        href: "https://github.com/cellule/dndGenerator/issues?state=open"
                    }, "Issues")), r.a.createElement("li", null, "\xb7"), r.a.createElement("li", null, r.a.createElement("a", {
                        href: "https://github.com/cellule/dndGenerator/releases"
                    }, "Releases"))))
                }
            }]), a
        }(o.Component)),
        g = n(407),
        p = n(401),
        f = n(406),
        y = n(405),
        b = n(403),
        q = n(59),
        j = function e(a, n) {
            Object(s.a)(this, e), this.name = a, this.type = n
        },
        P = function(e) {
            function a() {
                return Object(s.a)(this, a), Object(m.a)(this, Object(w.a)(a).apply(this, arguments))
            }
            return Object(v.a)(a, e), a
        }(j),
        x = function(e) {
            function a() {
                return Object(s.a)(this, a), Object(m.a)(this, Object(w.a)(a).apply(this, arguments))
            }
            return Object(v.a)(a, e), a
        }(j),
        E = function(e) {
            function a(e) {
                return Object(s.a)(this, a), Object(m.a)(this, Object(w.a)(a).call(this, e, "string"))
            }
            return Object(v.a)(a, e), a
        }(P),
        C = function(e) {
            function a(e) {
                return Object(s.a)(this, a), Object(m.a)(this, Object(w.a)(a).call(this, e, "number"))
            }
            return Object(v.a)(a, e), a
        }(P),
        G = function(e) {
            function a(e) {
                return Object(s.a)(this, a), Object(m.a)(this, Object(w.a)(a).call(this, e, "string"))
            }
            return Object(v.a)(a, e), a
        }(x),
        S = function(e) {
            function a(e) {
                return Object(s.a)(this, a), Object(m.a)(this, Object(w.a)(a).call(this, e, "number"))
            }
            return Object(v.a)(a, e), a
        }(x),
        B = !1;
    function z(e, a) {
        for (var n = Math.random() * a + 1 | 0, o = 0; n > 0;)
            n -= e[o++].w;
        return e[o - 1].v
    }
    var D = /{((\\{|\\}|[^{}])*)}|((\\{|\\}|[^{}])+)/g;
    function M(e) {
        if ("string" !== typeof e || 0 === e.length)
            throw new Error("Empty value to get group");
        return ((e = e.replace("{\\n}", "\n")).match(D) || []).map(function(e) {
            var a = function(e) {
                if ("{" === e[0]) {
                    var a = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var r, i = O[Symbol.iterator](); !(a = (r = i.next()).done); a = !0) {
                            var t = r.value,
                                s = e.match(t.regex);
                            if (s)
                                return t.makeOperator(s)
                        }
                    } catch ($) {
                        n = !0, o = $
                    } finally {
                        try {
                            a || null == i.return || i.return()
                        } finally {
                            if (n)
                                throw o
                        }
                    }
                    return function() {}
                }
                return e
            }(e);
            return B && "string" !== typeof a && (a.original = e), a
        })
    }
    function T(e) {
        return "number" === typeof e
    }
    var O = [{
            regex: /^{%(.+)=%(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = e[2];
                return function(e) {
                    e.vars[a] = +e.vars[n]
                }
            },
            analysis: function(e) {
                return {
                    def: [new C(e[1])],
                    use: [new S(e[2])]
                }
            }
        }, {
            regex: /^{%(.+)=(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = +e[2];
                return function(e) {
                    e.vars[a] = n
                }
            },
            analysis: function(e) {
                return {
                    def: [new C(e[1])]
                }
            }
        }, {
            regex: /^{%(.+)\+%(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = e[2];
                return function(e) {
                    e.vars[a] = +e.vars[a] + +e.vars[n]
                }
            },
            analysis: function(e) {
                return {
                    def: [new C(e[1])],
                    use: [new S(e[1]), new S(e[2])]
                }
            }
        }, {
            regex: /^{%(.+)\+(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = +e[2];
                return function(e) {
                    e.vars[a] = +e.vars[a] + n
                }
            },
            analysis: function(e) {
                return {
                    def: [new C(e[1])],
                    use: [new S(e[1])]
                }
            }
        }, {
            regex: /^{%(.+)-%(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = e[2];
                return function(e) {
                    e.vars[a] = +e.vars[a] - +e.vars[n]
                }
            },
            analysis: function(e) {
                return {
                    def: [new C(e[1])],
                    use: [new S(e[1]), new S(e[2])]
                }
            }
        }, {
            regex: /^{%(.+)-(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = +e[2];
                return function(e) {
                    e.vars[a] = +e.vars[a] - n
                }
            },
            analysis: function(e) {
                return {
                    def: [new C(e[1])],
                    use: [new S(e[1])]
                }
            }
        }, {
            regex: /^{%(.+)}/,
            makeOperator: function(e) {
                var a = e[1];
                return function(e) {
                    return 0 | +e.vars[a]
                }
            },
            analysis: function(e) {
                return {
                    use: [new S(e[1])]
                }
            }
        }, {
            regex: /^{\$(.+)=\$(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = e[2];
                return function(e) {
                    e.vars[a] = String(e.vars[n])
                }
            },
            analysis: function(e) {
                return {
                    def: [new E(e[1])],
                    use: [new G(e[2])]
                }
            }
        }, {
            regex: /^{\$(.+)=(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = e[2];
                return function(e) {
                    e.vars[a] = n
                }
            },
            analysis: function(e) {
                return {
                    def: [new E(e[1])]
                }
            }
        }, {
            regex: /^{\$(.+)\+\$(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = e[2];
                return function(e) {
                    e.vars[a] += String(e.vars[n])
                }
            },
            analysis: function(e) {
                return {
                    def: [new E(e[1])],
                    use: [new G(e[1]), new G(e[2])]
                }
            }
        }, {
            regex: /^{\$(.+)\+(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = e[2];
                return function(e) {
                    e.vars[a] += n
                }
            },
            analysis: function(e) {
                return {
                    def: [new E(e[1])],
                    use: [new G(e[1])]
                }
            }
        }, {
            regex: /^{\$(.+)}/,
            makeOperator: function(e) {
                var a = e[1];
                return function(e) {
                    return e.vars[a]
                }
            },
            analysis: function(e) {
                return {
                    use: [new G(e[1])]
                }
            }
        }, {
            regex: /^{\\n}$/,
            makeOperator: function() {
                return function() {
                    return "\n"
                }
            },
            analysis: function(e) {
                return {}
            }
        }, {
            regex: /^{(.*)}/,
            makeOperator: function(e) {
                var a = e[1],
                    n = R(a);
                return function(e, o) {
                    function r(e) {
                        return e >>> 0 >= n.options.length ? (console.warn("Index [%d] for table [%s]", e, a), z(n.options, n.w)) : n.options[e].v
                    }
                    if ("race" === a && T(o.race))
                        return r(o.race);
                    if ("forcealign" === a && T(o.alignment))
                        return r(o.alignment);
                    if ("hooks" === a && T(o.plothook))
                        return r(o.plothook);
                    if (a.match(/gender$/) && T(o.gender))
                        return r(o.gender);
                    if (T(o.subrace) && ("raceelf" === a || "racedwarf" === a || "racegnome" === a || "racehalfling" === a || "racegenasi" === a))
                        return r(o.subrace);
                    if (T(o.classorprof)) {
                        if ("occupation" === a)
                            return r(o.classorprof);
                        if (T(o.occupation1) && 0 === o.classorprof && "class" === a)
                            return r(o.occupation1);
                        if (T(o.occupation1) && 1 === o.classorprof && "profession" === a)
                            return r(o.occupation1);
                        if (T(o.occupation1) && T(o.occupation2) && 1 === o.classorprof && ("learned" === a || "lesserNobility" === a || "professional" === a || "workClass" === a || "martial" === a || "underclass" === a || "entertainer" === a))
                            return r(o.occupation2)
                    }
                    return z(n.options, n.w)
                }
            },
            analysis: function(e) {
                return {
                    table: e[1]
                }
            }
        }],
        N = n(37),
        A = n.n(N),
        L = {},
        F = !1;
    function H() {
        if (!F) {
            var e = n(68);
            !function(e) {
                var a = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var r, i = e[Symbol.iterator](); !(a = (r = i.next()).done); a = !0) {
                        var t = r.value,
                            s = A.a.basename(t, ".json");
                        L[s] = {
                            w: 0,
                            options: []
                        }
                    }
                } catch ($) {
                    n = !0, o = $
                } finally {
                    try {
                        a || null == i.return || i.return()
                    } finally {
                        if (n)
                            throw o
                    }
                }
                F = !0
            }(e.keys()), e.keys().forEach(function(a) {
                !function(e, a) {
                    var n = A.a.basename(e, ".json"),
                        o = a(e),
                        r = 0,
                        i = o.map(function(e) {
                            var a = e.w > 0 ? e.w : 0;
                            return r += a, Object(q.a)({}, e, {
                                w: a,
                                v: M(e.v) || [],
                                original: e.v
                            })
                        });
                    L[n].options = i, L[n].w = r
                }(a, e)
            })
        }
    }
    function R(e) {
        if (H(), !(e in L))
            throw new Error("Unable to find table [".concat(e, "]"));
        return L[e]
    }
    function W(e) {
        return R(e).options
    }
    function I(e) {
        var a = R(e).options,
            n = !0,
            o = !1,
            r = void 0;
        try {
            for (var i, t = a[Symbol.iterator](); !(n = (i = t.next()).done); n = !0) {
                var s = i.value;
                if (!("table" in s))
                    throw new Error('Missing "table" property in table '.concat(e, " option ").concat(s.original))
            }
        } catch ($) {
            o = !0, r = $
        } finally {
            try {
                n || null == t.return || t.return()
            } finally {
                if (o)
                    throw r
            }
        }
        return a
    }
    var K = I("race"),
        U = {
            elf: W("raceelf"),
            dwarf: W("racedwarf"),
            gnome: W("racegnome"),
            halfling: W("racehalfling")
        },
        J = W("gender"),
        Z = W("forcealign"),
        V = W("hooks"),
        Y = W("class"),
        Q = I("profession"),
        X = {
            learned: W("learned"),
            lesserNobility: W("lesserNobility"),
            professional: W("professional"),
            workClass: W("workClass"),
            martial: W("martial"),
            underclass: W("underclass"),
            entertainer: W("entertainer")
        },
        _ = [{
            label: "Race",
            optionName: "race",
            options: K,
            onChange: function(e) {
                var a = e.state.npcOptions;
                a.subrace = null, e.setState({
                    npcOptions: a
                })
            }
        }, {
            label: "Subrace",
            optionName: "subrace",
            condition: function(e) {
                return "number" === typeof e.race && void 0 !== U[K[e.race].table]
            },
            options: function(e) {
                return U[K[e.race || 0].table]
            }
        }, {
            label: "Sex",
            optionName: "gender",
            options: J
        }, {
            label: "Alignment",
            optionName: "alignment",
            options: Z
        }, {
            label: "Plot Hooks",
            optionName: "plothook",
            options: V
        }, {
            label: "Occupation",
            optionName: "classorprof",
            options: [{
                name: "Class"
            }, {
                name: "Profession"
            }],
            onChange: function(e) {
                var a = e.state.npcOptions;
                a.occupation1 = null, a.occupation2 = null, e.setState({
                    npcOptions: a
                })
            }
        }, {
            label: "Class",
            optionName: "occupation1",
            condition: function(e) {
                return 0 === e.classorprof
            },
            options: Y
        }, {
            label: "Social Class",
            optionName: "occupation1",
            condition: function(e) {
                return 1 === e.classorprof
            },
            options: Q,
            onChange: function(e) {
                var a = e.state.npcOptions;
                a.occupation2 = null, e.setState({
                    npcOptions: a
                })
            }
        }, {
            label: "Profession",
            optionName: "occupation2",
            condition: function(e) {
                return 1 === e.classorprof && "number" === typeof e.occupation1
            },
            options: function(e) {
                return X[Q[e.occupation1 || 0].table]
            }
        }],
        ee = function(e) {
            function a(e) {
                var n;
                return Object(s.a)(this, a), (n = Object(m.a)(this, Object(w.a)(a).call(this, e))).state = {
                    npcOptions: {}
                }, n
            }
            return Object(v.a)(a, e), Object($.a)(a, [{
                key: "onSubmit",
                value: function(e) {
                    e.preventDefault(), this.props.generate(this.state.npcOptions)
                }
            }, {
                key: "_downloadTxtFile",
                value: function(e) {
                    e.preventDefault();
                    var a = document.createElement("a"),
                        n = this.props.npc.description.name.split(" ")[0],
                        o = this.props.npc.description.gender,
                        r = this.props.npc.description.race.split(" ").join("_"),
                        i = this.props.npc.description.occupation.split(" ").join("_"),
                        t = document.getElementById("downloadData");
                    if (!t)
                        throw new Error("Missing element downloadData");
                    var s = new Blob([(t.textContent || "").split("#").join("\r\n").split("#").join("\r\n")], {
                        type: "text/plain"
                    });
                    return a.href = URL.createObjectURL(s), a.download = n + "_" + o + "_" + r + "_" + i + ".txt", document.body.appendChild(a), a.click(), document.body.removeChild(a), !1
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        a = _.map(function(a) {
                            var n = !(a.condition && !a.condition(e.state.npcOptions));
                            if (a.condition && !a.condition(e.state.npcOptions))
                                return null;
                            var o = [],
                                i = e.state.npcOptions[a.optionName];
                            if (n) {
                                var t = a.options;
                                "function" === typeof t && (t = t(e.state.npcOptions)), o = t.map(function(e, a) {
                                    return e.name ? r.a.createElement("option", {
                                        value: a,
                                        key: a,
                                        selected: i === a
                                    }, e.name) : null
                                })
                            }
                            return r.a.createElement(c.a, {
                                xs: 12,
                                key: a.label
                            }, r.a.createElement(g.a, null, r.a.createElement(p.a, null, a.label), r.a.createElement(f.a, {
                                componentClass: "select",
                                onChange: function(n) {
                                    var o = e.state.npcOptions;
                                    o[a.optionName] = "random" === n.target.value ? null : parseInt(n.target.value), e.setState({
                                        npcOptions: o
                                    }, function() {
                                        a.onChange && a.onChange(e)
                                    })
                                },
                                disabled: !n
                            }, r.a.createElement("option", {
                                value: "random",
                                key: "random"
                            }, "Random"), o)))
                        });
                    return r.a.createElement("div", null, r.a.createElement(y.a, {
                        className: "hidden-panel"
                    }, r.a.createElement(y.a.Body, null, r.a.createElement("form", {
                        onSubmit: this.onSubmit.bind(this)
                    }, r.a.createElement(h.a, null, a), r.a.createElement(b.a, {
                        type: "submit",
                        className: "center-block generate-button",
                        bsStyle: "success"
                    })), r.a.createElement("form", {
                        onSubmit: this._downloadTxtFile.bind(this)
                    }, r.a.createElement(b.a, {
                        type: "submit",
                        className: "center-block download-button download-button",
                        bsStyle: "success"
                    })))))
                }
            }]), a
        }(o.Component),
        ae = (n(393), [{
            key: "str",
            name: "Strength"
        }, {
            key: "dex",
            name: "Dexterity"
        }, {
            key: "con",
            name: "Constitution"
        }, {
            key: "int",
            name: "Intellect"
        }, {
            key: "wis",
            name: "Wisdom"
        }, {
            key: "cha",
            name: "Charisma"
        }]);
    var ne = function(e) {
            function a() {
                return Object(s.a)(this, a), Object(m.a)(this, Object(w.a)(a).apply(this, arguments))
            }
            return Object(v.a)(a, e), Object($.a)(a, [{
                key: "render",
                value: function() {
                    var e = this.props.npc;
                    if (!e)
                        return r.a.createElement("div", null, "Loading npc...");
                    var a = e.description.pronounCapit,
                        n = e.pquirks.description.split(".");
                    n.length--, "lizardman" !== e.description.race && "lizardwoman" !== e.description.race || (e.ptraits.traits1 = e.ptraits.traitslizards), "goliath" === e.description.race && (e.ptraits.traits1 = e.ptraits.traitsgoliaths), "kenku" === e.description.race && (e.description.name = e.description.kenkuname);
                    var o = "" !== e.physical.special1 ? r.a.createElement("div", null, r.a.createElement("p", {
                            hidden: !0
                        }, "#"), r.a.createElement("p", null, e.physical.special1)) : null,
                        i = "" !== e.physical.special2 ? r.a.createElement("div", null, r.a.createElement("p", {
                            hidden: !0
                        }, "#"), r.a.createElement("p", null, e.physical.special2)) : null;
                    return r.a.createElement("div", {
                        className: "npc-data",
                        id: "downloadData"
                    }, r.a.createElement(h.a, null, r.a.createElement(c.a, {
                        xs: 12,
                        md: 6
                    }, r.a.createElement(y.a, {
                        className: "first-row-height"
                    }, r.a.createElement(y.a.Heading, null, "Description"), r.a.createElement(y.a.Body, null, r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", null, e.description.name, " is a ", e.description.age + " ", "year old ", e.description.gender, " ", e.description.race + " ", e.description.occupation, "."), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", null, a, "has ", e.physical.hair, e.physical.eyes, "."), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", null, a, "has ", e.physical.skin, "."), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", null, a, "stands ", e.physical.height, "cm (", function(e) {
                        var a = .3937 * e / 12,
                            n = Math.floor(a);
                        return n + "'" + Math.floor(12 * (a - n)) + '"'
                    }(e.physical.height), ") tall and has ", e.physical.build, "."), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", null, a, "has ", e.physical.face, "."), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), o, i, r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", {
                        hidden: !0
                    }, "#")))), r.a.createElement(c.a, {
                        xs: 12,
                        md: 6
                    }, r.a.createElement(y.a, {
                        className: "first-row-height"
                    }, r.a.createElement(y.a.Heading, null, "Personality Traits"), r.a.createElement(y.a.Body, null, r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", null, e.religion.description), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", null, e.ptraits.traits1), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", null, e.ptraits.traits2), n.map(function(e) {
                        return r.a.createElement("p", {
                            key: e
                        }, e, ".")
                    }), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", {
                        hidden: !0
                    }, "#"))))), r.a.createElement(h.a, null, r.a.createElement(c.a, {
                        sm: 12,
                        md: 6,
                        lg: 4
                    }, r.a.createElement(y.a, {
                        className: "second-row-height"
                    }, r.a.createElement(y.a.Heading, null, "Ability Scores"), r.a.createElement(y.a.Body, null, r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement(h.a, null, r.a.createElement(c.a, {
                        lg: 12,
                        md: 2,
                        xs: 12,
                        className: "no-right-pad no-left-pad ability"
                    }, r.a.createElement("table", {
                        className: "ability-table"
                    }, r.a.createElement("tbody", null, ae.map(function(a) {
                        var n = a.key,
                            o = a.name,
                            i = e.abilities[n];
                        return r.a.createElement("tr", {
                            key: n
                        }, r.a.createElement("td", null, r.a.createElement("b", null, o), r.a.createElement("p", {
                            hidden: !0
                        }, " - ")), r.a.createElement("td", {
                            className: "ability-number"
                        }, Math.max(3, i), r.a.createElement("p", {
                            hidden: !0
                        }, "#")))
                    }))))), r.a.createElement("p", {
                        hidden: !0
                    }, "#")))), r.a.createElement(c.a, {
                        sm: 12,
                        md: 6,
                        lg: 4
                    }, r.a.createElement(y.a, {
                        className: "second-row-height"
                    }, r.a.createElement(y.a.Heading, null, "Relationships"), r.a.createElement(y.a.Body, null, r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", null, r.a.createElement("b", null, "Sexual Orientation ")), r.a.createElement("p", {
                        hidden: !0
                    }, "- "), r.a.createElement("p", null, e.relationship.orientation), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", null, r.a.createElement("b", null, "Relationship Status ")), r.a.createElement("p", {
                        hidden: !0
                    }, "- "), r.a.createElement("p", null, e.relationship.status), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", {
                        hidden: !0
                    }, "#")))), r.a.createElement(c.a, {
                        sm: 12,
                        md: 12,
                        lg: 4
                    }, r.a.createElement(y.a, {
                        className: "second-row-height"
                    }, r.a.createElement(y.a.Heading, null, "Alignment Tendencies"), r.a.createElement(y.a.Body, null, r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("table", {
                        className: "alignment-table"
                    }, r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", {
                        className: "width-thin"
                    }, r.a.createElement("b", null, "Good")), r.a.createElement("td", {
                        hidden: !0
                    }, ":    "), r.a.createElement("td", {
                        className: "alignment-number"
                    }, Math.max(0, e.alignment.good)), r.a.createElement("td", {
                        hidden: !0
                    }, "  "), r.a.createElement("td", {
                        className: "width-thin"
                    }, r.a.createElement("b", null, "Lawful")), r.a.createElement("td", {
                        hidden: !0
                    }, ":  "), r.a.createElement("td", {
                        className: "alignment-number"
                    }, Math.max(0, e.alignment.lawful))), r.a.createElement("tr", {
                        hidden: !0
                    }, r.a.createElement("td", null, "#")), r.a.createElement("tr", null, r.a.createElement("td", {
                        className: "width-thin"
                    }, r.a.createElement("b", null, "Neutral")), r.a.createElement("td", {
                        hidden: !0
                    }, ": "), r.a.createElement("td", {
                        className: "alignment-number"
                    }, Math.max(0, e.alignment.moralneutral)), r.a.createElement("td", {
                        hidden: !0
                    }, "  "), r.a.createElement("td", {
                        className: "width-thin"
                    }, r.a.createElement("b", null, "Neutral")), r.a.createElement("td", {
                        hidden: !0
                    }, ": "), r.a.createElement("td", {
                        className: "alignment-number"
                    }, Math.max(0, e.alignment.ethicalneutral))), r.a.createElement("tr", {
                        hidden: !0
                    }, r.a.createElement("td", null, "#")), r.a.createElement("tr", null, r.a.createElement("td", {
                        className: "width-thin"
                    }, r.a.createElement("b", null, "Evil")), r.a.createElement("td", {
                        hidden: !0
                    }, ":    "), r.a.createElement("td", {
                        className: "alignment-number"
                    }, Math.max(0, e.alignment.evil)), r.a.createElement("td", {
                        hidden: !0
                    }, "  "), r.a.createElement("td", {
                        className: "width-thin"
                    }, r.a.createElement("b", null, "Chaotic")), r.a.createElement("td", {
                        hidden: !0
                    }, ": "), r.a.createElement("td", {
                        className: "alignment-number"
                    }, Math.max(0, e.alignment.chaotic))))))))), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement(h.a, null, r.a.createElement(c.a, {
                        xs: 12
                    }, r.a.createElement(y.a, {
                        className: "align-center"
                    }, r.a.createElement(y.a.Heading, null, "Plot Hook"), r.a.createElement(y.a.Body, null, r.a.createElement("p", {
                        hidden: !0
                    }, "#"), e.hook.description, r.a.createElement("p", {
                        hidden: !0
                    }, "#"), r.a.createElement("p", {
                        hidden: !0
                    }, "#"))))))
                }
            }]), a
        }(o.Component),
        oe = n(41);
    function re(e) {
        return "number" === typeof e ? 0 | e : null
    }
    function ie() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = e.race,
            n = e.subrace,
            o = e.classorprof,
            r = e.occupation1,
            i = e.occupation2,
            t = e.alignment,
            s = e.plothook,
            $ = e.gender,
            m = {
                race: re(a),
                subrace: re(n),
                classorprof: re(o),
                occupation1: re(r),
                occupation2: re(i),
                alignment: re(t),
                plothook: re(s),
                gender: re($)
            },
            w = {
                vars: {}
            },
            v = {
                o: "root",
                childs: []
            };
        function l(e) {
            var a = "",
                n = !0,
                o = !1,
                r = void 0;
            try {
                for (var i, t = e[Symbol.iterator](); !(n = (i = t.next()).done); n = !0) {
                    var s = i.value;
                    if ("string" === typeof s)
                        v.childs.push(s), a += String(s);
                    else {
                        var $ = v;
                        if (B) {
                            var u = {
                                o: s.original,
                                childs: []
                            };
                            v.childs.push(u), v = u
                        }
                        if ("function" === typeof s) {
                            var h = s(w, m);
                            void 0 !== h && (Array.isArray(h) ? a += String(l(h)) : a += String(h))
                        } else
                            Array.isArray(s) && (a += String(l(s)));
                        v = $
                    }
                }
            } catch (c) {
                o = !0, r = c
            } finally {
                try {
                    n || null == t.return || t.return()
                } finally {
                    if (o)
                        throw r
                }
            }
            return a
        }
        return l(M(oe.options.initialisation)), {
            npc: function e(a) {
                if ("string" === typeof a)
                    return l(M(a));
                if (Array.isArray(a))
                    return e(function(e) {
                        var a = e.reduce(function(e, a) {
                            return e + (0 | a.w)
                        }, 0);
                        return z(e, a)
                    }(a));
                for (var n = {}, o = Object.keys(a), r = 0; r < o.length; r++) {
                    var i = o[r],
                        t = a[i];
                    n[i] = e(t)
                }
                return n
            }(oe.output),
            debugNode: v
        }
    }
    function te(e) {
        if (e) {
            var a = 0,
                n = [],
                o = function() {
                    return " ".repeat(a)
                };
            !function e(r) {
                if ("string" === typeof r)
                    n.push(o() + "-> ".concat(r));
                else {
                    n.push(o() + "-> ".concat(r.o)), a++;
                    var i = !0,
                        t = !1,
                        s = void 0;
                    try {
                        for (var $, m = r.childs[Symbol.iterator](); !(i = ($ = m.next()).done); i = !0)
                            e($.value)
                    } catch (w) {
                        t = !0, s = w
                    } finally {
                        try {
                            i || null == m.return || m.return()
                        } finally {
                            if (t)
                                throw s
                        }
                    }
                    a--
                }
            }(e), console.log(n.join("\n"))
        }
    }
    n(395);
    var se = function(e) {
            function a(e) {
                var n;
                Object(s.a)(this, a), n = Object(m.a)(this, Object(w.a)(a).call(this, e));
                var o = ie({}),
                    r = o.npc;
                return te(o.debugNode), n.state = {
                    npc: r
                }, n.generateNpc = n.generateNpc.bind(Object(u.a)(Object(u.a)(n))), n
            }
            return Object(v.a)(a, e), Object($.a)(a, [{
                key: "generateNpc",
                value: function(e) {
                    var a = ie(e),
                        n = a.npc;
                    te(a.debugNode), this.setState({
                        npc: n
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return r.a.createElement("div", null, r.a.createElement(h.a, null, r.a.createElement(c.a, {
                        xs: 12,
                        xsOffset: 0,
                        sm: 4,
                        smOffset: 0,
                        md: 3,
                        mdOffset: 0,
                        className: "user-info-col top-padding options-panel"
                    }, r.a.createElement("div", null, r.a.createElement("div", {
                        className: "title-image"
                    })), r.a.createElement(ee, {
                        npc: this.state.npc,
                        generate: this.generateNpc
                    })), r.a.createElement(c.a, {
                        xs: 12,
                        xsOffset: 0,
                        sm: 7,
                        smOffset: 0,
                        md: 9,
                        mdOffset: 0,
                        className: "top-padding"
                    }, r.a.createElement(ne, {
                        npc: this.state.npc
                    }), r.a.createElement(k, null))))
                }
            }]), a
        }(o.Component),
        $e = (n(397), function(e) {
            function a() {
                return Object(s.a)(this, a), Object(m.a)(this, Object(w.a)(a).apply(this, arguments))
            }
            return Object(v.a)(a, e), Object($.a)(a, [{
                key: "render",
                value: function() {
                    return r.a.createElement(l.a, null, r.a.createElement(se, null))
                }
            }]), a
        }(o.Component));
    t.a.render(r.a.createElement($e, null), document.getElementById("root"))
}]), [[60, 2, 1]]]);
//# sourceMappingURL=main.57fbdc80.chunk.js.map
