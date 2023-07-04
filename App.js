import {
  Modal,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
  Alert,
  Dimensions,
} from "react-native";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Modal
        animationType="slide"
        // transparent
        visible={visibleModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed");
          setVisibleModal(!visibleModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setVisibleModal(!visibleModal)}
              style={styles.close}
            >
              <Text style={{ textAlign: "right" }}>X</Text>
            </Pressable>
            <Text style={{ padding: 10, textAlign: "center" }}>I am Modal</Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setVisibleModal(!visibleModal)}>
        <Text
          style={{
            backgroundColor: "lightblue",
            padding: 10,
            borderRadius: 10,
          }}
        >
          Show Modal
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: width * 0.8,
    backgroundColor: "#bee7f7",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  close: {},
});
