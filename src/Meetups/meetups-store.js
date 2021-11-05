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
    contantEmail: "code@test.com",
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
    contantEmail: "swim@test.com",
    isFavorite: false,
  },
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = { ...meetupData, id: Math.random(), isFavorite: false };
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
};

export default customMeetupsStore;
