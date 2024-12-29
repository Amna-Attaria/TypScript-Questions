let guestse : string[] = ["Thomas Edison", "Bill Gates", "Babar Azam", "Mark Zakarbarg"];

console.log("Unfortunately, I can only invite two people for dinner");

// Adding more guests

guestse.unshift("Newton");


while (guestse.length > 2) {
    let removedGuest = guestse.pop();
    console.log( `Sorry ${removedGuest}, I can't invite you to dinner.`);
}

guestse.forEach(guestse => {
    console.log(`Dear ${guestse}, You are still invited to dinner. `);
});

guestse.splice(0, guestse.length );
console.log(guestse)