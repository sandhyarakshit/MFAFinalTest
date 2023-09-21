export interface EnrollResponse {
  id: string;
  factorType: string;
  provider: string;
  vendorName: string;
  status: string;
  created: string;
  lastUpdated: string;
  //@JsonProperty(PropertyName = "_embedded")
  embedded: {
    activation: {
      timeStep: number;
      sharedSecret: string;
      encoding: string;
      keyLength: number;
      factorResult: string;
      _links: {
        qrcode: {
          href: string;
          type: string;
        };
      };
    };
  };
}




