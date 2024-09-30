function greeting(greetingHenler,name) {
    greetingHenler(name);
}

function greetingHenler(name){
    console.log('good morning,',name)
}

greeting(greetingHenler,'Tanzid')