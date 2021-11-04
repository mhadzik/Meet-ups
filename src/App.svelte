<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";

  let meetups = [
    {
      id: 1,
      title: "Coding bootcamp",
      subtitle: "learn to code in 2 hours",
      description:
        "lorem loremloremloremloremlorem loremlorem loremlorem loremloremlorem loremloremlorem",
      imageURL:
        "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      address: "27th Nerd Road, 32523 New York",
      contantEmail: "code@test.com",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Swim bootcamp",
      subtitle: "learn to swim in 2 hours",
      description:
        "lorem loremloremloremloremlorem loremlorem loremlorem loremloremlorem loremloremlorem",
      imageURL:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      address: "27th Nerd Road, 32523 New York",
      contantEmail: "swim@test.com",
      isFavorite: false,
    },
  ];

  let editMode = null;

  const addMeetup = (event) => {
    const newMeetup = {
      id: Math.random(),
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      description: event.detail.description,
      address: event.detail.address,
      imageUrl: event.detail.imageUrl,
      contactEmail: event.detail.email,
    };

    meetups = [...meetups, newMeetup];

    editMode = null;
  };

  const toggleFavorite = (event) => {
    const id = event.detail;
    const updatedMeetup = {
      ...meetups.find((m) => m.id === id),
    };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex((m) => m.id === id);

    const updatedMeetups = [...meetups];

    updatedMeetups[meetupIndex] = updatedMeetup;

    meetups = updatedMeetups;
  };
</script>

<Header />
<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = "add")}>New Meetup</Button>
  </div>
  {#if editMode === "add"}
    <EditMeetup on:save={addMeetup} />
  {/if}
  <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>
