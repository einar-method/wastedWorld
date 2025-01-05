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
        this.notes = null;    
        this.equipment = [];
    }
};