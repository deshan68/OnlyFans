import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { DataStore } from "aws-amplify";
import { User } from "../models";

const Posts = ({ post }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    DataStore.query(User, post.userID).then(setUser);
  });
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
        <Image
          src={user?.avatar}
          style={{
            width: 50,
            aspectRatio: 1,
            borderRadius: 50,
            marginRight: 10,
          }}
        />
        <View>
          <Text style={{ fontWeight: "600", fontSize: 17, marginBottom: 3 }}>
            {user?.name}
          </Text>
          <Text style={{ color: "gray" }}>@{user?.handle}</Text>
        </View>

        <View
          style={{
            marginLeft: "auto",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ marginRight: 5, color: "gray" }}>3 hours</Text>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
      </View>

      <Text style={{ margin: 10, lineHeight: 18 }}>{post.text}</Text>
      {post.image && (
        <Image src={post.image} style={{ width: "100%", aspectRatio: 1 }} />
      )}

      <View style={{ margin: 10, flexDirection: "row" }}>
        <AntDesign
          name="hearto"
          size={20}
          color="gray"
          style={{ marginRight: 10 }}
        />

        <Fontisto
          name="dollar"
          size={20}
          color="gray"
          style={{ marginRight: 10 }}
        />
      </View>

      <Text style={{ fontWeight: "500", marginHorizontal: 10 }}>
        {post.likes} likes
      </Text>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
