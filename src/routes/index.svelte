<!-- routify:option name="example-app" -->
<script lang="ts">
  const _links = [
    ["/", "Home"],
    ["/dynamic/test", "Dynamic test"],
    ["/reset", "Reset"],
  ];

  export let hello: string = "Hello world"
</script>

<div style="width: 100%; text-align: center; margin-top: 4rem;">
  <nav>
    {#each _links as [path, name]}
      <a class="link" href={path}>
        {name}
      </a>
    {/each}
  </nav>
  <div>
    <b>Guide:</b>
    <br />
    <a href="https://routify.dev">https://routify.dev</a>
  </div>

  <br />
  <div>
    <b>This template:</b>
    <br />
    <a class="link" href="https://github.com/roxiness/routify-starter">
      https://github.com/roxiness/routify-starter
    </a>
  </div>

  <p>Location: {location}</p>
  <div>From code: {hello}</div>

</div>
