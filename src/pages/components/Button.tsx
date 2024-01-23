export function Button(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className="rounded border border-black bg-gray-300 px-6 hover:bg-slate-500"
    >
      {props.children}
    </button>
  );
}
