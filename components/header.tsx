import Link from "next/link";
import { Container } from "./container"

export const Header = () => {
  return (
    <>
      <header className="bg-amber-400">
        <Container>
          <nav className="py-12">
            <h1>
              <Link href="/">
                <a className="text-4xl font-bold">ikuma-t/log</a>
              </Link>
            </h1>
          </nav>
        </Container>
      </header>
    </>
  )
}
