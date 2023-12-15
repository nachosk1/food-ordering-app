import Hero from "../../components/layout/Hero";
import HomeMenu from "../../components/layout/HomeMenu";
import SectionHeaders from "../../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={"Nuesta historia"}
          mainHeader={"Sonbre nosotros"}
        />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4 ">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            fuga, omnis dolore obcaecati deserunt pariatur dolorum asperiores
            dolor distinctio debitis veniam suscipit eos a odio ex explicabo
            odit amet non?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quis, impedit maiores dolores illo consectetur error assumenda
            minima libero neque cupiditate!
          </p>
          <p>Qui odit, quaerat minima rem fugiat et officia explicabo!</p>
        </div>
      </section>
      <section className="text-center py-4">
        <SectionHeaders subHeader={"No lo dudes"} mainHeader={"Contactanos"} />
        <div className="text-4xl pt-6">
          <a className="underline text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
