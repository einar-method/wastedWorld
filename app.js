/// BUTTON VARIABLES ///
const tabToggle = document.getElementById("tab-toggle");
const tabBtns = document.querySelectorAll('input[name="tool-toggle"]');
const diceModal = document.getElementById("dice-modal");

const defPathMsg = "Click 'Build' for a custom Path or 🎲 for a random one. Click 🗙 to start over.";

/// PC VARIABLES CALLED IN VARIOUS FUNCTIONS ///
const pcList = [];

function rollName(checker) {
    const first = randomMath(firstNames);
    const last = randomMath(lastNames);
    if (checker == 0) {
        return first + " " + last;
    } else { return { first, last, }; }
    
};

function getPath(checker, btn) {
    //selectBtn.firstElementChild.innerText = "Select a Path";
    app.getPath(checker, btn);
};

function clearPath() {
    app.resetToDefault();

    // document.getElementById("📝path").innerHTML = "";
    // document.getElementById("📝boons").innerHTML = "";
    // document.getElementById("📝features").innerHTML = "";
    // document.getElementById("📝strikes").innerHTML = "";
    // document.getElementById("📝armor").innerHTML = "";
    // document.getElementById("📝aSave").innerHTML = "";
    // document.getElementById("📝mSave").innerHTML = "";

    document.querySelectorAll(".inner__section").forEach( elm => {
        elm.classList.remove("active");
    });
    document.getElementById("incl-header").classList.remove("active");
    document.getElementById("talents-holder").classList.remove("active");
    document.getElementById("📝path").textContent = defPathMsg;
    console.log(pcList)
};

/// PC Reset ///
function reset() {
    //selectBtn.firstElementChild.innerText = "Select a Path";
    document.querySelectorAll('.🌠').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelectorAll(".green-box").forEach(function(el) {
        //console.log(el)
        el.innerHTML = "";
    });
    //document.getElementById("📝name").value = "";
    app.resetToDefault(); 
    //document.getElementById("circle").innerHTML = ""

    clearAll(); // some fields are just too stubborn
};

/// SWITCH BETWEEN TOOL TABS ///
tabToggle.onclick = () => {
    assignTab()
};

function checkToggle() {
    for (const radioButton of tabBtns) {
        if (radioButton.checked) {
          return radioButton.value;
        }
}}; // Finds which tab is toggled

function assignTab() {
    if (checkToggle() == "pc-tools") {
        document.getElementById("pc-tab").style.display = 'block';
        document.getElementById("rr-tab").style.display = 'none';
        document.getElementById("dice-tab").style.display = 'none';
    } else if (checkToggle() == "rr-tools") {
        document.getElementById("rr-tab").style.display = 'block';
        document.getElementById("pc-tab").style.display = 'none';
        document.getElementById("dice-tab").style.display = 'none';
    } else if (checkToggle() == "dice-tools") {
        document.getElementById("rr-tab").style.display = 'none';
        document.getElementById("pc-tab").style.display = 'none';
        document.getElementById("dice-tab").style.display = 'block';
    } else {
        alert("Sorry, there was an error getting a tab. Please refresh the page. ERROR CODE: 1409");
}};

assignTab();

