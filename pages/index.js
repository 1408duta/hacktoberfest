import Link from "next/link";

const Index = () => (
  <>
    <h1>Home Page</h1>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
  </>
);

export default Index;
