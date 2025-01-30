declare module 'k6/http' {
    export * from 'k6';
  }
  
  declare module 'k6' {
    export interface Response {
      status: number;
      body: string;
      headers: Record<string, string>;
      json<T = any>(): T;
      text(): string;
    }
  
    export function check(response: Response, checks: Record<string, Function>): boolean;
    export function sleep(seconds: number): void;
  
    export function group(name: string, fn: () => void): void;
  }
  