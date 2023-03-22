//Caesar Cipher

function en() {
    var txt1 = document.getElementById('text').value;
    var num1 = parseInt(document.getElementById('num').value);
    var enc = document.getElementById("encrypt");
    let txt = txt1;
    var str;
    var res="";
     var list1= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
     var list2= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for (var i = 0; i < txt.length; i++) {

        if(txt[i] == txt[i].toUpperCase()){
            var asciiNum = (txt.charCodeAt(i) -13) % 26;
            str = "";
            let enNum =  asciiNum + num1 + 1;
            if (enNum <=26) {
                    str = list1[enNum-1];
                }
            else if(enNum>26){
                str = list1[enNum-27];
            }    
        }
        else if(txt[i] == txt[i].toLowerCase()){
            var asciiNum = (txt.charCodeAt(i) -19) % 26;
            str = "";
            let enNum =  asciiNum + num1 + 1;
            if (enNum <=26) {
                str = list2[enNum-1];
            }
            else if(enNum>26){
                str = list2[enNum-27];
            }
        }
        res += str;    
        }
        enc.value=res;
    }    

    function de() {
    var txt = document.getElementById('txt').value;
    var num1 = parseInt(document.getElementById('num1').value);
    var enc = document.getElementById("decrypt");
    
    var str;
    var res="";
     var list1= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   var list2= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for (var i = 0; i < txt.length; i++) {
        
        if(txt[i] == txt[i].toUpperCase()){
            var asciiNum = (txt.charCodeAt(i) -13) % 26;
            str = "";
            let enNum =  asciiNum - num1;
            if (enNum >=0) {
                    str = list1[enNum];
                }
            else if(enNum<0){
                str = list1[enNum+26];
            }    
        }
        else if(txt[i] == txt[i].toLowerCase()){
            var asciiNum = (txt.charCodeAt(i) - 19) % 26;
            str = "";
            let enNum =  asciiNum - num1;
            if (enNum >=0) {
                str = list2[enNum];
            }
            else if(enNum<0){
                str = list2[enNum+26];
            }
        }
        res += str;    
        }
        enc.value=res;
    }

