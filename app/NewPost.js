import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { DataStore } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Post } from "../src/models";

const NewPost = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const { user } = useAuthenticator();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  const onPost = async () => {
    await DataStore.save(
      new Post({ text, likes: 0, userID: user.attributes.sub })
    );
  };

  return (
    <SafeAreaView style={{ margin: 5, gap: 5 }}>
      <Ionicons
        onPress={() => router.back()}
        name="arrow-back"
        size={24}
        color="black"
      />
      <TextInput
        placeholder="Compose new post..."
        placeholderTextColor={"gray"}
        value={text}
        onChangeText={setText}
        numberOfLines={3}
        multiline
      />
      <View>
        <EvilIcons
          onPress={pickImageAsync}
          name="image"
          size={30}
          color="black"
        />
      </View>
      {image && <Image src={image} style={{ width: "100%", aspectRatio: 1 }} />}
      <Button title="Post" onPress={() => onPost()} />
    </SafeAreaView>
  );
};

export default NewPost;

const styles = StyleSheet.create({});
