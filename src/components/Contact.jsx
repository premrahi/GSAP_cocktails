import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";


const Contact = () => {


  useGSAP(()=>{

    const split = SplitText.create('.content' , {type:'words'}) ;


    const timeline = gsap.timeline({
      scrollTrigger:{
        trigger:'.contact',
        start:'top center' ,
        ease:"power1.inOut" ,
      }
    })

    timeline
    .from(split.words , {opacity : 0 , yPercent : 100 , stagger : 0.05})
    .from('#contact h3 , #contact p' , {opacity : 0 , yPercent :100 , stagger:0.05})
    .to('#f-right-leaf',{y:'50' , duration:1 , ease :'power1.inOut'})
    .to('#f-left-leaf',{y:'-50' , duration:1 ,ease :'power1.inOut'})

  } ,[]) ;



  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="right-leaf" id="f-right-leaf"/>
      <img src="/images/footer-left-leaf.png" alt="left-leaf" id="f-left-leaf"/>

      <div className="content" >
        <h2> Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>G - 1/15 , Chawala Street, Hauz Rani, New Delhi - 110042</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>(011) 786-8311</p>
          <p>valvetpour@bar.in</p>
        </div>

        <div >
          <h3>Open Every Day</h3>
          {openingHours.map((time) => {
            return(
              <p key={time.day} >
                {time.day} : {time.time}
              </p>
            )
          })}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((item) => (
              <a 
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer" 
              aria-label={item.name}
              > 
                <img src={item.icon}/>
              </a>
            ))}
          </div>
        </div>


      </div>
    </footer>
  ) 
}

export default Contact