///// MAIN CLASS AND SURVIVOR FUNCTIONS /////
class PC {
    constructor() {
        this.name = "";
        this.basics = "";
        this.story = "";
        this.style = "";
        this.core = "";
        this.description = "";
        //this.wealth = "";
        this.wealthTier = 0;
        this.path = "";
        this.circle = "";
        this.circleTxt = "";
        this.species = "";
        this.boons = [];
        this.banes = [];
        this.features = "";
        this.maxInclinations = 2;
        //this.inclinations = [];
        this.incTip = null;
        this.equipment = [];
        this.scrolls = [];
        this.potions = [];
        this.karma = "";
        this.strikes = "";
        this.armorType = "";
        this.armorSave = "";
        this.miracleSave = "";
        this.bodyType = "";
        this.bodyBuild = "";
        this.bodyHeight = "";
        this.bodyVoice = "";
        // original above
        //this.strikes = 3;
        //this.path = null;
        this.wealth = { name: "Hard-Up", value: 2 };
        this.sTalentsMin = 0;
        this.sTalentsMax = 0;
        this.physMutatationsMin = 0;
        this.physMutationsMax = 0;
        this.mentalMutationsMin = 0;
        this.mentalMutationsMax = 0;
        this.dnaModsMin = 0;
        this.dnaModsMax = 0;
        this.bioSynthMin = 0;
        this.bioSynthMax = 0;
        this.classIncl = [];
        this.inclinations = [];
        this.allIncl = [];
        this.aspects = [];
        this.avoidance = 6;
        this.miasmaResistance = "1D6";
        this.armor = { name: "Junk Armor", value: 5 };
        this.gear = [];
        this.possibleEdges = [];
        this.edges = [];
        this.survivorTalents = [
            { name: "Acrobatic", hasIt: false, id: 1, description: "Boon to precarious circumstances (like balancing on a ledge or staying on your feet in an earthquake)" },
            { name: "Animal Empathy", hasIt: false, id: 2, description: "Gain a boon to animal interactions. Animals gaze on you with favor unless met with hostility." },
            { name: "Athletic", hasIt: false, id: 3, description: "Boon to running, jumping, and climbing." },
            { name: "Big Guns", hasIt: false, id: 4, description: "Boon to strength tasks and breaking or initiating grapples." },
            { name: "Catlike", hasIt: false, id: 5, description: "Always land on your feet and 4+ to avoid any damage from a fall where you could reasonably slow yourself down." },
            { name: "Comfortably Numb", hasIt: false, id: 6, description: "Boon to resist mind control, madness, or fear." },
            { name: "Cyborg", hasIt: false, id: 7, description: "Choose a Type: Reinforced Arm, Cyber Eyes, Tracking Module, Reinforced Frame." },
            { name: "Damn Lucky", hasIt: false, id: 8, description: "Start each session with 6 karma instead of 3." },
            { name: "Danger Sense", hasIt: false, id: 9, description: "Can only be surprised on a roll of 1 and gain a boon to avoid sprung traps." },
            { name: "Dealfinder", hasIt: false, id: 10, description: "Roll 2 more dice for any gear table at a Hold or Trader. Get first dibs on extra items." },
            { name: "Hardy Constitution", hasIt: false, id: 11, description: "Boon to saves vs adverse environmental effects, contamination, poison, and contagion." },
            { name: "Jacker", hasIt: false, id: 12, description: "Boon to hack into tech or computers and save against tech booby traps." },
            { name: "Klepto", hasIt: false, id: 13, description: "Steal small objects unnoticed unless rolling a 1." },
            { name: "Leadership", hasIt: false, id: 14, description: "Can share karma with any teammate in sight." },
            { name: "Leadfoot", hasIt: false, id: 15, description: "Boon to driving vehicles and avoidance saves in a crash." },
            { name: "Lucky Bastard", hasIt: false, id: 16, description: "Boon to Avoidance Saves." },
            { name: "Marksman", hasIt: false, id: 17, description: "Boon to ranged attacks." },
            { name: "Medic", hasIt: false, id: 18, description: "Boon to medicine, and if you rush to help a downed Survivor, they will not die before you administer healing." },
            { name: "Miasma Psyphon", hasIt: false, id: 19, description: "Can use Crystallized Miasma to cast powers without being a Weird." },
            { name: "Mysteries of the Fall", hasIt: false, id: 20, description: "Boon to the knowledge of Wonderful World and understanding its tech." },
            { name: "Nullbrain", hasIt: false, id: 21, description: "Boon to resist Miasmic anomalies or psychic attacks." },
            { name: "Packrat", hasIt: false, id: 22, description: "Carry 3 more supplies, gain 3 more gear slots, and gain 2 free supplies when you spend time at a Hold." },
            { name: "Paranoid", hasIt: false, id: 23, description: "Boon to spot hidden enemies or dangers." },
            { name: "Psychic Node", hasIt: false, id: 24, description: "Gain one Mental Mutation, but the power fails on a 1-2 instead of a 1 on a Power Level roll, or on a 1 if no PL roll is needed (not applicable to Androids or Clones)." },
            { name: "Quicksilver", hasIt: false, id: 25, description: "Move away from melee without a contest. Boon to escape area effects." },
            { name: "Regenerative Gutwurm", hasIt: false, id: 26, description: "Heal a strike every hour on a 4+, or all strikes overnight. If killed, you become an egg sack." },
            { name: "Rider", hasIt: false, id: 27, description: "Boon to riding Dromdards. You can instantly mount/dismount." },
            { name: "Shield Master", hasIt: false, id: 28, description: "Roll shield saves with a boon. Deflect strikes on a near ally as a free action." },
            { name: "Silent Killer", hasIt: false, id: 29, description: "Your melee kills are noiseless and do not draw attention if you attack by surprise and are not observed." },
            { name: "Skirmisher", hasIt: false, id: 30, description: "Boon to melee combat." },
            { name: "Slippery", hasIt: false, id: 31, description: "Avoid unexpected dangers on 4+ (not melee or ranged attacks or Sure Death Saves)." },
            { name: "Stalker", hasIt: false, id: 32, description: "Boon to stealth. Cover counts as one rank higher for you (max 6)." },
            { name: "Swirling Attack", hasIt: false, id: 33, description: "Can attack all targets next to you in melee (roll each separately, and these attacks cannot crit)." },
            { name: "Tough Sumbitch", hasIt: false, id: 34, description: "If you take your last strike, you get an extra save of 4+ to ignore the strike and continue on." },
            { name: "Trap Breaker", hasIt: false, id: 35, description: "Boon to disable traps and gain a boon to Avoidance Saves vs traps." },
            { name: "Traveling Sharpshooter", hasIt: false, id: 36, description: "Negate the far-range bane from shooting out of a moving vehicle or on a mount, and gain an Armor bonus while on a mount or vehicle that is moving ‘at speed’ (see accelerated). So if you are wearing Junk Armor, your 5+ save becomes a 4+." },
            { name: "Unexpected Side Effect", hasIt: false, id: 37, description: "Gain one Physical Mutation tion (not applicable to Androids or Clones)." },
            { name: "Yakky", hasIt: false, id: 38, description: "Boon when talking your way past bad stuff or just making new friends. You can also extend bad-guy monologues to gain wiggle room." }
        ];
        this.physMutations = [
            {
                name: "Echolocation",
                hasIt: false,
                id: 1,
                description: "Move and fight in total darkness without penalty. Your senses guide you like sonar."
            },
            {
                name: "Hardened Scales",
                hasIt: false,
                id: 2,
                description: "Gain a one-step bonus to Armor Save. Stacks with Junk Armor or Shields but not Skiensuits or Aegis Armor."
            },
            {
                name: "Hump",
                hasIt: false,
                id: 3,
                description: "Store water and nutrients in your body, allowing you to hold your breath for up to 1 hour."
            },
            {
                name: "Leaping",
                hasIt: false,
                id: 4,
                description: "Leap 10 feet high from a standing position or 20 feet with a running start."
            },
            {
                name: "Prehensile Tail",
                hasIt: false,
                id: 5,
                description: "Use your tail to hold and manipulate objects, granting an additional free action and a boon to grappling."
            },
            {
                name: "Tusks or Horns",
                hasIt: false,
                id: 6,
                description: "Gain a secondary melee attack that hits on a 6. Can deal critical damage."
            },
            {
                name: "Retractable Claws",
                hasIt: false,
                id: 7,
                description: "Claws remain hidden until needed, granting a boon to climbing and grappling. Acts as natural weapons."
            },
            {
                name: "Rubbery",
                hasIt: false,
                id: 8,
                description: "Your flexible body avoids strikes on a 4+. Reduce explosive and falling damage by 1 strike."
            },
            {
                name: "Spines",
                hasIt: false,
                id: 9,
                description: "Any melee attacker takes 1 strike on a roll of 4+. Spines pierce foes who grapple you."
            },
            {
                name: "Sticky Spittle",
                hasIt: false,
                id: 10,
                description: "Once per scene, spit sticky goo at an enemy to blind them for 1 round on a 4+."
            }
        ];
        this.mentalMutations  = [
            {
                name: "Befuddle",
                hasIt: false,
                id: 1,
                description: "Confuse a target within sight for their next turn. They lose their action and are considered stunned for defense."
            },
            {
                name: "Brain Sift",
                hasIt: false,
                id: 2,
                description: "Scan surface thoughts of targets up to long range. On a Power Level roll of 6, perform a deep dive for hidden thoughts."
            },
            {
                name: "ESP",
                hasIt: false,
                id: 3,
                description: "Detect nearby psychers and miasmic phenomena. Grants a boon to resist miasmic effects for you and 5 allies."
            },
            {
                name: "Feedback",
                hasIt: false,
                id: 4,
                description: "Force an enemy psycher to reroll their Power Level die, potentially negating their effect. Usable once per scene."
            },
            {
                name: "Jaunt",
                hasIt: false,
                id: 5,
                description: "Teleport up to far range to any point within sight as your move action."
            },
            {
                name: "Lifetaker",
                hasIt: false,
                id: 6,
                description: "Drain 1 strike from a living target within near range and redistribute it to yourself or an ally. Requires multiple targets for higher gains."
            },
            {
                name: "Mind Force",
                hasIt: false,
                id: 7,
                description: "Hurl enemies or objects within near range. Inflict strikes or move targets violently."
            },
            {
                name: "Precog",
                hasIt: false,
                id: 8,
                description: "Avoid a strike and reflect it back to the attacker or another enemy within near range. Usable as a free action."
            },
            {
                name: "Shimmer",
                hasIt: false,
                id: 9,
                description: "Enemies require a 5+ to hit you while shimmering. Anchored effect; miasmic powers against you remain unaffected."
            },
            {
                name: "Telepathy",
                hasIt: false,
                id: 10,
                description: "Communicate mentally with any being within sight that understands language."
            }
        ];
        this.dnaMods = [
            {
                name: "Advanced Tastebuds",
                hasIt: false,
                id: 1,
                description: "Detect toxins, poisons, and contaminants in food or water. Can identify individuals by taste of their blood."
            },
            {
                name: "Flexible Skeleton",
                hasIt: false,
                id: 2,
                description: "Escape restraints or tight spaces with ease. Reduce damage from falls, explosives, or crashes by 1 strike."
            },
            {
                name: "Gel Excretion",
                hasIt: false,
                id: 3,
                description: "Secrete a fire-resistant gel, providing a boon to saves against heat and flames. Activate as a free action."
            },
            {
                name: "Heightened Senses",
                hasIt: false,
                id: 4,
                description: "Automatically detect hidden enemies, traps, illusions, or altered beings near you without rolling."
            },
            {
                name: "Idyllic Memories",
                hasIt: false,
                id: 5,
                description: "Recall memories from the Wonderful World. Gain 2 karma once per game by recounting useful knowledge."
            },
            {
                name: "Modified Kidneys",
                hasIt: false,
                id: 6,
                description: "Automatically purge 1 level of contamination at the end of each day without requiring medical intervention."
            },
            {
                name: "Nictitating Membrane",
                hasIt: false,
                id: 7,
                description: "Protect your eyes from glare, dust, or flashes. Immune to flashbang effects on a roll of 2+."
            },
            {
                name: "Oily Excretion",
                hasIt: false,
                id: 8,
                description: "Exude a slick oil, granting a boon to escape grapples and adding a bane to anyone trying to restrain you."
            },
            {
                name: "Sleepless",
                hasIt: false,
                id: 9,
                description: "No need to sleep. Rest by sitting quietly for a few hours while remaining aware of surroundings."
            },
            {
                name: "Slowed Metabolism",
                hasIt: false,
                id: 10,
                description: "Survive on food and water every other day without penalty. Heal normally each day even with limited rations."
            }
        ];           
        this.bioSynthPs = [
            {
                name: "Cerebral Uplink",
                hasIt: false,
                id: 1,
                description: "Boon to connect with ancient computers. Attempt to take over hostile systems or robots at near range with a contest roll."
            },
            {
                name: "Hidden Compartment",
                hasIt: false,
                id: 2,
                description: "A secret compartment can hold one small item (up to pistol size)."
            },
            {
                name: "Language Module",
                hasIt: false,
                id: 3,
                description: "Understand and speak almost any language, including those of intelligent non-humans."
            },
            {
                name: "Luminous Eyes",
                hasIt: false,
                id: 4,
                description: "Your eyes emit light, acting as twin flashlights to illuminate the darkness."
            },
            {
                name: "Milk Blood",
                hasIt: false,
                id: 5,
                description: "Companions can drink your nutrient-rich blood to heal overnight. You sacrifice your own healing to restore up to 5 others."
            },
            {
                name: "NuFlesh",
                hasIt: false,
                id: 6,
                description: "Heal 2 strikes instead of 1 when resting overnight, provided you consume a daily ration."
            },
            {
                name: "Overdrive",
                hasIt: false,
                id: 7,
                description: "Once per day, burn a strike to take 2 turns in succession."
            },
            {
                name: "Recharge Ports",
                hasIt: false,
                id: 8,
                description: "Absorb sunlight through your skin to recharge up to 6 devices in an hour."
            },
            {
                name: "Shielded Innards",
                hasIt: false,
                id: 9,
                description: "Immune to EMP attacks on a roll of 6. Gain a boon to resist electrical attacks."
            },
            {
                name: "Spectra Vision",
                hasIt: false,
                id: 10,
                description: "See electromagnetic fields of active technology, revealing hidden electronics or devices."
            }
        ];        
        this.paths = [
            {
                name: "Android",
                hasIt: false,
                id: 1,
                strikes: 3,
                armor: { name: "Junk Armor", value: 5 },
                avoidance: 6,
                miasmaResist: "1D6",
                wealth: "Hard-Up",
                gear: ["Cobbled pistol", "cobbled melee weapon", "junk armor", "tarp cloak", "backpack", "pain away (X2)", "supplies (X3)", "memento"],
                pathIncls: [
                    { name: "BioClear", hasIt: false, id: "1-1", description: "Immune to contamination, poison, and contagion." }
                ],
                edges: [
                    { name: "Defensive Shock", hasIt: false, description: "Charge builds up once per scene. If hit in melee, attacker rolls Avoidance Save or suffers bane next turn." },
                    { name: "Mimic", hasIt: false, description: "Perfectly mimic voices heard in the past." }
                ],
                description: "More than human. Androids are a recent development, still easy to spot, partially metallic, and tough as nails."
            },
            {
                name: "Clone",
                hasIt: false,
                id: 2,
                strikes: 3,
                armor: { name: "Skiensuit", value: 5 },
                avoidance: 6,
                miasmaResist: "1D6",
                wealth: "Hard-Up",
                gear: ["Benchmark combat knife", "Skiensuit", "backpack", "supplies (X3)", "Full Spectrum Wristband", "memento"],
                pathIncls: [
                    { name: "Regen-Cellular", hasIt: false, id: "2-1", description: "Heals a strike every hour. Final strike taken kills the clone." }
                ],
                edges: [
                    { name: "Enhanced Legs", hasIt: false, description: "Run (double move) as a normal move without using a turn action." },
                    { name: "Enhanced Coordination", hasIt: false, description: "Roll Avoidance Saves with a boon." }
                ],
                description: "A hidden cache or techno-pod pops open. You are born."
            },
            {
                name: "Hunter",
                hasIt: false,
                id: 3,
                strikes: 3,
                armor: { name: "Junk Armor", value: 5 },
                avoidance: 6,
                miasmaResist: "1D6",
                wealth: "Hard-Up",
                gear: ["Cobbled rifle or bow", "cobbled melee weapon", "skinning knife", "junk armor", "binoculars", "tarp cloak", "backpack", "pain away (X2)", "supplies (X3)", "memento"],
                pathIncls: [
                    { name: "Wasteland Ranger", hasIt: false, id: "3-1", description: "Boon to wasteland tracking and survival." },
                    { name: "Hunters Weapon", hasIt: false, id: "3-2", description: "Boon to shooting bows, crossbows, and rifles." }
                ],
                edges: [
                    { name: "Sneak Attack", hasIt: false, description: "Get 2 attacks on a surprised or hidden target." },
                    { name: "Harvester", hasIt: false, description: "Harvest kills to craft bone/hide armor or gather supplies." }
                ],
                description: "Serious and relentless. Hunters thrive where others fear to tread."
            },
            {
                name: "Machine Head",
                hasIt: false,
                id: 4,
                strikes: 3,
                armor: { name: "Junk", value: 5 },
                avoidance: 6,
                miasmaResist: "1D6",
                wealth: "Hard-Up",
                gear: ["Cobbled pistol", "cobbled melee weapon", "junk armor", "tool belt with tools", "backpack", "pain away (X2)", "supplies (X3)", "memento"],
                pathIncls: [
                    { name: "Scrap Boss", hasIt: false, id: "4-1", description: "Boon to repair or construct mechanical objects and supervise less skilled workers." },
                    { name: "Repairs", hasIt: false, id: "4-2", description: "Fix cobbled weapons or simple machines during breaks." }
                ],
                edges: [
                    { name: "Quick Fix", hasIt: false, description: "Fix broken items instantly with a powered tool." },
                    { name: "A.I. PalBot", hasIt: false, description: "Tiny robot companion capable of static shocks and aid." }
                ],
                description: "Where others see junk, Machine Heads see potential."
            },
            {
                name: "Mutie",
                hasIt: false,
                id: 5,
                strikes: 3,
                armor: { name: "Junk Armor", value: 5 },
                avoidance: 6,
                miasmaResist: "1D6",
                wealth: "Hard-Up",
                gear: ["Cobbled melee weapon", "junk armor", "tarp cloak", "rope", "backpack", "pain away (X2)", "supplies (X3)", "memento"],
                pathIncls: [],
                edges: [
                    { name: "Adaptive Stomach", hasIt: false, description: "Sustain yourself on any organic matter. Ignore daily rations." },
                    { name: "Torpor", hasIt: false, description: "Hibernate if reduced to last strike, revive if healed before scene ends." }
                ],
                description: "Toxins and mutations make Muties resilient but strange."
            },
            {
                name: "Rambler",
                hasIt: false,
                id: 6,
                strikes: 3,
                armor: { name: "Junk Armor", value: 5 },
                avoidance: 6,
                miasmaResist: "1D6",
                wealth: "Hard-Up",
                gear: ["Cobbled pistol", "cobbled melee weapon", "junk armor", "backpack", "musical instrument of choice", "pain away (X2)", "supplies (X3)", "memento"],
                pathIncls: [
                    { name: "Traveling Thespian", hasIt: false, id: "7-1", description: "Boon to performance, gambling, and sleight of hand." },
                    { name: "Distraction", hasIt: false, id: "7-2", description: "When an ally takes a strike, roll 1D6. On a 6, prevent the strike." }
                ],
                edges: [
                    { name: "Allies", hasIt: false, description: "Has at least one friendly contact in each Hold. On a roll of 6, there is a contact in encountered groups." },
                    { name: "Legends After the Fall", hasIt: false, description: "Knows lore about groups or areas, providing useful information." }
                ],
                description: "Charming and clever, Ramblers talk their way into and out of trouble, using wits and charisma to navigate the wasteland."
            },
            {
                name: "Scavie",
                hasIt: false,
                id: 7,
                strikes: 3,
                armor: { name: "Junk Armor", value: 5 },
                avoidance: 6,
                miasmaResist: "1D6",
                wealth: "Hard-Up",
                gear: ["Cobbled pistol", "cobbled melee weapon", "junk armor", "binoculars", "tarp cloak", "backpack", "pain away (X2)", "supplies (X3)", "memento"],
                pathIncls: [
                    { name: "Scrap Seeker", hasIt: false, id: "8-1", description: "Easily find useful scrap, sensing the best sources nearby." },
                    { name: "Rubble Rat", hasIt: false, id: "8-2", description: "Boon to hiding in ruins and navigating unstable areas unless rolling a 1." }
                ],
                edges: [
                    { name: "Personal Stash", hasIt: false, description: "Once per adventure, produce a needed item (except weapons) from pack." },
                    { name: "No Secrets", hasIt: false, description: "Automatically find hidden caches or secret doors unless rolling a 1." }
                ],
                description: "Masters of scavenging and finding hidden treasures, Scavies embrace the chaos of the wasteland, thriving in the junk and rubble."
            },            
            {
                name: "Wasteland Warrior",
                hasIt: false,
                id: 8,
                strikes: 3,
                armor: { name: "Junk Armor", value: 5 },
                avoidance: 6,
                miasmaResist: "1D6",
                wealth: "Hard-Up",
                gear: ["Cobbled pistol", "cobbled melee weapon", "shield", "backpack", "pain away (X2)", "supplies (X3)", "memento"],
                pathIncls: [
                    {
                        name: "War Ready",
                        description: "Boon to melee and ranged combat."
                    },
                    {
                        name: "Two Fisted",
                        description: "Dual wield pistols, SMGs, or melee weapons, gaining an extra boon."
                    }
                ],
                edges: [
                    { name: "Prime Specimen", hasIt: false, description: "Start with 4 strikes and boon to stun saves." },
                    { name: "Trigger Discipline", hasIt: false, description: "Save ammo on a 4+ after combat." }
                ],
                description: "Violence is the law. Warriors thrive in chaos and battle."
            },
            {
                name: "Weird",
                hasIt: false,
                id: 9,
                strikes: 3,
                armor: { name: "Base", value: 6 },
                avoidance: 6,
                miasmaResist: "2D6",
                wealth: "Hard-Up",
                gear: ["Glowstaff", "goggles", "tarp cloak", "charms (Sm)", "backpack", "pain away (X2)", "supplies (X3)", "memento"],
                pathIncls: [],
                edges: [
                    { name: "Mental Shield", hasIt: false, description: "Absorbs one strike of damage. Requires a turn action to restore." },
                    { name: "Neuroflux", hasIt: false, description: "Use psychic effects like formless magick. Rolling a 1 results in backlash, harming the Weird." }
                ],
                description: "Mystics attuned to the miasma, Weirds harness psychic forces to shape reality. Feared and respected, they see truths hidden from others."
            },
            {
                name: "Jack",
                hasIt: false,
                id: 10,
                strikes: 3,
                armor: { name: "Junk Armor", value: 5 },
                avoidance: 6,
                miasmaResist: "1D6",
                wealth: "Hard-Up",
                gear: ["Cobbled melee weapon", "junk armor", "tarp cloak", "rope", "backpack", "pain away (X2)", "supplies (X3)", "memento"],
                pathIncls: [],
                edges: [
                    { name: "One More", hasIt: false, description: "Choose an additional inclination from the Survivor Talents list." }
                ],
                description: "Versatile and adaptable, the Jack is a survivor built for customization. They can shape their path to fit any situation in the wasteland."
            }            
        ];               
        //this.init();
    }

