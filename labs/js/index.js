var textarea = document.getElementById("command");

textarea.onfocus = function() {
    moveCaretToEnd(textarea);

    // Work around Chrome's little problem
    window.setTimeout(function() {
        moveCaretToEnd(textarea);
    }, 1);
};

$(document).keypress(function(e) {
    if(e.which == 13) {
        var lines = $('textarea').val().split('\n');
        for(var i = 0;i < lines.length;i++){
            if(lines[i].indexOf('open circlegen') !== -1){
                window.open("http://tristanwiley.com/labs/circle/", '_blank');
            }
        }
    }
});

function moveCaretToEnd(el) {

    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length -1;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}
