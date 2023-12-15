import React, { useEffect } from "react";
import { getTimelinePosts } from "../../actions/PostsAction";
import './Posts.css'
import Post from '../Post/Post'
import { useSelector, useDispatch } from "react-redux";
const Posts = () => {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  },[]);

  return (
    <div className="Posts">
        {loading
        ? "Fetching posts...."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  )
}

export default Posts