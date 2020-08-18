/** Base elements */
import FilteredTable from './base/FilteredTable';
import ToggleElement from './base/ToggleElement';
import FormValidate from './base/FormValidate';
import DialogBase from './base/DialogBase';
import FormBase from './base/FormBase';

/** Helper components */
import MultiAutocomplete from './helper/MultiAutocomplete';
import DateTimePicker from './helper/DateTimePicker';
import TooltipButton from './helper/TooltipButton';
import AlertDialog from './helper/AlertDialog';
import MultiSelect from './helper/MultiSelect';
import BackButton from './helper/BackButton';
import ErrorAlert from './helper/ErrorAlert';

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

export function install(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  ...components,
};
