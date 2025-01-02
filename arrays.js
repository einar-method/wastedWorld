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
    "Aegis Armor",
    "Amphetanazol (Jump-Start)",
    "Beamer (Lg)",
    "Blastgun (Lg)",
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
    "Bloodfang", "Ironclad", "Rustbane", "Gloomspire", "Ashthorn", "Steelgrim", "Deadlock", "Blazebane", "Crowhammer", "Grimveil",
    "Skullgrin", "Frostfang", "Blackthorn", "Vulture", "Shardspire", "Deathclutch", "Wraithbone", "Gravelock", "Stormgale", "Nightfall",
    "Crimson", "Driftbane", "Duskcaller", "Gloomfang", "Scorchveil", "Blighthorn", "Voidspire", "Dustreaver", "Pyreblade", "Grimjaw",
    "Howlgrave", "Cinderdust", "Mournfall", "Havocshade", "Ironfang", "Deadspire", "Stormcloak", "Ravenskull", "Wildflare", "Bonegrit",
    "Darkshard", "Fangsteel", "Ironwraith", "Shadowmoor", "Rumblethorn", "Stormscar", "Hellsong", "Doomveil", "Rustfang", "Blightbone",
    "Hollowfang", "Rivetlock", "Grindstone", "Warpclaw", "Crackstone", "Scorchmark", "Grimshade", "Bloodthorn", "Stonefang", "Warpgrin",
    "Knuckleflare", "Fleshrust", "Ironcoil", "Ragetooth", "Thundertusk", "Scarspire", "Gnashclaw", "Frostbite", "Shadowclaw", "Skullveil",
    "Venomshade", "Blazetongue", "Deadmaul", "Thunderbane", "Scarjaw", "Nightreaver", "Stormspike", "Hateforge", "Deathspire", "Firethorn",
    "Grudgeveil", "Rustjaw", "Ironbrand", "Coldfang", "Blighthammer", "Tearspine", "Hallowfang", "Crimsonlock", "Fangsorrow", "Voidbrand",
    "Shatterskull", "Ruinspire", "Gravetide", "Steelthorn", "Darkjaw", "Frostveil", "Scarbrand", "Baneclaw", "Nightsnarl", "Wildfang",
    "Dreadlock", "Ashclaw", "Knucklespike", "Razorbone", "Mourngrip", "Shadefang"
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