import type { NextPage } from "next";
import Link from "next/link";

const Test: NextPage = () => {
  return (
    <>
      <ul className="flex">
        <li className="mr-6">
          <Link href="/">Back to home</Link>
        </li>
        <li className="mr-6">
          <Link href="/test">Test</Link>
        </li>
      </ul>
      <p>This is a test Page</p>
    </>
  );
};

export default Test;
