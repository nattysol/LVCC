export type BatchStatus = "pending" | "in-progress" | "completed" | "halted";
export type StageStatus = "pending" | "active" | "completed";
export type LogType = "info" | "warning" | "error" | "success";

export interface Batch {
  id: string;
  quoteId: string;
  recipeName: string;
  status: BatchStatus;
  currentStageIndex: number;
  specifications?: {
    runSizeKg: number;
    targetParticleSizeMicrons: number;
    temperingCurve: string;
    isGanache: boolean;
    targetTemp?: number;
    targetHumidity?: number;
  };
  resources?: string[];
  clientName?: string;
  projectName?: string;
  dueDate?: string;
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
  qualityData?: {
    humidity?: number;
    viscosity?: number;
    temperSlope?: number;
    inputWeight?: number;
    outputWeight?: number;
    yieldLoss?: number;
  };
}

export interface Log {
  id: string;
  batchId: string;
  timestamp: string;
  type: LogType;
  message: string;
  technician?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  lotNumber: string;
  stockLevel: number;
  unit: string;
  origin?: string;
}

export interface Ingredient {
  id: string;
  batchId: string;
  inventoryItemId?: string;
  name: string;
  lotNumber?: string;
  amount: number;
  unit: string;
  verified?: boolean;
}

export interface Quote {
  id?: string;
  displayId?: number; // Optional because Medusa IDs can be strings
  uid?: string;
  clientName: string;
  projectName: string;
  recipeName: string;   // Added this
  items: any[];         // Added this (you can use a stricter type later)
  email: string;
  recipe: {
    ingredientId: string;
    name: string;
    percentage: number;
  }[];
  totalCostEstimate: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
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
