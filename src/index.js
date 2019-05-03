import './styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronDown, faTimes, faSearch,
  faCheck, faInfo, faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import Button from './components/button/button';
import Checkbox from './components/checkbox/checkbox';
import CopyTextInput from './components/copy-text-input/copy-text-input';
import DangerActionConfirmation from './components/danger-action-confirmation/danger-action-confirmation';
import DropdownConfig from './components/dropdown-config/dropdown-config';
import RadioButton from './components/radio/radio-button';
import Spinner from './components/spinner/spinner';
import TextInput from './components/text-input/text-input';
import Tab from './components/tabs/tab';
import Tabs from './components/tabs/tabs';
import TabItem from './components/tabs/tab-item';
import Table from './components/table/table';
import TableFooter from './components/table/table-footer';
import TableHeaderItem from './components/table/table-header-item';
import TableHeader from './components/table/table-header';
import TableItem from './components/table/table-item';
import TableRow from './components/table/table-row';
import Toast from './components/toast/toast';
import MessageBox from './components/message-box/message-box';

library.add(faChevronDown);
library.add(faTimes);
library.add(faSearch);
library.add(faCheck);
library.add(faInfo);
library.add(faExclamationTriangle);

export {
  Button,
  Checkbox,
  CopyTextInput,
  DangerActionConfirmation,
  DropdownConfig,
  RadioButton,
  Spinner,
  TextInput,
  Tab,
  Tabs,
  TabItem,
  Table,
  TableFooter,
  TableHeaderItem,
  TableHeader,
  TableItem,
  TableRow,
  Toast,
  MessageBox,
};
