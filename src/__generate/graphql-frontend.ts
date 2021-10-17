import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  Byte: any;
  Char: any;
  Long: any;
  Short: any;
  _ByteArray: any;
  _Date: any;
  _DateTime: any;
  _Float4: any;
  _OffsetDateTime: any;
};





export type Gift = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  kind?: Maybe<_En_GiftKind>;
  serialNumber: Scalars['String'];
  type: Scalars['String'];
  vendor: GiftVendor;
  aggregateRoot?: Maybe<GiftVendor>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type GiftVendorArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type GiftAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type Gift_GetCharArgs = {
  expression: Scalars['String'];
};


export type Gift_GetStringArgs = {
  expression: Scalars['String'];
};


export type Gift_GetByteArgs = {
  expression: Scalars['String'];
};


export type Gift_GetShortArgs = {
  expression: Scalars['String'];
};


export type Gift_GetIntArgs = {
  expression: Scalars['String'];
};


export type Gift_GetLongArgs = {
  expression: Scalars['String'];
};


export type Gift_GetFloatArgs = {
  expression: Scalars['String'];
};


export type Gift_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type Gift_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type Gift_GetDateArgs = {
  expression: Scalars['String'];
};


export type Gift_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Gift_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Gift_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type Gift_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type GiftRequestCounter = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  counter?: Maybe<Scalars['Int']>;
  lastRequest?: Maybe<Scalars['_DateTime']>;
  kind?: Maybe<_En_GiftKind>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type GiftRequestCounter_GetCharArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetStringArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetByteArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetShortArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetIntArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetLongArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetFloatArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetDateArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type GiftRequestCounter_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type GiftVendor = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  gifts: _Ec_Gift;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type GiftVendorGiftsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type GiftVendor_GetCharArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetStringArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetByteArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetShortArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetIntArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetLongArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetFloatArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetDateArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type GiftVendor_GetByteArrayArgs = {
  expression: Scalars['String'];
};



export type Stakeholder = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type Stakeholder_GetCharArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetStringArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetByteArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetShortArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetIntArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetLongArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetFloatArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetDateArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type Stakeholder_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type Status = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  statusType?: Maybe<Scalars['String']>;
  initial?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  stakeholder?: Maybe<Stakeholder>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type StatusStakeholderArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type Status_GetCharArgs = {
  expression: Scalars['String'];
};


export type Status_GetStringArgs = {
  expression: Scalars['String'];
};


export type Status_GetByteArgs = {
  expression: Scalars['String'];
};


export type Status_GetShortArgs = {
  expression: Scalars['String'];
};


export type Status_GetIntArgs = {
  expression: Scalars['String'];
};


export type Status_GetLongArgs = {
  expression: Scalars['String'];
};


export type Status_GetFloatArgs = {
  expression: Scalars['String'];
};


export type Status_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type Status_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type Status_GetDateArgs = {
  expression: Scalars['String'];
};


export type Status_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Status_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Status_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type Status_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type StatusGraph = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  statusTo?: Maybe<Status>;
  statusFrom?: Maybe<Status>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type StatusGraphStatusToArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type StatusGraphStatusFromArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type StatusGraph_GetCharArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetStringArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetByteArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetShortArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetIntArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetLongArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetFloatArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetDateArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type StatusGraph_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type Voucher = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  issuedAt?: Maybe<Scalars['_DateTime']>;
  code: Scalars['String'];
  type: Scalars['String'];
  serie: VoucherSerie;
  statusForVoucherMain?: Maybe<Status>;
  aggregateRoot?: Maybe<VoucherSerie>;
  gift: _G_GiftReference;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type VoucherSerieArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type VoucherStatusForVoucherMainArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type VoucherAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type Voucher_GetCharArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetStringArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetByteArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetShortArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetIntArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetLongArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetFloatArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetDateArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type Voucher_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type VoucherSerie = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  activeTo?: Maybe<Scalars['_Date']>;
  startedAt?: Maybe<Scalars['_Date']>;
  type: Scalars['String'];
  vouchers: _Ec_Voucher;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type VoucherSerieVouchersArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type VoucherSerie_GetCharArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetStringArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetByteArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetShortArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetIntArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetLongArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetFloatArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetDateArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type VoucherSerie_GetByteArrayArgs = {
  expression: Scalars['String'];
};


