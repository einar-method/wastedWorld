const wwWeaponsArr = [
    "Ammo",
    "Assault Rifle (Lg)",
    "Bow (Lg)",
    "Crossbow (Lg)",
    "Flash Bang Grenade (Sm)",
    "Grenade (Sm)",
    "Melee Weapon",
    "Molotov (Sm)",
    "Pipebomb (Sm)",
    "Pistol",
    "Rifle (Lg)",
    "Shotgun (Lg)",
    "SMG",
    "Smoke Grenade (Sm)"
];

const moddedWeaponsArray = [
    "Rocket Launcher with 1 Rocket",
    "Burner with 1 Fuel Canister",
    "Grappler Gun with 1 Pressure Canister",
    "Nailer Gun with Pressure Canister/1 day ammo (1 supply)"
];

const moddedMeleeArr = [
    "Electrified",
    "Spiked",
    "Whirring",
    "Weighted"
]


const specialAmmoArray = [
    "Pressure Canister",
    "Pressure Canister",
    "Burner Fuel Canister",
    `${getRndInt(1, 3)} Rocket${getRndInt(1, 3) === 1 ? "" : "s"}`
];

const vehicleAccessoriesArray = [
    "Camo Tarp",
    "Ornament (players choice)",
    `${getRndInt(1, 3)} Boom Spear${getRndInt(1, 3) === 1 ? "" : "s"}`,
    "Guzzaline Cans",
    "Trailer",
    "Steering Wheel Lock Bar"
];

const standardHoldGear = [
    "Backpack",
    "Junk Armor",
    "Shield",
    "Supplies",
    "Jar",
    "Rope"
]

const wwGearArr = [
    "Backpack",
    "Binoculars",
    "Daily Ration",
    "Ducktape (Sm)",
    "Filtered Canteen",
    "Filtered Mask (Sm)",
    "Flashlight (Sm)",
    "Folding Shovel (Lg)",
    "Goggles (Sm)",
    "Grappling Hook",
    "Handcuffs (Sm)",
    "Hooch (Sm)",
    "Jar (Sm)",
    "Jimmy Bar",
    "Junk Armor (Armor Slot)",
    "Junk Shield (Shield Slot)",
    "Kreemy Kake (Sm)",
    "Portable Mess Kit",
    "Rope (Lg)",
    "Small Fire Extinguisher",
    "Tap Torch (Tapper)",
    "Tarp Cloak",
    "Universal Pocket Knife (Sm)",
    "Wonderslab (Sm)"
];

const drugsArray = [
    "Therataine (Insta-Heal)",
    "Kinonorphine (Pain-Away)",
    "SimFlesh Pack",
    "Halcitane (Buff)",
    "Ecpromal (Pure)",
    "Specuran (Cure-All)",
    "Zevatonin (Flush)",
    "Retroban (Happy)",
    "Predigrel (Purge)",
    "Med Kit"
];

const meleeWeaponMods = [
    "Electrified (Lg) - Stuns target on crit",
    "Spiked (Lg) - Inflicts 2 strikes on first crit",
    "Weighted (Lg) - Causes target to fall prone on crit",
    "Whirring Blades (Lg) - Counterstrike on attacker rolling 1"
];

const speacialWeaponMods = [
    "Burner (Lg) - Sprays chemical fire, sets targets alight",
    "Burner Fuel Canister (Sm) - Ammo for Burner, lasts 1 scene",
    "Grappler Gun (Lg) - Fires barbed hook, can pull targets",
    "Nailer Gun (Lg) - Fires large nails, can pin targets",
    "Nailer Ammo - Ammo for Nailer Gun, counts as supply",
    "Pressure Canister (Sm) - Pressure for Nailer/Grappler, lasts a day",
    "Rocket Launcher (Lg) - Fires HE rockets, 4 strikes on hit",
    "Rockets (Sm) - Ammo for Rocket Launcher"
];

