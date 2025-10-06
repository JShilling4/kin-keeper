function useLayout() {
  const layout = reactive({
    header: {
      height: "",
    },
    leftDrawer: {
      isOpen: true,
      isFixed: false,
      maxWidth: "15rem",
      minWidth: "6rem",
      width: "",
    },
  });
  return { layout };
}

export { useLayout };
