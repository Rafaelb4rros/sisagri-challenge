import { GetServerSideProps } from "next";
import Head from "next/head";
import { MapPin } from "phosphor-react";
import styled from "styled-components";
import DashboardSection from "../../components/DashboardSection";

import {
  DashboardSectionWrapper,
  SectionItem,
  SectionIcon,
} from "../../components/DashboardSection/dashbord-section.styles";

import { DashbordLayout } from "../../components/layouts/DashbordLayout";
import { Box } from "../../components/shared/box";
import { BoxStyled } from "../../components/shared/box/box.styles";
import { SVG } from "../../components/shared/SVG";
import { Text } from "../../components/shared/text";

const ActivitiesData = [
  {
    title: "Abrigo - Uva Vítoria",
    text: "07/12/2022 - Capina Manual 2h x 8.00 = R$ 16,00",
    info: "2h x 8.00 = R$ 16,00",
    icon: "serviceshovel",
  },
  {
    title: "Uva - isis \n",
    text: "07/12/2022 - Capina Manual 2h x 8.00 = R$ 16,00",
    info: "2h x 8.00 = R$ 16,00",
    icon: "serviceshovel",
  },
  {
    title: "Abrigo - Uva Vítoria",
    text: "07/12/2022 - Capina Manual 2h x 8.00 = R$ 16,00",
    info: "2h x 8.00 = R$ 16,00",
    icon: "serviceshovel",
  },
  {
    title: "Uva - isis",
    text: "07/12/2022 - Capina Manual 2h x 8.00 = R$ 16,00",
    info: "2h x 8.00 = R$ 16,00",
    icon: "serviceshovel",
  },

  {
    title: "Abrigo - Uva Vítoria",
    text: "07/12/2022 - Capina Manual 2h x 8.00 = R$ 16,00",
    info: "2h x 8.00 = R$ 16,00",
    icon: "serviceshovel",
  },

  {
    title: "Uva - isis \n",
    text: "07/12/2022 - Capina Manual 2h x 8.00 = R$ 16,00",
    info: "2h x 8.00 = R$ 16,00",
    icon: "serviceshovel",
  },
  {
    title: "Abrigo - Uva Vítoria",
    text: "07/12/2022 - Capina Manual 2h x 8.00 = R$ 16,00",
    info: "2h x 8.00 = R$ 16,00",
    icon: "serviceshovel",
  },
  {
    title: "Uva - isis",
    text: "07/12/2022 - Capina Manual 2h x 8.00 = R$ 16,00",
    info: "2h x 8.00 = R$ 16,00",
    icon: "serviceshovel",
  },

  {
    title: "Abrigo - Uva Vítoria",
    text: "07/12/2022 - Capina Manual 2h x 8.00 = R$ 16,00",
    info: "2h x 8.00 = R$ 16,00",
    icon: "serviceshovel",
  },
];

const SafraData = [
  {
    title: "Abrigo - Uva Vítoria",
    text: "Área 1.2ha - Plantio: 20/04/2022",
    icon: MapPin,
  },
  {
    title: "Abrigo - Uva Vítoria",
    text: "Área 1.2ha - Plantio: 20/04/2022",
    icon: MapPin,
  },
  {
    title: "Abrigo - Uva Vítoria",
    text: "Área 1.2ha - Plantio: 20/04/2022",
    icon: MapPin,
  },
];

const TalhoesData = [
  {
    title: "Abrigo",
  },
  {
    title: "Campo verde",
  },
  {
    title: "Abrigo",
  },
];

const DashboardContent = styled.main`
  display: grid;

  grid-template-areas: "graph talhoes safra activities";
  grid-template-columns: 22% 22% 33%;
  grid-template-rows: repeat(1fr, 2);
  gap: 1rem;
  padding-top: 7rem;
  padding-bottom: 2rem;
  padding-left: 20rem;
  width: 100%;
  height: 100%;

  img {
    max-width: 100%;
  }
`;

// const DashboardContent = styled.main`

//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
//   padding-top: 7rem;
//   padding-bottom: 1rem;
//   padding-left: 19rem;

//   ${DashboardSectionWrapper} {
//     margin-top: 1rem;
//   }

//   ${BoxStyled} {
//     gap: 1rem;

//     img {
//       width: 100%;
//       max-width: 100%;
//     }

//     ${DashboardSectionWrapper} {
//       flex: 1;
//     }
//   }
// `;

function Dashboard() {
  return (
    <>
      <Head>
        <title>Sisagri | Dashboard</title>
      </Head>

      <DashbordLayout>
        <DashboardContent>
          <img
            style={{
              gridArea: "graph",
              gridRow: "1 / 0",
              gridColumn: "1 / 3",
            }}
            src="/graph.png"
            alt="graph"
          />

          <DashboardSection
            s={{
              gridArea: "talhoes",
              gridRow: "2 / 2",
              gridColumn: "1 / 1",
            }}
            subtitle="Mais utilizados"
            title="Talhoes"
          >
            {TalhoesData.map(({ title }, i) => (
              <SectionItem key={i}>
                <SectionIcon>
                  <Text color="neutral-0" variant="lg">
                    {i + 1}
                  </Text>
                </SectionIcon>
                <Text color="menu" variant="sm">
                  {title}
                </Text>
              </SectionItem>
            ))}
          </DashboardSection>

          <DashboardSection
            s={{
              gridArea: "safra",
              gridRow: "2 / 2",
              gridColumn: "2 / 2",
            }}
            subtitle="Acessados recentemente"
            title="Safras"
          >
            {SafraData.map(({ icon: Icon, title, text }, i) => (
              <SectionItem key={i}>
                <SectionIcon>
                  {Icon && <Icon weight="fill" size={30} color="#FFFFFF" />}
                </SectionIcon>
                <Text color="menu" variant="sm">
                  {title}
                  <Text color="menu" as="span" variant="xxsm">
                    {text}
                  </Text>
                </Text>
              </SectionItem>
            ))}
          </DashboardSection>

          <DashboardSection
            s={{
              gridArea: "activities",
              gridRow: "1 / 3",
              gridColumn: "3 / 3",
            }}
            title="Atividades Recentes"
          >
            {ActivitiesData.map(({ title, text, icon, info }, i) => {
              const Icon = SVG.getNavbarIco(icon);

              return (
                <SectionItem key={i}>
                  <SectionIcon>{Icon && <Icon />}</SectionIcon>
                  <Text color="menu" variant="sm">
                    {title}
                    <Text color="menu" as="span" variant="xxsm">
                      {text}
                      <br />
                      {info}
                    </Text>
                  </Text>
                </SectionItem>
              );
            })}
          </DashboardSection>
        </DashboardContent>
      </DashbordLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = true;

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Dashboard;
