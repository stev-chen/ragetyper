var word = ""
let curr = document.getElementById("curr")


document.body.onkeydown = function(e){
    if(e.keyCode == 32 || e.key === ' '){
        word = document.getElementById("field").value
        document.getElementById("field").value = ""
    	$('#full').append(document.createTextNode(word));
    }
}

$(function() {
    $(".title").each(function(i,title) {
        var width = 0;
        var originalHeight = $(title).height();
        var spacer = $('<span style="float:right;height:1px;"/>').prependTo(title);
        while (originalHeight == $(title).height()) {
            spacer.width( ++width );
        }
        spacer.width( --width );
    });
});