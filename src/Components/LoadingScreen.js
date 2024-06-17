import Img from '../Images/loading.svg';

const LoadingScreen = () => (
    <div className="fixed w-full h-full flex items-center justify-center bg-zinc-950 z-50 fadeOut">
        <img src={Img} alt="Loading" className='w-20'/>
    </div>
)

export default LoadingScreen;