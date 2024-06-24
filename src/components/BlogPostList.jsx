import React from 'react';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';

const BlogPostList = ({ posts }) => {
  return (
    <VStack spacing={8} align="stretch">
      {posts.map((post, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">{post.title}</Heading>
          <Text mt={4}>{post.content}</Text>
          <Text fontSize="sm" color="gray.500" mt={2}>
            Posted on: {new Date(post.date).toLocaleDateString()}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default BlogPostList;