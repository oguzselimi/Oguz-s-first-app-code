import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';


import FavoriteContentList from '../ListSetup/FavoriteContentList';
import { METINLER } from '../data/Metinler';



function FavoritesScreen() {
  
  const favoriteContentIds = useSelector((state) => state.favoriteContents.nicks);

  const favoriteContents = METINLER.filter((Metin) =>
  favoriteContentIds.includes(Metin.nick)
  );

  if (favoriteContents.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite contens yet.</Text>
      </View>
    );
  }

  return <FavoriteContentList items={favoriteContents} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});