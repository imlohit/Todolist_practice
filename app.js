const todo = [];
let newTodo;
let askTodo = prompt("what would you like to do?").toLowerCase();
while (askTodo !== 'quit') {
    
    if (askTodo === 'new') {
        newTodo = prompt("Enter new Todo");
        todo.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (askTodo === 'list') {
        console.log("**********");
        for(let i=0;i<todo.length;i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("**********");
    }
    else if(askTodo==='delete'){
        let index=parseInt(prompt("Enter index of todo to delete"));
        todo.splice(index,1);
        console.log(`Todo removed`);
    }
    askTodo = prompt("what would you like to do?").toLowerCase();
}
if(askTodo==='quit'){
    console.log("YOU quit!")
}