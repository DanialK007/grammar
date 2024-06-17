import { Parallax, Background } from 'react-parallax';


const MyParallax = ({children, image}) => (
    <Parallax strength={400} className='relative h-screen snap-center'>
        <Background className='w-screen h-screen'>
            <img src={image} alt='' className='w-screen object-cover scale-110'/>    
        </Background>
        {children}
    </Parallax>
)

export default MyParallax;