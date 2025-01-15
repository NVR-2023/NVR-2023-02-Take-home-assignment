import { ReactNode, ComponentType, Dispatch, SetStateAction, ElementType } from "react";

export type RouteType = {
  path: string;
  page: ReactNode;
};

export type RoutesGroupType = RouteType[];

export type RouteGroupType = {
  prefix: string;
  layout: ReactNode;
  routeGroup: RoutesGroupType;
};

export type FetchDataType = {
  url: string;
  mockLatency?: number;
};

export type FetchedDataContextType = {
  data: object[];
  isLoading: boolean;
  hasErrors: boolean;
};
export type FetchedDataContextProviderProps = {
  value: FetchedDataContextType;
  children: ReactNode;
};

export type ParentComponentMinimalProps = {
  children?: ReactNode;
};

export type WithDataAndUIContextsProps = {
  BaseComponent: ComponentType;
  DataContext?: ComponentType<{ children?: ReactNode }>;
  UIContext?: ComponentType<{ children?: ReactNode }>;
};

export type DashboardUIContextType = {
  DashboardUIContext: {
    startDate: string;
    endDate: string;
    isRevenueGraphVisible: boolean;
    isInvoicesGraphVisible: boolean;
    isUsersGraphVisible: boolean;
    isDerivedCardVisible: boolean;
    areGraphsCombined: boolean;
  };
  setDashboardUIContext: Dispatch<SetStateAction<DashboardUIContextType["DashboardUIContext"]>>;
};

export type ComplianceStatusUIContextType = {
  ComplianceStatusUIContext: {
    areNodesVisible: boolean;
    areLeafsVisible: boolean;
    areCheckedVisible: boolean;
    areUncheckedVisible: boolean;
  };
  setComplianceStatusUIContext: Dispatch<
    SetStateAction<ComplianceStatusUIContextType["ComplianceStatusUIContext"]>
  >;
};

export type InvoiceFormContextType = {
  issuer: {
    name: string;
    address: {
      street: string;
      buildingNumber: string;
      floor: string;
      city: string;
      postalCode: string;
      country: string;
    };
    vatNumber: string;
  };

  client: {
    name: string;
    address: {
      street: string;
      buildingNumber: string;
      floor: string;
      city: string;
      postalCode: string;
      country: string;
    };
    vatNumber: string;
  };

  product: {
    name: string;
    reference: string;
    quantity: number;
    unitaryPrice: number;
    total: number;
  };

  invoice: {
    date: string;
    reference: string;
  };
};

export type IconProps = {
  scale?: number;
  color?: string;
};

export type LinkWithHideableTagProps = {
  Icon: ElementType;
  text: string;
  url: string;
};