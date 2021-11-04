<script>
  import MeetupItem from "./MeetupItem.svelte";

  export let meetups;
</script>

<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem
      title={meetup.title}
      subtitle={meetup.subtitle}
      imageUrl={meetup.imageURL}
      description={meetup.description}
      address={meetup.address}
      email={meetup.email}
    />
  {/each}
</section>

<style>
  section {
    widows: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
