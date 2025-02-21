import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="flex justify-between items-center px-5 w-full h-12 bg-gray-500 text-blue font-semibold rounded-xl cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  );
}