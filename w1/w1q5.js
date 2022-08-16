// برنامه ای بنویسید که یک رشته به عنوان ورودی می گیرد و روی آن عمل swap the case of each character را اعمال میکند. به عنوان مثال 'The Quick Brown Fox' باید به 'tHE qUICK bROWN fOX' تبدیل شود.

const str = 'The Quick Brown Fox'

/********raveshe 1********/
function swapCase(str) {
    var newTxt = ""
    for(var i = 0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            newTxt += str[i].toUpperCase()
        }
        else {
            newTxt += str[i].toLowerCase()
        }
    }
    return newTxt
}

console.log(swapCase(str))

/********raveshe 2********/
function swap(str) {
    let newTxt = '';
    str.split('').map(e => {
        if (e == e.toUpperCase()) {
            newTxt += e.toLowerCase()
        } 
        else {
            newTxt += e.toUpperCase()
        }
    });
    return newTxt
}

console.log(swap(str))