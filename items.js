class Item {
    constructor(name, size, quality, description, type, specialEffects = null, value = 0) {
        this.name = name;
        this.size = size;  // 'Small', 'Normal', 'Large'
        this.quality = quality;  // 'Cobbled', 'Benchmark', 'Status'
        this.description = description;
        this.type = type;  // 'Weapon', 'Armor', 'Gear', 'Potion'
        this.specialEffects = specialEffects;  // Additional perks or bonuses
        this.value = value;  // Wealth value or barter worth
    }

    getSizeSlots() {
        switch (this.size) {
            case 'Small':
                return 0.5;
            case 'Normal':
                return 1;
            case 'Large':
                return 2;
            default:
                return 1;
        }
    }

    getQualityBonus() {
        switch (this.quality) {
            case 'Cobbled':
                return 'May break on critical fail.';
            case 'Benchmark':
                return 'Reliable and durable.';
            case 'Status':
                return 'Grants boon to actions.';
            default:
                return 'Standard quality.';
        }
    }

    describe() {
        return `${this.name} [${this.type}] - ${this.quality} (${this.size}): ${this.description}`;
    }
}

// Example Usage
const pistol = new Item(
    'Cobbled Pistol',
    'Normal',
    'Cobbled',
    'A handgun pieced together from scrap, effective but unreliable.',
    'Weapon',
    { damage: '1d6', crit: '5+' },
    3
);

// console.log(pistol.describe());
// console.log('Size Slots:', pistol.getSizeSlots());
// console.log('Quality Bonus:', pistol.getQualityBonus());