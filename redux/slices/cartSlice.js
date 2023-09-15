import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  search: "", // Поиск
  currentNow: {}, // Данные на сегодня/сейчас
  todayItem: [], // Данные на 24 часа
  nextDays: [], // Данные на следующие дни
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveSearch(state, action) {
      state.search = action.payload
    },

    saveDays(state, action) {
      state.search = action.payload.location.name
      state.todayItem = action.payload.forecast.forecastday[0]
      state.currentNow = action.payload.current // Сейчас

      let newArray = action.payload.forecast.forecastday.slice(1)
      state.nextDays = newArray // Следующие дни
    },
  },
})

export const { saveDays } = cartSlice.actions
export default cartSlice.reducer
