import { FC, useState } from "react";

type ExpandableTextProps = {
  maxChars?: number;
  children: string;
};

const ExpandableText: FC<ExpandableTextProps> = ({
  maxChars = 10,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let text = isExpanded ? children : children.slice(0, maxChars) + "...";

  return (
    <p>
      {text}{" "}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        Read {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExpandableText;
