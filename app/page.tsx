import AddTodo from "./components/AddTodo";
import TodoList from "./components/Todolist";


export default function Home() {
  return (
      <div className=" bg-slate-200 w-full  max-w-md min-h-screen min-w-1/2 p-10 mx-auto rounded-xl ">
        {/*@ts-ignore*/}
        <TodoList />
        <AddTodo/>
      </div>
  );
}