const vehicleModificationsArray = [
    "Reinforced Frame - Boon to Last Ditch Save (LDS)",
    "Welded Armor - Reroll failed Structure Save once per round",
    "Juiced - Outrun vehicles in same/lower class",
    "Tire Grips - Boon to Maneuver Rolls",
    "Spiked Body - Strike grapplers on a 4+",
    "Heavy Machine Gun Mount - 2 strikes, crits on 5+",
    "Reinforced Ram - Reroll one rammage die",
    "Powered Winch - 100 ft metal cable for pulling",
    "Smokescreen - Bane to pursuers for 1 round",
    "Killjacks - Deploy caltrops, forces MvR 6",
    "Rigged to Blow - Vehicle detonates if tampered with",
    "Hellfire Roaster - Sets pursuers on fire",
    "Boom Spear - Explosive lance, 2 strikes on hit",
    "Trailer - Adds cargo, bane to maneuvers",
    "Steering Wheel Lock Bar - Prevents vehicle theft"
];

const highTechLootArray = [
    "Accelerator Ammo (for Mag Rail Rifle)",
    "Aegis Armor",
    "Amphetanazol (Jump-Start)",
    "Beamer (Lg)",
    "Blastgun (Lg)",
    "Tracker Ammo (for Smartgun)",
    "Earbud Coms (Sm)",
    "EMP Grenade (Sm)",
    "Energized Melee Weapon (Lg)",
    "Extermination Grenade (Sm)",
    "Full Spectrum Wristband (Sm)",
    "Fusion Core (Sm)",
    "Havoc Grenade (Sm)",
    "Mag Rail Ammo (Sm)",
    "Mag Rail Rifle (Lg)",
    "Military-Grade Gas Mask",
    "Newton Gun (Lg)",
    "Night Vision Goggles",
    "Plasma Cutter",
    "Pulse Rifle (Lg)",
    "Scouting Drone",
    "Skiensuit",
    "Smart Gun",
    "Smart Gun Tracker Ammo Pack (Sm)",
    "Stasis Gun (Lg)"
];

const crystallizedMiasmaArray = [
    "Back from the Brink",
    "Beacon",
    "Conjure Car",
    "Demon Weld",
    "Doppelganger",
    "Ghost in the Machine",
    "Levitate",
    "Luck Candy",
    "Miasmic Whammy",
    "Mind Ripper",
    "Psychic Armor",
    "Psychic Boom",
    "Psychic Spore",
    "Psychic Tentacle",
    "The Silence",
    "Third Eye",
    "Time Jacker",
    "Warp",
    "Wisp"
];

const miasmagenicGraftsArray = [
    "Bonesword",
    "Clawed Feet",
    "Eyestalk",
    "Gliding Membranes",
    "Lasher",
    "Lil' Bro or Sis",
    "Living Hair",
    "Oversized Fangs",
    "Stinger",
    "Suckers"
];

const synthEnhancementsArray = [
    "Ballistic Skin",
    "Booming Voice",
    "Cerebral Input Module",
    "Cellular Transfer",
    "Face Off",
    "Full Spectrum Senses",
    "Laser Vision",
    "Lightbender",
    "Radio Head"
];

const vehicleAccessories = [
    { name: "Camo Tarp", description: "Provides concealment for the vehicle." },
    { name: "Ornament", description: "Player's choice of decorative ornament for the vehicle." },
    { name: "Boom Spear", description: "Explosive spear attached to the vehicle. Inflicts 1D3 strikes on impact." },
    { name: "Guzzaline Cans", description: "Extra fuel for long journeys or emergencies." },
    { name: "Trailer", description: "Adds cargo capacity but may reduce maneuverability." },
    { name: "Steering Wheel Lock", description: "Prevents unauthorized use or theft of the vehicle." }
];

const survivorTalentsArray = [
    "Acrobatic",
    "Animal Empathy",
    "Athletic",
    "Big Guns",
    "Catlike",
    "Comfortably Numb",
    "Cyborg",
    "Damn Lucky",
    "Danger Sense",
    "Dealfinder",
    "Hardy Constitution",
    "Jacker",
    "Klepto",
    "Leadership",
    "Leadfoot",
    "Lucky Bastard",
    "Marksman",
    "Medic",
    "Miasma Psyphon",
    "Mysteries of the Fall",
    "Nullbrain",
    "Packrat",
    "Paranoid",
    "Psychic Node",
    "Quicksilver",
    "Regenerative Gutwurm",
    "Rider",
    "Shield Master",
    "Silent Killer",
    "Skirmisher",
    "Slippery",
    "Stalker",
    "Swirling Attack",
    "Tough Sumbitch",
    "Trap Breaker",
    "Traveling Sharpshooter",
    "Unexpected Side Effect",
    "Yakky"
];

