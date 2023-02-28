const Search = ({ data }) => {
    return (
      <section className="main-block">
        <article className="flex flex-col items-center justify-center
        bg-gradient-to-r from-purple-500 to-pink-500
        h-screen
        ">
          <h1 className="
          text-7xl text-rose-300 hover:text-fuchsia-300
          font-sans 
          border-8 hover:border-dashed rounded-3xl
          py-3.5
          transition ease-in-out delay-100 bg-purple-500/[0.7]
          hover:-translate-y-3 hover:scale-110 hover:bg-pink-500/[0.7] duration-300
          ">Search Country</h1>
          <form>
            <select className="
            h-10 w-86
            rounded-lg
            font-mono
            transition ease-in-out delay-100
            hover:translate-y-2 hover:bg-black hover:text-white
            ">
              {data.map(value => {
                return (
                  <option className="
                  font-mono
                  border-none
                  " key={value.code} value={value.name}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </form>
        </article>
      </section>
    );
  };
  
  export default Search;