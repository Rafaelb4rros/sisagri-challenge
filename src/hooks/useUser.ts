import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";

type HTTPError = {
  company?: {
    msg?: string;
  };
  username?: {
    msg?: string;
  };
  password?: {
    msg?: string;
  };
};

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [httpError, setHTTPError] = useState<null | HTTPError>(null);
  const [data, setData] = useState<null | unknown>(null);
  const router = useRouter();
  // useCallback prevents function re-redenders which makes the entire component re-render

  const clearErrors = useCallback(() => {
    if (!httpError) return;

    setHTTPError(null);
  }, [httpError]);

  const signIn = useCallback(
    async (userData: {
      company: string;
      username: string;
      password: string;
    }) => {
      setLoading(true);

      try {
        const { data: axiosData, status } = await api.post("users/session", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          body: userData,
        });

        setData(axiosData);
        router.push("/dashboard");
      } catch (err: any) {
        setHTTPError(err?.response.data as HTTPError);
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

  useEffect(() => {}, []);

  const signOut = useCallback(() => () => {}, []);

  const payload = useMemo(
    () => ({
      signIn,
      signOut,
      loading,
      httpError,
      clearErrors,
      data,
    }),
    [signIn, signOut, loading, httpError, data, clearErrors]
  );

  return payload;
};
