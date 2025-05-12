import Classes from "./MyPosts.module.css"; // Импорт CSS модуля для стилей
import PostContainer from "./Post/PostContainer"; // Импорт компонента контейнера для поста
import { ClipLoader } from "react-spinners"; // Импорт спиннера для загрузки
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch"; // Хук для выполнения запросов
import { fetchPosts } from "../../../../../../api/profileAPI"; // Импорт функции для получения постов
import DeletePostModal from "./Post/DeletePostModal"; // Импорт модалки для удаления поста
import { useDeleteModal } from "../../../../../hooks/useDeletePostModal";
import Preloader from "../../../../common/Preloader/Preloader";

const MyPosts = ({ posts, isLoading, t }) => {
  const { isModalOpen, openModal, closeModal, confirmDelete } =
    useDeleteModal();

  useFetchAndDispatch(fetchPosts(posts));

  return (
    <section className="myPosts section">
      <div className={Classes.content}>
        {isLoading && posts.length === 0 ? (
          <Preloader/>
        ) : (
          <ul className={Classes.list}>
            {posts.map((post) => (
              <PostContainer
                key={post.postId}
                post={post}
                t={t}
                onDelete={() => openModal(post)}
              />
            ))}
          </ul>
        )}
      </div>

      {/* Модалка для удаления */}
      <DeletePostModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onConfirmDelete={confirmDelete}
        t={t}
      />
    </section>
  );
};

export default MyPosts;
