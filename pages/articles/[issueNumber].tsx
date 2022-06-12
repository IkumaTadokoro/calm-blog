import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  getIssue,
  listIssues,
  listIssueComments,
  type Issue,
  type IssueComment,
} from "../../lib/issue";
import Time from "../../components/Time";
import 'zenn-content-css'

type Props = {
  issue: Issue;
  issueComments: Array<IssueComment>;
};

const ShowArticle: NextPage<Props> = ({ issue, issueComments }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <article className="znc markdown">
        <Head>
          <title>{issue.title}</title>
        </Head>
        <section className="block py-6 md:px-16 px-8 bg-white md:rounded-lg border border-gray-200 shadow-md">
          <header>
            <Time dateTime={issue.created_at} />
            <h1 className="font-bold text-slate-600">{issue.title}</h1>
          </header>
          <aside>
            <p className="text-sm text-slate-400">
              Posted by&nbsp;
              {/*<Link href={issue.user.html_url}>{issue.user.login}</Link>*/}
              &nbsp;at&nbsp;
              <Link href={issue.html_url}>{`#${issue.number}`}</Link>.
            </p>
          </aside>
          <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }}></div>
        </section>
        {issueComments.map((issueComment) => (
          <article className="mt-4" key={issueComment.id}>
            <section className="block py-6 px-8 md:px-16 bg-white md:rounded-lg border border-gray-200 shadow-md">
              <header>
                <Time dateTime={issueComment.created_at} />
              </header>
              <div
                dangerouslySetInnerHTML={{ __html: issueComment.bodyHTML }}
              ></div>
            </section>
          </article>
        ))}
      </article>
    </div>
  );
};

export default ShowArticle;

export async function getStaticPaths() {
  const issues = await listIssues();
  const paths = issues.map((issue: any) => {
    return {
      params: {
        issueNumber: issue.number.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const issueNumber = parseInt(params.issueNumber, 10);
  const issue = await getIssue({ issueNumber });
  const issueComments = await listIssueComments({ issueNumber });
  return {
    props: {
      issue,
      issueComments,
    },
  };
}
