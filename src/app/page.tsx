import Carousel from "@/components/landing/Carousel";
import UpcomingMoviesCarousel from "@/components/landing/UpcomingMoviesCarousel";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import Movies from "@/components/movies/Movies";

export default function Home() {
  return (
    <>     
      <Carousel /> 
        <Movies />
        <h1 className="text-center text-3xl font-bold mb-2">PROXIMOS ESTRENOS</h1>
        <UpcomingMoviesCarousel />
    </>
  );
}
