export interface SessionVariables {
    'x-hasura-role': string;
}

export interface OldProductVariant {
    thumbnail_image: string;
    actual_price: number;
    selling_price: number;
    status: string;
    short_info: string;
    specifications: string;
    product_id: string;
    name: string;
    updated_at: Date;
    attributes: string;
    details: string;
    created_at: Date;
    id: string;
    available_stock: number;
}

export interface NewProductVariant {
    thumbnail_image: string;
    actual_price: number;
    selling_price: number;
    status: string;
    short_info: string;
    specifications: string;
    product_id: string;
    name: string;
    updated_at: Date;
    attributes: string;
    details: string;
    created_at: Date;
    id: string;
    available_stock: number;
}

export interface Data {
    old: OldProductVariant;
    new: NewProductVariant;
}

export interface Event {
    session_variables: SessionVariables;
    op: string;
    data: Data;
}

export interface DeliveryInfo {
    max_retries: number;
    current_retry: number;
}

export interface Trigger {
    name: string;
}

export interface Table {
    schema: string;
    name: string;
}

export interface Event {
    event: Event;
    created_at: Date;
    id: string;
    delivery_info: DeliveryInfo;
    trigger: Trigger;
    table: Table;
}
