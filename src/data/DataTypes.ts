export type Customer = {
  customerMasDetail: any;
  customerReadDetail: ReadDetails[];
};
export type ReadDetails = {
  billCycle: string;
  days: string;
  kwh: string;
  readDate: string;
  readMet1: string;
  readMet2: string;
  readMet3: string;
  units: string;
  year: string;
};

export interface Transaction {
  billMonth: string;
  transactionDate: string;
  description: string;
  transactionAmount: string;
  balance: string;
  billCycle?: string;
}

export interface CustomerTransactionHistory {
  accountNumber: string;
  name: string;
  address: string;
  tariff: string;
  area: string;
  balance: string;
  transactions: Transaction[];
}

export interface TransactionHistoryProps {
  initialAccountNumber: string;
  FbillCycle: number;
  TbillCycle: number;
}

export type RawTransaction = {
  billCycle: string;
  yrMnth?: string;
  transDate?: string;
  transType?: string;
  transAmt?: number;
  balance?: number;
  balDrCr?: string;
};
