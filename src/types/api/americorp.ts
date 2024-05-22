export interface ApiCorpResponse {
  volunteerMatchAPI: VolunteerMatchApi;
  npsAPI: NpsApi;
}

interface VolunteerMatchApi {
  data: Data;
}

interface Data {
  searchOpportunities: SearchOpportunities;
}

interface SearchOpportunities {
  resultsSize: number;
  currentPage: number;
  numberOfResults: number;
  opportunities: Opportunity[];
}

interface Opportunity {
  id: number;
  title: string;
  description: string;
  plaintextDescription: string;
  categories: string[];
  datePosted: string;
  skillsNeeded: string;
  greatFor: string[];
  redirectUrl: any;
  connectionType?: string;
  url: string;
  requirements: Requirements;
  dateRange: DateRange;
  location: Location;
  parentOrg: ParentOrg;
}

interface Requirements {
  bgCheck: boolean;
  drLicense: boolean;
  minimumAge: number;
  orientation: boolean;
}

interface DateRange {
  startDate?: string;
  ongoing: boolean;
}

interface Location {
  city?: string;
  country?: string;
  virtual: boolean;
  postalCode?: string;
}

interface ParentOrg {
  name: string;
  plaintextDescription: string;
  mission: string;
  id: number;
  location: Location2;
}

interface Location2 {
  street1: string;
  city: string;
  country: string;
  postalCode: string;
}

interface NpsApi {
  records: any[];
}
