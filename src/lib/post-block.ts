import { getSequence } from "./get-sequence";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const postBlock = async (
  path: string,
  params: { [index: string]: string | number | object },
  router?: AppRouterInstance,
) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    if (router) router.push("/login");
    return;
  }
  params["sequence"] = ((await getSequence(token)) as number) + 1;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    });
    const responseJson = await response.json();
    if (response.ok) {
      console.log("성공");
      return responseJson;
    } else {
      const { status } = response;
      const { message } = responseJson;
      if (status === 500) {
        alert("서버 에러");
      }
      console.log(`Error: ${status}, Message: ${message || "Unknown error"}`);
    }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "알 수 없는 에러");
  }
};