    // Initializes a random character
    init() {
        this.path = randomMath(pathsArray);
        this.applyPathAttributes();
        this.aspects = pickUnique(survivorAspectsArray, 2);
        this.addRandomGear();
    }

    getRandomEdge() {
        this.edges.push(randomMath(this.possibleEdges));
    }

    returnCurrentPath() {
        return this.paths.find(path => path.hasIt === true);
    }

    updateStatsAndDom() {
        //this.getPath();
        this.applyPathAttributes();
        //document.getElementById("📝path").style.display = "block";
        this.incTip = this.getIncTxt();
        console.log("max incs:", this.maxInclinations)
        this.displayValid();
        loadInclinations();
        this.allInclToDom();
    }

    // applyPathAttributes() {
    //     switch (this.path) {
    //         case "Android":
    //             this.gear = [
    //                 wwWeaponsArr[9],            // "Pistol"
    //                 wwWeaponsArr[6],            // "Melee Weapon"
    //                 wwGearArr[0],               // "Backpack"
    //                 drugsArray[1] + " (x2)",    // "Kinonorphine (Pain-Away) (x2)"
    //                 "supplies (x3)",
    //                 "memento",
    //                 wwGearArr[20]               // "Tarp Cloak"
    //             ];                  
    //             this.possibleEdges = ["Defensive Shock", "Mimic"];
    //             this.classIncl = ["BioClear"];

