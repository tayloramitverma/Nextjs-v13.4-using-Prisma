"use client";
import React from "react";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className="flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer w-6 h-6"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500 text-4xl"
      >
        {title}
      </label>
    </li>
  );
}
