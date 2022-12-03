import React from "react";
import { BlockListWrapper } from "./Block.styles";
import BlockListItem from "./BlockListItem";

interface IProps {
  blockData: BlockDataItem[];
}
interface BlockDataItem {
  additionalTitle?: string;
  value: string;
  linkPath?: string;
  needHref?: boolean;
  targetBlank?: boolean;
}

const BlockList: React.FC<IProps> = (props) => {
  const { blockData } = props;
  return (
    <BlockListWrapper>
      {blockData.map((item, idx) => {
        return (
          <BlockListItem
            key={idx}
            additionalTitle={item?.additionalTitle}
            value={item.value}
            linkPath={item?.linkPath}
            needHref={item?.needHref}
            targetBlank={item?.targetBlank}
          />
        );
      })}
    </BlockListWrapper>
  );
};

export default BlockList;
