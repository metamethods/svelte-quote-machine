<script lang="ts">
  import "css/global.css";

  export let title: string;
  export let description: string;
</script>

<div>
  <h1>{title}</h1>
  <p>{description}</p>
  <slot />
</div>

<style>
  div {
    width: 100%;
    height: 100%;

    padding: 1rem;

    text-align: center;
  }
</style>