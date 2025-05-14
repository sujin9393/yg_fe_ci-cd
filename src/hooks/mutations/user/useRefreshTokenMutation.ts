import { useMutation } from "@tanstack/react-query";
import { getRefreshToken } from "../../../api/user";

export const useRefreshTokenMutation = () => {
  return useMutation({
    mutationFn: getRefreshToken,
  });
};
