import { createApp } from "vue";
import App from "./App.vue";
import Components from "./components/UI/UIExport";

const testApp = createApp(App);

Components.forEach(component => { testApp.component(component.name, component) })

testApp.mount("#app");
