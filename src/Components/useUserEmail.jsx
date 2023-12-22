import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic/useAxiosPublic";
import { AuthContext } from "./AuthProvider/AuthProvider";

const useUserEmail = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user.email}`);
      return res.data;
    },
  });

  return [users, refetch];
};

export default useUserEmail;
