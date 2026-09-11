
import{ScrollTrigger , SplitText} from 'gsap/all' ;
import gsap from 'gsap' ;

gsap.registerPlugin(ScrollTrigger,SplitText) ;

const App = () => {
  return (
    <div className='text-4xl text-green-300 '>App</div>
  )
}

export default App