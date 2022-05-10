let first = prompt('What can i do for you');
let arr = [];
while (first != 'q') {

    if (first === 'q') {
        break;


    }


    if (first === 'new') {
        let val = prompt('Enter the todo task');
        arr.push(val);


    }

    else if (first === 'list') {
        for (let i = 0; i < arr.length; i++) {
            console.log(`index:${i} and value  ${arr[i]}`);
        }


    }
    else if (first === 'd') {
        let del = parseInt(prompt('enter the index'), 10);
        console.log(arr.splice(del, 1));



    }

    first = prompt('What can i do for you');

}

console.log('loop finished');


