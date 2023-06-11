import type { FC } from "react";
import { Box, Typography, List } from "@components/atoms";
// import { TypedText } from "@components/molecules";

const ListReasons: FC = () => {
  const items = [
    "I am {creating animation} with code (exploring all corners of frontend).",
    "I delve into {gulp, webpack,} and I'm learning others because there is {always room to grow.}",
    "I encounter issues, but I {quickly fix} them (improving ourselves is everything).",
    "{Git, Bitbucket} ensures a life without drops and conflicts - only love and kindness.",
    "I can {explain} the essence of a problem in {5 minutes} instead of discussing it for an hour in a meeting.",
    "I ask questions not after deploying to production, to {save your time and money.}",
    "I am communicative, so there will be {hugs} during meetings.",
    "I am attentive, using Jest to {prevent issues} not only in code but also in life.",
    "Call me for data retrieval, I will {fetch the necessary info} and even more. 😏",
    "I {dabble in micro-frontend,} assembling projects like puzzles.",
  ];
  return (
    <List>
      {items.map((item, index) => {
        const regex = /\{([^}]+)\}/g;
        const sublines = item.match(regex);
        const newString = sublines?.reduce(
          (string, subline) =>
            string.replace(
              subline,
              `<span class="text-primary font-bold">${subline.slice(
                1,
                -1
              )}</span>`
            ),
          item
        );

        return (
          <List.Item
            dangerouslySetInnerHTML={{ __html: newString || "" }}
            className="before:inline-block before:w-0.37 before:h-0.37 before:mr-2.5 before:mb-0.5 before:bg-primary before:rounded-full"
            key={index}
          ></List.Item>
        );
      })}
    </List>
  );
};

const MyInfo: FC = () => {
  return (
    <Box.Wrapper className="max-w-2xl w-full">
      {/*TODO wait figma*/}
      {/*<TypedText />*/}
      <Box className="w-full">
        <Typography tag="h3" className="text-black text-title">
          10 reasons
        </Typography>
        <Typography tag="p" className="text-body-5xl font-bold text-primary">
          why you require me
        </Typography>
        <ListReasons />
      </Box>
    </Box.Wrapper>
  );
};

export { MyInfo };
