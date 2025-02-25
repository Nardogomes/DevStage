import { ComponentProps } from "react";
import { User } from "lucide-react";

interface InputProps extends ComponentProps<"input"> {}

export function Input(props: InputProps) {
  return (
    <div className="group flex items-center gap-2 bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 focus-within:border-gray-100">
      <span className="text-gray-400 group-focus-within:text-gray-100">
        <User />
      </span>

      <input
        className="flex-1 outline-0"
        {...props}
      />
    </div>
  )
}