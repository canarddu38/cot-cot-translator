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
'0': "cooot cooot cooot cooot cooot",
'1': "cot  cooot cooot cooot cooot",
'2': "cot cot cooot cooot cooot",
'3': "cot cot cot cooot cooot",
'4': "cot cot cot cot cooot",
'5': "cot cot cot cot cot",
'6': "cooot cot cot cot cot",
'7': "cooot cooot cot cot cot",
'8': "cooot cooot cooot cot cot",
'9': "cooot cooot cooot cooot cot",
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
    
