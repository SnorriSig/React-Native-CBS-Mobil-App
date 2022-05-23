import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { EVENTS } from "../data/dummy-data";
import EventList from "../components/EventList/EventList";

function FavoritesScreen() {
  const favoriteEventIds = useSelector((state) => state.favoriteEvents.ids);

  const favoriteEvents = EVENTS.filter((event) =>
    favoriteEventIds.includes(event.id)
  );
  if (favoriteEvents.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite events.</Text>
      </View>
    );
  }
  return <EventList items={favoriteEvents} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
  },
});
