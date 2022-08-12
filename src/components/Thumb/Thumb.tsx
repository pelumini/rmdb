import Image from 'next/image';

interface ThumbProps {
  imgUrl: string;
}

export const Thumb: React.FC<ThumbProps> = ({ imgUrl }) => (
  <Image
    placeholder="blur"
    blurDataURL="/placeholder.jpg"
    className="rounded-lg"
    layout="fill"
    objectFit="cover"
    src={imgUrl}
    alt="thumb"
  />
);
