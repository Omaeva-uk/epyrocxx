import { NavBar, Testimonial, Cta1, Footer } from "@/components";
import { ImageGrid } from "..";
import { Helmet } from "react-helmet-async";


const WorkPage = () => {
  return (
    <div>
      <Helmet>
        <title>Client Projects</title>
        <meta name="description" content="Epyrocxx delivers innovative epoxy flooring solutions for industrial and commercial spaces across India. Specializing in custom, anti-static, chemical-resistant, hybrid, and cementitious flooring, our expert team ensures exceptional durability, aesthetics, and functionality. Choose Epyrocxx for premium quality and nationwide service." />
        <link rel="canonical" href="/work" />
      </Helmet>
        <header className='max-sm:p-4 py-0 px-14 header-nav'>
            <NavBar color="black" />
        </header>
        <section className='max-sm:p-4 p-16 py-4 lg:mt-24'>
            <ImageGrid />
        </section>
         <section className='max-sm:p-4 p-16 py-4 lg:mt-20'>
            <Testimonial />
        </section>
        <section className='max-sm:p-4 p-16 py-4 lg:mt-20'>
            <Cta1 />
        </section>
        <footer className='max-sm:p-4 mt-20'>
          <Footer />
        </footer> 
    </div>
  )
}

export default WorkPage;