<script lang="ts">
  import "css/global.css";

  import { fly, fade } from "svelte/transition";
  import { quintOut, backOut } from "svelte/easing";
  import { onMount } from "svelte";

  export let bannerName: string[];
  export let bannerDescription: string;
  export let bannerImage: string;
  export let bannerSize: string;

  let bannerNameStringed = bannerName.join(" ");
  let ready = false;

  function typewriter(node: Node, { speed = 1 }) {
    const text = node.textContent ?? "";
    const duration = text.length / speed * 1000;

    return {
      duration,
      tick: (t: number) => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }

  onMount(() => ready = true);
</script>

<div class="banner" style="height: {bannerSize}">
  <!-- Image Part -->
  {#if ready}
    <img 
      transition:fade={{ easing: quintOut, duration: 10 * 1000 }}

      src={bannerImage} 
      alt={bannerNameStringed} 
      loading="lazy"
    />
  {/if}
  <div class="backdrop-blur"></div>

  <!-- Text Part -->
  <div class="title">
    {#if ready}
      <h1 class="overflow" style="font-size: 3rem">
        {#each bannerName as name, i}
          <span transition:fly={{
            y: 100,
            delay: i * 300,
            duration: 1000,
            easing: backOut
          }} class="line">
            {@html name}
          </span>
        {/each}
      </h1>
      <p transition:typewriter={{ speed: 20 }}>{bannerDescription}</p>

      <div transition:fade={{ duration: 2000 }}>
        <slot />
      </div>
    {/if}
  </div>
</div>

<style>
  img {
    width: 100vw;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  .backdrop-blur {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: var(--background);
    backdrop-filter: blur(5px);

    opacity: .8;
  }

  .banner {
    position: relative;

    background-color: #333;

    width: 100%;
  }

  .title {
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    text-align: center;
  }

  .overflow {
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
  }

  .line {
    display: inline-block;
    
    margin-right: .4rem;
  }
</style>