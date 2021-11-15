<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import meetups from "./Meetups/meetups-store";
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";

  let editMode = null;
  let page = "overview";
  let pageData = {};
  let editedId = null;

  const savedMeetup = (event) => {
    editMode = null;
    editedId = null;
  };

  const cancelEdit = () => {
    editMode = null;
    editedId = null;
  };

  const showDetails = (event) => {
    page = "details";
    pageData.id = event.detail;
  };

  const closeDetails = () => {
    page = "overview";
    pageData = {};
  };

  const startEdit = (event) => {
    editMode = "edit";
    editedId = event.detail;
  };

  fetch("https://meetus-d5682-default-rtdb.firebaseio.com/meetups.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error!");
      }
      return res.json();
    })
    .then((data) => {
      const loadedMeetups = [];
      for (const key in data) {
        loadedMeetups.push({
          ...data[key],
          id: key,
        });
      }
      meetups.setMeetups(loadedMeetups);
    })
    .catch((err) => console.log(err));
</script>

<Header />
<main>
  {#if page === "overview"}
    {#if editMode === "edit"}
      <EditMeetup on:save={savedMeetup} on:cancel={cancelEdit} id={editedId} />
    {/if}
    <MeetupGrid
      on:add={() => {
        editMode = "edit";
      }}
      meetups={$meetups}
      on:showdetails={showDetails}
      on:edit={startEdit}
    />
  {:else}
    <MeetupDetail id={pageData.id} on:close={closeDetails} />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
