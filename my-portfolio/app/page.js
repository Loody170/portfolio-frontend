import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <section className="text-center p-6">
        <h1 className="text-4xl font-bold mb-10">Hello!</h1>
        <div className="text-2xl font-bold">
          <p className="mb-4">
            I'm Khalid! I'm a software developer, English teacher, content
            creator, and a voiceover artist!
          </p>
          <p>Based in Jeddah, Saudi Arabia.📍</p>
        </div>
      </section>
      <section className="flex justify-center mt-10">
        <div className="relative w-72 h-72 rounded-full border-4 border-yellow-600 overflow-hidden">
          <Image
            src="/images/hamza-braim.jpeg"
            alt="Khalid Sharafaldeen"
            layout="fill"
            className="object-cover"
          />
        </div>
      </section>
      <section className="flex justify-center mt-10">social media here</section>
      <section className="text-center mt-4 text-2xl font-bold">
        <p>
          Graduated from Istanbul Altınbaş University with a bachelor of science
          in computer engineering.
        </p>
      </section>
    </div>
  );
}
