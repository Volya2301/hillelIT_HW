let dragonInfo = {
    name: "Ansur",
    size: "huge",
    type: "Undead",
    getInfo: function(){
        let info = "";
        for (let element in this) {
            if (element !== 'getInfo') {
                info += element + ': ' + this[element] + '\n';
            }
        }
        return info;
    }
};
//dragonInfo.homeTown = "Baldur\'s Gate"
console.log(dragonInfo.getInfo());