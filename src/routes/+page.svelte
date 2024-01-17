<script lang="ts">
  import hero from "$lib/assets/hero (1).png?enhanced";
  import Seo from "$lib/seo/seo.svelte";
</script>

<Seo props={{ title: "Sultonoir" }} />
<div class="container">
  <div
    class="dark:bg-background bg-contain py-5 md:py-10"
    style="background-image: url(../../src/lib/assets/dotted-pattern.png);"
  >
    <div class="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
      <div class="flex flex-col w-full justify-center gap-8">
        <h1 class="h1-bold text-wrap">
          Reserve, Create, Celebrate: Your Event, Your Rules!
        </h1>
        <p class="p-regular-20 md:p-regular-24">
          {`"Unlock the power of seamless reservations and unleash your creativity
          with us!"`}
        </p>
        <a
          href="/"
          class="inline-flex items-center justify-center text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-600/90 text-white h-10 px-4 py-2 rounded-full md:w-fit"
          >Explore now</a
        >
      </div>
      <div class="flex w-full justify-center">
        <enhanced:img
          src={hero}
          sizes="min(1280px, 550px)"
          alt="logo"
          class="max-w-[450px] w-full max-h-[500px] h-full"
        />
      </div>
    </div>
  </div>
</div>
