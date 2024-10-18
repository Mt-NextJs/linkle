export async function getSequence(token: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/link/list`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        `Error: ${response.status}, Message: ${errorResponse.message || "Unknown error"}`,
      );
    }
    const result = await response.json();
    if (result.code === 200) {
      const blockList = result.data;
      return blockList[blockList.length - 1].sequence;
    }
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An link list error occurred",
    );
  }
}