const dico = {
'a': "cot cooot",
'b': "cooot cot cot cot",
'c': "cooot cot cooot cot",
'd': "cooot cot cot",
'e': "cot",
'f': "cot cot cooot cot",
'g': "cooot cooot cot",
'h': "cot cot cot cot",
'i': "cot cot",
'j': "cot cooot cooot cooot",
'k': "cooot cot cooot",
'l': "cot cooot cot cot",
'm': "cooot cooot",
'n': "cooot cot",
'o': "cooot cooot cooot",
'p': "cot cooot cooot cot",
'q': "cooot cooot cot cooot",
'r': "cot cooot cot",
's': "cot cot cot",
't': "cooot",
'u': "cot cot cooot",
'v': "cot cot cot cooot",
'w': "cot cooot cooot",
'x': "cooot cot cot cooot",
'y': "cooot cot cooot cooot",
'z': "cooot cooot cot cot",
" ": "cotcotcotcot"};

function fr_to_cot(text) {
    text=text.toLowerCase();
    outp="";
    for (let i = 0; i < text.length; i++) {
        char = text[i];
        if(char in dico) {
            outp+=dico[char];
            if(i!=text.length-1) {
                outp+="...";
            }
        } else {
            console.error("char '"+char+"' does not exists");
        }
        
    }
    return outp;
}

function cot_to_fr(text) {
    text=text.toLowerCase();
    outp="";
    a = text.split("...");
    for (let i = 0; i < a.length; i++) {
        char = a[i];
        if(Object.values(dico).includes(char)) {
            outp+=Object.keys(dico)[Object.values(dico).indexOf(char)];
            } else {
                console.error("char '"+char+"' does not exists");
                }
                }
                return outp;
}

// console.log("Français => cot cot");
// phrase = "Coucou maman";
// console.log(fr_to_cot(phrase));
    