/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core, connectionPluginCore } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    analyticsConnection<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Meeting: { // root type
    category?: string | null; // String
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: number | null; // Int
    location?: string | null; // String
    meetingDate?: string | null; // String
    title?: string | null; // String
  }
  Mutation: {};
  Query: {};
  Request: { // root type
    confirm?: boolean | null; // Boolean
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: number | null; // Int
    meetingId?: number | null; // Int
    requestEmail?: string | null; // String
  }
  User: { // root type
    email?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Meeting: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    category: string | null; // String
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    id: number | null; // Int
    location: string | null; // String
    meetingDate: string | null; // String
    requests: Array<NexusGenRootTypes['Request'] | null> | null; // [Request]
    title: string | null; // String
  }
  Mutation: { // field return type
    confrimRequest: NexusGenRootTypes['Request'] | null; // Request
    createMeeting: NexusGenRootTypes['Meeting'] | null; // Meeting
    deleteRequest: NexusGenRootTypes['Request'] | null; // Request
    requestMeeting: NexusGenRootTypes['Request'] | null; // Request
  }
  Query: { // field return type
    meetings: Array<NexusGenRootTypes['Meeting'] | null> | null; // [Meeting]
    myMeeting: Array<NexusGenRootTypes['Meeting'] | null> | null; // [Meeting]
    myMeetings: Array<NexusGenRootTypes['Meeting'] | null> | null; // [Meeting]
    searchMeetings: Array<NexusGenRootTypes['Meeting'] | null> | null; // [Meeting]
  }
  Request: { // field return type
    confirm: boolean | null; // Boolean
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    id: number | null; // Int
    meeting: NexusGenRootTypes['Meeting'] | null; // Meeting
    meetingId: number | null; // Int
    requestEmail: string | null; // String
  }
  User: { // field return type
    email: string | null; // String
    id: string | null; // String
    meetings: Array<NexusGenRootTypes['Meeting'] | null> | null; // [Meeting]
    name: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Meeting: { // field return type name
    author: 'User'
    category: 'String'
    createdAt: 'DateTime'
    id: 'Int'
    location: 'String'
    meetingDate: 'String'
    requests: 'Request'
    title: 'String'
  }
  Mutation: { // field return type name
    confrimRequest: 'Request'
    createMeeting: 'Meeting'
    deleteRequest: 'Request'
    requestMeeting: 'Request'
  }
  Query: { // field return type name
    meetings: 'Meeting'
    myMeeting: 'Meeting'
    myMeetings: 'Meeting'
    searchMeetings: 'Meeting'
  }
  Request: { // field return type name
    confirm: 'Boolean'
    createdAt: 'DateTime'
    id: 'Int'
    meeting: 'Meeting'
    meetingId: 'Int'
    requestEmail: 'String'
  }
  User: { // field return type name
    email: 'String'
    id: 'String'
    meetings: 'Meeting'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    confrimRequest: { // args
      confirm: boolean; // Boolean!
      requestId: number; // Int!
    }
    createMeeting: { // args
      authorEmail: string; // String!
      category: string; // String!
      location: string; // String!
      meetingDate: string; // String!
      title: string; // String!
    }
    deleteRequest: { // args
      requestEmail: string; // String!
      requestId: number; // Int!
    }
    requestMeeting: { // args
      meetingId: number; // Int!
      requestEmail: string; // String!
    }
  }
  Query: {
    myMeeting: { // args
      userEmail: string; // String!
    }
    myMeetings: { // args
      date: string; // String!
      userEmail: string; // String!
    }
    searchMeetings: { // args
      searchword: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}