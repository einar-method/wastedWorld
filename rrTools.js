function rrRandomRoll(arrCheck) {
    clearDiceResults()
    let textOut = "";
    let titleOut = "";
    let arrayToUse = null;
    if (arrCheck == "stock") {
        // arrayToUse = synthEnhancementsArray;
        // titleOut = "Synth Enhancement: "  
        stockHold()
        return;
    }
    if (arrCheck == "mission") {
        console.log("Rolling random mission..");
        createMission();
        return;
    }
    if (arrCheck == "holdName") {
        textOut = `${randomMath(holdNamesOne)} ${randomMath(holdNamesTwo)}`;
        titleOut = "Hold Name: "
        rrDisplay(textOut, titleOut);
        return;
    }
    if (arrCheck == "gang") {
        arrayToUse = gangs;
        titleOut = "Gang: "  
    }
    if (arrCheck == "dude") {
        arrayToUse = dudesArray;
        titleOut = "Some Dude: "  
    }
    if (arrCheck == "lady") {
        arrayToUse = ladiesArray;
        titleOut = "Some Lady: "  
    }
    if (arrCheck == "hTech") {
        arrayToUse = highTechLootArray;
        titleOut = "High-Tech Loot: "  
    }
    if (arrCheck == "miasma") {
        arrayToUse = crystallizedMiasmaArray;
        titleOut = "Crystalized Miasma: "  
    }
    if (arrCheck == "mKissed") {
        arrayToUse = miasmagenicGraftsArray;
        titleOut = "Miasmagenic Graft: "  
    }
    if (arrCheck == "sEnhance") {
        arrayToUse = synthEnhancementsArray;
        titleOut = "Synth Enhancement: "  
    }
    textOut = randomMath(arrayToUse);
    rrDisplay(textOut, titleOut);
    
};

function rrDisplay(textIn, titleIn) {
    document.getElementById("all-roll").innerHTML = textIn;
    document.getElementById("rr-result-name").textContent = titleIn;
    document.getElementById("🎲").open = true;
    document.getElementById("🎲").classList.add("active");
    fadeInElements(["🎲"]);
};


function clearDiceResults() {
    
    //dialogFade(document.getElementById("🎲🎲"), 0)
    dialogFade(document.getElementById("🎲"), 0);
    dialogFade(document.getElementById("stock-hold-result"), 0);
    
    document.getElementById("🎲").classList.remove("active");
    document.getElementById("stock-hold-result").classList.remove("active");


    const largeDialog = document.getElementById("stock-hold-result");
    if (largeDialog.innerHTML != "") {
        setTimeout(() => {
            largeDialog.innerHTML = "";
        }, 1000);
    } // this prevents a small black box from showing
    
};

function showDiceRoll(num, face) {
    const die = { amount: num, face: face, type: type };
    const rolls = [];

    for (let i = 0; i < die.amount; i++) {
        rolls.push(getRndInt(1, die.face));
    }

    let finalRoll = 0;

    // if (die.type == "fr") {
    //     finalRoll = rolls.reduce((sum, roll) => sum + roll, 0);
    //     console.log("The final roll is:", finalRoll);
    // } else if (die.type == "kh") {
    //     finalRoll = Math.max(...rolls);
    //     console.log("With a boon, final roll is:", finalRoll);
    // } else if (die.type == "kl") {
    //     finalRoll = Math.min(...rolls);
    //     console.log("With a bane, final roll is:", finalRoll);
    // } else {
    //     console.error("Invalid die type");
    // }

    innerAllRolls.innerHTML = rolls.join(", ");
    innerFinalRoll.innerHTML = finalRoll;
    document.getElementById("🎲🎲").open = true;
    document.getElementById("🎲").open = true;

    // Below is needed to get the first transition to work
    // There must be an easier way, have not figured it out yet
    fadeInElements(["🎲", "🎲🎲"])
};

