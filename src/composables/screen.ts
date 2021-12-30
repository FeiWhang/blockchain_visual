import { ref, onMounted, onUnmounted, computed } from "vue";

export function useScreen() {
  const width = ref<number>(window.innerWidth);
  const scroll = ref<number>(window.scrollY);

  const onWidthChange = () => (width.value = window.innerWidth);
  const onScrollChange = () => (scroll.value = window.scrollY);

  onMounted(() => {
    window.addEventListener("resize", onWidthChange, { passive: true });
    window.addEventListener("scroll", onScrollChange, { passive: true });
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onWidthChange);
    window.removeEventListener("scroll", onScrollChange);
  });

  const type = computed<string>(() => {
    if (width.value < 600) return "xs";
    if (width.value >= 600 && width.value < 900) return "sm";
    if (width.value >= 900 && width.value < 1112) return "md";
    if (width.value >= 1112) return "lg";
    return "";
  });

  return {
    width,
    type,
    scroll,
  };
}
