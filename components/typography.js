import styled from 'styled-components';
import Link from 'next/link';

import * as fonts from '../constants/fonts';

// Headings
export const PageTitle = styled.h1`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 300;
  font-size: 48px;
  font-family: ${fonts.sansSerifFont};
  line-height: 1.2;
  margin: 2em 0 0.5em;
  ${props =>
    props.centerText &&
    `
    text-align: center;
  `};
`;
export const SectionTitle = styled.h2`
  color: rgba(0, 0, 0, 0.85);
  font-family: ${fonts.sansSerifFont};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 0.5em;
`;
export const SubTitle = styled.h3`
  color: rgba(0, 0, 0, 0.85);
  font-family: ${fonts.sansSerifFont};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 0.5em;
`;

// Paragraphs
export const Paragraph = styled.p`
  font-family: ${fonts.serifFont};
  font-size: 21px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.85);
  margin: 0 0 1em;
`;
export const LeadParagraph = Paragraph.extend`
  color: rgba(0, 0, 0, 0.7);
  font-family: ${fonts.sansSerifFont};
  font-size: 24px;
  font-weight: 300;
`;

// Links
const StyledLink = styled.a``;
export const LinkText = ({ href, prefetch, ...rest }) => (
  <Link href={href} prefetch={prefetch}>
    <StyledLink {...rest} />
  </Link>
);
