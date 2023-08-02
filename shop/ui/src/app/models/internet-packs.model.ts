export interface InternetPackage {
  id: string;
  name: string;
  progress: string;
  details: string[];
  label: boolean;
  price: string;
}

export interface InternetPlan {
  id: string;
  name: string;
  download: string;
  upload: string;
  price: string;
}
