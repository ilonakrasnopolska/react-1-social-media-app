import React, { memo } from "react";
import Classes from "./Comments.module.css";
import { useCommentActions } from "../../../../../../../hooks/useCommentActions";
import { useCommentDeleteModal } from "../../../../../../../hooks/useDeleteCommentModal";
import Avatar from "../../../../../../common/Avatar";
import DeleteCommentModal from "./DeleteCommentModal";

const Comments = memo(({ postId, t }) => {
  const { Messages, onReplyToComment } = useCommentActions(postId);

  const { isModalOpen, openModal, closeModal, confirmDelete } =
    useCommentDeleteModal();

  return (
    <>
      <ul className={Classes.list}>
        {Messages.length > 0 ? (
          Messages.map((comment) => (
            <li key={comment.commentId} className={Classes.item}>
              <Avatar
                src={comment.avatar}
                alt="User avatar"
                className={Classes.avatar}
              />

              <div className={Classes.post}>
                <div className={Classes.comment}>
                  <strong>{t(comment.user)} </strong>
                  <div className={Classes.content}>
                    <span>{comment.message}</span>
                    <span className={Classes.time}>{comment.time}</span>
                    <button
                      onClick={() => onReplyToComment(comment.commentId)}
                      className={Classes.response_btn}
                    >
                      {t("Response")}
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openModal(comment.commentId, postId)}
                className={Classes.delete}
              >
                ...
              </button>
            </li>
          ))
        ) : (
          <li className={Classes.item}>{t("NoComments")}</li>
        )}
      </ul>

      <DeleteCommentModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onConfirmDelete={confirmDelete}
        t={t}
      />
    </>
  );
});

export default Comments;
