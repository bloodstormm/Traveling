// img
import NotFound from "../../img/notFound.svg";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";

// components
import PostDetail from "../../components/PostDetail";

const Search = () => {
  const query = useQuery();
  const search = query.get("q").toLowerCase();

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className="container mx-auto flex flex-col items-center mt-8 ">

      <div className="flex items-center mt-6 justify-center">
        <h2 className="xs:text-2xl sm:text-3xl md:text-4xl text-center  font-semibold">
          Resultados para:{" "}
        </h2>
        <span className="py-2 ml-3 px-5 rounded-3xl font-bold bg-[#ffe7bb] text-[#ff8732]">
          {search}
        </span>
      </div>

      <div>
        {posts && posts.map((post) => <PostDetail post={post} key={post.id} />)}
      </div>

      {/* Se não tiver nenhuma postagem */}
      {posts && posts.length === 0 && (
        <div className="flex flex-col items-center mt-12">
          <img src={NotFound} className="w-1/2 mb-4" alt="" />
          <h1 className="text-2xl md:text-4xl text-center font-Binerka">
            Nenhum resultado para essa pesquisa =(
          </h1>
          <Link to="/" className="w-3/5 md:w-2/5 btn">
            Voltar para a tela inicial
          </Link>
        </div>
      )}

    </div>
  );
};

export default Search;
