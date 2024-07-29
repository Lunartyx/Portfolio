import React from 'react';

interface SkillIconProps {
    icon: string;
    name: React.ReactNode;
    knowledge: React.ReactNode;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon, name, knowledge }) => {
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="group flex flex-col items-center p-2 rounded-xl shadow-2xl hover:translate-y-3 hover:rounded-[50%] transition-all duration-500">
                <div className='m-4 size-16'>
                    <img src={icon} alt="icon" />
                </div>

                <h1 className="text-lg absolute text-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 duration-700 ">
                    {knowledge}
                </h1>
            </div>
            <div className="mt-2">
                <p className="text-lg">
                    {name}
                </p>
            </div>
        </section >
    );
};

export default SkillIcon;
