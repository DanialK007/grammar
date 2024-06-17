import CardWrapper from '../Components/CardWrapper';

import img1 from '../Images/nasa.jpg';
import img2 from '../Images/satellite.jpeg';
import img3 from '../Images/spaceStation.jpeg';
import MyParallax from '../Components/MyParallax';

const Home = () => (
    <>
        <MyParallax image={img1}> 
            <div className='absolute top-0 left-0 w-full h-screen bg-black/40 text-white flex flex-col items-center justify-center flex-col'>
                <CardWrapper>
                {/* <div className='text-[4rem] uppercase text-center'>The era of</div> */}
                <div className='text-[10rem] font-semibold uppercase text-center os'>Reactor</div>
                </CardWrapper>
            </div>
        </MyParallax>
        <div className='h-[120vh] flex snap-center flex-col items-center justify-center text-center text-white bg-black p-20'>
            <CardWrapper>
                <div className='text-[2rem]'>
                    The Era of
                </div>
                <div className='text-[5rem] uppercase'>
                    Spacial Technology
                </div>
            </CardWrapper>
        </div>
        <MyParallax image={img2}>
            <div className='absolute top-0 left-0 w-full h-screen bg-black/40 text-white flex items-center justify-center flex-col'>
            <CardWrapper>
                <div className='text-[10rem]'>SPECTOR</div>
            </CardWrapper>
            </div>
        </MyParallax>
        <div className='h-[250vh] flex snap-center flex-col items-center justify-center text-center text-white bg-black p-20'>
            <CardWrapper>
            <div className='py-32'>
                <div className='text-5xl font-semibold'>What is spacial tech?</div>
                <div className='w-[500px]'>Evnea eorg qoer hoih wryp jey serypjs sdnlkt  dfkn'np thtrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywy e twt </div>
            </div>
            </CardWrapper>
            <CardWrapper>
            <div className='py-32'>
                <div className='text-5xl font-semibold'>How we created?</div>
                <div className='w-[500px]'>Evnea eorg qoer hoih wryp jey serypjs sdnlkt  dfkn'np thtrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywy e twt </div>
            </div>
            </CardWrapper>
            <CardWrapper>
            <div className='py-32'>
                <div className='text-5xl font-semibold'>Why spacial technology?</div>
                <div className='w-[500px]'>Evnea eorg qoer hoih wryp jey serypjs sdnlkt  dfkn'np thtrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywy e twt </div>
            </div>
            </CardWrapper>
            <CardWrapper>
            <div className='py-32'>
                <div className='text-5xl font-semibold'>About our team</div>
                <div className='w-[500px]'>Evnea eorg qoer hoih wryp jey serypjs sdnlkt  dfkn'np thtrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywrlnsr eno; trnpe royntn eyjporntn wrnet yeyjyeyt y er tywy e twt </div>
            </div>
            </CardWrapper>
        </div>
        <MyParallax className="snap-center" image={img3}>
            <div className='absolute top-0 left-0 w-full h-screen bg-black/40 text-white flex items-center justify-center flex-col'>
                <div className='text-[10rem] uppercase'>Join Now</div>
            </div>
        </MyParallax>
    </>
)

export default Home;