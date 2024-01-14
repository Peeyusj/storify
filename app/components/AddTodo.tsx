"use client";
import React, { useState } from "react";
import { NewTodo } from "@/lib/drizzle";
import { useRouter } from "next/navigation";

const AddTodo = () => {
  const [task, setTask] = useState<NewTodo | null>(null);
  const { refresh } = useRouter();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      if (task) {
        await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify({
            task: task.task,
          }),
        });
        refresh();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full flex gap-x-3">
        <input
          onChange={(e) => setTask({ task: e.target.value })}
          className="rounded-full w-full py-3.5 px-5 border text-black focus:outline-secondary"
          type="text"
        />
        <button
          type="submit"
          className="p-4 shrink-0 block rounded-full bg-gradient-to-b from-blue-400 to-gray-600"
        >
        Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
