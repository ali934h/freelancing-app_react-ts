import http from "./httpServices";

export function getOwnerProjectsApi() {
  return http
    .get("/project/owner-projects")
    .then(({ data }) => data.data)
    .catch((error) => {
      throw error.response.data.message;
    });
}
export function removeProjectApi(id) {
  return http
    .delete(`/project/${id}`)
    .then(({ data }) => data.data)
    .catch((error) => {
      throw error.response.data.message;
    });
}
