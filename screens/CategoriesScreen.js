import { FlatList } from 'react-native'
import CatagoryGridTile from '../components/CatagoryGridTile';
import { CATEGORIES } from '../data/dummy-data'

function CatagoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
         navigation.navigate("EventOverview", {
             categoryId: itemData.item.id,
         });
        }

        return ( 
            <CatagoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onPress={pressHandler} 
            />
        );
    }
    return ( 
    <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
    />
    );
}

export default CatagoriesScreen