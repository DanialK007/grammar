import React, { useState } from 'react';

function App3() {
    // State management for showing different sections
    const [currentSection, setCurrentSection] = useState('default');

    // Function to handle button clicks and update section visibility
    const handleButtonClick = (section) => {
        setCurrentSection(section);
    };

    return (
        <>
            <div className='flex w-screen h-screen items-center justify-center text-lg font-semibold pb-44 text-center'>
                <div className='relative w-[650px]'>
                    <button className='bg-gray-300 hover:bg-blue-100 p-2 me-5' onClick={() => handleButtonClick('default')} id='defaultBtn'>Default</button>
                    <button className='bg-gray-300 hover:bg-blue-100 p-2 me-5' onClick={() => handleButtonClick('individualAnalysis')} id='individualAnalysisBtn'>Individual Analysis</button>
                    <button className='bg-gray-300 hover:bg-blue-100 p-2 me-5' onClick={() => handleButtonClick('groupAnalysis')} id='groupAnalysisBtn'>Group Analysis</button>
                    <div id='default' className={`absolute top-20 left-0 flex gap-4 items-center h-[100px] duration-300 ${currentSection === 'default' ? '' : 'opacity-0'}`}>
                        <div className='bg-gray-200 p-5 rounded-md cursor-pointer'>He</div>
                        <div className='flex p-2 gap-5 rounded-md'>
                            <div className='bg-gray-200 p-5 rounded-md cursor-pointer'>is</div>
                            <div className='bg-gray-200 p-5 rounded-md cursor-pointer'>eating</div>
                        </div>
                        <div className='bg-gray-200 p-5 rounded-md cursor-pointer'>breakfast</div>
                        <div className='flex p-2 gap-5 rounded-md'>
                            <div className='bg-gray-200 p-5 rounded-md cursor-pointer'>in</div>
                            <div className='bg-gray-200 p-5 rounded-md cursor-pointer'>the</div>
                            <div className='bg-gray-200 p-5 rounded-md cursor-pointer'>kitchen</div>
                        </div>
                    </div>
                    <div id='individualAnalysis' className={`absolute top-20 left-0 flex gap-4 items-center h-[100px] duration-300 ${currentSection === 'individualAnalysis' ? '' : 'opacity-0'}`}>
                        <div className='relative p-5 rounded-md cursor-pointer bg-red-300 duration-300'>
                            He
                            <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                <div className='h-20 w-1 bg-red-500'></div>
                                <div className='text-red-400 font-bold'>N</div>
                            </div>    
                        </div>
                        <div className='flex p-2 gap-5 rounded-md'>
                            <div className='relative p-5 rounded-md cursor-pointer bg-purple-300 duration-300'>
                                is
                                <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                    <div className='h-20 w-1 bg-purple-500'></div>
                                    <div className='text-purple-400 font-bold'>Vbe</div>
                                </div> 
                            </div>
                            <div className='relative p-5 rounded-md cursor-pointer bg-purple-300 duration-300'>
                                eating
                                <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                    <div className='h-20 w-1 bg-purple-500'></div>
                                    <div className='text-purple-400 font-bold'>Vt/Ving</div>
                                </div>
                            </div>
                        </div>
                        <div className='relative p-5 rounded-md cursor-pointer bg-red-300 duration-300'>
                            breakfast
                            <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                <div className='h-20 w-1 bg-red-500'></div>
                                <div className='text-red-400 font-bold'>N</div>
                            </div>  
                        </div>
                        <div className='flex p-2 gap-5 rounded-md'>
                            <div className='relative p-5 rounded-md cursor-pointer bg-yellow-300 duration-300'>
                                in
                                <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                    <div className='h-20 w-1 bg-yellow-500'></div>
                                    <div className='text-yellow-400 font-bold'>prep</div>
                                </div>  
                            </div>
                            <div className='relative p-5 rounded-md cursor-pointer bg-green-300 duration-300'>
                                the
                                <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                    <div className='h-20 w-1 bg-green-500'></div>
                                    <div className='text-green-400 font-bold'>art</div>
                                </div>  
                            </div>
                            <div className='relative p-5 rounded-md cursor-pointer bg-red-300 duration-300'>
                                kitchen
                                <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                    <div className='h-20 w-1 bg-red-500'></div>
                                    <div className='text-red-400 font-bold'>N</div>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div id='groupAnalysis' className={`absolute top-20 left-0 flex gap-4 items-center h-[100px] duration-300 ${currentSection === 'groupAnalysis' ? '' : 'opacity-0'}`}>
                        <div className='relative p-5 rounded-md cursor-pointer bg-red-300 duration-300'>
                            He
                            <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                <div className='h-20 w-1 bg-red-500'></div>
                                <div className='text-red-400 font-bold'>Subject</div>
                            </div>
                        </div>
                        <div className='relative flex bg-purple-200 p-2 gap-5 rounded-md'>
                            <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                <div className='h-[4.5rem] w-1 bg-purple-500'></div>
                                <div className='text-purple-400 font-bold'>Vt</div>
                            </div>

                            <div className='p-5 rounded-md cursor-pointer bg-purple-300 duration-300'>is</div>
                            <div className='p-5 rounded-md cursor-pointer bg-purple-300 duration-300'>eating</div>
                        </div>
                        <div className='relative p-5 rounded-md cursor-pointer bg-red-300 duration-300'>
                            breakfast
                            <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                <div className='h-20 w-1 bg-red-500'></div>
                                <div className='text-red-400 font-bold'>Object</div>
                            </div>    
                        </div>
                        <div className='relative flex bg-sky-200 p-2 gap-5 rounded-md'>
                            <div className='absolute w-full top-full left-0 flex flex-col justify-center items-center'>
                                <div className='h-[4.5rem] w-1 bg-sky-500'></div>
                                <div className='text-sky-400 font-bold'>Tadv ph</div>
                            </div>

                            <div className='p-5 rounded-md cursor-pointer bg-yellow-300 duration-300'>in</div>
                            <div className='p-5 rounded-md cursor-pointer bg-green-300 duration-300'>the</div>
                            <div className='p-5 rounded-md cursor-pointer bg-red-300 duration-300'>kitchen</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-screen h-screen items-center justify-center text-lg font-semibold pb-44 text-center'>
            </div>
        </>
    );
}

export default App3;
