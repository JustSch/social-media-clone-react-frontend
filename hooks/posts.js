import { useEffect, useState } from "react";

export function usePosts(){
    const [posts,setPosts] = useState(null);
    
    useEffect(() => {
        fetch('/api/post/postDashboard')
        .then((r) => r.json())
        .then((data) => setPosts(data))
    },[]);
    return posts;
}