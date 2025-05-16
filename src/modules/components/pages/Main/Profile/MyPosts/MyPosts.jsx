import Classes from "./MyPosts.module.css"; // Импорт CSS модуля для стилей
import PostContainer from "./Post/PostContainer"; // Импорт компонента контейнера для поста
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch"; // Хук для выполнения запросов
import { fetchPosts } from "../../../../../../api/profileAPI"; // Импорт функции для получения постов
import DeletePostModal from "./Post/DeletePostModal"; // Импорт модалки для удаления поста
import  useModal  from "../../../../../hooks/useModal";
import Preloader from "../../../../common/Preloader/Preloader";
import { usePostActions } from "../../../../../hooks/usePostActions";

const MyPosts = ({ posts, isLoading, t }) => {
  const { isModalOpen, openModal, closeModal, confirm } = useModal();
  const { onDeletePost } = usePostActions();

  useFetchAndDispatch(fetchPosts(posts));

  return (
    <section className="myPosts section">
      <div className={Classes.content}>
        {isLoading && posts.length === 0 ? (
          <Preloader />
        ) : (
          <ul className={Classes.list}>
            {posts.map((post) => (
              <PostContainer
                key={post.postId}
                post={post}
                t={t}
                onDelete={() =>
                  openModal(post, () => onDeletePost(post.postId))
                }
              />
            ))}
          </ul>
        )}
      </div>

      {/* Модалка для удаления */}
      <DeletePostModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onConfirmDelete={confirm}
        t={t}
      />
    </section>
  );
};

export default MyPosts;
