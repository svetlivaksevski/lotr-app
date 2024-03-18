import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

export default function BookDetail() {
  const currentVolume = volumes.find(({ slug }) => slug === "the-two-towers");

  const currentIndex = volumes.indexOf(currentVolume);

  const nextPageIndex = currentIndex + 1;
  const prevPageIndex = currentIndex - 1;

  const nextPageUrl =
    nextPageIndex >= 0 && nextPageIndex < volumes.length
      ? `/volumes/${volumes[nextPageIndex].slug}`
      : null;
  const prevPageUrl =
    prevPageIndex >= 0 && prevPageIndex < volumes.length
      ? `/volumes/${volumes[prevPageIndex].slug}`
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
          src="/../public/images/the-two-towers.png"
          width={140}
          height={230}
          alt="The two towers books"
        />
      </ul>
      <div>{prevPageUrl && <Link href={prevPageUrl}>Previous value</Link>}</div>
      <div>{nextPageUrl && <Link href={nextPageUrl}>Next value</Link>}</div>
    </>
  );
}
