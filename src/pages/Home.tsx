
import portrait from '../assets/OIG4.jpeg'
import pagedata from '../data/Content.json'
import arrow_down from '../assets/icons/arrow_scroll_icon.png'
import MySkills from '../modules/MySkills'
import ContactMe from '../modules/ContactMe'

const psize = "text-xl"
const psize2 = "text-2xl"

const Home = () => {

    const onClickSkills = () => {
        const skillsSection = document.querySelector("#skills");
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <>
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll hide-scrollbar">
                <section className="snap-start h-screen flex items-center justify-center">
                    <div className="flex flex-auto">
                        <div className="basis-1/3">
                            <div className='rounded-full shadow-lg p-8'>
                                <img src={portrait} className='rounded-full shadow-lg transform transition duration-500 hover:scale-95' />
                            </div>
                        </div>
                        <div className="basis-2/3 p-20 shadow-lg m-8 rounded-3xl">

                            <h1 className="text-6xl">{pagedata.pages.aboutme.title}</h1>
                            <br />
                            <p className={psize}>{pagedata.pages.aboutme.content}</p>
                            <p className={psize}>{pagedata.pages.aboutme.content2}</p>
                            <br />
                            <div className='flex justify-center'>
                                <div>
                                    <p className={psize2}>Learn about my skills</p>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button onClick={onClickSkills} className='m-4 transform transition duration-500 hover:scale-125 size-16'>
                                    <img src={arrow_down} alt="downarrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="skills" className="snap-start h-screen flex items-center justify-center">
                    <div className="flex flex-auto">

                        <div className="w-full p-20 shadow-lg m-8 rounded-3xl">

                            <h1 className="text-6xl">{pagedata.pages.myskills.title}</h1>
                            <br />
                            <p className={psize}>{pagedata.pages.myskills.content}</p>
                            <br className='mb-8' />

                            <MySkills />

                        </div>
                    </div>
                </section>
                <section className="snap-start h-screen flex items-center justify-center">
                    <div className="flex flex-auto">
                        <div className="w-full p-20 shadow-lg m-8 rounded-3xl">

                            <h1 className="text-6xl">{pagedata.pages.aboutme.title}</h1>
                            <br />
                            <p className={psize}>{pagedata.pages.aboutme.content}</p>
                            <p className={psize}>{pagedata.pages.aboutme.content2}</p>
                            <br />
                            <ContactMe />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
