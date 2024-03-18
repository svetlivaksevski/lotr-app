import Link from "next/link";
import { introduction } from "../../lib/data";

export default function Valumes() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <p>{introduction}</p>
      <ul>
        <li>
          <Link href="volumes/the-fellowship-of-the-ring">
            The fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="volumes/the-return-of-the-king">
            The return of the king
          </Link>
        </li>
        <li>
          <Link href="volumes/the-two-towers">The two towers</Link>
        </li>
      </ul>
    </div>
  );
}
