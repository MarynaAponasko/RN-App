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
