hideUpperCase();

var shft = 16;

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate']


var expectedLetter;
var expectedSentence;
var mistakes;

function startGame() {
    expectedLetter = 0;
    expectedSentence = 0;
    mistakes = 0

}
function ready() {
    var start = prompt('Type "start" to begin');
    if (start = "start") {
        startGame()

    };
};

ready();

function showUpperCase() {
    $('#keyboard-upper-container').show();
    $('#keyboard-lower-container').hide();
}

function hideUpperCase() {
    $('#keyboard-upper-container').hide();
    $('#keyboard-lower-container').show();
}

function highLight() {
    $('#' + keyCode).css("background-color", "yellow");
    $(document).keyup(function () {
        $('#' + keyCode).css("background-color", "");
    });
};


function animate() {
    $("#yellow-block").finish().animate({
        left: "+=17.5"
    });
}

$(document).keydown(function () {
    keycode = event.keyCode;
    if (keycode === shft) {
        showUpperCase();
    }
});


$(document).keyup(function () {
    keycode = event.keyCode;
    if (keycode === shft) {
        hideUpperCase();
    }
});

$(document).keypress(function () {
    keyCode = event.keyCode;
    var currentKey = String.fromCharCode(keyCode);
    highLight();
    var currentCharacter = sentences[expectedLetter][expectedSentence];
    if (currentKey === currentCharacter) {
        $('#feedback').append('<i class="glyphicon glyphicon-ok"></i>');
    } else {
        $('#feedback').append('<i class="glyphicon glyphicon-remove"></i>');
    }
});



$('#sentence').text(sentences[0])
$('#target-letter').text(sentences[expectedSentence][expectedLetter]);


