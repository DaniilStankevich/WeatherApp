import { Text, View, SafeAreaView, FlatList, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { Stack, useRouter, useLocalSearchParams } from "expo-router"
import { ScreenHeaderBtn, Specifics, JobFooter } from "../../components"
import Maintitle from "../../components/common/maintitle/MainTitle"
import InformationList from "../../components/common/InformationList/InformationList"

import { COLORS, icons, SIZES, FONT } from "../../constants"
import styles from "../../styles/search"

const NextDayDetails = () => {
  const params = useLocalSearchParams()
  const navigation = useNavigation()

  const search = useSelector((state) => state.cart.search)

  const currentNow = useSelector((state) => state.cart.nextDays[params.id].day)

  const item = useSelector((state) => state.cart.nextDays[params.id].hour)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView
        style={{
          paddingHorizontal: SIZES.medium,
          backgroundColor: COLORS.lightWhite,

          flex: 1,
          backgroundColor: COLORS.lightWhite,
        }}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                inconUrl={icons.left}
                dimension="60"
                handlePress={() => navigation.goBack()}
              />
            ),
            headerTitle: "for novosoft",
          }}
        ></Stack.Screen>

        <View>
          <Maintitle
            currentNow={currentNow}
            search={search}
          />

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
              On this day
            </Text>
          </View>

          <View style={{ height: 300, marginTop: "40px" }}>
            <FlatList
              data={item}
              renderItem={({ item }) => <InformationList item={item} />}
              keyExtractor={(item, index) => index}
              contentContainerStyle={{
                columnGap: SIZES.medium,
                paddingVertical: 10,
              }}
              horizontal={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NextDayDetails
