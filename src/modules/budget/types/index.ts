export interface BankTransaction {
  account_number: string;
  post_date: string;
  check_number: string;
  description: string;
  debit: number;
  credit: number;
  status?: string | null;
  balance?: number | null;
  classification?: string | null;
}
