import { useLayoutEffect } from "react";

import EventList from "../components/EventList/EventList";
import { EVENTS, CATEGORIES } from "../data/dummy-data";

function EventOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedEvents = EVENTS.filter((eventItem) => {
    return eventItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <EventList items={displayedEvents} />;
}

export default EventOverviewScreen;
