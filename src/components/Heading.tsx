import React, { createElement } from "react";

type Props = {
  level: number;
  icon?: string;
  children: string;
};

const fontSizeList = [
  "text-4xl",
  "text-3xl",
  "text-2xl",
  "text-xl",
  "text-lg",
  "text-base",
];

export const Heading = ({ level, icon, children }: Props): JSX.Element => {
  const type = `h${level}`;
  const commonFontClasses = `${fontSizeList[level - 1]} align-middle`;

  return (
    <>
      {
        (createElement(type),
        null,
        (
          <>
            {icon && (
              <span
                className={`material-icons mr-4 ${commonFontClasses}`}
                aria-hidden={true}
              >
                {icon}
              </span>
            )}
            <span className={`font-bold ${commonFontClasses}`}>{children}</span>
          </>
        ))
      }
    </>
  );
};
