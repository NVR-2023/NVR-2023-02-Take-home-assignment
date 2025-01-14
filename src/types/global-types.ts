import { ReactNode } from "react";

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
  children: ReactNode;
}
