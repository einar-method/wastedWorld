class Vehicle {
    constructor() {
        this.class = [
            {
                name: "Light",
                description: "Motorcycle, ATV, Buggy - Outrun or catch Medium vehicles. 3 strikes to wreck. Structure Save 6",
                hasIt: false
            },
            {
                name: "Medium",
                description: "Car or Small SUV - Outrun or catch Heavy vehicles. 4 strikes to wreck. Structure Save 5+",
                hasIt: false
            },
            {
                name: "Heavy",
                description: "Pickup, Van, or Large SUV - Outrun or catch Superheavy vehicles. 6 strikes to wreck. Structure Save 5+",
                hasIt: false
            },
            {
                name: "Superheavy",
                description: "Semi or Bus - Cannot outrun any other class of vehicles. 10 strikes to wreck! Structure Save 4+",
                hasIt: false
            },
            {
                name: "Heavy Metal",
                description: "Only a handful of these war machines have actually survived the apocalypse intact. These bad boys require a solid support structure, loads of fuel, and a crew of skilled operators.",
                hasIt: false
            }
        ];
        this.passengerCount = null;
        this.isWrecked = false;
        this.strikes = null;
        this.saveValue = null;
        this.mnvRoll = null;
        this.mnvDifficulty = null;
        this.rammage = null;
        this.lds = null;
        this.name = null;
        this.mods = [
            {
                name: "Reinforced Frame",
                description: "If a vehicle is wreck’d, passengers roll Sure Death Save with a boon. (Car, SUV, Truck, Van, Semi, or Bus only)",
                hasIt: false
            },
            {
                name: "Welded Armor",
                description: "Once per round, reroll a failed Structure Save. Roll 1D6, and if a 6 is rolled, the save succeeds.",
                hasIt: false
            },
            {
                name: "Juiced",
                description: "Outrun or catch vehicles in the same or next lower class. Boon to ‘catching air’ maneuvers.",
                hasIt: false
            },
            {
                name: "Tire Grips",
                description: "Tires provide a boon to maneuvers.",
                hasIt: false
            },
            {
                name: "Spiked Body",
                description: "Anyone leaping on the vehicle is hit on a 4+ and takes a strike. (Car, SUV, Truck, Van, Semi, or Bus only)",
                hasIt: false
            },
            {
                name: "Heavy Machine Gun Mount",
                description: "Shoot at near range; rapid fire for 2 strikes. Crits on 2D6. Exposed gunner. (Car, Truck, Semi, or Bus only)",
                hasIt: false
            },
            {
                name: "Reinforced Ram",
                description: "Re-roll one die of rammage with a successful ram. (Car, SUV, Truck, Van, Semi, or Bus only)",
                hasIt: false
            },
            {
                name: "Powered Winch",
                description: "100 feet of metal cable for pulling vehicles or heavy objects. (Car, SUV, Truck, Van, Semi, or Bus only)",
                hasIt: false
            },
            {
                name: "Smokescreen",
                description: "Oily black smoke blinds pursuers for a round. Bane to enemy maneuvers or attacks. (Single use, recharge at Hold)",
                hasIt: false
            },
            {
                name: "Killjacks",
                description: "Caltrops shred tires of near-range pursuers. MvR 6 to avoid or face LDS. (Single use, refill at Hold)",
                hasIt: false
            },
            {
                name: "Rigged to Blow",
                description: "Vehicle detonates if switches fail. Passengers must save or die. (Use grenade rules for nearby enemies)",
                hasIt: false
            },
            {
                name: "Hellfire Roaster",
                description: "Undercarriage flame thrower. Enemies must MvR 5+ or catch fire. (Single use, refuel at Hold)",
                hasIt: false
            },
            {
                name: "Boom Spear",
                description: "Explosive lance for near-range attacks. Inflicts 2 strikes. (Single use)",
                hasIt: false
            },
            {
                name: "Trailer",
                description: "Hauls extra cargo but gives a bane to maneuvers.",
                hasIt: false
            },
            {
                name: "Steering Wheel Lock Bar",
                description: "Prevents vehicle theft or unauthorized driving.",
                hasIt: false
            }
        ];
        this.description = null;
        this.notes = null;  
        this.equipment = [];
        this.isActive = false;
    }

    getTypeName() {
        return this.class.find(obj => obj.hasIt == true).name;
    }
};

