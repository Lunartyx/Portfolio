
import portrait from '../assets/OIG4.jpeg'
import pagedata from '../data/Content.json'

const psize = "text-2xl"

const Home = () => {
    return (
        <>
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll hide-scrollbar">
                <section className="snap-start h-screen flex items-center justify-center">
                    <div className="flex flex-auto">
                        <div className="basis-1/3">
                            <img src={portrait} className='p-8 rounded-full shadow-lg'></img>
                        </div>
                        <div className="basis-2/3 p-20 shadow-lg m-8 rounded-3xl hover:shadow-2xl">
                            <h1 className="text-6xl">{pagedata.pages.aboutme.title}</h1>
                            <br />
                            <p className={psize}>{pagedata.pages.aboutme.content}</p>
                            <p className={psize}>{pagedata.pages.aboutme.content2}</p>
                        </div>
                    </div>
                </section>
                <section className="snap-start h-screen flex items-center justify-center bg-green-500">
                    <div className="flex flex-auto">
                        <div className="basis-1/3">
                            <img src={portrait} className='p-8'></img>
                        </div>
                        <div className="basis-2/3 p-20">
                            <h1 className="text-6xl">{pagedata.pages.myskills.title}</h1>
                            <br />
                            <p className={psize}>{pagedata.pages.myskills.content}</p>
                        </div>
                    </div>
                </section>
                <section className="snap-start h-screen flex items-center justify-center bg-red-500">
                    <div className="flex flex-auto">
                        <div className="basis-1/3">
                            <img src={portrait}></img>
                        </div>
                        <div className="basis-2/3 p-20">
                            <h1 className="text-6xl">{pagedata.pages.contact.title}</h1>
                            <br />
                            <p className={psize}>{pagedata.pages.contact.content}</p>
                            <p className={psize}>{pagedata.pages.contact.content2}</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
