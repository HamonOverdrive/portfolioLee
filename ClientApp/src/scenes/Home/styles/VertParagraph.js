import styled from 'styled-components';

import { keyFrameExampleOne } from './KeyFrames';

export const VertParagraph = styled.p`
  color: #944a99;
  position: absolute;
  top: 40px;
  left: 20px;
  writing-mode:vertical-rl;
  font-size: 50px;
  letter-spacing: .05em;
  animation: ${keyFrameExampleOne};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`

export default VertParagraph;

