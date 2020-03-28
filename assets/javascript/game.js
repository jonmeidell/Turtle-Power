var characters = [
    {
        name: 'Leonardo',
        image: 'assets/images/leonardo.jpg',
        description: "Well-rounded, strong",
        hp: 200,
        ap: 40,
        cap: 45,
    },
    {
        name: 'Raphael',
        image: 'assets/images/raphael.jpg',
        description: "Very high strength",
        hp: 180,
        ap: 50,
        cap: 30,
    },
    {
        name: 'Michaelangelo',
        image: 'assets/images/michelangelo.jpg',
        description: "Well-rounded, can take a hit",
        hp: 220,
        ap: 35,
        cap: 40,
    },
    {
        name: 'Donatello',
        image: 'assets/images/donatello.jpg',
        description: "High defense",
        hp: 260,
        ap: 30,
        cap: 45,
    },
];

function makeHTML(click) {
    var newDiv = $('<div>').addClass('card bg-secondary');
    newDiv.attr('id', click);
    newDiv.append("<img src=" + characters[click].image + ">").addClass("card-img");
    var cardBody = $('<div>').addClass("card-body");
    cardBody.append("<h5 class='card-title'>" + characters[click].name + "</h5>");
    cardBody.append("<p class='card-text'>" + characters[click].description + "</p>");
    //Show Hp value
    newDiv.append(cardBody);

    return newDiv;
}

for(var i = 0; i < characters.length; i++) {
    //Make a col-3 div
    var newDiv = $('<div>').addClass('col-3');
    var header = $('<h5>');
    var imageNew = $('<img src=' + characters[i].image + '>');
    var hpNew = $('<div>').addClass('hp');
    var descriptionNew = $('<div>');
    var section = $('<section>').addClass(characters[i].name);
    header.html(characters[i].name);
    hpNew.html(characters[i].hp);
    descriptionNew.html(characters[i].description);
    section.append(header, hpNew, imageNew, descriptionNew);

    //call makeHTML(i) and add a class to listen for
    makeHTML(i);
    newDiv.addClass("chosenA");
    //append that new col-3 div to game-area
    $(".game-area").append(section);
}

//Look up $(document).on('click, ".class", function() {}) vs normal listener $(.class).on('click, function(){})

//We need a way to listen for when a character is clicked on initally and make them our character and the rest our enemies

    //assign our character to a var(probably global)
//document.getElementById("chosenA").addEventListener("click", chosenB);
    //push the rest into an enemy array
//chosenB.push(enemyChoice);
    //add new class to our char and new class to enemies//
//$().addClass('');

$('.game-area section').click(function(){
    if ($(".my-character *").length== 0){
        $(".my-character").append($(this));
       
       
       /* var attackButton = $('<button>');
        $(".attack-area").append(attackButton);
        attackButton.html("Attack"); */ 
   // } else {
        for (i = 0; i < characters.length; i++) {
            if (characters[i].name != $(this).attr("class")){
                var className = characters[i].name;
                var moveChar = $("."+className);
                console.log(moveChar);
                $(".my-enemies").append($("." + className));
                console.log(className);
            }
        }

     }

});

$(document).on("click", ".my-enemies section", function(){
    console.log($(this));
    if ($(".my-defender *").length == 0){
        console.log('test');
        $(".my-defender").append($(this));

    }
});

// once defender is chosen, then write the new attack button
// rearrange html
// click event for attack button










    //display all of these changes to the DOM(use makeHTML function to do this)

//We need another listeren for our enemies and make them the defender only if there isn't one currently
    //check our global boolean haveDefender
        //assign enemy selected as defender
        //remove the enemy from our enemy array
        //empty the enemies area in the dom and recreate it without the new defender
        // $(this) --grabs the html that was clicked
        //look up .detach() method for jQuery(optional to the above line) ----IMPORTANT TO MOVING HTML AROUND
        //append our new defender to dom
    //else do nothing or alert the user

//We need an attack button listerne that will handle all of our game logic
var attackButton = document.createElement("Attack");
    //use have Defender here again
    //how do we lose
var wins = 0;

function gameState() {
    if (chosenA.hp > 0) {
        console.log(hp);
        wins++;
    } else if (chosenA.hp <= 0) {
        console.log("You lose");
        //show reset button
    }
    //how do we win
        //no more enemies to fight
    if (wins >= 3) {
        console.log("You're Winner!");
    }
}


//create on click attack

//select fighter
    //return to attack div
// attacker $('<div>');
    //remove
    //We need a way to reset the game
var resetButton = document.createElement("Return to the sewer");

//attack

//select defender