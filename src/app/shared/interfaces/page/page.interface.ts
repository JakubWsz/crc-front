export interface PageInterface {
  "totalElements": number;
  "totalPages": number;
  "numberOfElements": number;
  "first": boolean;
  "pageable": {
    "pageSize": number;
    "pageNumber": number;
    "paged": boolean;
    "unpaged": boolean;
    "offset": number;
    "sort": {
      "sorted": boolean;
      "unsorted": boolean;
    }
  },
  "last": boolean;
  "number": number;
  "size": number;
  "sort": {
    "sorted": boolean;
    "unsorted": boolean;
  }
}
