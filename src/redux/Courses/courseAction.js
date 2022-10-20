import instance from "api/instance";
import instanceAuthor from "api/instanceAuthor";
import swal from "sweetalert";

export const actionTypes = {
  SET_CATEGORIES: "courses/SET_CATEGORIES",
  SET_COURSES: "courses/SET_COURSES",


};

export const fetchCategoriesAction = () => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
        method: "GET",
      });


      dispatch({
        type: actionTypes.SET_CATEGORIES,
        payload: res.data,
      });

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCourseAction = (maDM) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc",
        method: "GET",
        params: {
          maDanhMuc: maDM,
        }
      });


      dispatch({
        type: actionTypes.SET_COURSES,
        payload: res.data,
      });

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const RegisterCoureAction = (ttdk) => {
  return async (dispatch) => {
    try {
      const res = await instanceAuthor.request({
        url: "/api/QuanLyKhoaHoc/DangKyKhoaHoc",
        method: "POST",
        data: ttdk,
      });

      if(res.status === 200){
        swal({
          title: "Uploaded!",
          text: "Course Register Successfully",
          icon: "success",
          button: "OK",
        })
      }

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};


export const deleteCourseAction = (ttdk) => {
  return async (dispatch) => {
    try {
      const res = await instanceAuthor.request({
        url: "/api/QuanLyKhoaHoc/DangKyKhoaHoc",
        method: "POST",
        data: ttdk,
      });

      if(res.status === 200){
        swal({
          title: "Uploaded!",
          text: "Course Register Successfully",
          icon: "success",
          button: "OK",
        })
      }

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};


