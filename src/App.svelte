<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";
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
