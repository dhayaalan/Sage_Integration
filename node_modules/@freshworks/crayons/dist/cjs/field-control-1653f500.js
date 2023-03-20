'use strict';

const index = require('./index-63c6a574.js');

const FieldControl = (props, children) => {
  const hasLabel = !!props.label;
  const hasHintText = props.hintText ? true : props.hasHintTextSlot;
  const hasErrorText = props.errorText ? true : props.hasErrorTextSlot;
  const hasWarningText = props.warningText ? true : props.hasWarningTextSlot;
  const showHintText = props.state === 'normal' ? true : false;
  const showErrorText = props.state === 'error' ? true : false;
  const showWarningText = props.state === 'warning' ? true : false;
  return (index.h("div", { class: {
      'field-control': true,
    } },
    hasLabel && (index.h("label", { id: props.labelId, class: { 'field-control-label': true, 'required': props.required }, htmlFor: props.inputId, "aria-hidden": hasLabel ? 'false' : 'true' }, props.label)),
    children,
    showHintText && hasHintText && (index.h("div", { id: props.hintTextId, class: 'field-control-hint-text', "aria-hidden": hasHintText ? 'false' : 'true' },
      index.h("slot", { name: 'hint-text' }, props.hintText))),
    showErrorText && hasErrorText && (index.h("div", { id: props.errorTextId, class: 'field-control-error-text', "aria-hidden": hasErrorText ? 'false' : 'true' },
      index.h("slot", { name: 'error-text' }, props.errorText))),
    showWarningText && hasWarningText && (index.h("div", { id: props.warningTextId, class: 'field-control-warning-text', "aria-hidden": hasWarningText ? 'false' : 'true' },
      index.h("slot", { name: 'warning-text' }, props.warningText)))));
};

exports.FieldControl = FieldControl;
