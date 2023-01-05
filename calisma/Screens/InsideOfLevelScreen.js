
import { StyleSheet, View,FlatList } from 'react-native';
import { METINLER } from '../data/Metinler';
import LevelItem from '../LevelContent/LevelItem';



function InsideOfLevelScreen({route}) {
 
  const catId= route.params.levelId;
  
  const displayedLevels = METINLER.filter((levelItem) => {
    return levelItem.levelid.indexOf(catId) >= 0;
  });

  function renderLevelItem (itemData){
   
    const item= itemData.item

   
   const levelItemProps = {
    headline: item.headline,
    nick: item.nick,
    content: item.content,
    levelid: item.levelid,
  

   };    
  return <LevelItem {...levelItemProps}  />;
 }

return (
  <View >
    <FlatList
      data={displayedLevels}
      keyExtractor={(itemData) => itemData.id}
      renderItem={renderLevelItem}
    />
  </View>
);
}
export default InsideOfLevelScreen;
const styles = StyleSheet.create({
  
  
});
