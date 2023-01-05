import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { METINLER } from '../data/Metinler';
import { SORULAR } from '../data/Metinler';
import { addFavorite, removeFavorite } from "../store/redux/Favorites";
import { useLayoutEffect } from 'react';
import IconButton from '../ListSetup/IconButton';

function Content({ route , navigation }) {

   const favoriteContentIds= useSelector ( (state)=> state.favoriteContents.nicks );
   const dispatch = useDispatch ();

 

    const contentId = route.params.ayva
    const selectedContent = METINLER.find((Metin) => Metin.nick === contentId);
    const selectedQuestion = SORULAR.find((Soru) => Soru.sorgu === contentId);
    
    const contentIsFavorite = favoriteContentIds.includes (contentId)

    function changeFavoriteStatusHandler() {
        if (contentIsFavorite) {
          
          dispatch(removeFavorite({ nick: contentId }));
        } else {
          
          dispatch(addFavorite({ nick: contentId }));
        }
      }
   
   
      useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            return (
              <IconButton
                icon={contentIsFavorite ? 'star' : 'star-outline'}
                color="white"
                onPress={changeFavoriteStatusHandler}
              />
            );
          },
        });
      }, [navigation, changeFavoriteStatusHandler]);





    return (
        <ScrollView>
           
            <View style={{alignItems:"center", marginBottom:30}}>
            <Text style={{fontWeight:"bold", fontSize:20}}>{selectedContent.headline}</Text>
            </View>
            <Text style={{fontSize:18}}>{selectedContent.content}</Text>
            
            
           
            

        </ScrollView>
    )
   

};


export default Content;

const styles = StyleSheet.create ({});