const physicalMutationsArray = [
    "Echolocation",
    "Hardened Scales",
    "Hump",
    "Leaping",
    "Prehensile Tail",
    "Tusks or Horns",
    "Retractable Claws",
    "Rubbery",
    "Spines",
    "Sticky Spittle"
];

const mentalMutationsArray = [
  "Befuddle",
  "Brain Sift",
  "ESP",
  "Feedback",
  "Jaunt",
  "Lifetaker",
  "Mind Force",
  "Precog",
  "Shimmer",
  "Telepathy"
];

const dnaModsArray = [
    "Advanced Tastebuds",
    "Flexible Skeleton",
    "Gel Excretion",
    "Heightened Senses",
    "Idyllic Memories",
    "Modified Kidneys",
    "Nictitating Membrane",
    "Oily Excretion",
    "Sleepless",
    "Slowed Metabolism"
];

const bioSynthPackagesArray = [
    "Cerebral Uplink",
    "Hidden Compartment",
    "Language Module",
    "Luminous Eyes",
    "Milk Blood",
    "NuFlesh",
    "Overdrive",
    "Recharge Ports",
    "Shielded Innards",
    "Spectra Vision"
];

const survivorAspectsArray = [
    // Aspects 1
    "Hard drinker", "Great singing voice", "Found a scrap haul",
    "Lousy Gambler", "Visionary", "Lucky in Love",
    "Wanted", "Gunslinger", "Exterminator",
    "Road hog", "Eclectic clothing", "Ew! Skin growths",
    "Unemotional", "Vigilante", "Oddity collector",
    "Dowser", "Saw too much", "Galahad",
    "Distinct body odor", "Botanist",

    // Aspects 2
    "Seeking siblings", "Scientist", "Grifter",
    "Geologist", "Tidy", "Arsonist",
    "Junkie", "Odd eyes, hair, skin", "Playful",
    "Gun nut", "Light sleeper", "Comedian",
    "Socially invisible", "Psychologist", "Outrageous hairdo",
    "Coward", "Can’t keep a secret", "Cool cat",
    "Awoke from a pod", "Optimist",

    // Aspects 3
    "Orphaned", "Geometry expert", "Strong stomach",
    "Sucker for sob story", "Hollow legs", "Pessimist",
    "Nosey Parker", "Restorationist", "Mentor",
    "Beast Hunter", "Vintage movie buff", "Kiss n’ Tell",
    "Risk taker", "Never your fault", "Gearhead Prophet",
    "Tech seeker", "A hugger", "Clear-headed",
    "Lost Tribesman", "End is nigh type"
];

const wwWealth = [
    "Skint",  // Can barely afford supplies (3 per week), cannot afford gear.
    "Hard-up",  // Up to 6 supplies per week, can buy one cobbled weapon at a Hold.
    "Stiff",  // Up to 10 supplies per week, can buy up to 3 items including benchmark weapons.
    "Shiny",  // Unlimited supplies, can buy any gear at a Hold including modified weapons.
    "Chrome",  // Can afford anything for sale including vehicles and upgrades, may have underlings.
    "Loaded"  // Can buy anything, holds are well-defended, a VIP in the wasteland.
];

const firstNames = [
    "Ash", "Blix", "Crow", "Dell", "Flint", "Gage", "Haze", "Jett", "Kade", "Lux",
    "Nova", "Pax", "Quin", "Rain", "Sage", "Thorn", "Vale", "Wren", "Zane", "Echo",
    "Rook", "Onyx", "Storm", "River", "Shadow", "Skye", "Blaze", "Ember", "Rogue", "Zephyr",
    "Rune", "Axel", "Drift", "Rift", "Jinx", "Nox", "Slate", "Tyne", "Cobra", "Lynx",
    "Pyre", "Cipher", "Arc", "Sable", "Clove", "Ghost", "Strix", "Tarn", "Hawk", "Bolt",
    "Flint", "Kestrel", "Raven", "Scorn", "Raze", "Fang", "Kite", "Knox", "Cyan", "Gale",
    "Dire", "Tempest", "Moth", "Vex", "Drift", "Wolf", "Tusk", "Fox", "Glitch", "Scythe",
    "Vail", "Thrash", "Shard", "Zenith", "Coil", "Flintlock", "Titan", "Arcane", "Spade", "Rift",
    "Saber", "Reeve", "Corsair", "Grell", "Jag", "Torque", "Reck", "Varn", "Hallow", "Stryx",
    "Frost", "Latch", "Iron", "Dagger", "Smog", "Sol", "Crag", "Brim", "Drift", "Shade"
];

