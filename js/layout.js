//Loads the layout JSON
var layoutObject = $.get("../layout.json", function(data) {
    return data;
}, "json");

//Keeping track of information
var lastPlayerCount, lastLayoutStyle;

//Apply CSS styling for each layout
function applyStyle (layoutName, playerCount) {
    //Exit if not changing layouts or number of players
    if (lastPlayerCount === playerCount && lastLayoutStyle === layoutName) return;
    
    const playerLayouts = layoutObject.layouts;
    const currentStyle = playerLayouts.find(layout => layout.title === layoutName);
    
    //Apply CSS for the layout
    for (let i = 1; i <= playerCount; i++) {
        const playerNumber = "player" + i;
        const currentPlayer = currentStyle.playerNumber;
        currentPlayer.forEach(element => {
            const elementName = Object.getOwnPropertyNames(element)[0];
            $(elementName).css(element.elementName);
        });
    }
    
    //Hides extra players for the first applied layout
    if (lastPlayerCount === undefined && playerCount != 4) {
        for (let i = playerCount + 1; i <= 4; i++) {
            const currentPlayer = "runner-details" + i;
            $(currentPlayer).css("display", "none");
        }
    
    //If less players than last time, hide the extra players
    } else if (lastPlayerCount > playerCount) {        
        for (let i = playerCount + 1; i <= lastPlayerCount; i++) {
            const currentPlayer = "runner-details" + i;
            $(currentPlayer).css("display", "none");
        }
        
    //If more players than last time, show the previously hidden players
    } else if (lastPlayerCount < playerCount) {
        for (let i = lastPlayerCount + 1; i <= playerCount; i++) {
            const currentPlayer = "runner-details" + i;
            $(currentPlayer).css("display", "");
        }
    }
    
    //Save information for comparisons
    lastPlayerCount = playerCount;
    lastLayoutStyle = layoutName;
}

//Apply CSS styling common to all layouts
function initialStyle () {
    const layout = layoutObject.common;
    common.forEach(element => {
        const elementName = Object.getOwnPropertyNames(element)[0];
        $(elementName).css(element.elementName);
    });
}