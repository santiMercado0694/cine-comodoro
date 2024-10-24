import Carousel from "@/components/landing/Carousel";
import UpcomingMoviesCarousel from "@/components/landing/UpcomingMoviesCarousel";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import Navbar from "@/components/layouts/Navbar";
import Movies from "@/components/movies/Movies";

export default function Home() {
  return (
    <>
      <Carousel />
      <MaxWidthWrapper>
        <Movies />
      </MaxWidthWrapper>
      <UpcomingMoviesCarousel />
    </>
  );
}
