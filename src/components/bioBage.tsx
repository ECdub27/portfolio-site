import React from "react";
import fam from '../../public/imgs/family.png';


const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const BioBadge = () => {
    return (
        <div className='bg-[#267FF3]'>
            <div className=" mt-5 w-80 h-[520px] z-30 p-6 bg-[#292f36] rounded-tl-full rounded-br-full shadow border-4 border-black flex-col justify-center items-start gap-8 inline-flex">
                <div className="flex-col justify-start items-center gap-8 flex">
                    <div className="flex-col justify-start items-center gap-4 flex">
                        <img className="rounded-[64px] border-2 border-[#E0607E]" src={fam} />
                        <div className="flex-col justify-start items-center flex">
                            <div className="text-white text-[32px] font-medium font-inter capitalize leading-[42px]">EC Wiegand</div>
                            <div className="text-white text-sm font-normal font-inter leading-[18px]">Full Stack developer</div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="flex-col justify-start items-start gap-4 flex">
                            <div className="justify-center items-center gap-4 inline-flex">
                                <div className="w-3.5 h-3.5 justify-center items-center flex">
                                    <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex" />
                                </div>
                                <div className="text-white text-sm font-normal font-sans leading-[18px]">ecdevdub27@outlook.com</div>
                            </div>
                            <div className="justify-center items-center gap-4 inline-flex">
                                <div className="w-3.5 h-3.5 justify-center items-center flex">
                                    <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex" />
                                </div>
                                <div className="text-white text-sm font-normal font-sans leading-[18px]">LI, NY</div>
                            </div>
                            <div className="justify-center items-center gap-4 inline-flex">
                                <div className="w-3.5 h-3.5 justify-center items-center flex">
                                    <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex" />
                                </div>
                                <div className="text-white text-sm font-normal font-sans leading-[18px]">Full-time Developer</div>
                            </div>
                            <div className="justify-center items-center gap-4 inline-flex">
                                <div className="w-3.5 h-3.5 justify-center items-center flex">
                                    <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex" />
                                </div>
                                <div className="text-white text-sm font-normal font-sans leading-[18px]">Twitter</div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-4 inline-flex">
                            <div className="px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                                <div className="text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">NextJs</div>
                            </div>
                            <div className="px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                                <div className="text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">.NET</div>
                            </div>
                            <div className="px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                                <div className="text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">PostgreSQL</div>
                            </div>
                            <div className="px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                                <div className="text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">Docker</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-center flex">
                    <div className="px-8 py-4 bg-white rounded-[32px] justify-center items-center gap-4 inline-flex">
                        <button onClick={() => handleDownload('src/rescv/Elijah-Christian-Wiegand-int-dev.pdf', 'resume.pdf')}>Download Resume</button>

                        <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BioBadge;