class Event {
  constructor(
    id,
    categoryIds,
    title,
    date,
    complexity,
    imageUrl,
    duration,
    information,
    details,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.information = information;
    this.details = details;
    this.duration = duration;
    this.complexity = complexity;
    this.date = date;
  }
}

export default Event;
