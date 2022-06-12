import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="font-bold border-t-2 border-slate-100">
      <div className="max-w-6xl mx-auto px-5">
        <nav className="py-12">
          <ul className="flex justify-around text-white">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="https://ikuma-t.work">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
