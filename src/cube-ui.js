import Vue from 'vue'

// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  /* eslint-disable no-unused-vars */
  Style,
  // basic
  Button,
//   Loading,
  Tip,
//   Toolbar,
//   TabBar,
//   TabPanels,
  // form
//   Checkbox,
//   CheckboxGroup,
//   Checker,
//   Radio,
//   RadioGroup,
//   Input,
//   Textarea,
  Select,
//   Switch,
//   Rate,
//   Validator,
//   Upload,
//   Form,
  // popup
//   Popup,
//   Toast,
//   Picker,
  CascadePicker,
  DatePicker,
//   TimePicker,
//   SegmentPicker,
//   Dialog,
//   ActionSheet,
//   Drawer,
//   ImagePreview,
  // scroll
//   Scroll,
//   Slide,
//   IndexList,
//   Swipe,
//   Sticky,
//   ScrollNav,
//   ScrollNavBar
} from 'cube-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(CascadePicker)
Vue.use(Tip)
Vue.use(DatePicker)
