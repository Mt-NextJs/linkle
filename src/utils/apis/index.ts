import { Block } from "@/types/apis";
import { Schedule } from "@/types/user";

class Apis {
  async handleError(response: Response) {
    const { status } = response;
    const { message } = await response.json();
    alert(message);
    console.log(`Error: ${status}, Message: ${message || "Unknown error"}`);
  }
}

class adminApis extends Apis {
  async addBlock(params: { [index: string]: string | number | object | null }) {
    try {
      const response = await fetch(`/api/link/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(params),
      });

      if (response.ok) {
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

  async addSchedule(params: Schedule) {
    try {
      const response = await fetch(`/api/link/calendar/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          schedule: params,
        }),
      });

      if (response.ok) {
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

  async getSchedules() {
    try {
      return await fetch(`/api/link/calendar/list`, {
        method: "GET",
        credentials: "include",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async orderBlock(params: { data: Block[] }) {
    try {
      const response = await fetch(`/api/link/list/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(params),
      });

      if (response.ok) {
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

  async getBlocks() {
    try {
      return await fetch(`/api/link/list`, {
        method: "GET",
        credentials: "include",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

class AuthApis extends Apis {
  async login(userId: string, password: string) {
    try {
      return await fetch(`/api/login`, {
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
