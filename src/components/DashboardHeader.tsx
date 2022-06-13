import { MagnifyingGlass } from "phosphor-react";
import styled from "styled-components";
import { Box } from "./shared/box";
import { Input } from "./shared/input";
import { Heading } from "./shared/text";
import { SocialsContainer, SocialsContainerWrapper } from "./SocialsContainer";

const DashboardHeaderWrapper = styled.header`
  width: calc(100% - 16rem);
  position: absolute;
  top: 0;
  right: 0;
  height: 7rem;
  padding: 0 3rem;
  display: flex;
  align-items: center;

  ${SocialsContainerWrapper} {
    margin-top: auto;
    margin-left: auto;
  }
`;

function DashboardHeader() {
  return (
    <DashboardHeaderWrapper>
      <Heading variant="sm" as="h3" color="dark">
        Olá
      </Heading>

      <Box
        s={{
          width: "100%",
          maxWidth: "33.5vw",
          marginLeft: "3.5rem",
        }}
      >
        <Input leftIcon={MagnifyingGlass} type="search" />
      </Box>

      <SocialsContainer variant="small" />
    </DashboardHeaderWrapper>
  );
}

export { DashboardHeader };
