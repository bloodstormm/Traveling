import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const PostDetail = ({ post }) => {
  return (
    <div className="rounded-xl overflow-hidden mx-auto my-8 pb-8 bg-[#f2ede5]">
      {/* Imagem */}
      
      <img src={post.image} className="xs:max-w-[350px] md:max-w-2xl lg:max-w-2xl w-full h-auto mx-auto object-cover" alt={post.title} />

      {/* Informações */}
      <div className="px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl mt-6 font-bold">{post.title}</h2>
        <h3 className="text-gray-400 pt-2 text-xs sm:text-sm">Criado por: <span className="font-semibold">{post.createdBy}</span></h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-y-2 gap-x-3 mt-3">
          {post.filteredTagsArray.map((post) => (
            <div
              key={post}
              className="py-2  px-5 text-xs sm:text-sm rounded-3xl font-bold bg-[#ffe7bb] text-[#ff8732]"
            >
              {post}
            </div>
          ))}
        </div>
        <Link to={`/posts/${post.id}`}>
          <div className="flex items-center justify-end mt-8 hover:translate-x-1 transform transition">
            <p className="mr-3 text-blackText text-sm sm:text-base font-medium">
              Clique para ver mais
            </p>
            <BsArrowRight className="h-8 w-8" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
