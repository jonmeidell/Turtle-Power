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
    newDiv.attr('id', characters[click].name);
    newDiv.append("<img src=" + characters[click].image + ">").addClass("card-img");
    car cardBody = $('<div>').addClass("card-body");
    cardBody.append("<h5 class='card-title'>" + characters[click].name + "</h5>");
    cardBody.append("<p class='card-text'>" + characters[click].description + "</p>");
    newDiv.append(cardBody);

    return newDiv;
}

for(var i = 0; i < characters.length; i++) {
    var newDiv = $('<div>').addClass('card bg-secondary');
    newDiv.attr('id', characters[click].name);
    newDiv.append("<img src=" + characters[click].image + ">").addClass("card-img");
    car cardBody = $('<div>').addClass("card-body");
    cardBody.append("<h5 class='card-title'>" + characters[click].name + "</h5>");
    cardBody.append("<p class='card-text'>" + characters[click].description + "</p>");
    cardBody.append("button class='btn btn-primary card-button char-button'> Battle as " = characters[i].name + "<button>");
    newDiv.append(cardBody);


}

var myChar = makeHTML(0);