export type _CreateGiftInput = {
  serialNumber: Scalars['String'];
  vendor: Scalars['ID'];
  kind?: Maybe<_En_GiftKind>;
};

export type _CreateGiftRequestCounterInput = {
  lastRequest?: Maybe<Scalars['_DateTime']>;
  kind?: Maybe<_En_GiftKind>;
  counter?: Maybe<Scalars['Int']>;
};

export type _CreateGiftVendorInput = {
  name?: Maybe<Scalars['String']>;
};

export type _CreateVoucherInput = {
  gift?: Maybe<_DoubleReferenceInput>;
  code: Scalars['String'];
  statusForVoucherMain?: Maybe<_StatusInput>;
  serie: Scalars['ID'];
  issuedAt?: Maybe<Scalars['_DateTime']>;
};

export type _CreateVoucherSerieInput = {
  code?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['_Date']>;
  activeTo?: Maybe<Scalars['_Date']>;
};



export type _DoubleReferenceInput = {
  rootEntityId: Scalars['String'];
  entityId: Scalars['String'];
};

export type _Ec_Gift = {
  __typename?: '_EC_Gift';
  elems: Array<Gift>;
  count: Scalars['Int'];
};

export type _Ec_GiftRequestCounter = {
  __typename?: '_EC_GiftRequestCounter';
  elems: Array<GiftRequestCounter>;
  count: Scalars['Int'];
};

export type _Ec_GiftVendor = {
  __typename?: '_EC_GiftVendor';
  elems: Array<GiftVendor>;
  count: Scalars['Int'];
};

export type _Ec_Stakeholder = {
  __typename?: '_EC_Stakeholder';
  elems: Array<Stakeholder>;
  count: Scalars['Int'];
};

export type _Ec_Status = {
  __typename?: '_EC_Status';
  elems: Array<Status>;
  count: Scalars['Int'];
};

export type _Ec_StatusGraph = {
  __typename?: '_EC_StatusGraph';
  elems: Array<StatusGraph>;
  count: Scalars['Int'];
};

export type _Ec_Voucher = {
  __typename?: '_EC_Voucher';
  elems: Array<Voucher>;
  count: Scalars['Int'];
};

export type _Ec_VoucherSerie = {
  __typename?: '_EC_VoucherSerie';
  elems: Array<VoucherSerie>;
  count: Scalars['Int'];
};

export type _Enc_GiftKind = {
  __typename?: '_ENC_GiftKind';
  elems: Array<_En_GiftKind>;
  count: Scalars['Int'];
};

export enum _En_GiftKind {
  Cap = 'CAP',
  Tshirt = 'TSHIRT',
  Mug = 'MUG'
}

