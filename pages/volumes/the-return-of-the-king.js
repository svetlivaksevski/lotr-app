import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

export default function BookDetail() {
  const currentVolume = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  const currentPage = volumes.indexOf(currentVolume);

  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  const nextPageUrl =
    nextPage >= 0 && nextPage < volumes.length
      ? `/volumes/${volumes[nextPage].slug}`
      : null;
  const prevPageUrl =
    prevPage >= 0 && prevPage < volumes.length
      ? `/volumes/${volumes[prevPage].slug}`
      : null;

  return (
    <>
      <Link href="/volumes">All volumes</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}, {title}
          </li>
        ))}
        <Image
          src="/../public/images/the-return-of-the-king.png"
          width={140}
          height={230}
          alt="The return of the kind books"
        />
      </ul>
      <div>{prevPageUrl && <Link href={prevPageUrl}>Previous value</Link>}</div>
      <div>{nextPageUrl && <Link href={nextPageUrl}>Next value</Link>}</div>
    </>
  );
}
