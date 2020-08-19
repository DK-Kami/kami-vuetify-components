/** Base elements */
import FilteredTable from './base/FilteredTable/index.vue';
import ToggleElement from './base/ToggleElement.vue';
import FormValidate from './base/FormValidate.vue';
import DialogBase from './base/DialogBase.vue';
import FormBase from './base/FormBase.vue';

/** Helper components */
import MultiAutocomplete from './helper/MultiAutocomplete.vue';
import DateTimePicker from './helper/DateTimePicker/index.vue';
import TooltipButton from './helper/TooltipButton.vue';
import AlertDialog from './helper/AlertDialog.vue';
import MultiSelect from './helper/MultiSelect.vue';
import BackButton from './helper/BackButton.vue';
import ErrorAlert from './helper/ErrorAlert.vue';

const components = [
  FilteredTable,
  ToggleElement,
  FormValidate,
  DialogBase,
  FormBase,
  MultiAutocomplete,
  DateTimePicker,
  TooltipButton,
  AlertDialog,
  MultiSelect,
  BackButton,
  ErrorAlert,
];

function install(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  FilteredTable,
  ToggleElement,
  FormValidate,
  DialogBase,
  FormBase,
  MultiAutocomplete,
  DateTimePicker,
  TooltipButton,
  AlertDialog,
  MultiSelect,
  BackButton,
  ErrorAlert,
};
