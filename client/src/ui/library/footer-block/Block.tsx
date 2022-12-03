import React from "react";
import { AdditionalText, BlockWrapper, Title } from "./Block.styles";
import BlockList from "./BlockList";

interface IProps {
  title: string;
  additionalText?: string;
  blockData: BlockDataItem[];
}

interface BlockDataItem {
  additionalTitle?: string;
  value: string;
  linkPath?: string;
  needHref?: boolean;
}

const Block: React.FC<IProps> = (props) => {
  const { title, additionalText, blockData } = props;

  return (
    <BlockWrapper>
      <Title>{title}</Title>
      <AdditionalText>{additionalText}</AdditionalText>
      <BlockList blockData={blockData} />
    </BlockWrapper>
  );
};

export default Block;
