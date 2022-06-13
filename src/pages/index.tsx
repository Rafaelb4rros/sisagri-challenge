import type { GetServerSideProps } from "next";
import styled, { css } from "styled-components";

import { Layout } from "../components/layouts/PageLayout";
import { Heading } from "../components/shared/text";
import { breakpoint } from "../styles/theme";
import { SigninForm } from "../components/form";

import signInBackgroundImage from "../../public/login-background.png";
import { SocialsContainer } from "../components/SocialsContainer";
import Head from "next/head";

const PageWrapper = styled.main`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoint(
    "md",
    css`
      flex-direction: row;
      justify-content: space-around;
    `
  )}
`;

const PageLeftContent = styled.section`
  text-align: center;
  img {
    max-width: 185px;
  }
  ${breakpoint(
    "md",
    css`
      height: 50rem;

      img {
        max-width: 100%;
      }
    `
  )}
`;

const PageTextContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-weight: 700;
  }
  display: none;
  ${breakpoint(
    "md",

    css`
      display: flex;
      margin-top: 15rem;
      gap: 3.75rem;

      h1 {
        font-weight: 700;
        line-height: 3.5625rem;
      }

      p {
        line-height: 2.25rem;
      }
    `
  )}
`;

export default function Login() {
  return (
    <>
      <Head>
        <title>Sisagri | Signin</title>
      </Head>
      <Layout backgroundUrl={signInBackgroundImage}>
        <PageWrapper>
          <PageLeftContent>
            <img src="/logo.png" alt="sisagri logo" />

            <PageTextContainer>
              <Heading variant="lg" color="neutral-0">
                Tecnologia com soluções <br /> para o agronegócio
              </Heading>

              <Heading as="p" variant="sm" color="neutral-0">
                Facilitamos a adequação ás legislações <br /> referentes a
                rastreabilidade vegetal, <br /> garantido a segurança dos
                alimentos.
              </Heading>
            </PageTextContainer>

            <SocialsContainer variant="primary" />
          </PageLeftContent>
          <SigninForm />
        </PageWrapper>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = false;

  if (user) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: "false",
        statusCode: 303,
      },
    };
  }

  return {
    props: {},
  };
};
