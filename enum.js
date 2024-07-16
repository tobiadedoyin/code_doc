var floor;
(function (floor) {
    floor[floor["First"] = 80] = "First";
    floor[floor["Second"] = 81] = "Second";
    floor[floor["Third"] = 82] = "Third";
    floor[floor["Fourth"] = 83] = "Fourth";
})(floor || (floor = {}));
console.log(floor.Third);
