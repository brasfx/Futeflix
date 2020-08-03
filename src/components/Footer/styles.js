import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--sidebar);
  border-top: 2px solid var(--border);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 10px;
  color: var(--white);
  text-align: center;
  margin-top: 50px;
  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;
export const FooterDiv = styled.div`
  display: inline-flex;
  align-items: center;
`;
