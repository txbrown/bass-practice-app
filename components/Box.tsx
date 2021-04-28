import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  flex,
  layout,
  LayoutProps,
  margin,
  marginBottom,
  MarginBottomProps,
  MarginLeftProps,
  MarginProps,
  MarginRightProps,
  MarginTopProps,
  padding,
  paddingBottom,
  paddingLeft,
  PaddingProps,
  paddingRight,
  paddingTop,
  space,
  WidthProps,
} from 'styled-system';

interface Props
  extends PaddingProps,
    WidthProps,
    MarginProps,
    MarginTopProps,
    MarginLeftProps,
    MarginRightProps,
    MarginBottomProps,
    PaddingProps,
    ColorProps,
    LayoutProps {}

const Box = styled.View<Props>`
  ${flex}
  ${margin}
  ${marginBottom}
  ${padding}
  ${paddingBottom}
  ${paddingTop}
  ${paddingLeft}
  ${paddingRight}
  ${color}
  ${space}
  ${layout}
  ${color}
`;

export default Box;
