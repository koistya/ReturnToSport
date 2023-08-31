import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ avatarUrl, size = 40 }) => {
  // Replace 'emptyAvatarImage' with your placeholder image import path
  const emptyAvatarImage = require('../../assets/logo-dark.png');

  return (
    <View style={styles.container}>
      <Image
        source={avatarUrl ? { uri: avatarUrl } : emptyAvatarImage}
        style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    resizeMode: 'cover',
  },
});

export default Avatar;