class Garage {
    constructor() {
        this.light = [];
        this.med = [];
        this.heavy = [];
        this.super = [];
        this.metal = [];
        this.current = null;
        this.init();
    }

    init() {
        this.createDefaultVehicles();
    }

    reset() {
        const defaults = new Garage();
        Object.assign(this, defaults);
        this.updateDisplay();
    };

    getAllVeh() {
        return [...this.light, ...this.med, ...this.heavy, ...this.super, ...this.metal];
    }

    rollRndVeh() {
        const metalChance = Math.random() < 0.0001 ? this.metal : [];
        this.current = randomMath([...this.light, ...this.med, ...this.heavy, ...this.super, ...metalChance]);
        console.log("Random vehicle picked:", this.current);
        this.updateDisplay();
    }

    rollRndMod() {
        if (!this.current || !this.current.mods) return; //not needed error check?

        const availableMods = this.current.mods.filter(mod => !mod.hasIt);
        if (availableMods.length === 0) {
            callError("There are no more mods available.");
            return;
        }
        // The check above is crucial to avoid infinite feedback

        runNoReturnArrLoop(1, this.current.mods);
    
        
    
        // const randomIndex = Math.floor(Math.random() * availableMods.length);
        // console.log(availableMods[randomIndex])

        // this.current.mods[randomIndex].hasIt = true;
        // console.log(this.current.mods[randomIndex]);
        this.updateDisplay();
    }
    

    createDefaultVehicles() {
        //const vehicles = [];
    
        const vehicleData = [
            {
                name: "Motorcycle or ATV",
                strikes: 3,
                saveValue: 6,
                passengerCount: "Driver and 1 passenger",
                rammage: "1D3",
                classType: "Light",
                description: "Open topped."
            },
            {
                name: "Buggy",
                strikes: 3,
                saveValue: 6,
                passengerCount: "Driver and 3 passengers",
                rammage: "1D3",
                classType: "Light",
                description: "Open topped."
            },
            {
                name: "Car",
                strikes: 4,
                saveValue: "5+",
                passengerCount: "Driver and 3-4 passengers",
                rammage: "1D6",
                classType: "Medium",
                description: "Space for a machine gun instead of a back seat; lose 2 passengers."
            },
            {
                name: "SUV",
                strikes: 6,
                saveValue: "5+",
                passengerCount: "Driver and 5 passengers",
                rammage: "2D3",
                classType: "Heavy",
                description: "Driver and 5 passengers."
            },
            {
                name: "Truck",
                strikes: 6,
                saveValue: "5+",
                passengerCount: "Driver and 5-6 passengers",
                rammage: "2D3",
                classType: "Heavy",
                description: "Bed is open topped. Space for a mounted machine gun in the truck bed; lose 3 passengers."
            },
            {
                name: "Bus",
                strikes: 10,
                saveValue: 4,
                passengerCount: "Driver and up to 80 passengers",
                rammage: "2D6",
                classType: "Superheavy",
                description: "Space for a mounted machine gun on the roof."
            },
            {
                name: "18 Wheeler",
                strikes: 10,
                saveValue: 4,
                passengerCount: "Driver and 3 passengers",
                rammage: "2D6",
                classType: "Superheavy",
                description: "Trailer that can hold 25+ passengers or a huge amount of cargo space for a mounted machine gun on the roof of a hauled trailer."
            },
            // Heavy Metal Vehicles
            {
                name: "APC",
                strikes: 8,
                saveValue: 4,
                passengerCount: "Driver, gunner, and up to 10 passengers",
                rammage: "2D6",
                classType: "Heavy Metal",
                description: "Armed with an Annihilator Scatter Pulser."
            },
            {
                name: "Tank",
                strikes: 12,
                saveValue: 3,
                passengerCount: "4: Driver, commander, main gunner, and top gunner",
                rammage: "3D6",
                classType: "Heavy Metal",
                description: "Maxim Cannon and Annihilator Scatter Pulser"
            }
        ];
    
        vehicleData.forEach(data => {
            const vehicle = new Vehicle();
            vehicle.name = data.name;
            vehicle.strikes = data.strikes;
            vehicle.saveValue = data.saveValue;
            vehicle.passengerCount = data.passengerCount;
            vehicle.rammage = data.rammage;
            vehicle.description = data.description;

            const vehicleClass = vehicle.class.find(c => c.name === data.classType);
            if (vehicleClass) {
                vehicleClass.hasIt = true;
                
                switch (data.classType) {
                    case "Light":
                        this.light.push(vehicle);
                        break;
                    case "Medium":
                        this.med.push(vehicle);
                        break;
                    case "Heavy":
                        this.heavy.push(vehicle);
                        break;
                    case "Superheavy":
                        this.super.push(vehicle);
                        break;
                    case "Heavy Metal":
                        this.metal.push(vehicle);
                        break;
                }
            }            
    
            // const vehicleClass = vehicle.class.find(c => c.name === data.classType);
            // if (vehicleClass) vehicleClass.hasIt = true;
    
            // vehicles.push(vehicle);
            
        });
    
        //return vehicles;
    };

