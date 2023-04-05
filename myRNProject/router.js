import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
// import { getHeaderTitle } from "@react-navigation/elements";

import LoginScreen from "./Screens/auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen/RegistrationScreen";
import PostsScreen from "./Screens/mainScreen/PostsScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen/ProfileScreen";
// import { getHeaderTitle } from "@react-navigation/elements";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#ff6c00",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarActiveTintColor: "#ffffff",
        tabBarStyle: { alignItems: "center" },
      }}
    >
      <MainTab.Screen
        options={{
          tabBarItemStyle: {
            marginTop: 9,
            maxWidth: 70,
            height: 40,
            borderRadius: 20,
          },

          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarItemStyle: {
            marginTop: 9,
            maxWidth: 70,
            height: 40,
            borderRadius: 20,
            marginLeft: 16,
            marginRight: 16,
          },
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" size={size} color={color} />
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarItemStyle: {
            marginTop: 9,
            maxWidth: 70,
            height: 40,
            borderRadius: 20,
          },
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
