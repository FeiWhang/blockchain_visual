import { onMounted, onUnmounted, reactive } from "vue";

export interface myScreen {
  width: number;
  type: string;
  scroll: number;
}

export function useScreen(): myScreen {
  const screen: myScreen = reactive({
    width: window.innerWidth,
    scroll: window.screenY,
    type: getScreenType(window.innerWidth),
  });

  const onWidthChange = () => {
    screen.width = window.innerWidth;
    screen.type = getScreenType(screen.width);
  };
  const onScrollChange = () => (screen.scroll = window.scrollY);

  onMounted(() => {
    window.addEventListener("resize", onWidthChange, { passive: true });
    window.addEventListener("scroll", onScrollChange, { passive: true });
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onWidthChange);
    window.removeEventListener("scroll", onScrollChange);
  });

  return screen;
}

function getScreenType(width: number): string {
  if (width < 600) return "xs";
  else if (width >= 600 && width < 900) return "sm";
  else if (width >= 900 && width < 1112) return "md";
  else if (width >= 1112) return "lg";
  else return "";
}
