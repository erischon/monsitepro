import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="p-4 h-[196px]">
      <div className="flex h-full">
        <div className="flex flex-col justify-between">
          <h2>Title</h2>

          <div>
            <p>subtitle</p>

            <Link href="">link</Link>
          </div>
        </div>

        <div>
          <Image
            src="/images/Electrician-pana.png"
            width={200}
            height={200}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}
