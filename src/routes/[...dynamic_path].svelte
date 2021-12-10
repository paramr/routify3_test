<script lang="ts">
  import { url, params } from "@roxi/routify";
  let path = $params.dynamic_path;

  $: folder = path[0];
</script>

<div style="text-align: center; max-width: 540px; margin: auto">
  <h4>
    <a href={$url('/')}>Go back</a>
  </h4>

  <h2>Dynamic full path ({path.length}): {path}</h2>
  <h2>Dynamic first part of path was: {folder}</h2>

</div>
