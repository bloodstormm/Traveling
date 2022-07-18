import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import NoPosts from '../../img/noPosts.svg'
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";
import { BsArrowRight } from "react-icons/bs";
import ErrorMessage from "../../components/ErrorMessage";

const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  const {documents: posts, loading, error} = useFetchDocuments("posts")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }
  

  return (
    
    <div className="container mx-auto flex flex-col items-center mt-8 px-6 md:px-4 ">

      {error && error && <ErrorMessage error={error} />}

      {/* SearchBar */}
      
      {posts && posts.length > 0 && (
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-4/5 md:w-1/2 border-2 mb-6 bg-[#f2ede5] border-transparent
        focus-within:border-main-orange transition duration-500 rounded-xl"
        >
          <AiOutlineSearch className="h-8 w-8 ml-4 text-gray-600" />
          <input
            type="text"
            className=" mt-0 w-full p-3 border-0 focus:border-0 transition-none"
            placeholder="Procure por tags..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit"><BsArrowRight className="mr-4 h-8 w-8"/></button>
          
        </form>

      )}

      {/* Postagens */}
      <div className="">
        {loading && <p className="flex justify-center mt-6 text-xl font-medium">Carregando...</p>}
        {posts && posts.map((post) => (
          <PostDetail post={post} key={post.id} />
        ))}
        {/* Se não tiver nenhuma postagem */}
        {posts && posts.length === 0 && (
          <div className="flex flex-col items-center mt-16">
            <img src={NoPosts} className="w-3/5 mb-4" alt="" />
            <h1 className="text-4xl text-center font-Binerka">Nenhum post encontrado =(</h1>
            <Link to="/posts/create" className="w-3/5 md:w-2/5 btn">Criar postagem</Link>
          </div>
        )} 
      </div>
    </div>
  );
};

export default Home;
