<script lang="ts">
  import { onMount } from "svelte";

  export let data: {
    props: {
      slug: string;
    }
  };

  onMount(() => document.location.href = `/quotes/${data.props.slug}`);
</script>