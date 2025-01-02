import { MongoClient, MongoClientOptions } from "mongodb";

const uri: string = process.env.MONGODB_URI as string;
const options: MongoClientOptions = {};

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // @ts-expect-error: globalThis에 사용자 정의 속성을 추가할 때 발생하는 오류 무시
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    // @ts-expect-error: globalThis에 사용자 정의 속성을 추가할 때 발생하는 오류 무시
    global._mongoClientPromise = client.connect();
  }
  // @ts-expect-error: globalThis에 사용자 정의 속성을 추가할 때 발생하는 오류 무시
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
