import styled from 'styled-components';

import { keyFrameExampleOne } from './KeyFrames';

export const VertParagraph = styled.p`
  color: #cda05f;
  position: absolute;
  top: 40px;
  left: 20px;
  writing-mode:vertical-rl;
  font-size: 50px;
  letter-spacing: .05em;
  animation: ${keyFrameExampleOne};
  animation-duration: 2s;
  animation-fill-mode: forwards;

  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 15px;
};

@media only screen
  and (min-device-width: 800px)
  and (max-device-width: 1280px)
  and (-webkit-min-device-pixel-ratio: 1.5) {

}
`

export default VertParagraph;

