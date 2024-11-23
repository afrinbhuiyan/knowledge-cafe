import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3 mt-5">
            <h1>Blogs: {blogs.length} </h1>
            {
               blogs.map(blog => <Blog 
               key={blog.id}
               blog={blog} 
               handleAddToBookmark={handleAddToBookmark}
               handleMarkAsRead={handleMarkAsRead}
               ></Blog> )
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;