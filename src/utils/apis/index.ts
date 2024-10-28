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

class BlockApis extends Apis {
  token: string | null = null;
  sequence: number = 0;
  constructor(token: string, sequence: number) {
    super();
    this.token = token;
    this.sequence = sequence;
  }
  async addBlock(params: { [index: string]: string | number | object | null }) {
    const { baseUrl, token } = this;
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }
    params["sequence"] = this.sequence + 1;

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
}

class AuthApis extends Apis {
  async login(userId: string, password: string) {
    try {
      const response = await fetch(`${this.baseUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          password: password,
        }),
      });

      if (response.ok) {
        const infor = await response.json();
        // 세션 스토리지에 토큰 저장
        sessionStorage.setItem("token", infor.data.token);
        // 쿠키에 토큰 저장
        document.cookie = `token=${infor.data.token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
        return response;
      } else {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const getInstance = async (type?: string) => {
  if (!type) return new Apis();
  if (type === "block") {
    const token = `${window.sessionStorage.getItem("token")}`;
    const sequence = (await getSequence(token)) || 0;
    return new BlockApis(token, sequence);
  }
  if (type === "auth") return new AuthApis();
};

const blockApiInstance = getInstance("block") as Promise<BlockApis>;
const authApiInstance = getInstance("auth") as Promise<AuthApis>;

export { blockApiInstance, authApiInstance };
