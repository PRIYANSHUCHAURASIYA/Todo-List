 // state for the todos Apps
 let todos = [];

 function addTodo() {
     const inputValue = document.querySelector("#inputValue").value;
     if(inputValue){
         todos.push({
             title: inputValue
         });
         document.querySelector("#inputValue").value = "";//delete after adding
         render();
     }
 }

 function deleteLastTodo(){
     if(todos.length > 0) {
         todos.splice(todos.length - 1 , 1);
         render();
     }
 }

 function deleteFirstTodo() {
     if(todos.length > 0) {
         todos.shift(); // Remove the first element
         render();// react use
     }
 }

 // componets of the Todo App
 function componentsOfTodo(todo , index){
     const div = document.createElement("div");
     div.className = "todo-item";
     const h1 = document.createElement("h1");
     const button = document.createElement("button");
     button.className = "delete-button";
     button.innerHTML = "Delete";
     button.onclick = () => deleteTodoAtIndex(index);
     h1.innerHTML = todo.title;
     div.append(h1);
     div.append(button);
     return div;
 }

 // Delete todo at a specific index
 function deleteTodoAtIndex(index) {
     todos.splice(index, 1); // Remove the todo at the specified index
     render(); // Re-render the list
 }

 // react function

 function render() {
     document.querySelector("#todos").innerHTML = "" ;
     for(let i = 0 ; i< todos.length ; i++){
         const element = componentsOfTodo(todos[i] , i);
         document.querySelector("#todos").appendChild(element);
     }
 }
