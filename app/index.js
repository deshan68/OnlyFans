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
import users from "../assets/data/users";
import UserCard from "../src/components/UserCard";
import { Link } from "expo-router";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href={"/NewPost"}>
        <Text>New Post</Text>
      </Link>
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
