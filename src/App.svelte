<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
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

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let imageUrl = "";
  let description = "";

  const addMeetup = () => {
    const newMeetup = {
      id: Math.random(),
      title: title,
      subtitle: subtitle,
      description: description,
      address: address,
      imageUrl: imageUrl,
      contactEmail: email,
    };

    meetups = [...meetups, newMeetup];
  };
</script>

<Header />
<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      type="text"
      on:input={(event) => (title = event.target.value)}
    />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      type="text"
      on:input={(event) => (subtitle = event.target.value)}
    />
    <TextInput
      id="address"
      label="Address"
      value={address}
      type="text"
      on:input={(event) => (address = event.target.value)}
    />
    <TextInput
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      type="text"
      on:input={(event) => (imageUrl = event.target.value)}
    />
    <TextInput
      id="email"
      label="Email"
      value={email}
      type="email"
      on:input={(event) => (email = event.target.value)}
    />
    <TextInput
      id="description"
      label="Description"
      value={description}
      controlType="textarea"
      rows="3"
      on:input={(event) => (description = event.target.value)}
    />
    <Button type="submit" caption="Submit" />
  </form>
  <MeetupGrid {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
