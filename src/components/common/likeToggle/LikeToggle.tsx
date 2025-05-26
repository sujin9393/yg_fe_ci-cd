import NonLike from "../../../assets/icons/NonLike.svg";
import Like from "../../../assets/icons/Like.svg";
import {
  useDeleteLikeMutation,
  usePostLikeMutation,
} from "../../../hooks/mutations/user/useLikeMutation";
import { useLikeStore } from "../../../stores/useLikeStore";
import * as S from "./LikeToggle.styled";

interface LikeToggleProps {
  postId: number;
}

const LikeToggle = ({ postId }: LikeToggleProps) => {
  const { mutate: postLikeMutate } = usePostLikeMutation(postId);
  const { mutate: deleteLikeMutate } = useDeleteLikeMutation(postId);
  const toggleLike = useLikeStore((s) => s.toggleLike);
  const isLiked = useLikeStore((s) => s.isLiked(postId));

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      deleteLikeMutate(undefined, { onSuccess: () => toggleLike(postId) });
    } else {
      postLikeMutate(undefined, { onSuccess: () => toggleLike(postId) });
    }
  };

  return (
    <S.LikeToggleButton onClick={handleClick} src={isLiked ? Like : NonLike} />
  );
};

export default LikeToggle;
