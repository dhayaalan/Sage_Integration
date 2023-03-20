export declare function validateAndParseInputSelectedValues(inputValue: string | string[]): {
  isArray: boolean;
  strSelectedValues: string;
  arrSelectedValues: string[];
};
export declare function updateSelectedValues(arrChildElements?: any, intSelectedIndex?: number, boolSelected?: boolean, boolMultipleSelection?: boolean, arrSelectedValues?: any): Array<string>;
export declare function updateChildSelectionState(arrChildElements?: any, boolMultipleSelection?: boolean, arrSelectedValues?: any, boolSetCheckboxType?: boolean): number;
export declare function doKeyDownOperations(keyCode: string, arrChildElements?: any, intCurrentIndex?: number, boolMultipleSelection?: boolean): {
  index: number;
  changeSelection: boolean;
  selected: boolean;
};
