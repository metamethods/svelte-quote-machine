<script>
  import HeroBanner from "./HeroBanner.svelte";
  import Footer from "./Footer.svelte";
  import Card from "./Card.svelte";
</script>

<HeroBanner 
  bannerName={[
    "Random",
    "Quote",
    "Machine",
    "Using",
    "<span style='color: #eb5026'>Svelte</span>"
  ]}
  bannerDescription="A random quote machine using the Svelte framework, which was originally created by LukaDev using Next.js"
  bannerImage="https://picsum.photos/800/400"
  bannerSize="400px"
>
  <button class="button primary" on:click="{() => document.location.href = "create-quote"}">Create a Quote</button>
  <button class="button secondary" on:click="{() => document.location.href = "quotes"}">See a Random Quote</button>
  <button class="button ghost" on:click="{() => document.location.href = ""}">See Source</button>
</HeroBanner>

<div class="grid">
  <Card title="Why did you make this?" description="Just learning how svelte works. (let me tell you something... its amazing)" />
  <!-- <Card title="Why did you make this?" description="Just learning how svelte works. (let me tell you something... its amazing)" /> -->
</div>

<Footer />

<style>
  .grid {
    display: grid;

    grid-template-columns: repeat(1, 1fr);

    max-width: 1200px;

    margin-left: auto;
    margin-right: auto;
  }
</style>