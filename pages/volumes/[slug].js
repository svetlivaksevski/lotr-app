import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import styled from "styled-components";

const StyledVolues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBox = styled.div`
  background-color: ${({ currentVolume }) =>
    currentVolume?.title ? currentVolume.color : ""};
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`;

export default function BookDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return;
  }

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
    <StyledVolues>
      <Link href="/volumes">All volumes</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>

      <StyledBox currentVolume={currentVolume}>
        {currentVolume.books.map(({ ordinal, title }) => (
          <p key={title}>
            {ordinal}: {title}
          </p>
        ))}
        <Image
          src={currentVolume.cover}
          width={140}
          height={230}
          alt={currentVolume.title}
        />
      </StyledBox>

      <div>{prevPageUrl && <Link href={prevPageUrl}>Previous value</Link>}</div>
      <div>{nextPageUrl && <Link href={nextPageUrl}>Next value</Link>}</div>
    </StyledVolues>
  );
}
