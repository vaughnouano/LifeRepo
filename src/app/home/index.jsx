import { ScrollView, View } from "react-native";
import { layout } from "../../app/home/homeStyle";
import BottomButton from "../../components/Button/BottomButton";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Navigation from "../../components/Navigation/Navigation";
import { color } from "../../constants/color";

export default function Home() {
  return (
    <View style={[layout.container, color.bg_clr_100]}>
      {/* Header */}
      <Header Date="THU" DayNumber="56" style={layout.header} />
      {/* Lists */}
      <ScrollView style={[layout.listContainer, color.bg_clr_200]}>
        <List Task="Study Math" Time="2:00 PM" />
        <List Task="Clean Room" Time="4:00 PM" />
      </ScrollView>
      {/* Nav */}
      <Navigation style={layout.navigation} />
      {/* Bottom Button */}
      <BottomButton Title="+Task" style={layout.buttomButton} />
    </View>
  );
}
