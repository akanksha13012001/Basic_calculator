let input =document.getElementById('input');
let buttons =document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);  // Evaluate the expression
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);  // Correct substring usage
            input.value = string;
        } else {
            string += e.target.innerHTML;  // Append the clicked value to the string
            input.value = string;
        }
    })
})
