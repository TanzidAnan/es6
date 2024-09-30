function greeting(greetingHenler,name) {
    greetingHenler(name);
}

function greetingHenler(name){
    console.log('good morning,',name)
}

function greetingEvening(name){
     console.log('good Evening',name)
}

greeting(greetingHenler,'Tanzid')
greeting(greetingEvening, "marzan")