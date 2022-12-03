import React from "react";
import { Link } from "react-router-dom";
import { BlockListItemWrapper } from "./Block.styles";

interface IProps {
  additionalTitle?: string;
  value: string;
  linkPath?: string;
  needHref?: boolean;
  targetBlank?: boolean;
}

const BlockListItem: React.FC<IProps> = (props) => {
  const { additionalTitle, value, linkPath, needHref, targetBlank } = props;

  return (
    <BlockListItemWrapper>
      {additionalTitle && (
        <div className="additional_title">
          <h3>{additionalTitle}</h3>
        </div>
      )}
      {linkPath !== undefined && needHref ? (
        <a
          className="link_value"
          href={linkPath}
          target={targetBlank ? "_blank" : "_self"}
        >
          {value}
        </a>
      ) : linkPath !== undefined && !needHref ? (
        <Link className="link_value" to={linkPath}>
          {value}
        </Link>
      ) : (
        <div className="value">{value}</div>
      )}
    </BlockListItemWrapper>
  );
};

export default BlockListItem;
