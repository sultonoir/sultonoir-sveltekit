<script lang="ts">
  type Props = {
    title: string;
    desc?: string;
    image?: string;
  };
  export let props: Props;
  const oriUrl = "http://localhost:5173/";
  const defaultDesc = "Reserve, Create, Celebrate: Your Event, Your Rules!";
</script>

<svelte:head>
  <title>{props.title}</title>
  <meta
    name="description"
    content={props.desc ?? defaultDesc}
  />
  <meta
    name="description"
    content={props.desc}
  />
  <meta
    property="twitter:image"
    content={""}
  />
  <meta
    property="twitter:card"
    content="summary_large_image"
  />
  <meta
    property="twitter:title"
    content={props.title}
  />
  <meta
    property="twitter:description"
    content={props.desc ?? defaultDesc}
  />
  <meta
    property="og:image"
    content={""}
  />
  <meta
    property="og:title"
    content={props.title}
  />
  <meta
    property="og:description"
    content={props.desc}
  />
  <meta
    property="og:url"
    content={oriUrl}
  />
</svelte:head>