const lastNames = [
    // "Bloodfang", "Ironclad", "Rustbane", "Gloomspire", "Ashthorn", "Steelgrim", "Deadlock", "Blazebane", "Crowhammer", "Grimveil",
    // "Skullgrin", "Frostfang", "Blackthorn", "Vulture", "Shardspire", "Deathclutch", "Wraithbone", "Gravelock", "Stormgale", "Nightfall",
    // "Crimson", "Driftbane", "Duskcaller", "Gloomfang", "Scorchveil", "Blighthorn", "Voidspire", "Dustreaver", "Pyreblade", "Grimjaw",
    // "Howlgrave", "Cinderdust", "Mournfall", "Havocshade", "Ironfang", "Deadspire", "Stormcloak", "Ravenskull", "Wildflare", "Bonegrit",
    // "Darkshard", "Fangsteel", "Ironwraith", "Shadowmoor", "Rumblethorn", "Stormscar", "Hellsong", "Doomveil", "Rustfang", "Blightbone",
    // "Hollowfang", "Rivetlock", "Grindstone", "Warpclaw", "Crackstone", "Scorchmark", "Grimshade", "Bloodthorn", "Stonefang", "Warpgrin",
    // "Knuckleflare", "Fleshrust", "Ironcoil", "Ragetooth", "Thundertusk", "Scarspire", "Gnashclaw", "Frostbite", "Shadowclaw", "Skullveil",
    // "Venomshade", "Blazetongue", "Deadmaul", "Thunderbane", "Scarjaw", "Nightreaver", "Stormspike", "Hateforge", "Deathspire", "Firethorn",
    // "Grudgeveil", "Rustjaw", "Ironbrand", "Coldfang", "Blighthammer", "Tearspine", "Hallowfang", "Crimsonlock", "Fangsorrow", "Voidbrand",
    // "Shatterskull", "Ruinspire", "Gravetide", "Steelthorn", "Darkjaw", "Frostveil", "Scarbrand", "Baneclaw", "Nightsnarl", "Wildfang",
    // "Dreadlock", "Ashclaw", "Knucklespike", "Razorbone", "Mourngrip", "Shadefang",

    //expanded
    "Rivet", "Smokes", "Grind", "Burns", "Slag", "Ruin", "Havoc", "Wreck", "Flicker", "Drift",
    "Throttle", "Tremor", "Scrap", "Snarl", "Ashes", "Blight", "Rust", "Vex", "Scar", "Grime",
    "Crank", "Gore", "Hollow", "Spike", "Scorch", "Flint", "Razor", "Grit", "Crash", "Blaze",
    "Taint", "Howl", "Mangle", "Blister", "Glitch", "Fangs", "Furnace", "Cinder", "Dredge", "Spill",
    "Grinder", "Warp", "Frost", "Rattle", "Tear", "Vandal", "Taint", "Stain", "Sludge", "Flare",
    "Rustbelt", "Flick", "Tomb", "Splinter", "Ragged", "Murk", "Rot", "Husk", "Splint", "Crush",
    "Soot", "Snag", "Grinder", "Vice", "Scorn", "Torn", "Piston", "Torque", "Purge", "Blaze",
    "Kerosene", "Diesel", "Clash", "Knox", "Scrag", "Twist", "Rend", "Slash", "Crater", "Singe",
    "Bolt", "Fissure", "Smoulder", "Tusk", "Rivet", "Lash", "Dust", "Fray", "Rake", "Mourn",
    "Sledge", "Vile", "Shatter", "Brim", "Grave", "Dagger", "Fume", "Gnash", "Wrack", "Spit",
    "Rotgut", "Fever", "Gasp", "Shrike", "Fuse", "Void"
];

