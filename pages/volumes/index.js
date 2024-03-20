import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;

  function getRandomVolume(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
