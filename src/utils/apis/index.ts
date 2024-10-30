import { getSequence } from "../../lib/get-sequence";

class Apis {
  readonly baseUrl: string;

  constructor() {
    this.baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;
  }
  async handleError(response: Response) {
    const { status } = response;
    const { message } = await response.json();
    alert(message);
    console.log(`Error: ${status}, Message: ${message || "Unknown error"}`);
  }
}

class adminApis extends Apis {
  token: string | undefined = undefined;
  sequence: number | undefined = undefined;

  async getVisitor(token: string) {
    const { baseUrl } = this;
    try {
      return await fetch(`${baseUrl}/api/user/visitor`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async addBlock(
    token: string,
    params: { [index: string]: string | number | object | null },
  ) {
    const { baseUrl } = this;
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (!this.sequence) {
      const sequence = await getSequence(token);
      if (!sequence) {
        alert("시퀀스 조회 실패");
        return;
      }
      this.sequence = sequence;
    } else params["sequence"] = this.sequence + 1;

    try {
      const response = await fetch(`${baseUrl}/api/link/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(params),
      });

      if (response.ok) {
        this.sequence = this.sequence + 1;
        return response;
      } else {
        return response;
      }
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "알 수 없는 에러",
      );
    }
  }

  async getBlocks(token: string) {
    const { baseUrl } = this;
    try {
      return await fetch(`${baseUrl}/api/link/list`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

class AuthApis extends Apis {
  async login(userId: string, password: string) {
    try {
      return await fetch(`${this.baseUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          password: password,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const getInstance = async (type?: string) => {
  if (!type) return new Apis();
  if (type === "block") return new adminApis();
  if (type === "auth") return new AuthApis();
};

const adminApiInstance = getInstance("block") as Promise<adminApis>;
const authApiInstance = getInstance("auth") as Promise<AuthApis>;

export { adminApiInstance, authApiInstance };
