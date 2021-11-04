<script>
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Meetups/MeetupItem.svelte";
  const meetups = [
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
    },
  ];
</script>

<Header />

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
  #meetups {
    margin-top: 5rem;
  }
</style>
