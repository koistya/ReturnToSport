import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, RefreshControl, ActivityIndicator } from 'react-native';

const mockPosts = [
    {
      id: 1,
      author: 'User1',
      content: 'Hello, this is a sample post with an image!',
      image: 'https://via.placeholder.com/350x150',
      comments: [
        {
          id: 1,
          author: 'User2',
          content: 'Nice post!',
        },
        {
          id: 2,
          author: 'User3',
          content: 'Thanks for sharing!',
        },
      ],
    },
    {
      id: 2,
      author: 'User4',
      content: 'Another interesting post with an image.',
      image: 'https://via.placeholder.com/350x150/111',
      comments: [
        {
          id: 3,
          author: 'User1',
          content: 'I agree!',
        },
      ],
    },
    {
        id: 3,
        author: 'User1',
        content: 'Hello, this is a sample post with an image!',
        image: 'https://via.placeholder.com/350x150',
        comments: [
            {
              id: 3,
              author: 'User1',
              content: 'I agree!',
            },
          ],
      },
      {
        id: 4,
        author: 'User4',
        content: 'Another interesting post with an image.',
        image: 'https://via.placeholder.com/350x150/111',
        comments: [
            {
              id: 3,
              author: 'User1',
              content: 'I agree!',
            },
          ],
      },
  ];
  const Feed = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
  
    const onRefresh = async () => {
      setIsRefreshing(true);
      // Fetch new data and update the mockPosts array
      // ...
      setIsRefreshing(false);
    };
  
    const handleLoadMore = async () => {
      setIsLoadingMore(true);
      // Fetch older data and append to the mockPosts array
      // ...
      setIsLoadingMore(false);
    };
  
    const renderFooter = () => {
      return isLoadingMore ? (
        <View style={styles.loadingMore}>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      ) : null;
    };
  
    const renderPost = ({ item }) => {
        return (
          <View style={styles.postContainer}>
            <Text style={styles.postAuthor}>{item.author}</Text>
            <Text style={styles.postContent}>{item.content}</Text>
            <Image source={{ uri: item.image }} style={styles.postImage} />
            <Text style={styles.commentsTitle}>Comments:</Text>
            {item.comments.map((comment) => (
              <View key={comment.id} style={styles.commentContainer}>
                <Text style={styles.commentAuthor}>{comment.author}</Text>
                <Text style={styles.commentContent}>{comment.content}</Text>
              </View>
            ))}
          </View>
        );
      };

    return (
    <View style={styles.container}>
        <FlatList
        data={mockPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
            <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        />
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  postAuthor: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postContent: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  commentsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentContainer: {
    marginBottom: 5,
  },
  commentAuthor: {
    fontWeight: 'bold',
  },
  commentContent: {
    marginLeft: 10,
  },
  loadingMore: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Feed;
