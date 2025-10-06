import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faChartPie, faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faCircleXmark,
  faImage,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

const initFaLibrary = () => {
  library.add(
    faChartPie,
    faCalendarDays,
    faCircleXmark,
    faImage,
    faHome,
    faPenToSquare,
    faBars
  );
};

export { initFaLibrary, FontAwesomeIcon };
