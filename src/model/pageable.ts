export interface PageableResponse<T> {
    content: T[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    sort: PageableSort;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    empty: boolean
}

export interface Pageable {
    sort?: PageableSort;
    pageSize?: number;
    page?: number;
    offset?: number;
    paged?: boolean;
    unpaged?: boolean;
    size?: number;
}

export interface PageableSort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
