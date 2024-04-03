import type { Actions } from "./$types";
import { Argon2id } from "oslo/password";
import { Scrypt } from "lucia";
import { argon2id } from "@noble/hashes/argon2";
import { randomBytes } from "@noble/hashes/utils";

class NobleArgon2id {
  private memorySize: number;
  private iterations: number;
  private parallelism: number;

  constructor(options?: {
    memorySize?: number;
    iterations?: number;
    tagLength?: number;
    parallelism?: number;
  }) {
    this.memorySize = options?.memorySize ?? 19456;
    this.iterations = options?.iterations ?? 2;
    this.parallelism = options?.parallelism ?? 1;
  }

  public hash(password: string, salt?: Uint8Array) {
    const saltUint8 = salt ?? randomBytes(8);
    const hash = argon2id(password, saltUint8, {
      t: this.iterations,
      m: this.memorySize,
      p: this.parallelism,
    });
    // remove padding to match other implementations
    const saltBase64 = btoa(String.fromCharCode(...saltUint8)).replace(
      /=+$/,
      ""
    );
    const hashBase64 = btoa(String.fromCharCode(...hash)).replace(/=+$/, "");
    return `$argon2id$v=19$m=${this.memorySize},t=${this.iterations},p=${this.parallelism}$${saltBase64}$${hashBase64}`;
  }
  public verify(hash: string, password: string) {
    const saltBase64 = hash.split("$")[4];
    const saltUint8 = Uint8Array.from(atob(saltBase64), (char) =>
      char.charCodeAt(0)
    );

    return this.hash(password, saltUint8) == hash;
  }
}

type HashFunction = () => Promise<any>;
type HashBenchmarkResult = {
  hash: string;
  hashDuration: number;
  verified: boolean;
  verifiedDuration: number;
};

async function trackHash(func: HashFunction) {
  const startTime = performance.now();

  // workaround, returning either hash string or verify boolean
  const result = await func();

  const endTime = performance.now();
  const duration = endTime - startTime;

  return { result, duration };
}

export const actions = {
  osloArgon2: async ({ request }) => {
    const data = await request.formData();
    const password = data.get("password") as string;
    const number = parseInt(data.get("number") as string);

    const result: HashBenchmarkResult[] = [];

    for (let i = 0; i < number; i++) {
      const { result: hash, duration: hashDuration } = await trackHash(
        async () => {
          return await new Argon2id().hash(password);
        }
      );

      const { result: verified, duration: verifiedDuration } = await trackHash(
        async () => {
          return await new Argon2id().verify(hash, password);
          //   return new NobleArgon2id().verify(hash, password);
        }
      );
      result.push({ hash, hashDuration, verified, verifiedDuration });
    }

    return {
      message: "Results for oslo/password Argon2id",
      result: result,
    };
  },
  luciaScrypt: async ({ request }) => {
    const data = await request.formData();
    const password = data.get("password") as string;
    const number = parseInt(data.get("number") as string);

    const result: HashBenchmarkResult[] = [];

    for (let i = 0; i < number; i++) {
      const { result: hash, duration: hashDuration } = await trackHash(
        async () => {
          return await new Scrypt().hash(password);
        }
      );

      const { result: verified, duration: verifiedDuration } = await trackHash(
        async () => {
          return await new Scrypt().verify(hash, password);
        }
      );
      result.push({ hash, hashDuration, verified, verifiedDuration });
    }

    return {
      message: "Results for lucia Scrypt",
      result: result,
    };
  },
  nobleArgon2: async ({ request }) => {
    const data = await request.formData();
    const password = data.get("password") as string;
    const number = parseInt(data.get("number") as string);

    const result: HashBenchmarkResult[] = [];

    for (let i = 0; i < number; i++) {
      const { result: hash, duration: hashDuration } = await trackHash(
        async () => {
          return new NobleArgon2id().hash(password);
          //   return new NobleArgon2id({
          //     memorySize: 7168,
          //     iterations: 5,
          //     parallelism: 1,
          //   }).hash(password);
        }
      );

      const { result: verified, duration: verifiedDuration } = await trackHash(
        async () => {
          return new NobleArgon2id().verify(hash, password);
          //   return new NobleArgon2id({
          //     memorySize: 7168,
          //     iterations: 5,
          //     parallelism: 1,
          //   }).verify(hash, password);
          //   return new Argon2id().verify(hash, password);
        }
      );
      result.push({ hash, hashDuration, verified, verifiedDuration });
    }

    return {
      message: "Results for noble hashes Argon2id",
      result: result,
    };
  },
} satisfies Actions;
