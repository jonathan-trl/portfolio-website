export const Portfolio = () => {
  const reusable = 'grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-3'
  return (
    <div className="text-center">
      <h1 className="text-2xl">- Em breve -</h1>
      {/* {portfolioItems.map((item, index) => (
        <div
          key={index}
          className="info-card rounded-2xl flex flex-col gap-4 justify-center items-center border-[4px] border-solid border-transparent py-4"
        >
          <Image
            src={item.url}
            width={120}
            height={140}
            alt=""
            loading="lazy"
          />
          <span>{item.description}</span>
          <button>Acessar</button>
        </div>
      ))} */}
    </div>
  )
}
