export interface Ingredient {
  id: number;
  name: string;
  type: 'bean' | 'inclusion' | 'sugar';
  origin: string;
  stock_level: number;
  unit: string;
}

export interface Formulation {
  id: number;
  name: string;
  bean_id: number;
  roast_profile: 'light' | 'medium' | 'dark';
  cocoa_percentage: number;
  inclusions: string; // JSON string
}

export interface Batch {
  id: number;
  batch_number: string;
  formulation_id: number;
  formulation_name: string;
  status: 'queued' | 'roasting' | 'conching' | 'tempering' | 'packaging' | 'completed';
  started_at: string;
  current_stage_start: string;
}
