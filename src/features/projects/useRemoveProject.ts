// src/features/projects/useRemoveProject.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectServices";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: removeProject } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Project Deleted Successfully");
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => {
      console.error(err);
      toast.error(err);
    },
  });
  return { isDeleting, removeProject };
}
