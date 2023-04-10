import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles-createPostsScreen";

import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { FontAwesome, Feather } from "@expo/vector-icons";
import * as Location from "expo-location";

const initialState = {
  title: "",
  location: "",
  photo: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState({ ...initialState });
  const [camera, setCamera] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  const takePhoto = async () => {
    if (camera) {
      const { uri } = await camera.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setState((prevState) => ({ ...prevState, photo: uri }));
    }
  };

  const sendPhoto = async () => {
    const { coords } = await Location.getCurrentPositionAsync();
    navigation.navigate("Home", { ...state, coords });
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Not access to the camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <Camera style={styles.camera} ref={setCamera}>
            {state.photo && (
              <View style={styles.photoWraper}>
                <Image
                  source={{ uri: state.photo }}
                  style={{ height: "100%", width: "100%" }}
                />
              </View>
            )}

            <TouchableOpacity onPress={takePhoto}>
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </Camera>
          <Text style={styles.cameraLabel}>
            {state.photo ? "Edit photo" : "Download photo"}
          </Text>
          <View style={{ marginHorizontal: 16 }}>
            <TextInput
              style={styles.titleInput}
              onSubmitEditing={() => Keyboard.dismiss()}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  title: value,
                }))
              }
              value={state.title}
              placeholder="Title..."
              placeholderTextColor="#BDBDBD"
            />
            <View style={{ position: "relative" }}>
              <TextInput
                style={styles.locationInput}
                onSubmitEditing={() => Keyboard.dismiss()}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, location: value }))
                }
                value={state.location}
                placeholder="Location..."
                placeholderTextColor="#BDBDBD"
              />
              <Feather
                style={styles.locationIcon}
                name="map-pin"
                size={24}
                color="#BDBDBD"
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                ...styles.sendButton,
                backgroundColor: state.photo ? "#FF6C00" : "#F6F6F6",
              }}
              activeOpacity={0.6}
              onPress={sendPhoto}
            >
              <Text
                style={{
                  ...styles.sendLabel,
                  color: state.photo ? "#FFFFFF" : "#BDBDBD",
                }}
              >
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