    //             this.sTalentsMin = 1;
    //             this.bioSynthMin = 2;
    //             this.maxInclinations = 5;
    //             break;
    //         case "Clone":
    //             this.armor = { name: "Skiensuit", value: 5 };
    //             this.gear = [
    //                 wwWeaponsArr[6],                 // "Melee Weapon"
    //                 wwGearArr[0],                    // "Backpack"
    //                 "supplies (x3)",          
    //                 "Full Spectrum Wristband",
    //                 "memento"                 
    //             ];
    //             this.possibleEdges = ["Enhanced Legs", "Enhanced Coordination"];
    //             this.classIncl = ["Regen"];

    //             this.sTalentsMin = 1;
    //             this.dnaModsMin = 2;
    //             this.maxInclinations = 5;
    //             break;
    //         case "Hunter":
    //             this.gear = [
    //                 wwWeaponsArr[10],            // "Rifle (Lg)"
    //                 wwWeaponsArr[6],             // "Melee Weapon"
    //                 wwGearArr[1],                // "Binoculars"
    //                 wwGearArr[20],               // "Tarp Cloak"
    //                 wwGearArr[0],                // "Backpack"
    //                 "supplies (x3)",
    //                 "memento"
    //             ];
    //             this.possibleEdges = ["Sneak Attack", "Harvester"];
    //             this.classIncl = ["Wasteland Ranger", "Hunters Weapon"];

    //             this.sTalentsMin = 4;
    //             this.maxInclinations = 4;
    //             break;
    //         case "Mutie":
    //             this.gear = [
    //                 wwWeaponsArr[6],                // "Melee Weapon"
    //                 wwGearArr[18],                  // "Rope (Lg)"
    //                 wwGearArr[20],                  // "Tarp Cloak"
    //                 wwGearArr[0],                   // "Backpack"
    //                 drugsArray[1] + " (x2)",        // "Kinonorphine (Pain-Away) (x2)"
    //                 "supplies (x3)",
    //                 "memento"
    //             ];                  
    //             this.possibleEdges = ["Adaptive Stomach", "Torpor"];
                
    //             this.sTalentsMin = 2;
    //             this.physMutatationsMin = 2;
    //             this.maxInclinations = 6;
    //             break;
    //         case "Machine Head":
    //             this.gear = [
    //                 wwWeaponsArr[9],            // "Pistol"
    //                 "tool belt",
    //                 wwGearArr[0],               // "Backpack"
    //                 drugsArray[1] + " (x2)",    // "Kinonorphine (Pain-Away) (x2)"
    //                 "supplies (x3)",
    //                 "memento"
    //             ];                  
    //             this.possibleEdges = ["Quick Fix", "A.I. PalBot"];
    //             this.classIncl = ["Scrap Boss", "Repairs"];

    //             this.sTalentsMin = 4;
    //             this.maxInclinations = 4;
    //             break;
    //         case "Rambler":
    //             this.gear = [
    //                 wwWeaponsArr[9],            // "Pistol"
    //                 wwWeaponsArr[6],            // "Melee Weapon"
    //                 "musical instrument",
    //                 wwGearArr[0],               // "Backpack"
    //                 drugsArray[1] + " (x2)",    // "Kinonorphine (Pain-Away) (x2)"
    //                 "supplies (x3)",
    //                 "memento"
    //             ];                  
    //             this.possibleEdges = ["Allies", "Legends After the Fall"];
    //             this.classIncl = ["Traveling Thespian", "Distraction"];

