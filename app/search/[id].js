import React, { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, ScrollView, View } from "react-native"
import { Stack, useRouter, useLocalSearchParams } from "expo-router"
import { Text, SafeAreaView } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { saveDays } from "../../redux/slices/cartSlice"
import axios from "axios"
import InformationList from "../../components/common/InformationList/InformationList"
import Maintitle from "../../components/common/maintitle/MainTitle"
import { ScreenHeaderBtn, NextDayCard } from "../../components"
import { COLORS, icons, SIZES, FONT } from "../../constants"
import styles from "../../styles/search"

const CitySearch = () => {
  const params = useLocalSearchParams()
  const router = useRouter()
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [searchLoader, setSearchLoader] = useState(true)
  const [searchError, setSearchError] = useState(false)

  const handleSearch = async () => {
    setSearchLoader(true)
    try {
      const options = {
        method: "GET",
        url: `http://api.weatherapi.com/v1/forecast.json`,
        params: {
          key: "1257e9e524b4411e93c193640231209",
          q: params.id,
          days: 3, // API позволяет получить данны только на 3 дня
        },
      }

      const response = await axios.request(options)
      //Сохраняем кортеж данных в Redux
      dispatch(saveDays(response.data))
    } catch (error) {
      setSearchError(error)
      console.log(error)
    } finally {
      setSearchLoader(false)
    }
  }

  // Делаем запрос на сервер
  useEffect(() => {
    handleSearch()
  }, [])

  // Достаем необходимые данные из хранилища
  const name = useSelector((state) => state.cart.nextDays)
  const ToDayItems = useSelector((state) => state.cart.todayItem.hour)
  const search = useSelector((state) => state.cart.search)
  const currentNow = useSelector((state) => state.cart.currentNow)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView
        style={{
          paddingHorizontal: SIZES.medium,
          backgroundColor: COLORS.lightWhite,
        }}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => navigation.goBack()}
              />
            ),
          }}
        />

        {searchLoader ? (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
          />
        ) : searchError ? (
          <Text> Something went wrong </Text>
        ) : (
          <>
            <Maintitle
              currentNow={currentNow}
              search={search}
            />

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
                Your weather forecast for today
              </Text>
            </View>

            <View style={{ height: 300, marginTop: "40px" }}>
              <FlatList
                data={ToDayItems}
                renderItem={({ item }) => <InformationList item={item} />}
                keyExtractor={(item, index) => index}
                contentContainerStyle={{
                  columnGap: SIZES.medium,
                  paddingVertical: 10,
                }}
                horizontal={false}
              />
            </View>

            <View
              style={{
                paddingHorizontal: "20px",
                marginTop: 30,
                marginBottom: 0,
              }}
            >
              <Text
                style={{
                  color: "#1C1E30",
                  fontSize: SIZES.large,
                  fontFamily: FONT.medium,
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                Next days
              </Text>
            </View>

            <View style={styles.cardsContainer}>
              {name?.map((item, index) => (
                <NextDayCard
                  key={index}
                  job={item}
                  handLeNavigate={() => router.push(`/next-days/${index}`)}
                />
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default CitySearch
