export async function getSequence(): Promise<number | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/link/list`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
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
      if (blockList.length === 0) return 1;
      else return blockList[blockList.length - 1].sequence as number;
    }
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An link list error occurred",
    );
  }
}