    updateDisplay() {
        if (!this.current) {
            // Reset Vehicle Stats to default
            document.getElementById("vehNameDef").value = "";
            // document.getElementById("vehNameDef").innerHTML = `<strong>Name: </strong>`;
            document.getElementById("vehTypeDef").innerHTML = `<strong>Type: </strong>`;
            document.getElementById("psgCountDef").innerHTML = `<strong>Passengers: </strong>`;
            document.getElementById("vehStrikesDef").innerHTML = `<strong>Strikes: </strong>`;
            document.getElementById("vehStrcSaveDef").innerHTML = `<strong>Structure Save: </strong>`;
            document.getElementById("vehramDef").innerHTML = `<strong>Rammage: </strong>`;

            document.getElementById("veh-notes").value = "";
    
            // Reset Mods Section
            const modList = document.getElementById("vehMods-list");
            modList.innerHTML = "<li>First, create a Vehicle</li>";
    
            return;
        }
    
        // Update Vehicle Type and Description
        //document.getElementById("vehTypeText").textContent = this.current.name || "Choose a premade or random (🎲) vehicle";
        document.getElementById("veh-notes").value = this.current.description || "";
    
        // Update Vehicle Stats
        document.getElementById("vehNameDef").value = this.current.name;
        // document.getElementById("vehNameDef").innerHTML = `<strong>Name: </strong>${this.current.name || "Choose a premade or random (🎲) vehicle"}`;
        document.getElementById("vehTypeDef").innerHTML = `<strong>Type: </strong>${this.current.getTypeName() || "N/A"}`;
        document.getElementById("psgCountDef").innerHTML = `<strong>Passengers: </strong>${this.current.passengerCount || "N/A"}`;
        document.getElementById("vehStrikesDef").innerHTML = `<strong>Strikes: </strong>${this.current.strikes || "N/A"}`;
        document.getElementById("vehStrcSaveDef").innerHTML = `<strong>Structure Save: </strong>${this.current.saveValue || "N/A"}`;
        //document.getElementById("vehMnvRollDef").innerHTML = `<strong>Maneuver Roll: </strong>${this.current.mnvRoll || "N/A"}`;
        document.getElementById("vehramDef").innerHTML = `<strong>Rammage: </strong>${this.current.rammage || "N/A"}`;
        //document.getElementById("vehLdsDef").innerHTML = `<strong>Last Ditch Save (LDS): </strong>${this.current.lds || "N/A"}`;
    
        // Update Vehicle Mods
        const modList = document.getElementById("vehMods-list");
        modList.innerHTML = "";  // Clear current list
    
        const activeMods = this.current.mods.filter(mod => mod.hasIt);
        if (activeMods.length > 0) {
            activeMods.forEach(mod => {
                const li = document.createElement("li");
                li.textContent = mod.name;
                modList.appendChild(li);
            });
        } else {
            modList.innerHTML = "<li>No active mods</li>";
        }
    }    
};

const garage = new Garage;
//console.log("All vehicles:", garage.getAllVeh().map(v => v.name).join(", "));

//const defaultVehicles = createDefaultVehicles();
//console.log(defaultVehicles);