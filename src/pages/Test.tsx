
const Home = () => {
    return (
        <>
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll hide-scrollbar">
                <section className="snap-start h-screen flex items-center justify-center bg-blue-500">
                    <h1 className="text-white text-4xl">Section 1</h1>
                </section>
                <section className="snap-start h-screen flex items-center justify-center bg-green-500">
                    <h1 className="text-white text-4xl">Section 2</h1>
                </section>
                <section className="snap-start h-screen flex items-center justify-center bg-red-500">
                    <h1 className="text-white text-4xl">Section 3</h1>
                </section>
            </div>
        </>
    )
}

export default Home
