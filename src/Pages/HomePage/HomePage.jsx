import "./homepage.css";
import { Hero, Testing, About, Services, Projects, Testimonial, Faq, Cta, Footer } from '../../components/index';



const HomePage = () => {
  return (
    <div>
         <section className='h-[100vh]'>
          <Hero />
        </section>
        <section id="about-us" className='max-sm:p-4 p-16 mt-44'>
          <About />
        </section>
        <section id="services" className='max-sm:p-4 p-16 max-lg:mt-10 mt-20'>
          <Services />
        </section>
        <section id="projects" className='max-sm:p-4 p-16 mt-20'>
          <Projects />
        </section>
        <section className='max-sm:p-4 p-16 mt-20'>
          <Testimonial />
        </section>
        <section className='max-sm:p-4 p-16 mt-2'>
          <Faq />
        </section>
        <section id="contact-us" className='max-sm:p-4 p-16 mt-20'>
          <Cta />
        </section>
        <footer className='max-sm:p-4 mt-20'>
          <Footer />
        </footer>
    </div>
  )
}

export default HomePage;