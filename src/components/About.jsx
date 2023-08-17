
import AboutImg from '../assets/images/blog-1.jpeg'

function About() {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
            <span>about</span> us
        </h1>
        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>
        
        <div className="content">
          <h3>What Makes Our Food Special?</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?
          </p>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?
          </p>
          <a href="#" className='btn'>
            Learn More
          </a>
        </div>
        </div>
      </section>
    </div>
  )
}

export default About