    //             this.sTalentsMin = 4;
    //             this.maxInclinations = 4;
    //             break;
    //         case "Scavie":
    //             this.gear = [
    //                 wwWeaponsArr[9],            // "cobbled pistol"
    //                 wwWeaponsArr[6],            // "cobbled melee weapon"
    //                 wwGearArr[1],               // "Binoculars"
    //                 wwGearArr[20],              // "Tarp Cloak"
    //                 wwGearArr[0],               // "Backpack"
    //                 drugsArray[1] + " (x2)",    // "Kinonorphine (Pain-Away) (x2)"
    //                 "supplies (x3)",
    //                 "memento"
    //             ];                  
    //             this.possibleEdges = ["Personal Stash", "No Secrets"];
    //             this.classIncl = ["Scrap Seeker", "Rubble Rat"];
                
    //             this.sTalentsMin = 4;
    //             this.maxInclinations = 4;
    //             break;
    //         case "Wasteland Warrior":
    //             this.gear = [
    //                 wwWeaponsArr[9],            // "Pistol"
    //                 wwGearArr[15],              // "Junk Shield (Shield Slot)"
    //                 wwWeaponsArr[6],            // "Melee Weapon"
    //                 wwGearArr[0],               // "Backpack"
    //                 drugsArray[1] + " (x2)",    // "Kinonorphine (Pain-Away) (x2)"
    //                 "supplies (x3)",
    //                 "memento"
    //             ];                  
    //             this.possibleEdges = ["Prime Specimen", "Trigger Discipline"];
    //             this.classIncl = ["War Ready", "Two Fisted"];
                
    //             this.sTalentsMin = 4;
    //             this.maxInclinations = 4;
    //             break;
    //         case "Weird":
    //             this.armor = { name: "Base Armor", value: 6 };
    //             this.miasmaResistance = "2D6";
    //             this.gear = [
    //                 "Glowstaff",
    //                 wwGearArr[8],                // "Goggles (Sm)"
    //                 wwGearArr[20],               // "Tarp Cloak"
    //                 "charms",
    //                 wwGearArr[0],                // "Backpack"
    //                 drugsArray[1] + " (x2)",     // "Kinonorphine (Pain-Away) (x2)"
    //                 "supplies (x3)",
    //                 "memento"
    //             ];                  
    //             this.possibleEdges = ["Mental Shield", "Neuroflux"];
                
    //             this.sTalentsMin = 2;
    //             this.mentalMutationsMin = 2;
    //             this.maxInclinations = 6;
    //             break;
    //         case "Jack":
    //             this.gear = [
    //                 wwWeaponsArr[6],                // "cobbled melee weapon"
    //                 wwGearArr[20],                  // "tarp cloak"
    //                 wwGearArr[18],                  // "rope" -> "Rope (Lg)"
    //                 wwGearArr[0],                   // "backpack"
    //                 drugsArray[1] + " (x2)",        // "Kinonorphine (Pain-Away) (x2)"
    //                 "supplies (x3)",
    //                 "memento"
    //             ];                  
    //             this.possibleEdges = ["One More"];
                
    //             this.sTalentsMin = 7;
    //             this.maxInclinations = 7;
    //             break;
    //         default:
    //             console.error("Could not assign a Path. Error Code: 2528.")
    //     }
    //     this.allInclToDom();
        
    // };
    applyPathAttributes() {
        const selectedPath = this.returnCurrentPath();
        if (selectedPath) {
            this.path = selectedPath.name;
            this.strikes = selectedPath.strikes;
            this.armor = selectedPath.armor;
            this.avoidance = selectedPath.avoidance;
            this.miasmaResistance = selectedPath.miasmaResist;
            this.gear = [...selectedPath.gear];
            this.possibleEdges = selectedPath.edges.map(edge => edge.name);
            this.classIncl = selectedPath.pathIncls;
            
            // Set Inclination Minimums
            switch (selectedPath.name) {
                case "Android":
                    this.sTalentsMin = 1;
                    this.bioSynthMin = 2;
                    this.maxInclinations = 5;
                    break;
                case "Clone":
                    this.sTalentsMin = 1;
                    this.dnaModsMin = 2;
                    this.maxInclinations = 5;
                    break;
                case "Hunter":
                    this.sTalentsMin = 4;
                    this.maxInclinations = 4;
                    break;
                case "Mutie":
                    this.sTalentsMin = 2;
                    this.physMutatationsMin = 2;
                    this.maxInclinations = 6;
                    break;
                case "Machine Head":
                    this.sTalentsMin = 4;
                    this.maxInclinations = 4;
                    break;
                case "Rambler":
                    this.sTalentsMin = 4;
                    this.maxInclinations = 4;
                    break;
                case "Scavie":
                    this.sTalentsMin = 4;
                    this.maxInclinations = 4;
                    break;
                case "Wasteland Warrior":
                    this.sTalentsMin = 4;
                    this.maxInclinations = 4;
                    break;
                case "Weird":
                    this.sTalentsMin = 2;
                    this.mentalMutationsMin = 2;
                    this.maxInclinations = 6;
                    break;
                case "Jack":
                    this.sTalentsMin = 7;
                    this.maxInclinations = 7;
                    break;
                default:
                    console.warn("Path not recognized, applying default inclination values.");
                    this.sTalentsMin = 5;
                    this.maxInclinations = 5;
                    break;
            }
        } else {
            console.error("No path selected or no path marked as 'hasIt'. Error Code: 2528.");
        }
    };

    // checkStats() {
    //     console.log("stats checked")
    //     //A: check if we can still add incl
    //     //A No: escape and alert user
    //     //A Yes: go to B
    //     //B: check if we can still add incl while also having enough left for all the req min
    //     //B No: escape and alert user
    //     //B Yes: proceed, or return true
    // }
    // checkStats() {
    //     console.log("Checking stats...");
    //     const chosenIncl = this.calcChosenIncl();
    
    //     // A: Check if more inclinations can be added
    //     if (this.calcChosenIncl().length >= this.maxInclinations) {
    //         callError("Max inclinations reached. Cannot add more.");
    //         return false;
    //     }
        
    //     // B: Check if adding another inclination leaves enough for category minimums
    //     const remaining = this.maxInclinations - chosenIncl.length;

    //     // Count currently selected inclinations by category
    //     const counts = {
    //         sTalents: this.survivorTalents ? this.survivorTalents.filter(i => i.hasIt).length : 0,
    //         physMutations: this.physMutations ? this.physMutations.filter(i => i.hasIt).length : 0,
    //         mentalMutations: this.mentalMutations ? this.mentalMutations.filter(i => i.hasIt).length : 0,
    //         dnaMods: this.dnaMods ? this.dnaMods.filter(i => i.hasIt).length : 0,
    //         bioSynth: this.bioSynthPs ? this.bioSynthPs.filter(i => i.hasIt).length : 0,
    //     };

    //     // Calculate missing inclinations for each category (after accounting for current selections)
    //     const missing = {
    //         sTalents: Math.max(0, this.sTalentsMin - counts.sTalents),
    //         physMutations: Math.max(0, this.physMutatationsMin - counts.physMutations),
    //         mentalMutations: Math.max(0, this.mentalMutationsMin - counts.mentalMutations),
    //         dnaMods: Math.max(0, this.dnaModsMin - counts.dnaMods),
    //         bioSynth: Math.max(0, this.bioSynthMin - counts.bioSynth),
    //     };

    //     // Total missing inclinations
    //     const totalMissing = Object.values(missing).reduce((sum, val) => sum + val, 0);

    //     // Prevent over-selection in any single category, ensuring minimums can still be met
    //     const overSelection = Object.entries(missing).some(([key, value]) => {
    //         const unmet = value > 0 ? value : 0;
    //         const canStillMeet = counts[key] + remaining >= unmet;

    //         if (!canStillMeet) {
    //             callError(`Not enough slots left. You need at least ${unmet} more ${key} to meet minimum requirements.`);
    //             return true;
    //         }
    //         return false;
    //     });

    //     if (overSelection) {
    //         return false;
    //     }
        
    //     // If all checks pass
    //     console.log("Inclination can be added.");
    //     return true;
    // };    

    
    // checkStats() {
    //     console.log("Checking stats...");
    //     const chosenIncl = this.calcChosenIncl();
    
    //     // A: Check if more inclinations can be added
    //     if (this.calcChosenIncl().length >= this.maxInclinations) {
    //         callError("Max inclinations reached. Cannot add more.");
    //         return false;
    //     }
    //     const remaining = this.maxInclinations - this.calcChosenIncl().length;
    
