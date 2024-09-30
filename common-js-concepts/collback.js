function greeting(greetingHenler) {
    console.log(greetingHenler())
}

function greetingHenler(){
    console.log('good morning')
}

greeting(greetingHenler)