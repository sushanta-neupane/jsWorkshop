let count = 0
function squareGenerate(x)
{
    alert(`${count}. The square of ${x} is ${x*x}.`)
}

let times = prompt("How many number you want to get squared?")

for (let i = 0; i < times; i++) {
    count++;
    let num = prompt(count+". Enter the number to square")
    squareGenerate(num)
}