    //     const unmet = {
    //         sTalents: this.sTalentsMin - this.survivorTalents.filter(i => i.hasIt).length,
    //         physMutations: this.physMutatationsMin - this.physMutations.filter(i => i.hasIt).length,
    //         mentalMutations: this.mentalMutationsMin - this.mentalMutations.filter(i => i.hasIt).length,
    //         dnaMods: this.dnaModsMin - this.dnaMods.filter(i => i.hasIt).length,
    //         bioSynth: this.bioSynthMin - this.bioSynthPs.filter(i => i.hasIt).length,
    //     };
    
    //     // Check if remaining slots can satisfy all unmet minimums
    //     for (const [key, value] of Object.entries(unmet)) {
    //         if (value > 0 && remaining < value) {
    //             callError(`Not enough slots left to meet minimum ${key} requirements.`);
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // checkStats(nameIn) {
    //THIS WAS WORKING OK
    //     console.log("Checking stats...");
    //     //const chosenIncl = this.calcChosenIncl();
    
    //     // A: Check if more inclinations can be added
    //     if (this.calcChosenIncl().length >= this.maxInclinations) {
    //         callError("Max inclinations reached. Cannot add more.");
    //         return false;
    //     }
    //     const remaining = this.maxInclinations - this.calcChosenIncl().length;
    //     let canProceed = true;
    
    //     if (
    //         remaining + this.survivorTalents.filter(i => i.hasIt).length < this.sTalentsMin &&
    //         !this.survivorTalents.some(i => i.name === nameIn)
    //     ) {
    //         callError("Not enough slots left for Survivor Talents.");
    //         canProceed = false;
    //     }
    //     if (
    //         remaining + this.physMutations.filter(i => i.hasIt).length < this.physMutatationsMin &&
    //         !this.physMutations.some(i => i.name === nameIn)
    //     ) {
    //         callError("Not enough slots left for Physical Mutations.");
    //         canProceed = false;
    //     }
    //     if (
    //         remaining + this.mentalMutations.filter(i => i.hasIt).length < this.mentalMutationsMin &&
    //         !this.mentalMutations.some(i => i.name === nameIn)
    //     ) {
    //         callError("Not enough slots left for Mental Mutations.");
    //         canProceed = false;
    //     }
    //     if (
    //         remaining + this.dnaMods.filter(i => i.hasIt).length < this.dnaModsMin &&
    //         !this.dnaMods.some(i => i.name === nameIn)
    //     ) {
    //         callError("Not enough slots left for DNA Mods.");
    //         canProceed = false;
    //     }
    //     if (
    //         remaining + this.bioSynthPs.filter(i => i.hasIt).length < this.bioSynthMin &&
    //         !this.bioSynthPs.some(i => i.name === nameIn)
    //     ) {
    //         callError("Not enough slots left for BioSynth.");
    //         canProceed = false;
    //     }
    
    //     // Step B: Ensure enough slots are left to meet ALL remaining minimums
    //     // const unmet = [
    //     //     this.sTalentsMin - this.survivorTalents.filter(i => i.hasIt).length,
    //     //     this.physMutatationsMin - this.physMutations.filter(i => i.hasIt).length,
    //     //     this.mentalMutationsMin - this.mentalMutations.filter(i => i.hasIt).length,
    //     //     this.dnaModsMin - this.dnaMods.filter(i => i.hasIt).length,
    //     //     this.bioSynthMin - this.bioSynthPs.filter(i => i.hasIt).length
    //     // ].reduce((sum, n) => sum + Math.max(0, n), 0);
    
    //     // if (remaining < unmet) {
    //     //     callError("Not enough slots to meet overall minimum requirements.");
    //     //     canProceed = false;
    //     // }
    
    //     return canProceed;
    // }
    
    
    checkStats(nameIn) {
        console.log("Checking stats...");

        const remaining = this.maxInclinations - this.calcChosenIncl().length -1;
        let canProceed = true;
        console.log("remaing incl:", remaining)
        console.log("S talents:", this.sTalentsMin)
        console.log("phys muts:", this.physMutatationsMin)
        console.log("mental:", this.mentalMutationsMin)
        console.log("dna mods:", this.dnaModsMin)
        console.log("bio min:", this.bioSynthMin)
    
        if (this.calcChosenIncl().length >= this.maxInclinations) {
            callError("Max inclinations reached. Cannot add more.");
            return false;
        }
    
        const categories = [
            { list: this.survivorTalents, min: this.sTalentsMin, label: "Survivor Talents" },
            { list: this.physMutations, min: this.physMutatationsMin, label: "Physical Mutations" },
            { list: this.mentalMutations, min: this.mentalMutationsMin, label: "Mental Mutations" },
            { list: this.dnaMods, min: this.dnaModsMin, label: "DNA Modifications" },
            { list: this.bioSynthPs, min: this.bioSynthMin, label: "BioSynth Packages" }
        ];
    
        categories.forEach(({ list, min, label }) => {
            const selectedCount = list.filter(i => i.hasIt).length;
            const meetsRequirement = list.some(i => i.name === nameIn);
    
            if (remaining + selectedCount < min && !meetsRequirement) {
                callError(`Not enough slots left for ${label}.`);
                canProceed = false;
            }
        });

        //TODO: if all incl have been assigned, open Edges
    
        return canProceed;
    };    

    getPathIncl() {
        return this.paths.find(obj => (obj.hasIt)).pathIncls || [];
        // const test2 = test.pathIncls;
        // console.log(test2)
        //return this.paths.filter(obj => (obj.hasIt)).pathIncls;
    }

    calcChosenIncl() {
        const totalInclinations = [
            ...this.survivorTalents,
            ...this.physMutations,
            ...this.mentalMutations,
            ...this.dnaMods,
            ...this.bioSynthPs,
        ];
        
        return totalInclinations.filter(inc => inc.hasIt);
    };

    calcAllIncl() {
        //this.allIncl = [];
        //this.getPathIncl();
        const totalInclinations = [
            ...this.survivorTalents,
            ...this.physMutations,
            ...this.mentalMutations,
            ...this.dnaMods,
            ...this.bioSynthPs,
        ];
        
        //this.allIncl = [...totalInclinations.filter(inc => inc.hasIt), ...this.getPathIncl()];
        return [...this.calcChosenIncl(), ...this.getPathIncl()];
        
        // const bigArr1 = this.survivorTalents.filter(obj => obj.hasIt);
        // const bigArr2 = this.physMutations.filter(obj => obj.hasIt);
        // const bigArr3 = this.mentalMutations.filter(obj => obj.hasIt);
        // const bigArr4 = this.dnaMods.filter(obj => obj.hasIt);
        // const bigArr5 = this.bioSynthPs.filter(obj => obj.hasIt);
        // this.allIncl = [...this.classIncl, ...bigArr1, ...bigArr2, ...bigArr3, ...bigArr4, ...bigArr5];
    }

    allInclToDom() {
        // this.calcAllIncl();
        // Clear allIncl to refresh with current selections
        // this.allIncl = [];
        
        // const bigArr1 = this.survivorTalents.filter(obj => obj.hasIt);
        // const bigArr2 = this.physMutations.filter(obj => obj.hasIt);
        // const bigArr3 = this.mentalMutations.filter(obj => obj.hasIt);
        // const bigArr4 = this.dnaMods.filter(obj => obj.hasIt);
        // const bigArr5 = this.bioSynthPs.filter(obj => obj.hasIt);
        // this.allIncl = [...this.classIncl, ...bigArr1, ...bigArr2, ...bigArr3, ...bigArr4, ...bigArr5];
    
        //const allInclText = this.allIncl.map(incl => incl.name).join(',\n');

        const allInclText = this.calcAllIncl().map(incl => incl.name).join(',\n');

        console.log(allInclText);
        document.getElementById("all-incl-list").textContent = allInclText || "TBD";
    };

    edgesToDom() {
        console.log("edge selections sent to dom")
    }

