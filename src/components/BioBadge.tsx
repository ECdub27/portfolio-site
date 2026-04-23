import React from "react";
import propic from '/imgs/propic.png';

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
            <div className="mt-5 w-80 h-[520px] z-30 p-6 bg-[#292f36] rounded-tl-full rounded-br-full shadow border-4 border-black flex-col justify-center items-start gap-8 inline-flex">
                <div className="flex-col justify-start items-center gap-8 flex">
                    <div className="flex-col justify-start items-center gap-4 flex">
                        <img className="rounded-[64px] border-2 border-[#E0607E]" src={propic} alt="EC Wiegand" />
                        <div className="flex-col justify-start items-center flex">
                            <div className="text-[#12f7d6] text-xs font-mono uppercase tracking-widest mb-1">Parsec Logic Dev Solutions</div>
                            <div className="text-white text-[32px] font-medium capitalize leading-[42px]">EC Wiegand</div>
                            <div className="text-white text-sm font-normal leading-[18px]">Independent Software Contractor</div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="flex-col justify-start items-start gap-4 flex">
                            <div className="justify-center items-center gap-4 inline-flex">
                                <div className="text-white text-sm font-normal leading-[18px]">ecdevdub27@outlook.com</div>
                            </div>
                            <div className="justify-center items-center gap-4 inline-flex">
                                <div className="text-white text-sm font-normal leading-[18px]">Chicago, IL</div>
                            </div>
                            <div className="justify-center items-center gap-4 inline-flex">
                                <div className="text-white text-sm font-normal leading-[18px]">Full-time Developer</div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-2 inline-flex flex-wrap">
                            {['NextJs', '.NET', 'PostgreSQL', 'Docker'].map(tag => (
                                <div key={tag} className="px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                                    <div className="text-[#292f36] text-sm font-normal leading-[18px]">{tag}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-center flex">
                    <div className="px-8 py-4 bg-white rounded-[32px] justify-center items-center gap-4 inline-flex">
                        <button onClick={() => handleDownload('/Elijah-Christian__Wiegand_-_Software_Engineer.pdf', 'EC-Wiegand-Resume.pdf')}>
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BioBadge;