const nickNames = [
    "Slagjaw", "Rustback", "Blazegrin", "Deadeye", "Meatfist", "Gritknuckle", "Bonegrinder", "Scorchmouth", "Fangrot", "Ironbelly",
    "Spiketongue", "Braketooth", "Bloodslick", "Sootfang", "Rivetjaw", "Skidburn", "Ashknuckle", "Grimebeard", "Venomkiss", "Chainsmoke",
    "Skullcracker", "Flintlock", "Firegut", "Scraplord", "Burntface", "Razorfang", "Rusthowl", "Throttle", "Warpjaw", "Shredder",
    "Sootfang", "Nailbiter", "Treadscar", "Crashbone", "Blacklung", "Scrapfang", "Fuelrat", "Furnace", "Gunmouth", "Scabgrin",
    "Torque", "Grimehound", "Wreckshot", "Burnscar", "Madspike", "Pistonfist", "Gravedigger", "Hellspike", "Buzzsaw", "Flarefang",
    "Knuckles", "Wreckjaw", "Twitchblade", "Axelburn", "Blister", "Wraithknuckle", "Tankspike", "Guzzle", "Hammerlung", "Scorchshield",
    "Deadbolt", "Frostspit", "Crankshaft", "Jackknife", "Rustveil", "Blitzfang", "Fangwreck", "Sledge", "Dirtfang", "Grimeface",
    "Scarclaw", "Ironwretch", "Boltclaw", "Bloodwrench", "Skullgrit", "Rotblade", "Throttleburn", "Grimeclaw", "Chokesmoke", "Steelbite",
    "Burnpatch", "Gorehound", "Ashdrift", "Scornclaw", "Scrapmouth", "Blowtorch", "Spikevein", "Deadknuckle", "Meltfang", "Shank",
    "Flamegut", "Ragetooth", "Treadburn", "Scorchbrand", "Buzzfang", "Rusthammer", "Blazejaw", "Driftbone", "Smokestack", "Twitchclaw",
    "Scrapgut", "Blastface", "Throttlefreak", "Daggerjaw", "Treads", "Wrecktide", "Gunfang", "Scorchjaw", "Burnblade", "Mudspike"
];

const gangs = [
    "Da Hawks - Vehicle Specialists / An insane swarm of cars, buggies and bikes that moves across the wasteland in search of guzzaline.",
    "Kruger’s Cutters - Melee Specialists / An intimidating group of spike-bat types with sadistic urges and too many drugs.",
    "Halloweeners - Melee Specialists / Tough nomads in cartoony masks, all of ‘em huffing model glue.",
    "Throttlers - Nimble / Relentless acrobats who steal everything.",
    "Ruin Runners - Stealthy / Trapper types who boobytrap the wild lands to catch vehicles and take loot.",
    "Cereal Killers - Aerobic / Paranoid sprinters in black rubber suits.",
    "Warheads - Tactical / Bullying gangs in camo gear who mean business... always moving in formation, armored up.",
    "Murder Queens - Hypnotic / A flamboyant gaggle of tough-skinned fist fighters with big eyelashes. It’s all fun for them!",
    "Gunny Lads - Ranged Specialists / These well-funded and equipped gangers are usually working for a boss somewhere.",
    "Spooky Sons - Poisoners / No one knows how many of these poison-happy freaks are out there... they all wear the same ghost costume, and never say much.",
    "Feral Funksters - Tamers / A group of weirdos that use noxious gas to catch, control, train and ‘process’ wildlife. They keep pets, they wear pelts, they have crocodile belts.",
    "Capsule Kings - Pushers / A tattoo-based gang of drug dealers who want to rule the world, one nitro-head at a time. Real jerks."
];

const dudesArray = [
    "Deckard, a shadowy figure",
    "Vic, a guy with yellow hair",
    "Zed, crazy gun collector",
    "Max, tough-as-nails, eyepatch",
    "Damon, an innocent kid",
    "Gunny, rabbit ears hat",
    "Ace, big jaw, Mr. Wholesome",
    "Pops, bearded mechanic",
    "Radon, bugged-out and skinny",
    "Deacon, well-dressed scholar",
    "Guy, average dude in khakis",
    "Finn, kid in a motorcycle jacket",
    "Doc, kind grandpa with dreds",
    "Scraps, blue & orange android",
    "Lazarus, creepy, pale lurker",
    "Chet, always eating chips",
    "Redeye, cyborg, no humor",
    "Logan, good-looking hero",
    "Syd, camo trench coat",
    "Elvis, he’s still alive"
];

