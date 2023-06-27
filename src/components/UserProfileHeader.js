import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const UserProfileHeader = ({ user, isSubscribed, setIsSubscribed }) => {
  const router = useRouter();

  return (
    <View>
      <ImageBackground source={{ uri: user.avatar }} style={styles.cover}>
        <View style={styles.overLay} />
        <SafeAreaView
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Ionicons
            onPress={() => router.back()}
            name="arrow-back"
            size={24}
            color="white"
          />
          <View>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {user.name}
            </Text>
            <Text style={{ color: "white" }}>
              1.1k posts · 55.6k Likes · 15.3k fans
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: 10,
            marginTop: -50,
          }}
        >
          <Image src={user.avatar} style={styles.userImage} />
          <FontAwesome name="share-square" size={24} color="royalblue" />
        </View>

        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{user.name}</Text>
        <Text style={{ marginBottom: 10, color: "gray" }}>@{user.handle}</Text>
        <Text style={{ color: "gray", lineHeight: 18 }}>
          Hey there! I'm {user.name}, your ultimate companion on this
          tantalizing journey. where I unlock the doors to my intimate desires
          and wildest fantasies. 💫
        </Text>
        <Text style={{ color: "gray", marginTop: 20, fontWeight: "bold" }}>
          SUBSCRIPTION
        </Text>

        <Pressable
          onPress={() => setIsSubscribed(!isSubscribed)}
          style={[
            styles.button,
            { backgroundColor: isSubscribed ? "white" : "royalblue" },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isSubscribed ? "royalblue" : "white" },
            ]}
          >
            {isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
          </Text>
          <Text
            style={[
              styles.buttonText,
              { color: isSubscribed ? "royalblue" : "white" },
            ]}
          >
            {user.subscriptionPrice === 0
              ? "FOR FREE"
              : "$" + user.subscriptionPrice + "/month"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserProfileHeader;

const styles = StyleSheet.create({
  cover: {
    width: "100%",
    height: 200,
  },
  overLay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    ...StyleSheet.absoluteFillObject,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 28,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 1,
    borderColor: "royalblue",
    borderWidth: 1,
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: "royalblue",
    fontWeight: "bold",
  },
});