    getRndIncl() {
        this.survivorTalents.forEach(obj => { obj.hasIt = false; });
        this.bioSynthPs.forEach(obj => { obj.hasIt = false; });
        console.log("max incl:", this.maxInclinations)
        let bigNum = this.maxInclinations; 
        switch (this.path) {
            case "Android":
                runArrLoop(this.sTalentsMin, this.survivorTalents);
                runArrLoop(this.bioSynthMin, this.bioSynthPs);
                bigNum = this.maxInclinations - this.bioSynthMin - this.sTalentsMin;

                runArrLoop(bigNum, [...this.bioSynthPs, ...this.survivorTalents]);
                break;
            case "Clone":
                runArrLoop(this.sTalentsMin, this.survivorTalents);
                runArrLoop(this.dnaModsMin, this.dnaMods);
                bigNum = this.maxInclinations - this.dnaModsMin - this.sTalentsMin;
                runArrLoop(bigNum, [...this.dnaMods, ...this.survivorTalents]);
                break;
            // case "Hunter":
            //     runArrLoop(this.sTalentsMin, this.survivorTalents);
            //     bigNum = this.maxInclinations - this.sTalentsMin;
            //     runArrLoop(bigNum, this.survivorTalents);
            //     break;
            case "Mutie":
                runArrLoop(this.sTalentsMin, this.survivorTalents);
                runArrLoop(this.physMutatationsMin, this.physMutations);
                bigNum = this.maxInclinations - this.physMutatationsMin - this.sTalentsMin;
                runArrLoop(bigNum, [...this.physMutations, ...this.survivorTalents]);

                // this.inclinations.push(...pickUnique(physicalMutationsArray, this.physMutatationsMin));
                // this.inclinations.push(...pickUnique(survivorTalentsArray, this.sTalentsMin));  
                // this.inclinations.push(...pickUnique([...physicalMutationsArray, ...survivorTalentsArray], this.maxInclinations - this.sTalentsMin - this.physMutatationsMin));
                break;
            // case "Machine Head":
            //     this.inclinations.push(...pickUnique(survivorTalentsArray, this.sTalentsMin));
            //     this.inclinations.push(...pickUnique(survivorTalentsArray, this.maxInclinations - this.sTalentsMin));
            //     break;
            case "Hunter":
            case "Jack":
            case "Machine Head":
            case "Rambler":
            case "Scavie":
            case "Wasteland Warrior":
                runArrLoop(this.sTalentsMin, this.survivorTalents);
                bigNum = this.maxInclinations - this.sTalentsMin;
                runArrLoop(bigNum, this.survivorTalents);
                // this.inclinations.push(...pickUnique(survivorTalentsArray, this.sTalentsMin));
                // this.inclinations.push(...pickUnique(survivorTalentsArray, this.maxInclinations - this.sTalentsMin));
                break;
            case "Weird":
                runArrLoop(this.sTalentsMin, this.survivorTalents);
                runArrLoop(this.mentalMutationsMin, this.mentalMutations);
                bigNum = this.maxInclinations - this.mentalMutationsMin - this.sTalentsMin;
                runArrLoop(bigNum, [...this.mentalMutations, ...this.survivorTalents]);

                // this.inclinations.push(...pickUnique(mentalMutationsArray, this.mentalMutationsMin));
                // this.inclinations.push(...pickUnique(survivorTalentsArray, this.sTalentsMin));
                // this.inclinations.push(...pickUnique([...mentalMutationsArray, ...survivorTalentsArray], this.maxInclinations - this.mentalMutationsMin - this.sTalentsMin));
                break;
            // case "Jack":
            //     this.inclinations.push(...pickUnique(survivorTalentsArray, this.maxInclinations));
            //     break;
            default:
                console.error("Could not assign a random Inclinations. Error Code: 2429.")
        };
        this.allInclToDom();
    };    

    getRndGear() {
        let selectedList;
        const lists = { weapons: wwWeaponsArr, gear: wwGearArr, drugs: drugsArray };
        // const choice = prompt("Choose equipment list: weapons, gear, or drugs");
        const choice = randomMath(Object.keys(lists));
        selectedList = lists[choice] || wwGearArr;

        let item;
        do {
            item = randomMath(selectedList);
        } while (this.gear.includes(item));

        this.gear.push(item);
    };

    resetToDefault() {
        const defaults = new PC();
        // Copy default values to the current instance
        Object.assign(this, defaults);
    };

    mapPropertiesToHtml() { // associate this with doc IDs
        const propertyMapping = [];

        // Define the mapping of properties to HTML element IDs
        const mapping = {
            name: "name",
            basics: "build-txt",
            path: "path",
            circle: "circle",
            strikes: "strikes",
            boons: "boons",
            features: "features",
            armorType: "armor",
            armorSave: "aSave",
            miracleSave: "mSave",
            karma: "karma",
            wealth: "wealth",
            classIncl: "path-inclinations",
            inclinations: "inclinations",
            allIncl: "all-incl-list",
            incTip: "inc-tip",
            equipment: "gear",
            potions: "potions",
            scrolls: "scrolls",
            species: "species",
            story: "story",
            core: "core",
            description: "phys",
        };

        // If useEmojiIds is true, update the mapping to use emoji-prefixed IDs
        
        for (const prop in mapping) {
            mapping[prop] = `📝${mapping[prop]}`;
        }
        

        for (const prop in this) {
            const id = mapping[prop];
            if (id !== undefined) {
                const htmlElement = document.getElementById(id);
                const propValue = this[prop];
                propertyMapping.push({
                    prop: propValue,
                    id: htmlElement,
                });
            }
        }

        return propertyMapping;
    }

    showInfo(mapping) {
        // Check if mapping is valid and has an associated HTML element
        if (mapping && mapping.id) {
            // Check if the property is an array
            if (Array.isArray(mapping.prop)) {
                // If it's an array, join it with ", " and set as innerHTML
                mapping.id.innerHTML = mapping.prop.join(", ");
            } else {
                // If not an array, set the innerHTML as is
                mapping.id.tagName.toLowerCase() === 'input'
                ? (mapping.id.value = mapping.prop)
                : (mapping.id.innerHTML = mapping.prop);
                // was working: mapping.id.innerHTML = mapping.prop;
            }
        }  
    }

    displayValid() {
        //const propertiesMapping = this.mapPropertiesToHtml(checker);
        const propertiesMapping = this.mapPropertiesToHtml();

        for (const mapping of propertiesMapping) {
            const propValue = mapping.prop;

            // Check if propValue is valid based on your conditions
            const isValid =
                propValue !== null &&
                !(Array.isArray(propValue) && propValue.length === 0) &&
                propValue !== 0 && propValue != "";
            if (isValid) {
                this.showInfo(mapping);
            }
            // if (!isValid) {
            //     this.hideInfo(mapping);
            // }
        }
    };

    getPath(checker, nameIn) {
        if (checker == 1) { // custom builder random
            //this.path = randomMath(pathsArray);
            const randomPath = randomMath(this.paths);
            //this.path = randomPath.name;
            this.paths.forEach(p => p.hasIt = false);  // Reset all paths
            randomPath.hasIt = true;  // Set the selected path to active
        } else if (checker == 2) { // custom builder manual
            //this.path = getButtonText(nameIn);
            const randomPath = arrIn.find(obj => obj.name === nameIn);
            randomPath.hasIt = true;
        } 
        else if (checker == 3) {
            arrIn[pathID - 1].hasIt = true;
        }

        // else { // main tool random
        //     this.path = randomMath(pathsArray);
        //     displayPath.style.display = "block"
        // }

        // Set the dropdown to default and avoid errors
        //selectBtn.firstElementChild.innerText = "Select a Path";
    
        this.applyPathAttributes();
        this.updateStatsAndDom();

        //this.allInclToDom();

        //this.updateStats();
        //this.displayValid(checkBuilder);
        console.log("A path was chosen:", this.path);
        console.log(app)

        loadInclinations();
    };

    getIncTxt() {
        return (this.maxInclinations - this.inclinations.length) + " of " + this.maxInclinations + " remaining."
    }

