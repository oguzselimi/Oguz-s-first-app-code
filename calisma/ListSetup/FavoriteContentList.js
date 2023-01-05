import { View, FlatList, StyleSheet } from 'react-native';

import LevelItem from '../LevelContent/LevelItem';

function FavoriteContentList({items}) {
  function renderContentItem(itemData) {
    const item = itemData.item;


    const contentItemProps = {
     headline: item.headline,
     nick: item.nick,
     content: item.content,
     levelid: item.levelid,
    };

    return <LevelItem {...contentItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.nick}
        renderItem={renderContentItem}
      />
    </View>
  );
}

export default FavoriteContentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});