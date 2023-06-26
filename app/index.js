import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
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
      <Link href={"/NewPost"}>
        <Text>New Post</Text>
      </Link>
      <Text style={{ marginVertical: 20 }} onPress={() => signOut()}>
        Sign out
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
