import styled from "@emotion/styled";

export const SelectWrapper = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  margin-bottom: 20px;
  font-family: SBSansText, SBSansUI, SBSans, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.3px;
  font-size: 14px;
  line-height: 22px;

  & .select-error {
    border: 1px solid red;
    border-radius: 8px;
  }
`;
