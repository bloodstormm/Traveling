import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import NoPosts from "../../img/noPosts.svg";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import ErrorMessage from "../../components/ErrorMessage";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const {deleteDocument} = useDeleteDocument("posts")


  // Posts do usuário
  const {
    documents: posts,
    loading,
    error,
  } = useFetchDocuments("posts", null, uid);

  if (loading) {
    return <p className="flex justify-center mt-6 text-xl font-medium">Carregando...</p>
  }


  return (
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl text-center mt-4 uppercase font-semibold">
        Dashboard
      </h2>
      <p className="mt-2 text-center text-gray-500 text-sm md:text-base">Faça suas alterações por aqui!</p>

      {error && <ErrorMessage error={error} />}
      {/* Caso usuário não tenha post */}
      {posts && posts.length === 0 ? (
        <div>
          <div className="flex flex-col items-center mt-16">
            <img src={NoPosts} className="w-2/5 mb-4" alt="" />
            <h1 className="text-4xl text-center font-Binerka">
              Você ainda não postou nada =(
            </h1>
            <Link to="/posts/create" className="w-3/5 md:w-2/5 btn">
              Criar um post agora!
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="hidden text-xl md:flex justify-between my-4 pb-1 px-4 border-b-4 border-b-[#cecabe] ">
            <span className="">Post</span>
            <span className="">Ações</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className="md:flex mt-10 md:mt-0 items-center border-b-2 px-4 border-b-[#d5d1ca] justify-between">
                <div className="flex flex-col md:flex-row justify-center items-center my-4">
                  <img src={post.image} className="w-3/5 md:w-28 rounded-xl" alt="" />
                  <div className="md:pl-4 pt-6 md:pt-0 text-center md:text-left">
                    <p className="text-lg">{post.title}</p>
                    <p className="text-sm text-gray-400 ">Criado em: {post.createdAt.toDate().toLocaleDateString('pt-BR', dateOptions)}</p>

                  </div>

                </div>

                <div className="space-x-4 text-center">
                  <Link to={`/posts/${post.id}`} className="btn">Ver</Link>
                  <Link to={`/posts/edit/${post.id}`} className="btn">Editar</Link>
                  <button onClick={() => deleteDocument(post.id)} className="btn hover:bg-red-400">Excluir</button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
