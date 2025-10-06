import App from "./App.vue";
import router from "@/router";
import { initFaLibrary, FontAwesomeIcon } from "@/plugins/font-awesome";
import pinia from "@/plugins/pinia";
import { Quasar, quasarConfig } from "@/plugins/quasar";
import "quasar/src/css/index.sass";

const app = createApp(App);

initFaLibrary();

app.use(pinia);
app.use(router);
app.use(Quasar, quasarConfig);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
