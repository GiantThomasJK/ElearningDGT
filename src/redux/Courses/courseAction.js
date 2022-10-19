import instance from "api/instance";

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



