import React, { useState } from "react"

import { View, Text, Image } from "react-native"
import { useRouter } from "expo-router"
import { FONT, SIZES, COLORS, SHADOWS } from "../../../constants"

import styles from "./maintitle.style"

const Maintitle = ({ currentNow, search }) => {
  //
  //
  // source={{ uri: checkImageURL(item.employer_logo)
  //? item.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" }}

  //const URL = currentNow.condition.icon
  //const StateWeather = currentNow.condition.text

  console.log(currentNow, "То что сейчас в Maintitle")

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cityContainer}>
          <Text style={styles.cityText}>{search}</Text>
        </View>

        <View style={styles.weatherContainer}>
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperatureText}>
              {currentNow.temp_c ? currentNow.temp_c : currentNow.maxtemp_c}°
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              style={styles.imgUrl}
              source={{ uri: `http:${currentNow.condition.icon}` }}
              resizeMode="contain"
            />
            <Text style={styles.weatherText}></Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoContainerText}>
            Precip{" "}
            {currentNow.precip_in
              ? `${currentNow.precip_in}`
              : currentNow.totalprecip_in}
            {currentNow.precip_in == 0 ? "0" : ""}%
          </Text>
          <Text style={styles.infoContainerText}>
            Humidity{" "}
            {currentNow.humidity ? currentNow.humidity : currentNow.avghumidity}{" "}
          </Text>
          <Text style={styles.infoContainerText}>
            {currentNow.wind_mph ? currentNow.wind_mph : currentNow.maxwind_mph}{" "}
            m/c
          </Text>
          <Text style={styles.infoContainerText}>
            {currentNow.condition.text}
          </Text>
        </View>
      </View>
    </>
  )
}

export default Maintitle

/* 


    <TouchableOpacity style={styles.logoContainer}>
        <Image
        
          resizeMode="contain"
          style={styles.logImage}
        />
    </TouchableOpacity>

   

    <View style={styles.textContainer}>


        <View>
        <Text style={styles.jobType}>
              Хай. Я прогуляюсь
        </Text>      
        </View>
        
        
        <View>
        <Text style={styles.jobType}>
        Хай. Я прогуляюсь
          </Text>
          </View>


    </View> */
