import React, { useState } from "react"
import { View, Text, Image } from "react-native"
import { SIZES } from "../../../constants"
import styles from "./InformationList.style"

const InformationList = ({ item }) => {
  // Находим время
  const time = item.time.slice(-5)

  return (
    <View style={{ borderRadius: SIZES.medium, overflow: "hidden" }}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: `http:${item.condition.icon}` }}
            resizeMode="contain"
            style={styles.logImage}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.data}>{`${item.temp_c}°`}</Text>

          <Text style={styles.data}>{`${item.humidity} humidity`}</Text>

          <Text style={styles.data}>{`${item.wind_mph} m/c`}</Text>

          <Text style={styles.data}>{`${item.precip_mm} %`}</Text>

          <Text style={styles.time}>{`${time}`}</Text>
        </View>
      </View>
    </View>
  )
}

export default InformationList
