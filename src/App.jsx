
import { Hero, Testing, About, Services, Projects, Testimonial, Faq, Cta, Footer } from './components';



function App() {

  return (
    <div>
      <main>
        <section className='h-[100vh]'>
          <Hero />
        </section>
        <section className='p-16 mt-44'>
          <About />
        </section>
        <section className='p-16 mt-20'>
          <Services />
        </section>
        <section className='p-16 mt-20'>
          <Projects />
        </section>
        <section className='p-16 mt-20'>
          <Testimonial />
        </section>
        <section className='p-16 mt-2'>
          <Faq />
        </section>
        <section className='p-16 mt-20'>
          <Cta />
        </section>
        <footer className=' mt-20'>
          <Footer />
        </footer>







        {/* <Testing />
        <div className='h-screen w-full'></div> */}
      </main>
    </div>
  )
}

export default App;
