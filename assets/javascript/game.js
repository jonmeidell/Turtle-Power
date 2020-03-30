var characters = [
    {
        name: 'Leonardo',
        image: 'assets/images/leonardo.jpg',
        description: "Well-rounded, strong",
        hp: 400,
        ap: 40,
        cap: 40,
    },
    {
        name: 'Raphael',
        image: 'assets/images/raphael.jpg',
        description: "Very high strength",
        hp: 380,
        ap: 50,
        cap: 30,
    },
    {
        name: 'Michaelangelo',
        image: 'assets/images/michelangelo.jpg',
        description: "Well-rounded, can take a hit",
        hp: 420,
        ap: 35,
        cap: 35,
    },
    {
        name: 'Donatello',
        image: 'assets/images/donatello.jpg',
        description: "High defense",
        hp: 460,
        ap: 30,
        cap: 40,
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
    newDiv.append(cardBody);

    return newDiv;
}

function resetGame() {
    $('.game-area').empty();
    $('.my-defender').empty();
    $('.attack-area').empty();
    $('.my-character').empty();
    $('.my-enemies').empty();
    $('#win').empty();
    playerSelected = false;
    charactersDefeated = 0;


    for (var i = 0; i < characters.length; i++) {
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
        makeHTML(i);
        newDiv.addClass("chosenA");
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
                $(".my-enemies").append($("#" + className));
            }
        }
    }
});

$(document).on("click", ".my-enemies section", function () {
    if ($(".my-defender *").length == 0) {
        $(".my-defender").append($(this));
        var attackButton = $('<button class="button container-fluid glow-button col-md-3">');
        $(".attack-area").append(attackButton);
        attackButton.html("Attack");
    } else {
    }
});

$(document).on("click", ".attack-area button", function () {
    // get our char
    var chosenChar = $('.my-character section').attr('fighter-num');
    // get our enemy
    var enemyChar = $('.my-defender section').attr('fighter-num');
    attack(characters[chosenChar], characters[enemyChar]);
});

function attack(char, enemy) {

    charHP = $('#' + char.name + ' .hp').html().replace(/[^\d.]/g, '');
    enemyHP = $('#' + enemy.name + ' .hp').html().replace(/[^\d.]/g, '');
    charAP = $('#' + char.name + ' .ap').html().replace(/[^\d.]/g, '');
    // charAP was a string
    charAP = Number(charAP) + 10;
    // changing string to integer
    $('#' + char.name + ' .ap').html("Attack: " + charAP);
    // trying to increase attack power with each attack, doesn't seem to be working
    if (charHP > 0 && enemyHP > 0) {
        charHP -= enemy.cap;
        enemyHP -= charAP;
        $('#' + char.name + ' .hp').html("Health: " + charHP);
        $('#' + enemy.name + ' .hp').html("Health: " + enemyHP);
    }

    if (charHP <= 0) {
        alert("You lose!");
        resetGame();
    }

    if (enemyHP <= 0) {
        charactersDefeated++;
        $('.my-defender').empty();
        $('.attack-area').empty();
    }

    if (charactersDefeated === 3) {
        $("#win").text("You defeated your brothers!")
    }
}

var resetButton = $('<button class="button glow-button">');
$(".reset").append(resetButton);
resetButton.html("Return to the sewer!");
$(document).on("click", ".reset button", function () {
    resetGame();
});