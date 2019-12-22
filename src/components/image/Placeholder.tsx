import React from "react";
import { useTheme } from "@emotion/core";
import styled from "@emotion/styled";

const StyledSvg = styled.svg`
  overflow: hidden;
`;

const ImagePlaceholder = () => {
  const theme = useTheme();

  return (
    <StyledSvg width="400" height="400">
      <rect
        width="400"
        height="400"
        x="0"
        y="0"
        fill={theme.colors.placeholder}
        mask="url(#shining)"
      />
    </StyledSvg>
  );
};

export default ImagePlaceholder;
