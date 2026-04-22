import Cordination from "@/components/home/Cordination";
import Ecosysteme from "@/components/home/Ecosysteme";
import GrandComptes from "@/components/home/GrandComptes";
import Introduction from "@/components/home/Introduction";
import Media from "@/components/home/Media";
import MtAcademy from "@/components/home/MtAcademy";
import PartenaireAndinstitutions from "@/components/home/PartenaireAndinstitutions";
import PatientsAndProfetionals from "@/components/home/PatientsAndProfetionals";
import Platform from "@/components/home/Platforme";
import Rejoiner from "@/components/home/Rejoiner";
import SecuriteAndHebergement from "@/components/home/SecuriteAndHebergement";
import ServicesFonctions from "@/components/home/ServvicesFonctions";

export default function Home() {
  return (
    <main className="flex flex-col bg-light-background items-center justify-center overflow-x-hidden">
      <Introduction />

      <div className="w-full max-w-screen-2xl pb-12 pt-11">
        <ServicesFonctions />
        <Platform />
        <Cordination />
        <Ecosysteme />
        <PatientsAndProfetionals />
        <GrandComptes />
        <MtAcademy/>
        <Media/>
        <SecuriteAndHebergement />
        <PartenaireAndinstitutions />
        <Rejoiner />
      </div>
    </main>
  );
}