export type _E_Gift = _Entity & Gift & {
  __typename?: '_E_Gift';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  kind?: Maybe<_En_GiftKind>;
  serialNumber: Scalars['String'];
  type: Scalars['String'];
  vendor: GiftVendor;
  aggregateRoot?: Maybe<GiftVendor>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_GiftVendorArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_GiftAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_Gift_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_Gift_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_GiftRequestCounter = _Entity & GiftRequestCounter & {
  __typename?: '_E_GiftRequestCounter';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  counter?: Maybe<Scalars['Int']>;
  lastRequest?: Maybe<Scalars['_DateTime']>;
  kind?: Maybe<_En_GiftKind>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_GiftRequestCounter_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_GiftRequestCounter_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_GiftVendor = _Entity & GiftVendor & {
  __typename?: '_E_GiftVendor';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  gifts: _Ec_Gift;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_GiftVendorGiftsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_GiftVendor_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_GiftVendor_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_Stakeholder = _Entity & Stakeholder & {
  __typename?: '_E_Stakeholder';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_Stakeholder_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_Stakeholder_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_Status = _Entity & Status & {
  __typename?: '_E_Status';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  statusType?: Maybe<Scalars['String']>;
  initial?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  stakeholder?: Maybe<Stakeholder>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_StatusStakeholderArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_Status_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_Status_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_StatusGraph = _Entity & StatusGraph & {
  __typename?: '_E_StatusGraph';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  statusTo?: Maybe<Status>;
  statusFrom?: Maybe<Status>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_StatusGraphStatusToArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_StatusGraphStatusFromArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_StatusGraph_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_StatusGraph_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_Voucher = _Entity & Voucher & {
  __typename?: '_E_Voucher';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  issuedAt?: Maybe<Scalars['_DateTime']>;
  code: Scalars['String'];
  type: Scalars['String'];
  serie: VoucherSerie;
  statusForVoucherMain?: Maybe<Status>;
  aggregateRoot?: Maybe<VoucherSerie>;
  gift: _G_GiftReference;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_VoucherSerieArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_VoucherStatusForVoucherMainArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_VoucherAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_Voucher_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_Voucher_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_VoucherSerie = _Entity & VoucherSerie & {
  __typename?: '_E_VoucherSerie';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  activeTo?: Maybe<Scalars['_Date']>;
  startedAt?: Maybe<Scalars['_Date']>;
  type: Scalars['String'];
  vouchers: _Ec_Voucher;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_VoucherSerieVouchersArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_VoucherSerie_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_VoucherSerie_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Entity = {
  id: Scalars['ID'];
};


export type _G_GiftReference = {
  __typename?: '_G_GiftReference';
  entityId?: Maybe<Scalars['String']>;
  rootEntityId?: Maybe<Scalars['String']>;
  entity?: Maybe<Gift>;
};

export type _MergedEntitiesCollection = {
  __typename?: '_MergedEntitiesCollection';
  elems: Array<_Entity>;
  count: Scalars['Int'];
};

export type _Mutation = {
  __typename?: '_Mutation';
  packet?: Maybe<_Packet>;
};


export type _MutationPacketArgs = {
  aggregateVersion?: Maybe<Scalars['Long']>;
  idempotencePacketId?: Maybe<Scalars['String']>;
};


export type _Packet = {
  __typename?: '_Packet';
  createGift?: Maybe<Gift>;
  updateGift?: Maybe<Gift>;
  getGift?: Maybe<Gift>;
  deleteGift?: Maybe<Scalars['String']>;
  createGiftVendor?: Maybe<GiftVendor>;
  updateGiftVendor?: Maybe<GiftVendor>;
  getGiftVendor?: Maybe<GiftVendor>;
  deleteGiftVendor?: Maybe<Scalars['String']>;
  createVoucherSerie?: Maybe<VoucherSerie>;
  updateVoucherSerie?: Maybe<VoucherSerie>;
  getVoucherSerie?: Maybe<VoucherSerie>;
  deleteVoucherSerie?: Maybe<Scalars['String']>;
  createGiftRequestCounter?: Maybe<GiftRequestCounter>;
  updateGiftRequestCounter?: Maybe<GiftRequestCounter>;
  getGiftRequestCounter?: Maybe<GiftRequestCounter>;
  deleteGiftRequestCounter?: Maybe<Scalars['String']>;
  createVoucher?: Maybe<Voucher>;
  updateVoucher?: Maybe<Voucher>;
  getVoucher?: Maybe<Voucher>;
  deleteVoucher?: Maybe<Scalars['String']>;
  aggregateVersion?: Maybe<Scalars['Long']>;
  isIdempotenceResponse?: Maybe<Scalars['Boolean']>;
};


export type _PacketCreateGiftArgs = {
  input: _CreateGiftInput;
};


export type _PacketUpdateGiftArgs = {
  input: _UpdateGiftInput;
};


export type _PacketGetGiftArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteGiftArgs = {
  id: Scalars['ID'];
};


export type _PacketCreateGiftVendorArgs = {
  input: _CreateGiftVendorInput;
};


export type _PacketUpdateGiftVendorArgs = {
  input: _UpdateGiftVendorInput;
};


export type _PacketGetGiftVendorArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteGiftVendorArgs = {
  id: Scalars['ID'];
};


export type _PacketCreateVoucherSerieArgs = {
  input: _CreateVoucherSerieInput;
};


export type _PacketUpdateVoucherSerieArgs = {
  input: _UpdateVoucherSerieInput;
};


export type _PacketGetVoucherSerieArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteVoucherSerieArgs = {
  id: Scalars['ID'];
};


export type _PacketCreateGiftRequestCounterArgs = {
  input: _CreateGiftRequestCounterInput;
};


export type _PacketUpdateGiftRequestCounterArgs = {
  input: _UpdateGiftRequestCounterInput;
};


export type _PacketGetGiftRequestCounterArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteGiftRequestCounterArgs = {
  id: Scalars['ID'];
};


export type _PacketCreateVoucherArgs = {
  input: _CreateVoucherInput;
};


export type _PacketUpdateVoucherArgs = {
  input: _UpdateVoucherInput;
};


export type _PacketGetVoucherArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteVoucherArgs = {
  id: Scalars['ID'];
};

export type _Query = {
  __typename?: '_Query';
  selectionByGift: _Sec_Gift;
  selectionByGiftVendor: _Sec_GiftVendor;
  selectionByVoucherSerie: _Sec_VoucherSerie;
  selectionByVoucher: _Sec_Voucher;
  selectionByGiftRequestCounter: _Sec_GiftRequestCounter;
  selectionByStakeholder: _Sec_Stakeholder;
  selectionByStatus: _Sec_Status;
  selectionByStatusGraph: _Sec_StatusGraph;
  merge: _MergedEntitiesCollection;
  searchGift: _Ec_Gift;
  searchGiftVendor: _Ec_GiftVendor;
  searchVoucherSerie: _Ec_VoucherSerie;
  searchVoucher: _Ec_Voucher;
  searchGiftRequestCounter: _Ec_GiftRequestCounter;
  searchStakeholder: _Ec_Stakeholder;
  searchStatus: _Ec_Status;
  searchStatusGraph: _Ec_StatusGraph;
};


export type _QuerySelectionByGiftArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByGiftVendorArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByVoucherSerieArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByVoucherArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByGiftRequestCounterArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByStakeholderArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByStatusArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByStatusGraphArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QueryMergeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchGiftArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchGiftVendorArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchVoucherSerieArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchVoucherArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchGiftRequestCounterArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchStakeholderArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchStatusArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchStatusGraphArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};

export type _Sec_Gift = {
  __typename?: '_SEC_Gift';
  elems: Array<_Se_Gift>;
  count: Scalars['Int'];
};

export type _Sec_GiftRequestCounter = {
  __typename?: '_SEC_GiftRequestCounter';
  elems: Array<_Se_GiftRequestCounter>;
  count: Scalars['Int'];
};

export type _Sec_GiftVendor = {
  __typename?: '_SEC_GiftVendor';
  elems: Array<_Se_GiftVendor>;
  count: Scalars['Int'];
};

export type _Sec_Stakeholder = {
  __typename?: '_SEC_Stakeholder';
  elems: Array<_Se_Stakeholder>;
  count: Scalars['Int'];
};

export type _Sec_Status = {
  __typename?: '_SEC_Status';
  elems: Array<_Se_Status>;
  count: Scalars['Int'];
};

export type _Sec_StatusGraph = {
  __typename?: '_SEC_StatusGraph';
  elems: Array<_Se_StatusGraph>;
  count: Scalars['Int'];
};

export type _Sec_Voucher = {
  __typename?: '_SEC_Voucher';
  elems: Array<_Se_Voucher>;
  count: Scalars['Int'];
};

export type _Sec_VoucherSerie = {
  __typename?: '_SEC_VoucherSerie';
  elems: Array<_Se_VoucherSerie>;
  count: Scalars['Int'];
};

export type _Se_Gift = {
  __typename?: '_SE_Gift';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  kind?: Maybe<_En_GiftKind>;
  serialNumber: Scalars['String'];
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_Gift_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_Gift_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_GiftRequestCounter = {
  __typename?: '_SE_GiftRequestCounter';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  counter?: Maybe<Scalars['Int']>;
  lastRequest?: Maybe<Scalars['_DateTime']>;
  kind?: Maybe<_En_GiftKind>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_GiftRequestCounter_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftRequestCounter_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_GiftVendor = {
  __typename?: '_SE_GiftVendor';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_GiftVendor_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_GiftVendor_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_Stakeholder = {
  __typename?: '_SE_Stakeholder';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_Stakeholder_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_Stakeholder_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_Status = {
  __typename?: '_SE_Status';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  statusType?: Maybe<Scalars['String']>;
  initial?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_Status_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_Status_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_StatusGraph = {
  __typename?: '_SE_StatusGraph';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_StatusGraph_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_StatusGraph_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_Voucher = {
  __typename?: '_SE_Voucher';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  issuedAt?: Maybe<Scalars['_DateTime']>;
  code: Scalars['String'];
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_Voucher_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_Voucher_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_VoucherSerie = {
  __typename?: '_SE_VoucherSerie';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  chgCnt?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  activeTo?: Maybe<Scalars['_Date']>;
  startedAt?: Maybe<Scalars['_Date']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_VoucherSerie_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_VoucherSerie_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _SortCriterionSpecification = {
  crit: Scalars['String'];
  order?: _SortOrder;
  nullsLast?: Maybe<Scalars['Boolean']>;
};

export enum _SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type _StatusInput = {
  code: Scalars['String'];
  reason?: Maybe<Scalars['String']>;
};

export type _UpdateGiftInput = {
  serialNumber?: Maybe<Scalars['String']>;
  kind?: Maybe<_En_GiftKind>;
  id: Scalars['ID'];
};

export type _UpdateGiftRequestCounterInput = {
  lastRequest?: Maybe<Scalars['_DateTime']>;
  kind?: Maybe<_En_GiftKind>;
  counter?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type _UpdateGiftVendorInput = {
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type _UpdateVoucherInput = {
  gift?: Maybe<_DoubleReferenceInput>;
  code?: Maybe<Scalars['String']>;
  statusForVoucherMain?: Maybe<_StatusInput>;
  issuedAt?: Maybe<Scalars['_DateTime']>;
  id: Scalars['ID'];
};

export type _UpdateVoucherSerieInput = {
  code?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['_Date']>;
  activeTo?: Maybe<Scalars['_Date']>;
  id: Scalars['ID'];
};

export type SearchGiftVendorQueryVariables = Exact<{ [key: string]: never; }>;


export type SearchGiftVendorQuery = (
  { __typename?: '_Query' }
  & { searchGiftVendor: (
    { __typename?: '_EC_GiftVendor' }
    & { elems: Array<(
      { __typename: '_E_GiftVendor' }
      & Pick<_E_GiftVendor, 'id' | 'name'>
    )> }
  ) }
);

export type CreateGiftVendorMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateGiftVendorMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & { createGiftVendor?: Maybe<(
      { __typename: '_E_GiftVendor' }
      & Pick<_E_GiftVendor, 'id' | 'name'>
    )> }
  )> }
);

export type DeleteGiftVendorMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteGiftVendorMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & Pick<_Packet, 'deleteGiftVendor'>
  )> }
);

export type SearchGiftQueryVariables = Exact<{
  cond?: Maybe<Scalars['String']>;
}>;


export type SearchGiftQuery = (
  { __typename?: '_Query' }
  & { searchGift: (
    { __typename?: '_EC_Gift' }
    & { elems: Array<(
      { __typename: '_E_Gift' }
      & Pick<_E_Gift, 'id' | 'serialNumber' | 'kind'>
    )> }
  ) }
);

export type CreateGiftMutationVariables = Exact<{
  vendorId: Scalars['ID'];
  serialNumber: Scalars['String'];
  kind?: Maybe<_En_GiftKind>;
}>;


export type CreateGiftMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & { createGift?: Maybe<(
      { __typename: '_E_Gift' }
      & Pick<_E_Gift, 'id' | 'serialNumber' | 'kind'>
    )> }
  )> }
);

export type DeleteGiftMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteGiftMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & Pick<_Packet, 'deleteGift'>
  )> }
);


export const SearchGiftVendorDocument = gql`
    query searchGiftVendor {
  searchGiftVendor {
    elems {
      id
      __typename
      name
    }
  }
}
    `;

/**
 * __useSearchGiftVendorQuery__
 *
 * To run a query within a React component, call `useSearchGiftVendorQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchGiftVendorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchGiftVendorQuery({
 *   variables: {
 *   },
 * });
 */
export function useSearchGiftVendorQuery(baseOptions?: Apollo.QueryHookOptions<SearchGiftVendorQuery, SearchGiftVendorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchGiftVendorQuery, SearchGiftVendorQueryVariables>(SearchGiftVendorDocument, options);
      }
export function useSearchGiftVendorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchGiftVendorQuery, SearchGiftVendorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchGiftVendorQuery, SearchGiftVendorQueryVariables>(SearchGiftVendorDocument, options);
        }
export type SearchGiftVendorQueryHookResult = ReturnType<typeof useSearchGiftVendorQuery>;
export type SearchGiftVendorLazyQueryHookResult = ReturnType<typeof useSearchGiftVendorLazyQuery>;
export type SearchGiftVendorQueryResult = Apollo.QueryResult<SearchGiftVendorQuery, SearchGiftVendorQueryVariables>;
export const CreateGiftVendorDocument = gql`
    mutation createGiftVendor($name: String!) {
  packet {
    createGiftVendor(input: {name: $name}) {
      id
      __typename
      name
    }
  }
}
    `;
export type CreateGiftVendorMutationFn = Apollo.MutationFunction<CreateGiftVendorMutation, CreateGiftVendorMutationVariables>;

/**
 * __useCreateGiftVendorMutation__
 *
 * To run a mutation, you first call `useCreateGiftVendorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGiftVendorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGiftVendorMutation, { data, loading, error }] = useCreateGiftVendorMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateGiftVendorMutation(baseOptions?: Apollo.MutationHookOptions<CreateGiftVendorMutation, CreateGiftVendorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGiftVendorMutation, CreateGiftVendorMutationVariables>(CreateGiftVendorDocument, options);
      }
export type CreateGiftVendorMutationHookResult = ReturnType<typeof useCreateGiftVendorMutation>;
export type CreateGiftVendorMutationResult = Apollo.MutationResult<CreateGiftVendorMutation>;
export type CreateGiftVendorMutationOptions = Apollo.BaseMutationOptions<CreateGiftVendorMutation, CreateGiftVendorMutationVariables>;
export const DeleteGiftVendorDocument = gql`
    mutation deleteGiftVendor($id: ID!) {
  packet {
    deleteGiftVendor(id: $id)
  }
}
    `;
export type DeleteGiftVendorMutationFn = Apollo.MutationFunction<DeleteGiftVendorMutation, DeleteGiftVendorMutationVariables>;

/**
 * __useDeleteGiftVendorMutation__
 *
 * To run a mutation, you first call `useDeleteGiftVendorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGiftVendorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGiftVendorMutation, { data, loading, error }] = useDeleteGiftVendorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGiftVendorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGiftVendorMutation, DeleteGiftVendorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGiftVendorMutation, DeleteGiftVendorMutationVariables>(DeleteGiftVendorDocument, options);
      }
export type DeleteGiftVendorMutationHookResult = ReturnType<typeof useDeleteGiftVendorMutation>;
export type DeleteGiftVendorMutationResult = Apollo.MutationResult<DeleteGiftVendorMutation>;
export type DeleteGiftVendorMutationOptions = Apollo.BaseMutationOptions<DeleteGiftVendorMutation, DeleteGiftVendorMutationVariables>;
export const SearchGiftDocument = gql`
    query searchGift($cond: String) {
  searchGift(cond: $cond) {
    elems {
      id
      __typename
      serialNumber
      kind
    }
  }
}
    `;

/**
 * __useSearchGiftQuery__
 *
 * To run a query within a React component, call `useSearchGiftQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchGiftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchGiftQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchGiftQuery(baseOptions?: Apollo.QueryHookOptions<SearchGiftQuery, SearchGiftQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchGiftQuery, SearchGiftQueryVariables>(SearchGiftDocument, options);
      }
export function useSearchGiftLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchGiftQuery, SearchGiftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchGiftQuery, SearchGiftQueryVariables>(SearchGiftDocument, options);
        }
export type SearchGiftQueryHookResult = ReturnType<typeof useSearchGiftQuery>;
export type SearchGiftLazyQueryHookResult = ReturnType<typeof useSearchGiftLazyQuery>;
export type SearchGiftQueryResult = Apollo.QueryResult<SearchGiftQuery, SearchGiftQueryVariables>;
export const CreateGiftDocument = gql`
    mutation createGift($vendorId: ID!, $serialNumber: String!, $kind: _EN_GiftKind) {
  packet {
    createGift(input: {vendor: $vendorId, serialNumber: $serialNumber, kind: $kind}) {
      id
      __typename
      serialNumber
      kind
    }
  }
}
    `;
export type CreateGiftMutationFn = Apollo.MutationFunction<CreateGiftMutation, CreateGiftMutationVariables>;

/**
 * __useCreateGiftMutation__
 *
 * To run a mutation, you first call `useCreateGiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGiftMutation, { data, loading, error }] = useCreateGiftMutation({
 *   variables: {
 *      vendorId: // value for 'vendorId'
 *      serialNumber: // value for 'serialNumber'
 *      kind: // value for 'kind'
 *   },
 * });
 */
export function useCreateGiftMutation(baseOptions?: Apollo.MutationHookOptions<CreateGiftMutation, CreateGiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGiftMutation, CreateGiftMutationVariables>(CreateGiftDocument, options);
      }
export type CreateGiftMutationHookResult = ReturnType<typeof useCreateGiftMutation>;
export type CreateGiftMutationResult = Apollo.MutationResult<CreateGiftMutation>;
export type CreateGiftMutationOptions = Apollo.BaseMutationOptions<CreateGiftMutation, CreateGiftMutationVariables>;
export const DeleteGiftDocument = gql`
    mutation deleteGift($id: ID!) {
  packet {
    deleteGift(id: $id)
  }
}
    `;
export type DeleteGiftMutationFn = Apollo.MutationFunction<DeleteGiftMutation, DeleteGiftMutationVariables>;

/**
 * __useDeleteGiftMutation__
 *
 * To run a mutation, you first call `useDeleteGiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGiftMutation, { data, loading, error }] = useDeleteGiftMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGiftMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGiftMutation, DeleteGiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGiftMutation, DeleteGiftMutationVariables>(DeleteGiftDocument, options);
      }
export type DeleteGiftMutationHookResult = ReturnType<typeof useDeleteGiftMutation>;
export type DeleteGiftMutationResult = Apollo.MutationResult<DeleteGiftMutation>;
export type DeleteGiftMutationOptions = Apollo.BaseMutationOptions<DeleteGiftMutation, DeleteGiftMutationVariables>;