import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";

import Home from "../../nestedScreen/Home";
import CommentsScreen from "../../nestedScreen/CommentsScreen";
import MapScreen from "../../nestedScreen/MapScreen";

import Header from "../../../src/components/Header";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Posts",
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header title={title} navigation={navigation} back={back} />;
          },
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          headerTitle: "Comments",
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header title={title} navigation={navigation} back={back} />;
          },
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerTitle: "Map",
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header title={title} navigation={navigation} back={back} />;
          },
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, FlatList, Image } from "react-native";

// const PostsScreen = ({ route }) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     if (route.params) {
//       setPosts((prevState) => [...prevState, route.params]);
//     }
//   }, [route.params]);
//   console.log("posts", posts);
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={posts}
//         keyExtractor={(item, indx) => indx.toString()}
//         renderItem={({ item }) => (
//           <View
//             style={{
//               marginBottom: 10,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Image source={{ uri: item }} style={{ width: 350, height: 200 }} />
//           </View>
//         )}
//       />
//     </View>
//   );
// };
// export default PostsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     // alignItems: "center",
//   },
// });
