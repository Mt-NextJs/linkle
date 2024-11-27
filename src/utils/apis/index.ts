import { z } from "zod";

import { ApisResponse, Block } from "@/types/apis";
import {
  Schedule,
  ScheduleResponse,
  ScheduleResponseSchema,
} from "@/types/user";

class Apis {
  async handleResponseError(response: Response) {
    const { status } = response;
    const { message } = await response.json();
    alert(`Error: ${status}, Message: ${message || "Unknown error"}`);
  }
  handleCatchError(error: unknown) {
    if (error instanceof Error) console.error(error.message);
    else console.error(String(error));
  }
  validateResponse<T extends z.ZodType, K>(schema: T, responseData: K) {
    const validation = schema.safeParse(responseData);
    if (!validation.success) console.error(validation.error);
    return validation?.data || responseData;
  }

  async getAllUsers({ limit, offset = 0 }: { offset?: number; limit: number }) {
    try {
      return await fetch(`/api/user/userlist?offset=${offset}&limit=${limit}`, {
        method: "GET",
      });
    } catch (error) {
      this.handleCatchError(error);
    }
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
      this.handleCatchError(error);
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
      this.handleCatchError(error);
    }
  }

  async getSchedules(): Promise<ApisResponse<ScheduleResponse> | void> {
    try {
      const response = await fetch(`/api/link/calendar/list`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const {
          result: { calendar },
        } = await response.json();
        const validationData = this.validateResponse<
          typeof ScheduleResponseSchema,
          ScheduleResponse
        >(ScheduleResponseSchema, calendar);
        return { response, data: validationData };
      }
      return { response, data: [] };
    } catch (error) {
      this.handleCatchError(error);
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
      this.handleCatchError(error);
    }
  }

  async getBlocks() {
    try {
      return await fetch(`/api/link/list/`, {
        method: "GET",
        credentials: "include",
      });
    } catch (error) {
      this.handleCatchError(error);
    }
  }

  async getProfileBlocks(userId: string) {
    try {
      return await fetch(`/api/link/list/${userId}`, {
        method: "GET",
      });
    } catch (error) {
      this.handleCatchError(error);
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
      this.handleCatchError(error);
    }
  }
}

const getInstance = async (type?: string) => {
  if (!type) return new Apis();
  if (type === "block") return new adminApis();
  if (type === "auth") return new AuthApis();
};

const mainApiInstance = getInstance() as Promise<Apis>;
const adminApiInstance = getInstance("block") as Promise<adminApis>;
const authApiInstance = getInstance("auth") as Promise<AuthApis>;

export { adminApiInstance, authApiInstance, mainApiInstance };
