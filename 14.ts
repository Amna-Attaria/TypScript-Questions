let guests : string[] = ["Thomas Edison", "Bill Gates", "Babar Azam", "Mark Zakarbarg"];

guests.forEach(guests => {
    console.log(`Dear ${guests} Would you like to Join me for Dinner?`);
});

let unableToAttend: string = "Thomas Edison";
console.log(`${unableToAttend} can't Make it to Dinner.`);

// Replace The guest
let newGuest: string = "Shadab Khan";

guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guests => {
    console.log(`Dear ${guests}, Would you like to join me for Dinner`);
});
