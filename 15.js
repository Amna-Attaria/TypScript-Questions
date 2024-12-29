var guestes = ["Thomas Edison", "Bill Gates", "Babar Azam", "Mark Zakarbarg"];
console.log("Great news! I found a bigger dinner table");
// Adding more guests
guestes.unshift("Newton");
guestes.splice(guestes.length / 2, 0, "Charles");
guestes.push("lovelace");
guestes.forEach(function (guestes) {
    console.log("Dear ".concat(guestes, ", Would you like to join me for Dinner"));
});
