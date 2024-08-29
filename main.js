// Made By BRD
const ids = [1, 2, 3, 4, 5] // IDs
const writter = ['Simon Sinek', 'J. Clark Scott', 'Robert Cecil Martin', 'Peter Thiel', 'Kyle Simpson']
const names = ['Start with why', 'But how do it know', 'Clean Code', 'Zero to One', 'You dont know JS']
let prices = [80.0, 59.9, 50.0, 45.0, 39.9]
let stock = [13, 22, 5, 12, 9]

function bookstore(num){
    switch(num){
        case 1:
            console.log('ID : ',ids[0])
            console.log('Author : ',writter[0])
            console.log('Title : ',names[0])
            console.log('Price : ',prices[0])
            console.log('Quantity : ',stock[0])
            break
        case 2:
            console.log('ID : ',ids[1])
            console.log('Author : ',writter[1])
            console.log('Title : ',names[1])
            console.log('Price : ',prices[1])
            console.log('Quantity : ',stock[1])
            break
        case 3:
            console.log('ID : ',ids[2])
            console.log('Author : ',writter[2])
            console.log('Title : ',names[2])
            console.log('Price : ',prices[2])
            console.log('Quantity : ',stock[2])
            break
        case 4:
            console.log('ID : ',ids[3])
            console.log('Author : ',writter[3])
            console.log('Title : ',names[3])
            console.log('Price : ',prices[3])
            console.log('Quantity : ',stock[3])
            break
        case 5:
            console.log('ID : ',ids[4])
            console.log('Author : ',writter[4])
            console.log('Title : ',names[4])
            console.log('Price : ',prices[4])
            console.log('Quantity : ',stock[4])
            break
        default:
            console.log('Not Founded')
            break
        case 0:
            console.log('Not Included')
            break
    }
}

let num = null // Put The Book ID Here! AND RUN

bookstore(num)