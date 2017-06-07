

function toggleKeyboards(){
    $('#keyboard-upper-container').toggle();
    $('#keyboard-lower-container').toggle();
}

function animate() {
    $("#yellow-block").finish().animate({
        left: "+=17.5"
    });
}

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

var sentenceIndex;
var letterIndex;
var errorCount;
var startTime;

function startGame(){
sentenceIndex = 0;
letterIndex = 0;
errorCount = 0;

};

startGame();
var numberOfWords = 54;
var currentSentence = sentences[sentenceIndex];
var currentLetter = currentSentence.charAt(0);

$('#keyboard-upper-container').hide();
$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);


//event allows us to capture and time stamp an event 
$(document).keydown(function(event){
    //can also use event.shiftKey
    if(event.which === 16){
        // $('keyboard-upper-container').show();
        // $('keyboard-lower-container').hide();
        toggleKeyboards();
    }
});

$(document).keyup(function(event){
    if (event.which === 16){
        // $('keyboard-upper-container').hide();
        // $('keyboard-lower-container').show();
        toggleKeyboards();
    }
    $('.key').removeClass('highlighted');
});
//highlighted created in css
$(document).keypress(function(event){
    event.preventDefault();

    if (!startTime){
        startTime = event.timeStamp;
    }

    $('#' + event.which).addClass('highlighted')
    animate();
    if(event.which === currentLetter.charCodeAt(0)){
        $('#feedback').append('<span class ="glyphicon glyphicon-ok"></span>');
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"><span>')
        errorCount++;
    }

    letterIndex++;

    if (letterIndex === currentSentence.length){//<-if we are at then end of current sentence
        //move on to the next sentence
        sentenceIndex ++;
        $('#yellow-block').finish().css('top', '').css('left', '');
        
            if(sentenceIndex === sentences.length) {//we are out of sentences; done
                var endTime = event.timeStamp;
                var minutes = (endTime - startTime) / 60000;
                $('#feedback').text('You scored ' + Math.round((numberOfWords / minutes) - (2 * errorCount))+ ' words per minute!')
                setTimeout(function(){
                    if(confirm('Would you like to play again?')) {
                            sentenceIndex = 0;
                            letterIndex = 0;
                            currentSentence = sentences[0];
                            currentLetter - currentSentence.charAt(0);
                        $('#sentence').text(currentSentence);
                        $('#target-letter').text(currentLetter);
                        starttime = undefined;
                        $('#feedback').empty();
                    }
                }, 2000);
                // alert('You typed ' +Math.round((numberOfWords / minutes) - (2 * errorCount))+ ' words per minute!')
                // var playAgain = prompt('type yes if you would like to play again ')
                //     if (playAgain = 'yes'){
                //         $('#feedback').empty();
                //         sentenceIndex = 0;
                //         startGame();
                //     }
            } else {
                //there is at least one more sentence
                //move on to the next sentence
                currentSentence = sentences[sentenceIndex];
                $('#sentence').text(currentSentence);
                //reset letter back to the first position
                letterIndex = 0;
                currentLetter = currentSentence.charAt(letterIndex);
                $('#target-letter').text(currentLetter);
                $('#feedback').empty();
            }
    } else {
        currentLetter = currentSentence.charAt(letterIndex);
        $('#target-letter').text(currentLetter);
    }
});


// numberOfWords / minutes - 2 * numberOfMistakes







