<script lang="ts">
  import "../app.pcss";
  import "./styles.css";
  import { setContext } from "svelte";
  import type { LayoutData } from "./$types";
  import Logo from "$lib/assets/logo-transparent.png?enhanced";
  export let data: LayoutData;
  import { ModeWatcher } from "mode-watcher";
  import Darkmode from "$lib/components/ui/darkmode/Darkmode.svelte";
  import Profile from "$lib/components/profile/Profile.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { goto } from "$app/navigation";
  const profile = data.session?.user;
  setContext("user", profile);
</script>

<svelte:head>
  <title>Sultonoir</title>
  <meta
    name="description"
    content="personal fortpolio made by sultonoir"
  />
</svelte:head>

<nav class="sticky top-0 backdrop-blur-sm border-b bg-background/70">
  <div class="container">
    <div class="flex items-center justify-between py-2">
      <a href="/">
        <enhanced:img
          src={Logo}
          sizes="min(1280px, 100dvw)"
          alt="logo"
          class="w-10"
        />
      </a>
      {#if !data.session}
        <div class="flex flex-row gap-2 items-center">
          <Darkmode />
          <a
            href="/login"
            class="inline-flex items-center justify-center text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-600/90 text-white h-10 px-4 py-2 w-fit rounded-md"
            >Login</a
          >
        </div>
      {:else}
        <div class="flex flex-row gap-2 items-center">
          <Darkmode />
          <Profile />
        </div>
      {/if}
    </div>
  </div>
</nav>

<ModeWatcher />
<slot />
