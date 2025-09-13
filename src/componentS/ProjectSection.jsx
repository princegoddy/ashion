import { projects } from "../data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function ProjectSection() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <section className='project-container'>
         <Slider {...settings}>
            {
                projects.map((ject)=>{
                    const{id, name, title, href,} = ject
                    return(
                        <div className="project" key={id}>
                            <div className="project-centre">
                              <p>{name}</p>
                            <h1>{title}</h1>
                            <a href="/">{href}</a>
                            </div>
                              </div>
                    )
                })
            }
            </Slider>
    </section>
  )
}

export default ProjectSection