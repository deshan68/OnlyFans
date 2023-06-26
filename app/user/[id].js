import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "expo-router";
import users from "../../assets/data/users";
import UserProfileHeader from "../../src/components/UserProfileHeader";
import posts from "../../assets/data/posts";
import Posts from "../../src/components/Posts";
import { Entypo } from "@expo/vector-icons";
import { DataStore } from "aws-amplify";
import { User } from "../../src/models";

const ProfilePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [user, setUser] = useState([]);

  const { id } = useSearchParams();

  // const user = users.find((user) => user.id === id);

  useEffect(() => {
    DataStore.query(User, id).then(setUser);
  }, [user]);

  if (!user) {
    return <Text>user does not exist</Text>;
  }

  if (!isSubscribed) {
    return (
      <View>
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />
        <View
          style={{
            backgroundColor: "gainsboro",
            alignItems: "center",
            padding: 20,
            gap: 10,
          }}
        >
          <Entypo name="lock" size={24} color="gray" />
          <View
            style={{
              backgroundColor: "royalblue",
              padding: 10,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Subscribe to see user's posts
            </Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => (
          <UserProfileHeader
            user={user}
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
          />
        )}
        data={posts}
        renderItem={({ item }) => <Posts post={item} />}
      />
    </View>
  );
};

export default ProfilePage;
