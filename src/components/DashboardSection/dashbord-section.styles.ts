import styled from "styled-components";
import { LinkStyled } from "../shared/link/link.styles";
import { TextStyled } from "../shared/text/text.styles";

export const DashboardSectionWrapper = styled.section`
  max-height: 100%;
  background: ${({ theme }) => theme.colors["neutral-0"]};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;

  padding: 0 1rem;
  border: 1px solid #e6e7e9;
  border-radius: 8px;
`;

export const ActivitiesHeader = styled.header`
  position: sticky;
  top: 0;
  background: #ffffff;
  padding: 1rem 0;

  ${TextStyled} {
    font-weight: 500;
  }
`;

export const ActivitiesFooter = styled.footer`
  width: 100%;
  display: flex;
  border-top: solid 1px #e6e7e9;
  padding: 1rem 0;
  justify-content: flex-end;
  position: sticky;
  bottom: 0;
  background: #ffffff;

  ${LinkStyled} {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const SectionItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors["neutral-200"]};
  padding: 0.2rem 1rem;
  gap: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-radius: 5px;
  line-height: 21px;

  ${TextStyled} {
    font-weight: 500;

    ${TextStyled} {
      font-weight: 400;
    }
  }
`;

export const SectionIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors["green-200"]};

  display: grid;
  place-items: center;
`;
