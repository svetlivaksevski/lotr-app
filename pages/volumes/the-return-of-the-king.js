import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

export default function BookDetail() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <Link href="/volumes">All volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map(({ ordinal, title }) => (
          <li>
            {ordinal}, {title}
          </li>
        ))}
        <Image
          src="/../public/images/the-return-of-the-king.png"
          width={140}
          height={230}
          alt="The return of the king book"
        />
      </ul>
      <div>
        <button href="/">Previous value</button>
      </div>
      <div>
        <button href="/">Next value</button>
      </div>
    </>
  );
}
