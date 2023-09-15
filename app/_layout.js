import { Provider } from "react-redux"
import { store } from ".././redux/store"
import { Stack } from "expo-router"
import { useCallback } from "react"
import { useFonts } from "expo-font"
import * as SplachScreen from "expo-splash-screen"

SplachScreen.preventAutoHideAsync()

const Layout = () => {
  const fontsLoaded = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  })

  const OnLayoutRootView = useCallback(async () => {
    if (!fontsLoaded) {
      await SplachScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <Provider store={store}>
      <Stack onLayout={OnLayoutRootView} />
    </Provider>
  )
}

export default Layout