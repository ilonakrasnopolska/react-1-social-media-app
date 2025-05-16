import React, { memo } from "react";
import { useDispatch } from "react-redux";
import Classes from "./Comments.module.css";
import { useCommentActions } from "../../../../../../../hooks/useCommentActions";
import useModal from "../../../../../../../hooks/useModal";
import { deleteComment } from "../../../../../../../../redux/ProfileReducer/profile-reducer";
import DeleteCommentModal from "./DeleteCommentModal";
import ImageWithLoader from "../../../../../../common/ImageWithLoader/ImageWithLoader";

const Comments = memo(({ postId, t }) => {
  const { Messages, onReplyToComment } = useCommentActions(postId);
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal, confirm } = useModal();

  return (
    <>
      <ul className={Classes.list}>
        {Messages.length > 0 ? (
          Messages.map((comment) => (
            <li key={comment.commentId} className={Classes.item}>
              <ImageWithLoader
                src={comment.avatar}
                alt="User avatar"
                className={Classes.avatar}
                height="50px"
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
                onClick={() =>
                  openModal(
                    { commentId: comment.commentId, postId },
                    ({ commentId, postId }) =>
                      dispatch(deleteComment({ commentId, postId }))
                  )
                }
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
        onConfirmDelete={confirm}
        t={t}
      />
    </>
  );
});

export default Comments;
