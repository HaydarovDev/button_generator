import type { ButtonHTMLAttributes, ReactNode } from "react";

type UIButtonProps = {
	children: ReactNode;
	active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
	children,
	active = false,
	className = "",
	...props
}: Readonly<UIButtonProps>) {
	return (
		<button
			className={`p-1 m-1 border text-white cursor-pointer rounded ${active ? "border-red-700" : "border-white"} ${className}`.trim()}
			{...props}
		>
			{children}
		</button>
	);
}
