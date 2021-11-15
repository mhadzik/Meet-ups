import { writable } from "svelte/store";

const meetups = writable([
  {
    id: 1,
    title: "Coding bootcamp",
    subtitle: "learn to code in 2 hours",
    description:
      "lorem loremloremloremloremlorem loremlorem loremlorem loremloremlorem loremloremlorem",
    address: "27th Nerd Road, 32523 New York",
    imageUrl: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    contactEmail: "code@test.com",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Swim bootcamp",
    subtitle: "learn to swim in 2 hours",
    description:
      "lorem loremloremloremloremlorem loremlorem loremlorem loremloremlorem loremloremlorem",
    address: "27th Nerd Road, 32523 New York",
    imageUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    contactEmail: "swim@test.com",
    isFavorite: false,
  },
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = { ...meetupData };
    meetups.update((items) => {
      return [newMeetup, ...items];
    });
  },
  toggleFavorite: (id) => {
    meetups.update((items) => {
      const updatedMeetup = {
        ...items.find((m) => m.id === id),
      };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex((m) => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update((items) => {
      const meetupIndex = items.findIndex((i) => i.id === id);
      const updatedMeetup = { ...items[meetupIndex], ...meetupData };
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  removeMeetup: (id) => {
    meetups.update((items) => {
      return items.filter((i) => i.id !== id);
    });
  },
};

export default customMeetupsStore;
