import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="p-4 h-[300px] overflow-hidden bg-lime-50">
      <div className="flex h-full justify-between">
        <div className="flex flex-col justify-between w-1/3">
          <h3 className="text-sm">Title</h3>

          <div className="">
            <h2 className="text-xl font-bold">
              Votre électricien prêt de chez vous
            </h2>

            <p className="text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ad
              esse eum unde quasi magnam eligendi quibusdam totam dolorem
              corporis exercitationem
            </p>

            <Link href="">link</Link>
          </div>
        </div>

        <div className="flex justify-end items-start w-2/3">
          <Image
            src="/images/Electrician-pana.png"
            width={300}
            height={300}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}
