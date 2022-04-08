import format from "date-fns/format";
import { parseISO } from "date-fns";

export const formatedDate = (param) => {
  return format(parseISO(param), "dd 'of' MMMM-yyyy");
};
