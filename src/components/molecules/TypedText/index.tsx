import type { FC } from "react";
import Typed from "react-typed";
import { TagWrapper } from "@components/molecules";

const TypedText: FC = () => {
  return (
    <div className="flex-wrapper-center gap-4 justify-start">
      <TagWrapper text="code" />
      <Typed
        strings={["I’ll create your project"]}
        typeSpeed={100}
        backSpeed={100}
        className="text-primary-button font-bold text-black"
        loop
      />
      <TagWrapper text="/code" />
    </div>
  );
};

export { TypedText };
