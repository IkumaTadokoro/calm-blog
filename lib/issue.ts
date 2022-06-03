import fs from "fs";
import glob from "glob-promise";
import matter from "gray-matter";
import markdownToHtml from 'zenn-markdown-html'

export type Issue = any;

export type IssueComment = any;

const dataDirectoryPath = process.env.DATA_DIRECTORY_PATH || "./data";

export async function getIssue({ issueNumber }: { issueNumber: number }) {
  const filePath = `${dataDirectoryPath}/issues/${issueNumber}/issue.md`;
  const content = fs.readFileSync(filePath, { encoding: "utf-8" });
  const issueMatter = matter(content);
  const body = issueMatter.content;
  const bodyHTML = markdownToHtml(body);
  return {
    body,
    bodyHTML,
    ...issueMatter.data,
  };
}

export async function listIssues() {
  const paths = await glob.promise(`${dataDirectoryPath}/issues/*/issue.md`);
  return paths
    .map((filePath) => {
      const content = fs.readFileSync(filePath, { encoding: "utf-8" });
      const issueMatter = matter(content);
      const body = issueMatter.content;
      return {
        body,
        ...issueMatter.data,
      };
    })
    .sort(byCreatedAt)
    .reverse();
}

export async function listIssueComments({
  issueNumber,
}: {
  issueNumber: number;
}) {
  const paths = await glob.promise(
    `${dataDirectoryPath}/issues/${issueNumber}/issue_comments/*.md`
  );
  const issueComments = await Promise.all(
    paths.map(async (filePath: string) => {
      const content = fs.readFileSync(filePath, { encoding: "utf-8" });
      const issueMatter = matter(content);
      const body = issueMatter.content;
      const bodyHTML = markdownToHtml(body);
      return {
        body,
        bodyHTML,
        ...issueMatter.data,
      };
    })
  );
  return issueComments.sort(byCreatedAt);
}

function byCreatedAt(a: any, b: any) {
  if (a.created_at < b.created_at) {
    return -1;
  } else if (a.created_at > b.created_at) {
    return 1;
  } else {
    return 0;
  }
}
