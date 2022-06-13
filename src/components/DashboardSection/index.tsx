import { CaretRight } from "phosphor-react";
import { ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { CustomLink } from "../shared/link";

import { Text } from "../shared/text";
import {
  DashboardSectionWrapper,
  ActivitiesHeader,
  ActivitiesFooter,
} from "./dashbord-section.styles";

interface Props {
  children: ReactNode;
  title: string;
  subtitle?: string;
  s?: CSSProperties;
}
function DashboardSection({ subtitle, title, s, children }: Props) {
  return (
    <DashboardSectionWrapper style={s}>
      <ActivitiesHeader>
        <Text as="span" variant="md" color="menu">
          {title}
        </Text>

        {subtitle && (
          <Text as="span" variant="md" color="glass">
            {subtitle}
          </Text>
        )}
      </ActivitiesHeader>
      {children}

      <ActivitiesFooter>
        <CustomLink href="#" variant="unstyled">
          Ver todos <CaretRight weight="bold" />
        </CustomLink>
      </ActivitiesFooter>
    </DashboardSectionWrapper>
  );
}

export default DashboardSection;
