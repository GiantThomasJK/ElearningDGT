import instance from "api/instance";
import instanceAuthor from "api/instanceAuthor";
import swal from "sweetalert";

export const SET_PROFILE = "auth/SET_PROFILE";
export const ADD_USER = "auth/ADD_USER";
export const FETCH_USER = "auth/FETCH_USER";

export const signInAtion = (user) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user,
      });
      const profile = { ...res.data };
      delete profile.accessToken;
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("USER_LOGIN", JSON.stringify(profile));

      dispatch({
        type: SET_PROFILE,
        payload: profile,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addUsersAction = (userData) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: userData,
      });

      dispatch({
        type: ADD_USER,
        payload: res.data.content,
      });

      if (res.data.status === 200) {
        swal({
          title: "ADDED!",
          text: "User Added Successfully",
          icon: "success",
          button: "OK",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchUserProfileAction = () => {
  return async (dispatch) => {
    try {
      const res = await instanceAuthor.request({
        url: "/api/QuanLyNguoiDung/ThongTinNguoiDung",
        method: "POST",
      });

      console.log(res);
      const profile = { ...res.data };
      localStorage.setItem("PROFILE_USER", JSON.stringify(profile));

      dispatch({
        type: FETCH_USER,
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
