var word = ""
let curr = document.getElementById("curr")


document.body.onkeydown = function(e){
    if(e.keyCode == 32 || e.key === ' '){
        word = document.getElementById("field").value
        document.getElementById("field").value = " "
    	$('#full').append(document.createTextNode(word));
    	wrapUp($('#full'), $('#curr'))
    	wrapUp($('#full'), $('#curr'))
    }
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function wrapUp(element, curr){

	console.log('starting')

    string = (element.text() + ' ' + curr.text()).split('');
    element.text('');
    reversed = string.reverse();
    var height = 0;
    for (var i=0;i<reversed.length;i++){
        element.text(element.text()+reversed[i]);
        if (height != element.height()){
            reversed.splice(i,0,"<br/>");
            i++;
        }
        height = element.height();
        console.log(element.height());
    }
    //console.log(reversed);
    if (reversed[0] == ' '){
    	reversed.shift();
    }
    reversed.shift();
    extra = reversed.reverse().join('')
    regCurrText = curr.text().split('').join('(<br/>)*')
    proper = extra.replace(new RegExp(escapeRegExp(curr.text() + '$'), '')
    stripped = proper.replace(/\s+$/, '');
    //console.log(stripped)
    element.html(stripped)
    console.log('finished!')
}