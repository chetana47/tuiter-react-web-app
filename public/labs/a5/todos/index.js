// alert('Hello World');
import TodoList from "./TodoList.js";
import TodoList1 from "./TodoList.js";
import TodoList2 from "./TodoList.js";
$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
   </div>
`);

//
// $('#wd-todo').append(`
//    <div class="container">
//        <h1>Todo example using todolist.js</h1>
//        ${TodoList()}
//    </div>
// `);
// $('#wd-todo').append(`
//    <div class="container">
//        <h1>Todo example using todoitem.js</h1>
//        ${TodoList1()}
//    </div>
// `);

$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example using todos.js</h1>
       ${TodoList2()}
   </div>
`);

