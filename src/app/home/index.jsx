import { ScrollView, View } from "react-native";
import BottomButton from "../../components/Button/BottomButton";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Navigation from "../../components/Navigation/Navigation";
import { layout } from "../../app/home/homeStyle";

export default function Home() {
  return (
    <View style={layout.container}>
      {/* Header */}
      <Header Date="THU" DayNumber="56" style={layout.header} />
      {/* Lists */}
      <ScrollView style={layout.listContainer}>
        <List Task="Hello" Time="2:00 PM" />
        <List Task="World" Time="4:00 PM" />
      </ScrollView>
      {/* Nav */}
      <Navigation style={layout.navigation} />
      {/* Bottom Button */}
      <BottomButton Title="+Task" style={layout.buttomButton} />
    </View>
  );
}
