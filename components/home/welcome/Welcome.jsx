import { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native"
import { useRouter } from "expo-router"

import styles from "./welcome.style"
import { icons, SIZES, FONT } from "../../../constants"

const Welcome = ({ searchTerm, setSearchTerm, handLeClick }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Good time of day!</Text>
      </View>

      <View style={{ marginTop: 30, marginBottom: 10 }}>
        <Text
          style={{
            color: "#1C1E30",
            fontSize: SIZES.large,
            fontFamily: FONT.medium,
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          Please select a city
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={handLeClick}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome
