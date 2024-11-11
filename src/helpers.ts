export const basePicker = (
  attribute: string,
  value: string,
  custom: boolean = false,
): string => {
  if (custom) {
    return `${attribute}-[${value}]`;
  }
  return `${attribute}-${value}`;
};

export const RoundedPicker = (val: string): string => {
  return basePicker("rounded", val);
};

export const RoundedPickHelper: { [key: string]: string } = {
  sm: RoundedPicker("sm"),
  md: RoundedPicker("md"),
  lg: RoundedPicker("lg"),
  xl: RoundedPicker("xl"),
  full: RoundedPicker("full"),
};
