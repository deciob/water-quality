import { Iso2Codes } from "./iso2";

export type WBMetaData = {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  sourceid: string;
  lastupdated: string;
};

type IndicatorId = "AG.LND.ARBL.ZS";

type Indicator = {
  indicatorId: IndicatorId;
  value: string;
};

type Country = {
  id: Iso2Codes;
  value: string;
};

export type WBData = {
  indicator: Indicator;
  country: Country;
  date: string;
  value?: number;
  unit?: string;
};

export type WB = [WBMetaData, WBData[]];
