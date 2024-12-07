import Card from "./Card"

const Home = () => {
  return (
    <div className="mt-10 ml-28">
      <h1 className="text-3xl font-semibold">News</h1>
      <div className="my-10 px-10 flex">

      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default Home