function stockHold() {
    const survivors = parseInt(prompt("How many survivors are in the group?"));

    const lootRoll = randomMath(standardHoldGear);
    const drugRolls = pickWithDuplicates(survivors, drugsArray);
    
    const moddedMelee = rollDice(1, 6)[0] === 6 ? 
        randomMath(moddedMeleeArr) : null;
    ;

    const weaponRolls = rollItems(survivors * 2, wwWeaponsArr, 20);
    // TODO: randomize wpn quailty, may need item class
    
    const specialGun = rollDice(1, 6)[0] === 6 ? 
        randomMath(moddedWeaponsArray) : null;
    ;
    const specialAmmo = rollDice(2, 6).filter(r => r >= 4)
        .map(() => randomMath(specialAmmoArray));
    ;

    const gearRolls = pickWithDuplicates(survivors * 2, wwGearArr);
    //const vehicleAccessories = rollItems(rollDice(2, 6).filter(r => r >= 4).length, vehicleAccessoriesArray, 6);
    
    const vehicleAccessories = rollDice(2, 6).filter(r => r >= 4)
        .map(() => randomMath(vehicleAccessoriesArray));
    ;

    const dummyVeh = new Vehicle;
    const vehMods = rollDice(2, 6).filter(r => r >= 4)
        .map(() => randomMath(dummyVeh.mods).name);
    ;

    displayStockResults({
        lootRoll,
        drugRolls,
        weaponRolls,
        moddedMelee,
        specialGun,
        specialAmmo,
        gearRolls,
        vehicleAccessories,
        vehMods
    });
};

function rollDice(amount, faces) {
    return Array.from({ length: amount }, () => Math.floor(Math.random() * faces) + 1);
};

function rollItems(count, array, faces) {
    return Array.from({ length: count }, () => array[rollDice(1, faces)[0] - 1]);
};

function displayStockResults(results) {
    const output = document.createElement('section');
    output.innerHTML = `
        <h2>Stock Hold Results</h2>
        <ul class="ability__sheet__list simple">
            <li><strong>Standard Hold Gear:</strong> ${results.lootRoll}</li>
            <li><strong>Drugs:</strong> ${results.drugRolls.join(", ")}</li>
            ${results.moddedMelee ? `<li><strong>Modded Melee Weapon:</strong> ${results.moddedMelee}</li>` : ''}
            <li><strong>Weapons:</strong> ${results.weaponRolls.join(", ")}</li>
            ${results.specialGun ? `<li><strong>Special Gun:</strong> ${results.specialGun}</li>` : ''}
            ${results.specialAmmo.length ? `<li><strong>Special Ammo:</strong> ${results.specialAmmo.join(", ")}</li>` : ''}
            <li><strong>Wastelander Gear:</strong> ${results.gearRolls.join(", ")}</li>
            ${results.vehicleAccessories.length ? `<li><strong>Vehicle Accessories:</strong> ${results.vehicleAccessories.join(", ")}</li>` : ''}
            ${results.vehMods.length ? `<li><strong>Vehicle Mods:</strong> ${results.vehMods.join(", ")}</li>` : ''}
        </ul>
    `;

    document.getElementById("stock-hold-result").appendChild(output);
    document.getElementById("stock-hold-result").open = true;
    document.getElementById("stock-hold-result").classList.add("active");
    fadeInElements(["stock-hold-result"]);
};

function createMission() {
    const bump = randomMath(bumpInto);
    const mission = randomMath(missions);
    const target = randomMath(targets);
    const dest = randomMath(destinations);

    const temp = randomMath(traps);
    const outcome = temp.outcomes[Math.floor(Math.random() * temp.outcomes.length)];
    const trap = `${temp.name}: ${outcome}`;

    const contend = randomMath(contendArr);

    displayMission({
        bump,
        mission,
        target,
        dest,
        trap,
        contend
    })
};

function displayMission(results) {
    const output = document.createElement('section');
    output.innerHTML = `
        <h2>Random Mission</h2>
        <ul class="ability__sheet__list simple">
            <li><strong>You Bump Into:</strong> ${results.bump}</li>
            <li><strong>Ok, So the Mission Is:</strong> ${results.mission}</li>
            <li><strong>What is ‘It?’:</strong> ${results.target}</li>
            <li><strong> Just Head for:</strong> ${results.dest}</li>
            <li><strong>But Watch Out for:</strong> ${results.trap}</li>
            <li><strong>And You’ll Have to Contend With:</strong> ${results.contend}</li>
        </ul>
    `;

    document.getElementById("stock-hold-result").appendChild(output);
    document.getElementById("stock-hold-result").open = true;
    document.getElementById("stock-hold-result").classList.add("active");
    fadeInElements(["stock-hold-result"]);
};
