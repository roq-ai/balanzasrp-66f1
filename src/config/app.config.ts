interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Data Entry Clerk', 'System Administrator'],
  tenantName: 'Company',
  applicationName: 'BalanzaSRP',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage cereal data', 'Manage transportista data', 'Manage productor data', 'Manage company data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/45237faf-5240-4d4b-9318-0951a4c7ee76',
};
