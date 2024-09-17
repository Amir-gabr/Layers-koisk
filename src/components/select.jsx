import {
  Select as Selector,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../reusables/shadcn/select";
import { cn } from "../lib/utils";
const Select = ({ items, className, disabled, placeholder, label, onChange, id }) => {
  return (
    <div>
      {label && <h3>{label}</h3>}
      <Selector onValueChange={onChange} id={id}>
        <SelectTrigger
          className={cn("focus:ring-0 focus:ring-offset-0", className)}
          disabled={disabled}
          id={id}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="min-w-fit">
          {items?.map((item, i) => (
            <SelectItem
              key={i}
              value={item.value}
              className={"w-full text-center pl-2"}
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Selector>
    </div>
  );
};

export default Select;