    getKarma() {
        if (this.inclinations.includes("Born Blessed")) {
            this.karma = "6";
        } else {
            this.karma = "3";
        }
        console.log(this.karma);
    };

    getName(checker, input) {
        if (!input) { // random tool was used
            const { first, last} = rollName();
            this.name = first + " " + last;
            console.log("Random name:", this.name)
        } else { // user typed custom info
            this.name = input;
            console.log("Custom name:", this.name)
        }
        this.displayValid();
        this.updateStats();

        if (checker !== 1) { // custom builder random
            document.getElementById("nam").style.display = "block"
        }
    };

};
pcList.push(new PC);
const app = new PC;
  
document.getElementById("📝-container").style.display = "block";

function loadInclinations() {
    //document.getElementById("incl-header").style.display = "flex";
    document.getElementById("incl-header").classList.add("active");
    document.getElementById("talents-holder").classList.add("active");

    if (app.physMutatationsMin >= 1) {
        //document.getElementById("phys-mutations-holder").style.display = "block";
        document.getElementById("phys-mutations-holder").classList.add("active");
    };
    if (app.mentalMutationsMin >= 1) {
        document.getElementById("mental-mutations-holder").classList.add("active");
    };
    if (app.dnaModsMin >= 1) {
        document.getElementById("dna-mods-holder").classList.add("active");
    };
    if (app.bioSynthMin >= 1) {
        document.getElementById("bio-synth-holder").classList.add("active");
    };
};

function buildBuilderSheet(elm) {
    let sheetName = "";
    let sheetID = elm;
    let arrayToUse = null;
    if (elm == "path") {
        arrayToUse = app.paths;
        sheetName = "Paths";
    }
    if (elm == "sTalents") {
        arrayToUse = app.survivorTalents;
        sheetName = "Survivor Talents";
    }
    if (elm == "physMut") {
        arrayToUse = app.physMutations;
        sheetName = "Phusical Mutations";
    }
    if (elm == "mentalMut") {
        arrayToUse = app.mentalMutations;
        sheetName = "Mental Mutations";
    }
    if (elm == "dnaMods") {
        arrayToUse = app.dnaMods;
        sheetName = "DNA Modifications";
    }
    if (elm == "bioSynth") {
        arrayToUse = app.bioSynthPs;
        sheetName = "BioSynth Packages";
    }

    console.log(sheetName + " sheet was called for.")

    //const self = unit;
    const overlay = document.createElement("div");
    overlay.classList.add("edit-overlay");
    overlay.id = "builder-sheet-" + sheetID;
    // overlay.id = "builderSheet";

    const container = document.createElement("div");
    container.classList.add("edit-container");

    // Header elements
    const header = document.createElement("div");
    header.classList.add("ability__sheet__header-footer");

    header.innerHTML = `
        <div class="orange"></div>
        <h1 class="builder__sheet__title">${sheetName}</h1>
        <p><strong></strong><span class="keep-span" id="📝inc-tip">2 of 2 remaining</span></p>
        <div class="orange"></div>  
    `;

    // Footer elements
    const footer = document.createElement("div");
    footer.classList.add("ability__sheet__header-footer");
    footer.innerHTML = `
        <div class="orange"></div>
        <button type="button" onclick="toggleBuilderSheet(this, false, 'edit-overlay')"><h1><span class="title__text-green">Save</span> & <span class="title__text-camo">Close</span></h1></button>
        <div class="orange"></div>
    `;

    const main = document.createElement("div");
    const list = document.createElement("ul");
    list.classList.add("ability__sheet__list");

    document.body.appendChild(overlay);
    overlay.appendChild(container);
    container.appendChild(header);
    container.appendChild(main);
    main.appendChild(list);
    container.appendChild(footer);

    arrayToUse.forEach(inc => {
        const inner = document.createElement("div");
        inner.innerHTML = `
        <label class="switch">
            <input type="checkbox" id="incToggle${inc.id}" autocomplete="off">
            <span class="toggle__slider">
                <ion-icon id="icon${inc.id}" name="person-add-outline"></ion-icon>
            </span>
        </label>
        <li><strong>${inc.name}:</strong> ${inc.description}</li>
        `;

        list.appendChild(inner);
        
        const toggle = document.getElementById("incToggle"+inc.id);
        const icon = document.getElementById("icon" + inc.id);

        // if (inc.hasIt) {
        //     // toggle slider
        //     toggle.checked = true;
        // } else { toggle.checked = false }
        if (inc.hasIt) {
            toggle.checked = true;
            icon.setAttribute("name", "person-remove-outline");
            inner.classList.add("green__background");
        } else {
            toggle.checked = false;
            icon.setAttribute("name", "person-add-outline");
        }

        // toggle.addEventListener("change", () => {
        //     if (toggle.checked) {
        //         inc.hasIt = true;
        //         console.log(inc.name + " is ready to be removed.")

        //         app.checkStats();

        //         icon.setAttribute("name", "person-remove-outline");
        //         // inner.style.backgroundColor = "green";
        //         inner.classList.add("green__background");
        //         //app.getPath(2, inc.name, arrayToUse);
        //         //console.log(inc.name)
        //     } else {
        //         inc.hasIt = false;
        //         console.log(inc.name + " is ready to be added.")

        //         app.checkStats()

        //         icon.setAttribute("name", "person-add-outline");
        //         inner.classList.remove("green__background");
        //     }
        //     app.updateStatsAndDom();
        // });
        toggle.addEventListener("change", () => {
            if (toggle.checked) {
                if (app.checkStats(inc.name)) {
                    icon.setAttribute("name", "person-remove-outline");
                    inner.classList.add("green__background");
                    inc.hasIt = true;
                    console.log(`${inc.name} is ready to be removed.`);
                } else { toggle.checked = false}
            } else {
                inc.hasIt = false;
                console.log(`${inc.name} is ready to be added.`);
                icon.setAttribute("name", "person-add-outline");
                inner.classList.remove("green__background");
            }
            app.updateStatsAndDom();
        });        

        // toggle.addEventListener('change', function() {
        //     const isChecked = toggle.checked;
        //     console.log(`Inclination ${inc.name} is now ${isChecked ? 'checked' : 'unchecked'}`);
        //     if (isChecked == true) {
        //         if (!addAbility(inc, self)) {
        //             toggle.checked = false;
        //         } else { toggle.checked = true; return; }
                
        //     }
        //     if (isChecked == false) {
        //         promptRemoveAbility(inner, ability, self, toggle);
        //     }
        // });
    });
};
//buildbuilderSheet();

function testMain(checker) {
    toggleBuilderSheet(checker, true, null);
}

function toggleBuilderSheet(elm, checker, parentClass) {
    //const fullId = findParentByClass(elm, parentClass).id;

    //const parentId = fullId[0] === "a" ? fullId.slice("builderSheet-".length) : fullId.slice("card-".length);

    // if (elm == "path") {
    //     console.log("SUCCESS")
    // }
    if(checker == true) {
        document.body.style.overflow = "hidden";

        buildBuilderSheet(elm);
        
        document.getElementById("builder-sheet-" + elm).style.display = 'flex';

        const editContainer = document.querySelector('.edit-container');
        editContainer.style.overflow = "auto";
        //console.log("Before scroll:", editContainer.scrollTop);
        editContainer.scrollTop = 0;
        //console.log("After scroll:", editContainer.scrollTop);

        document.querySelector('.edit-overlay').style.display = 'flex';
        editContainer.style.display = 'block';

    } else if (checker == false) {
        document.body.style.overflow = "unset"; // Is this needed?
        document.querySelector('.edit-overlay')?.remove();
    } else { console.error("Issue retrieving ability sheet") }
};

function getRndIncl(nameIn) {
    //app.rollInclination(1, nameIn);
    app.getRndIncl();
}

const pathElement = document.getElementById("📝path");

// Create a MutationObserver instance
const observer = new MutationObserver(() => {
    if (pathElement.innerText !== defPathMsg) {
        pathElement.classList.add("active");
    } else {
        pathElement.classList.remove("active");
    }
});

// Observe changes to the child nodes (text) of the path element
observer.observe(pathElement, { childList: true, subtree: true });