const ladiesArray = [
    "Zoe, a kind young woman",
    "Swan, badass sniper",
    "Scarlet, cape, big hair",
    "Lizzie, crazy eyes, tiny",
    "Eva, old, cute, rocking chair",
    "Dana, best chef out there",
    "Cherry, leather, grenades",
    "Alice, an odd girl in a dress",
    "Dottie, android with pigtails",
    "Ellie, hayseed type, blonde",
    "Jackie, mop, jiu jitsu",
    "Sue, nutty purple mohawk",
    "Cinder, a cruel bomb expert",
    "Mary, mayor of Marysville",
    "Foxy, mutie ninja type",
    "Bertha, impatient, mechanic",
    "Vena, a psychic weird",
    "Lucky, cowgirl pistolero",
    "Hope, corny, big eyes",
    "Trish, everyone’s mom"
];

const holdNamesOne = [
    "Radiant",
    "Dustfall",
    "Echo",
    "Ashen",
    "Nomad’s",
    "Echoing",
    "Phoenix",
    "New Dawn",
    "Remnant",
    "Twilight",
    "Horizon",
    "Jughead"
];
const holdNamesTwo = [
    "Haven",
    "Junction",
    "Refuge",
    "Hollow",
    "Outpost",
    "Crossroads",
    "Enclave",
    "Reach",
    "Springs",
    "Citadel",
    "Keep",
    "Gulch"
];

const bumpInto = [
    "A beloved cousin you haven’t seen in ages. They’ve been in hiding, looking for anyone who might help their desperate cause.",
    "A wastelander merchant in a cobbled goods truck. They’ll pay any jugger for work, but for you?",
    "A shadowy stranger, approaching in a trench and low-brimmed hat. They claim to come from the future.",
    "A hyperactive ganger with a pink duhawk. They believe your group is the heroes foretold.",
    "A humble local, a bit paranoid, who lives nearby. They insist the mission is crucial.",
    "A settlement boss stuck in a desperate position. They request a meeting at the salt flats with a detonator in hand.",
    "A mutant nomad, huge and deformed, with a gleam in one bulging eye and a smell of toxic waste. They warn of a similar fate without assistance.",
    "An android with too much information. They predict an unstable and deadly situation within four days.",
    "A mind-controlling weird emerging from dimensional miasma, eyes wide with prophecy and madness.",
    "A local hero, beloved by all. They approach your group discreetly, wary of onlookers."
];

const missions = [
    "Investigate strange goings-on with the target and report back.",
    "Deliver this critical bit o’ loot here... in one piece!",
    "Protect our asset at all costs! No touchin’, no screw-ups!",
    "Acquire the target by any means necessary.",
    "This here’s a rescue op, got me? Get in, get out, no bleedin’.",
    "This mission is a simple sweep and clear... blast ‘em all!",
    "It’s ugly work, but there’s just one kill we need.",
    "You’re not going to like it, but this is an escort mission. Point A to point B, not a scratch on the asset, copy?"
];

const targets = [
    "Very special scrap. Ok, more like space-junk. Some kind of techno doo-dad, but all wrecked. Look for shiny objects.",
    "Livestock. Yes, livestock. These are no ordinary goats, mind you, these are save-the-world goats... or close to it.",
    "Target here is knowledge, boyos. Could be a book, a flappy disc, or an old guy who knows stuff about the Beforetimes.",
    "We need a very specific piece of info, juggers. That little tidbit is your target.",
    "Asset here is heavy metal, ya follow? Weapons! Not clear exactly what we’re dealing with, but probably the nasty kind. Don’t blow yourselves up.",
    "It ain’t pretty, but the target here is drugs, plain and simple. This particular parcel is no ordinary nitro. Look for the green bottles.",
    "Some brainiac dreamed up a new kinda weaponry that gonna change this whole place. Our target on this little forray? Them schematics there, all tidy and easy readin’.",
    "It’s a blueprint. For a tank. But the tank is actually a boat. Well, more like a plane with wheels. Yeah, it hovers. And spins. See...",
    "We’ve got our sights on wheels, jug heads. The hottest ponies in the wasteland. These nitros gonna flip your little neuro net!",
    "No fooling around this time, team. Our target is a miracle cure. At least, that’s what it’s hyped up to be, and not much of it. Game faces and frosty triggers, you dig?"
];

