import Carousel from "@/components/landing/Carousel";
import CineYTeatroMovies from "@/components/landing/CineYTeatroMovies";
import PromoModal from "@/components/landing/PromoModal";
import Promotions from "@/components/landing/Promotions";
import UpcomingMoviesCarousel from "@/components/landing/UpcomingMoviesCarousel";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import Movies from "@/components/movies/Movies";

export default function Home() {
  return (
    <>
      <PromoModal/>
      <Carousel />
      <MaxWidthWrapper>
        <Movies />
        <CineYTeatroMovies />
        <Promotions/>
      </MaxWidthWrapper>
      
      <UpcomingMoviesCarousel />
    </>
  );
}
