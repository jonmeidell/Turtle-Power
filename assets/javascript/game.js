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

var playerSelected = false;
var charactersDefeated = 0;

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

function resetGame() {
    $('.game-area').empty();
    $('.my-defender').empty();
    $('.attack-area').empty();
    $('.my-character').empty();
    $('.my-enemies').empty();
    playerSelected = false;
    charactersDefeated = 0;

    //reset all characters health

    for (var i = 0; i < characters.length; i++) {

        //Make a col-3 div
        var newDiv = $('<div>').addClass('col-3');
        var header = $('<h5>');
        var imageNew = $('<img src=' + characters[i].image + '>');
        var hpNew = $('<div>').addClass('hp');
        var descriptionNew = $('<div>');
        var apNew = $('<div>').addClass('ap');
        var capNew = $('<div>').addClass('cap');
        var section = $('<section>').attr("id", characters[i].name);
        section.attr('fighter-num', i);
        section.addClass('fighter-num-' + i);
        section.addClass('player-card');
        header.html(characters[i].name);
        hpNew.html("Health: " + characters[i].hp);
        apNew.html("Attack: " + characters[i].ap);
        capNew.html("Counter-attack: " + characters[i].cap);
        descriptionNew.html(characters[i].description);
        section.append(header, imageNew, hpNew, apNew, capNew, descriptionNew);
        //call makeHTML(i) and add a class to listen for
        makeHTML(i);
        newDiv.addClass("chosenA");
        //append that new col-3 div to game-area
        $(".game-area").append(section);
    }
}

resetGame();

$(document).on("click", ".game-area section", function () {
    if (playerSelected === false) {
        $(".my-character").append($(this));
        playerSelected = true;
        for (i = 0; i < characters.length; i++) {
            if (characters[i].name != $(this).attr("id")) {
                var className = characters[i].name;
                var moveChar = $("#" + className);
                console.log(moveChar);
                $(".my-enemies").append($("#" + className));
                console.log(className);
            }
        }
    }
});

$(document).on("click", ".my-enemies section", function () {
    console.log($(this));
    if ($(".my-defender *").length == 0) {
        console.log('test');
        $(".my-defender").append($(this));
        var attackButton = $('<button class="button glow-button">');
        $(".attack-area").append(attackButton);
        attackButton.html("Attack");
    } else {
    }
});

$(document).on("click", ".attack-area button", function() {
    //get our char
    var chosenChar = $('.my-character section').attr('fighter-num');
    // get our enemy
    var enemyChar = $('.my-defender section').attr('fighter-num');
    attack(characters[chosenChar], characters[enemyChar]);
});

function attack(char, enemy) {
    charHP = $('#' + char.name + ' .hp').html().replace(/[^\d.]/g, '');
    enemyHP = $('#' + enemy.name + ' .hp').html().replace(/[^\d.]/g, '');
    charAP = $('#' + char.name + ' .ap').html().replace(/[^\d.]/g, '');
    charAP += 5;
    // trying to increase attack power with each attack, doesn't seem to be working
    if (charHP > 0 && enemyHP > 0) {
        charHP -= enemy.cap;
        enemyHP -= char.ap;

    // trying to increase attack power with each attack, doesn't seem to be working
        $('#' + char.name + ' .hp').html("Health: " + charHP);
        $('#' + enemy.name + ' .hp').html("Health: " + enemyHP);
    }

    if (charHP <= 0) {
        alert("You lose!");
        resetGame();
    }

    // char is out of hp
    if (enemyHP <= 0) {
        charactersDefeated++;
        $('.my-defender').empty();
        $('.attack-area').empty();
    }

    if (charactersDefeated === 3) {
        //add to game-area "You defeated your brothers!"
        document("You defeated your brothers!");
    }
    // if charactersDefeated === 3, we've won the whole game
}

var resetButton = $('<button class="button glow-button">');
$(".reset").append(resetButton);
resetButton.html("Return to the sewer!");
//$document.getElementById("Return to the sewer!").onclick = function(){
//    resetGame();
$(document).on("click", "Return to the sewer!", function(){
    resetGame();    
});