import { StyleSheet,  FlatList } from 'react-native';
import { SEVIYELER } from '../data/Metinler';
import LevelTile from '../LevelContent/LevelTile';





function LevelChooseScreen({ navigation }) {
  function renderLevelitem(itemData) {
    function levelChooseHandler() {
      navigation.navigate("ChooseContent", {levelId :itemData.item.id}
      );
    }
    return <LevelTile zulu={itemData.item.title} onPress={levelChooseHandler} />
      
    
      
  }

  return (
    <FlatList
      data={SEVIYELER}
      keyExtractor={(item) => item.id}
      renderItem={renderLevelitem}

    />
  );

}




export default LevelChooseScreen;

const styles = StyleSheet.create({});
