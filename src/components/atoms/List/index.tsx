import type { FC } from "react";
import { createComponent } from "@utils/helpers";
import type { ListProps, ItemProps } from "./index.types";

const Component = createComponent<HTMLElement>();

const ListComponent: FC<ListProps> = ({ tag = "ul", ...props }) => {
  return <Component tag={tag} {...props} />;
};

const Item: FC<ItemProps> = ({ tag = "li", text, ...props }) => {
  return <Component tag={tag} insideContent={text} {...props} />;
};

ListComponent.displayName = "List";
Item.displayName = "List.Item";

export const List = Object.assign(ListComponent, {
  Item,
});
