import Image from "next/image";
import salomonShoe from "./salomon.jpg";
import keeb from "./keeb.jpg";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-200 text-slate-50 w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <h1>hello!</h1>
      <h2>some cool photos i found on the internet</h2>

      <Image
        src={salomonShoe}
        alt=""
        // width={500}
        // height={600}
      />
      <Image src={keeb} alt={""} />
    </main>
  );
}
