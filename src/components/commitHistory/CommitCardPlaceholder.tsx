import React from "react";
import { StyledCommitCard } from "./CommitCard";
import { useTheme } from "@emotion/core";

const CommitCardPlaceholder = () => {
  const theme = useTheme();
  return (
    <StyledCommitCard>
      <svg width="300" height="110" data-testid="commit__placeholder">
        <rect
          width="130"
          height="20"
          x="90"
          y="0"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
        <rect
          width="30"
          height="30"
          x="120"
          y="30"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
        <rect
          width="30"
          height="30"
          x="160"
          y="30"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
        <rect
          width="290"
          height="20"
          x="10"
          y="65"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
        <rect
          width="120"
          height="20"
          x="190"
          y="90"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
      </svg>
    </StyledCommitCard>
  );
};

export default CommitCardPlaceholder;
