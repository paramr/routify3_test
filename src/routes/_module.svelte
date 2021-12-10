<!-- routify:option name="example-app" -->
<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
    TopAppBarComponentDev,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';

  let topAppBar: TopAppBarComponentDev;
</script>

<TopAppBar bind:this={topAppBar} variant="standard" dense>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Dense</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download"
        >file_download</IconButton
      >
      <IconButton class="material-icons" aria-label="Print this page"
        >print</IconButton
      >
      <IconButton class="material-icons" aria-label="Bookmark this page"
        >bookmark</IconButton
      >
    </Section>
  </Row>
</TopAppBar>


<AutoAdjust {topAppBar}>
<slot></slot>
</AutoAdjust>
