import axios from 'axios';

const url = 'https://memories-social-pro.herokuapp.com/posts'; // this is the url pointing to the backend route

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => {
    // console.log('entered api', newPost);
    return axios.post(url, newPost);
};
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => {
    return axios.patch(`${url}/${id}`, updatedPost);
};

export const deletePost = (id) => {
    axios.delete(`${url}/${id}`);
};
