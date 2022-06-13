import type { NextPage } from "next";
import Link from "next/link";
import { listIssues } from "../lib/issue";
import Time from "../components/Time";

type Props = {
  issues: Array<Issue>;
};

type Issue = any;

const Home: NextPage<Props> = ({ issues }) => {
  return (
    <div className="max-w-6xl mx-auto px-5">
      <ol className="grid gap-3 md:grid-cols-5">
        {issues.map((issue) => (
          <li className="flex flex-col gap-1 block px-6 py-3 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100" key={issue.number}>
            <Time dateTime={issue.created_at} />
            <Link href={`/articles/${issue.number}`}>
              <a className="font-semibold text-slate-600 truncate">{issue.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      issues: await listIssues(),
    },
  };
}
