import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";
import UserCard from "../src/components/UserCard";
import { Link } from "expo-router";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { User } from "../src/models";

export default function Page() {
  const { signOut } = useAuthenticator();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    DataStore.query(User).then(setUsers);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Link
          href={"/NewPost"}
          style={{
            backgroundColor: "royalblue",
            alignSelf: "center",
            padding: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>New Post</Text>
        </Link>
        <View
          style={{
            borderColor: "royalblue",
            borderWidth: 1,
            alignSelf: "center",
            padding: 10,
            marginVertical: 10,
          }}
        >
          <Text
            style={{ color: "royalblue", fontWeight: "bold" }}
            onPress={() => signOut()}
          >
            Sign out
          </Text>
        </View>
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
      />
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
  },
});
