export interface PersonalInformation {
  addition: string;
  email: string;
  houseNumber: number;
  name: string;
  phone: number;
  postCode: string;
}

export interface RegistryInformation {
  addition?: string;
  houseNumber: number | null;
  postCode: string;
}

export interface AddressInformation {
  street: string;
  city: string;
  country: string;
}
