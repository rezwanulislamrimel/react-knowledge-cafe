import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setblogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(Response => Response.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;