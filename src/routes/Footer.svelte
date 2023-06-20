<script>
  import "css/global.css";

  import SvelteLogo from "$lib/images/svelte.png"
</script>

<footer>
  <div>
    <p>© metamethods 2023</p>
    <p>
      Made with <a href="https://svelte.dev/" style="color: #eb5026">Svelte</a> 
      <img src={SvelteLogo} alt="svelte logo" class="icon">
    </p>
  </div>
</footer>

<style>
  footer {
    background-color: var(--foreground);

    width: 100%;
    height: 100px;
  }

  div {
    width: 100%;
    height: 100%;

    display: flex;

    justify-content: space-between;
    align-items: center;

    max-width: calc(100vw - 40px);
    margin: 0 auto;
  }

  .icon {
    width: 20px;

    vertical-align: middle;
  }
</style>