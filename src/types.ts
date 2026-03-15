export type BatchStatus = "pending" | "in-progress" | "completed" | "halted";
export type StageStatus = "pending" | "active" | "completed";
export type LogType = "info" | "warning" | "error" | "success";

export interface Batch {
  id: string;
  orderId: string;
  recipeName: string;
  status: BatchStatus;
  currentStageIndex: number;
  targetTemp?: number;
  targetHumidity?: number;
  clientName?: string;
  projectName?: string;
  createdAt: string;
}

export interface Stage {
  id: string;
  batchId: string;
  name: string;
  order: number;
  status: StageStatus;
  startTime?: string;
  endTime?: string;
  elapsedSeconds?: number;
}

export interface Log {
  id: string;
  batchId: string;
  timestamp: string;
  type: LogType;
  message: string;
  technician?: string;
}

export interface Ingredient {
  id: string;
  batchId: string;
  name: string;
  amount: number;
  unit: string;
  origin?: string;
  description?: string;
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string;
    email?: string;
    emailVerified?: boolean;
    isAnonymous?: boolean;
    tenantId?: string | null;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}
