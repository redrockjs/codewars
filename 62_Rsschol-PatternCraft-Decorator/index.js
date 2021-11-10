class Marine {
    constructor(_damage, _armor) {
        this.damage = _damage || 0;
        this.armor = _armor || 0;
    }
}

class MarineWeaponUpgrade {
    constructor(marine) {
        this.damage = marine.damage + 1;
        this.armor = marine.armor;
    }
}

class MarineArmorUpgrade {
    constructor(marine) {
        this.damage = marine.damage;
        this.armor = marine.armor + 1;
    }
}


// TASK
// The Decorator Design Pattern can be used, for example, in the StarCraft game to manage upgrades.
//
// The pattern consists in "incrementing" your base class with extra functionality.
//
// A decorator will receive an instance of the base class and use it to create a new instance with the new things you want "added on it".
//
// Your Task
// Complete the code so that when a Marine gets a WeaponUpgrade it increases the damage by 1, and if it is a ArmorUpgrade then increase the armor by 1.
//
// You have 3 classes:
//
// Marine: has a damage and an armor properties
// MarineWeaponUpgrade and MarineArmorUpgrade: upgrades to apply on marine. Accepts a Marine in the constructor and has the same properties as the Marine

//TEST
// describe('Decorator', () => {
//   it('Single upgrade', () => {
//     let marine = new Marine(10, 1);
//
//     Test.assertEquals(new MarineWeaponUpgrade(marine).damage, 11);
//     Test.assertEquals(new MarineWeaponUpgrade(marine).damage, 11);
//   });
//
//   it('Double upgrade', () => {
//     let marine = new Marine(15, 1);
//     marine = new MarineWeaponUpgrade(marine);
//     marine = new MarineWeaponUpgrade(marine);
//
//     Test.assertEquals(marine.damage, 17);
//   });
//
//   it('Triple upgrade', () => {
//     let marine = new Marine(20, 1);
//     marine = new MarineWeaponUpgrade(marine);
//     marine = new MarineWeaponUpgrade(marine);
//     marine = new MarineWeaponUpgrade(marine);
//
//     Test.assertEquals(marine.damage, 23);
//   });
// });