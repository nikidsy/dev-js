// // let fullname = "Creu de Jesus"
// // console.log(fullname.split(" "))

// // let arrayString = fullname.split(" ")
// // console.table(arrayString)

// // let arrayCount = arrayString.length
// // console.log(arrayCount);

// // let name = arrayString[0]
// // let lastname = arrayString[arrayCount - 1]

// // function Welcome() {
// //     console.log("Hello World! dentro da função");
    
// // }
// // Welcome()

// // function WelcomeComParams(name) {
// //     console.log(`Olá, ${name}`);
    
// // }

// // WelcomeComParams("Chocolate")

function Welcome(fullname) {
    let arrayString = fullname.split(" ")
    let firstName = arrayString[0]
    let lastName = arrayString[arrayString.length - 1]

    console.log(`Olá, ${firstName} ${lastName}`);
    
    
}

Welcome("Nikollas Oliveira dos Santos")
Welcome("Cleo de Jesus Silva")