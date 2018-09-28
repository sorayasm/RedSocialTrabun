interface RootObject {
    type: string;
    name: string;
    features: Feature[];
  }

  interface Feature {
    id: number;
    type: string;
    geometry: Geometry;
    properties: Properties;
  }

  interface Properties {
    documentname: string;
    turismdescription: string;
    templatetype: string;
    locality?: string;
    marks?: string;
    gastronomytype: string;
    municipality?: string;
    municipalitycode: string;
    territory: string;
    territorycode: string;
    country: string;
    countrycode: string;
    friendlyurl: string;
    physicalurl: string;
    dataxml: string;
    metadataxml: string;
    zipfile: string;
  }

  interface Geometry {
    type: string;
    coordinates: number[];
  }
