import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,// nome della rotta associata alla schermata screen
  ResultsShow: ResultsShowScreen
},{
  initialRouteName: "Search", // la schermata mostrata per prima

  defaultNavigationOptions:{
    title: "Ristoranti" // opzioni predefinite in questo caso titolo della barra di navigazione (quella in alto)
  }
});

export default createAppContainer(navigator)