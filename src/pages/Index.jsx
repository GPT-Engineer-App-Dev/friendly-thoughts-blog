import { Container, VStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import BlogPostForm from "../components/BlogPostForm";
import BlogPostList from "../components/BlogPostList";

const Index = () => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">My Blog</Heading>
        <BlogPostForm onSubmit={handleAddPost} />
        <BlogPostList posts={posts} />
      </VStack>
    </Container>
  );
};

export default Index;