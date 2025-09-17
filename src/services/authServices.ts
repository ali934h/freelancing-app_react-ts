import http from "./httpServices";

export function getOtp(data) {
  return http
    .post("/user/get-otp", data)
    .then(({ data }) => data.data)
    .catch((error) => {
      throw error.response.data.message;
    });
}
export function checkOtp(data) {
  return http
    .post("/user/check-otp", data)
    .then(({ data }) => data.data)
    .catch((error) => {
      throw error.response.data.message;
    });
}
export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data)
    .catch((error) => {
      throw error.response.data.message;
    });
}
