<script lang="ts">
  import Icon from "@iconify/svelte";

  export type IconType = "linkedin" | "github" | "copy" | "check" | "light" | "dark" | "link";

  const {
    icon,
    inline = false,
    large = false,
    class: className = "",
    ...rest
  }: { icon: IconType; inline?: boolean; large?: boolean; class?: string } = $props();

  const def = () => {
    switch (icon) {
      case "linkedin":
        return "mdi:linkedin";
      case "github":
        return "mdi:github";
      case "copy":
        return "lucide:copy";
      case "check":
        return "lucide:check";
      case "light":
        return "eva:sun-fill";
      case "dark":
        return "eva:moon-fill";
      case "link":
        return "eva:external-link-outline";
    }
  };
</script>

<Icon
  icon={def()}
  class="{inline ? 'inline' : ''} {className}"
  height={large ? "1.2em" : "1em"}
  {...rest}
/>
