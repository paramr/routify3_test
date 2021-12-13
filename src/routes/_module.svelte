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
import { Anchor } from '@smui/menu-surface';
import Menu, { MenuComponentDev } from '@smui/menu';
import List, {
  Item,
  Separator,
  Text,
  Graphic,
} from '@smui/list';

let topAppBar: TopAppBarComponentDev;
let anchor: HTMLDivElement;
let menu: MenuComponentDev;
</script>

<TopAppBar bind:this={topAppBar} variant="standard" dense>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Dense</Title>
    </Section>
    <Section align="end" toolbar>
      <div
        use:Anchor
        bind:this={anchor}
      >
        <IconButton
          class="material-icons"
          on:click={() => menu.setOpen(true)}
        >
          manage_accounts
        </IconButton>
      </div>
      <Menu
        bind:this={menu}
        anchor={true}
        bind:anchorElement={anchor}
        anchorCorner='BOTTOM_RIGHT'
      >
        <List>
          <Item>
            <Text>
              Menu item
            </Text>
          </Item>
        </List>
      </Menu>
    </Section>
  </Row>
</TopAppBar>


<AutoAdjust {topAppBar}>
<slot></slot>
</AutoAdjust>
