$('#keyboard-upper-container').hide();
//$('#keyboard-lower-container').hide();

$(document).ready(function(){
    $(document).keydown(function(){
        keycode = event.keyCode;
        //console.log(keycode);
        //letter = String.fromCharCode(keycode)
        //console.log(letter)
        if (keycode === 16){
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        } //else {
        //     $('#keyboard-upper-container').hide();
        //     $('#keyboard-lower-container').show()
        // }
    $('#'+keycode).css("background-color", "yellow")
    
    });
     
});

$(document).ready(function(){
    $(document).keyup(function(){
        keycode = event.keyCode;
        if (keycode === 16){
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
         } //else {
        //     $('#keyboard-upper-container').show();
        //     $('#keyboard-lower-container').hide()
        // }
    $('#'+keycode).css("background-color", "")
    });
});

$(document).ready(function(){
     $(document).keypress(function(){
        keycode = event.keyCode
        letter = String.fromCharCode(keycode)
        $('#'+keycode).css("background-color", "yellow")
        
        $('#sentence').text(letter);
    });
});
    
        //letter = String.fromCharCode(keycode)
        //console.log(letter)
            
     

