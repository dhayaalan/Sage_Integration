import { FunctionalComponent } from '../stencil-public-runtime';
export interface FieldControlProps {
  /** The input id, used to map the input to the label */
  inputId: string;
  /** The label id, used to map the label to the input */
  labelId?: string;
  /** The label text (if the label slot isn't used) */
  label?: string;
  /** Whether or not a label slot has been provided. */
  hasLabelSlot?: boolean;
  /** The hint text id, used to map the input to the hint text */
  hintTextId?: string;
  /** The hint text (if the hint-text slot isn't used) */
  hintText?: string;
  /** Whether or not a hint text slot has been provided. */
  hasHintTextSlot?: boolean;
  /** The error text id, used to map the input to the error text */
  errorTextId?: string;
  /** The error text (if the error-text slot isn't used) */
  errorText?: string;
  /** Whether or not a error text slot has been provided. */
  hasErrorTextSlot?: boolean;
  /** The warning text id, used to map the input to the warning text */
  warningTextId?: string;
  /** The warning text (if the warning-text slot isn't used) */
  warningText?: string;
  /** Whether or not a warning text slot has been provided. */
  hasWarningTextSlot?: boolean;
  /** Whether or not the error text should be shown instead of the help text */
  state?: 'normal' | 'warning' | 'error';
  /** Whether or not to display a required indicator should be shown (asterisk) */
  required?: boolean;
}
declare const FieldControl: FunctionalComponent<FieldControlProps>;
export default FieldControl;
