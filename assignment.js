//kilometerToMeter function start
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(20);
console.log(result);
///kilometerToMeter function end



//budgetCalculator start
function budgetCalculator(watch, phone, laptop) {
    var watchCount = watch * 5;
    var phoneCount = phone * 5;
    var laptopCount = laptop * 5;
    var totalCost = watchCount + phoneCount + laptopCount
    return totalCost;

}
var totalCost = budgetCalculator(50, 100, 500)
console.log(totalCost);
//budgetCalculator end



//hotelCoast start
function hotelCost(duration) {
    if (duration <= 10) {
        cost = duration * 100
    }
    else if (duration <= 20) {
        var fristPart = 10 * 100;
        var remanig = duration - 10;
        var sceondPart = remanig * 80;
        duration = fristPart + sceondPart;

    }
    else {
        var fristPart = 10 * 100;
        var sceondPart = 10 * 80;
        var remanig = duration - 20;
        var thirdPart = remanig * 50;
        duration = fristPart + sceondPart + thirdPart;

    }
    return duration;
}
var cost = hotelCost(25);
console.log(cost);
// end hotelCost function




//megaFriend start
function megaFriend(names) {
    var arry = names[0];
    for (var i = 0; i < names.length; i++) {
        var arry = names[i];
        if (names.length < arry.length) {

        }

    }
    return arry;

}
var names = ['Rofiq', 'Sofiq', 'Salam', 'Borkot', 'Zobbar', 'Jovanabrar']
var big = megaFriend(names);
console.log(big);

    // end megaFriend function