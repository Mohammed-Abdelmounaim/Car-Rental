import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <Link href="/signup" className="text-black text-xl">Sign up</Link>
    </div>
  );
}