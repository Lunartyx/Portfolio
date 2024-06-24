import Card from "./Card"

const HomeCards = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <div className="h-96">
            <h2 className="text-3xl font-bold">Testcard 1</h2>
            <p className="mt-2 mb-4">This is a paragrapgh</p>
            <a
              href="https://sleepykingdom.net"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Link
            </a>
          </div>
        </Card>

        <Card>
          <h2 className="text-3xl font-bold">Testcard 1</h2>
          <p className="mt-2 mb-4">This is a paragrapgh</p>
          <a
            href="https://sleepykingdom.net"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            Link
          </a>
        </Card>
      </div>
    </>
  )
}

export default HomeCards
