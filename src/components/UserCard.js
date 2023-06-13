import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

export default function UserCard({ user }) {
  return (
    <Link href={`/user/${user.id}`} asChild>
      <Pressable>
        <ImageBackground
          source={{ uri: user.coverImage }}
          style={styles.userCards}
        >
          <View style={styles.overLay} />
          {/* image */}
          <Image src={user.avatar} style={styles.userImage} />

          {/* name and handle */}
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "500",
                marginBottom: 5,
              }}
            >
              {user.name}
            </Text>
            <Text
              style={{
                color: "white",
              }}
            >
              @{user.handle}
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  userCards: {
    backgroundColor: "gray",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5,

    borderRadius: 10,
    overflow: "hidden",
  },
  overLay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
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
});
