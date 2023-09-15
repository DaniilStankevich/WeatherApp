import { useState } from "react"
import { View, ScrollView, SafeAreaView } from "react-native"
import { Stack, useRouter } from "expo-router"
import { COLORS, SIZES } from "../constants"
import { Welcome } from "../components"

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <SafeAreaView
      style={{
        flex: 2,
        backgroundColor: COLORS.lightWhite,
        backgroundColor: "#E8E9FD",
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitleAlign: "left",
          headerTitleStyle: {
            paddingLeft: 20,
          },
          headerTitle: "for novosoft",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            justifyContent: "center",
            backgroundColor: "#E8E9FD",
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handLeClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