const destinations = [
    "The old ruins by the boulder field... look for leaning pillars and a huge ice cream sign.",
    "A nearby hold. Not many settlements way out here, you can’t miss it... fortified walls, spotlights, guys with guns.",
    "This subterranean base we keep hearing about. Look for an all-but-invisible steel hatch somewhere in the sand. Easy!",
    "The factory out near the hills. Place is abandoned, or used to be, heavy equipment everywhere, and leaning like a skeev’d jug head.",
    "That old trailer park! It’s gonna be a grand old time.",
    "The airfield. All wrecks now, and ghosts in leather caps. Terrible place, but good tarmac.",
    "The crater! You can’t miss it: huge hole in the ground, smoke everywhere, lizard noises. Just be careful climbing down.",
    "Crossroads trading post. Few days out from here. Lonely place. Watch your back with those skeevers, ya follow me?",
    "A distant hold... way out on the frontier. Don’t miss it, or you’ll be out in the nuke zone. Nothin’ but miasma and skellies out there... the dead lands, man.",
    "An isolated farmstead in the grasslands. No, there’s no grass.",
    "A rugged little bar in the middle of nowhere.",
    "A remote cabin. It doesn’t look like much, but there’s a whole spread of tunnels and rooms below.",
    "The wrecked diner in the desert. Just look for the huge plastic burger in the dunes.",
    "A kind of fortress, up in the rocks. Did I mention the land mines?",
    "The last mall on Earth.",
    "A guzzaline depot a few clicks from here. Still got juice, too!",
    "Fort Kragg, the joint-military base everyone is mumbling about.",
    "A shanty town way out in the wasteland... pile of sheet metal.",
    "The meat packing plant. I knew you wouldn’t like that much, but that’s your destination. Be sure to bring a gas mask, jugger.",
    "The big power station over that way. It’s surrounded with zapper fences, razor wire to kingdom come, and a whole mess of other defenses and pointy things, so pack a few band-aids."
];

const traps = [
    {
        name: "Ballistic Trap",
        outcomes: [
            "Spring loaded melee attack hits on a 4+",
            "Rigged shotgun hits on 3+ and crits with 2D6",
            "Blast hits all in near range at 4+ for 1D3 strikes; also stuns hit targets for a round"
        ]
    },
    {
        name: "Pit Trap",
        outcomes: [
            "Falling damage and prone",
            "Falling damage and take a melee strike from spikes on 3+",
            "Falling damage and chance of disease (roll Avoidance Save vs contagion)"
        ]
    },
    {
        name: "Gas",
        outcomes: [
            "Avoidance Save or pass out for an hour; bane on rolls until gas wears off",
            "Avoidance Save or continue to take strikes until dead",
            "Avoidance Save or cobbled weapons and junk armor become useless"
        ]
    },
    {
        name: "Wreckage",
        outcomes: [
            "Avoidance Save or all in near range take a strike",
            "Avoidance Save or all in near range take 1D3 strikes",
            "Sure Death Save or die"
        ]
    },
    {
        name: "Energy Trap",
        outcomes: [
            "Avoidance Save or stunned for a turn",
            "Take a strike and roll Avoidance Save or catch fire",
            "Works like an EMP Grenade"
        ]
    },
    {
        name: "Contamination",
        outcomes: [
            "Avoidance Save at day end or take 1 contamination",
            "Avoidance Save at day end or take 1 contamination and a strike not healed by rest",
            "Avoidance Save at day end or take 2 contamination and 2 strikes not healed by rest"
        ]
    }
];

const contendArr = [
    "Gangers! These aren’t a normal batch of punks. Stunners, poison-heads, trappers, sharpshooters, acrobats... a nuthouse.",
    "A huge, hulking mutant.",
    "A Romero infestation.",
    "The warlord everyone is afraid to fight.",
    "A whole mess of huge, mutated plants.",
    "An army of glowing skeletons!",
    "A half-crazy Junkbot.",
    "An entire area of tremors, radioactivity, and booby traps.",
    "That dang cone cult! Hundreds of ‘em!",
    "Ravenous creatures... not sure what they are."
];




