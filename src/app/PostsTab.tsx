const fetchPost = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  const data = await response.json();
  return data;
};

type Post = {
  id: number;
  message: string;
};

export const PostsTab = async () => {
  const posts: Post[] = await fetchPost();
  return (
    <ul>
      {posts.map((post) => (
        <li key={`index_${post.id}`}>{post.message}</li>
      ))}
    </ul>
  );
};
