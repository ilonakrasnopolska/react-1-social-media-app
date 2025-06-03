import Classes from "./MyPosts.module.css"; // Импорт CSS модуля для стилей
import PostContainer from "./Post/PostContainer"; // Импорт компонента контейнера для поста
import DeletePostModal from "./Post/DeletePostModal"; // Импорт модалки для удаления поста
import useModal from "../../../../../hooks/useModal";
import Preloader from "../../../../common/Preloader/Preloader";
import { usePostActions } from "../../../../../hooks/usePostActions";

const MyPosts = ({ posts, isLoading, isOwnProfile, t }) => {
  const { isModalOpen, openModal, closeModal, confirm } = useModal();
  const { onDeletePost } = usePostActions();

  return (
    <section className="myPosts section">
      <div className={Classes.content}>
        {isLoading && posts.length === 0 ? (
          <Preloader />
        ) : posts.length === 0 ? (
          <p className={Classes.emptyText}>
           {t(`EmptyPostList`)}
          </p>
        ) : (
          <ul className={Classes.list}>
            {posts.map((post) => (
              <PostContainer
                key={post.postId}
                post={post}
                t={t}
                isOwnProfile={isOwnProfile}
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
