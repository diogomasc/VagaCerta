export type JobProps = {
  id?: number; // opcional porque será gerado automaticamente
  title: string;
  description: string;
  registrationDate: string | Date; // aceita tanto string quanto Date
  phone: string;
  company: string;
  status: boolean;
};

export type RootStackParamList = {
  Login: undefined;
  FormScreen: undefined;
  Home: undefined;
  Profile: undefined;
  Details: { id: number };
};
