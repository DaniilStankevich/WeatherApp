import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS , SHADOWS} from "../../../constants";

    const styles = StyleSheet.create({
      container: {
        backgroundColor: "#E8E9FD",
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingTop: 20,
        paddingBottom: 20,
      },
      cityContainer: {
        alignItems: 'center',
      },
      cityText: {
        fontFamily: FONT.bold,
        fontSize: 24,
        fontWeight: 'bold',
      },
      weatherContainer: {
           flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
      },


      temperatureContainer: {
        flex: 1,
      },
      temperatureText: {
        fontSize: 79,
      },
      imageContainer: {
   
        alignItems: 'center',
      },
      image: {
        width: 24,
        height: 24,
      
      },

      imgUrl: {
        
   width: 90,
   height: 90,
   backgroundColor: COLORS.white,
   borderRadius: SIZES.medium,
   justifyContent: "center",
   alignItems: "center",
      },

      weatherText: {
        fontSize: 18,
      },
      infoContainer: {
        flexDirection: 'row', // Расположение элементов в ряд
        justifyContent: 'space-between',
        marginTop: 20,
        fontFamily: FONT.bold,
        fontSize: 12,

      },


      infoContainerText: {
  
        fontFamily: FONT.bold,
        fontSize: 12,

      },
    });
    
    export default styles;

