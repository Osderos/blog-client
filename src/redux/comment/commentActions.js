import axios from "axios";
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  LIKE_COMMENT,
} from "./commentTypes";

export const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest);
    axios
      .get("http://localhost:3000/api/comments/all")
      .then((response) => {
        const comments = response.data;
        dispatch(fetchCommentsSuccess(comments));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCommentsFailure(errorMsg));
      });
  };
};
