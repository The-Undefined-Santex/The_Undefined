// auth.model.ts
export interface AuthResponse {
    data: {
      id: number;
      userName: string;
      rol: string;
    };
    token: string;
  }