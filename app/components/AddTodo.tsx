"use client";
import React, { useState } from "react";
import { NewTodo } from "@/lib/drizzle";
import { useRouter } from "next/navigation";

const AddTodo = () => {
  
  const [task, setTask] = useState <NewTodo | null> (null);
  const { refresh } = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (task) {
        const res = await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify({
            task: task.task,
          }),
        });
       
        refresh();
       
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <form className="w-full flex gap-x-3">
        <input
          onChange={(e) => setTask({ task: e.target.value })}
          className="rounded-full w-full py-3.5 px-5 border text-black focus:outline-secondary"
          type="text"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="p-4 shrink-0 block  rounded-full bg-gradient-to-b from-blue-400 to-gray-600"
        >
        Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
