import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { checkImageURL } from "../../../../utils"

import styles from "./nextdaycard.style"

const NextDayCard = ({ job, handLeNavigate }) => {
  function WhatisMounth(date) {
    let month = date.substring(5, 7)

    let days = date.substring(8, 10)

    switch (month) {
      case "01":
        return `${days} January`

      case "02":
        return `${days} February`

      case "03":
        return `${days} March`

      case "04":
        return `${days} April`

      case "05":
        return `${days} May`

      case "06":
        return `${days} June`

      case "07":
        return `${days} July`

      case "08":
        return `${days} August`

      case "09":
        return `${days} September`

      case "10":
        return `${days} October`

      case "11":
        return `${days} November`

      case "12":
        return `${days} December`

      default:
        return "not date"
    }
  }

  const myDate = WhatisMounth(job.date)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handLeNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: `http:${job.day.condition.icon}` }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text
          style={styles.jobName}
          numberOfLines={1}
        >
          <Text> {`${job.day.condition.text}`} </Text>
        </Text>

        <Text style={styles.jobType}>{myDate}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NextDayCard

// Мой сурс

/*
 <TouchableOpacity style={styles.container} onPress={handLeNavigate}>

      <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{ uri: 
               `http:${job.day.condition.icon}` }}
            resizeMode="contain"
            style={styles.logImage}
          />
      </TouchableOpacity>

    
      <View style={styles.textContainer}>
          <View>
          <Text style={styles.jobType}>
                {job.day.condition.text}
          </Text>      
          </View>
       
          <View>
          <Text style={styles.jobType}>
          {myDate} 
            </Text>
            </View>

      </View>

    </TouchableOpacity>

*/

/*
            source={{ uri: checkImageURL()
              ?   `http:${job.day.condition.icon}` : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" }}
            resizeMode="contain"

*/
