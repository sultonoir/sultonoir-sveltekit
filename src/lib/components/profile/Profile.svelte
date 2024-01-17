<script lang="ts">
  import {
    Cloud,
    CreditCard,
    GithubIcon,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    UserIcon,
    UserPlus,
    Users,
  } from "lucide-svelte";
  import { signOut } from "@auth/sveltekit/client";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Avatar from "$lib/components/ui/avatar";
  import { getContext } from "svelte";
  import type { User } from "$lib/types";
  const user: User = getContext("user");
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Avatar.Root>
      <Avatar.Image
        src={user?.image ?? ""}
        alt="@shadcn"
      />
      <Avatar.Fallback>S</Avatar.Fallback>
    </Avatar.Root>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-56 sulton">
    <DropdownMenu.Label>My Account</DropdownMenu.Label>
    <DropdownMenu.Separator />
    <DropdownMenu.Group>
      <DropdownMenu.Item>
        <UserIcon class="mr-2 h-4 w-4" />
        <span>Profile</span>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <CreditCard class="mr-2 h-4 w-4" />
        <span>Billing</span>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Settings class="mr-2 h-4 w-4" />
        <span>Settings</span>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Keyboard class="mr-2 h-4 w-4" />
        <span>Keyboard shortcuts</span>
      </DropdownMenu.Item>
    </DropdownMenu.Group>
    <DropdownMenu.Separator />
    <DropdownMenu.Group>
      <DropdownMenu.Item>
        <Users class="mr-2 h-4 w-4" />
        <span>Team</span>
      </DropdownMenu.Item>
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>
          <UserPlus class="mr-2 h-4 w-4" />
          <span>Invite users</span>
        </DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.Item>
            <Mail class="mr-2 h-4 w-4" />
            <span>Email</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <MessageSquare class="mr-2 h-4 w-4" />
            <span>Message</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <PlusCircle class="mr-2 h-4 w-4" />
            <span>More...</span>
          </DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
      <DropdownMenu.Item>
        <Plus class="mr-2 h-4 w-4" />
        <span>New Team</span>
      </DropdownMenu.Item>
    </DropdownMenu.Group>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>
      <GithubIcon class="mr-2 h-4 w-4" />
      <span>GitHub</span>
    </DropdownMenu.Item>
    <DropdownMenu.Item>
      <LifeBuoy class="mr-2 h-4 w-4" />
      <span>Support</span>
    </DropdownMenu.Item>
    <DropdownMenu.Item>
      <Cloud class="mr-2 h-4 w-4" />
      <span>API</span>
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item on:click={() => signOut()}>
      <LogOut class="mr-2 h-4 w-4" />
      <span>Log out</span>
      <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
