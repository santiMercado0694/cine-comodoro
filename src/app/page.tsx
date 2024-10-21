import Carousel from "@/components/landing/Carousel";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import Movies from "@/components/movies/Movies";

export default function Home() {
  return (
    <>
      <Carousel /> 
      <MaxWidthWrapper>
        <Movies /> 
      </MaxWidthWrapper>
    </>
  );
}
