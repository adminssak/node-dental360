import { DocStatus } from './doc-status.enum';
export interface BusinessUnit {
    abbreviation: string;
}

export interface Department {
    abbreviation: string;
}

export interface SubDepartment {
    abbreviation: string;
}

export interface DocumentLevel {
    name: string;
}

export interface DocumentSubLevel {
    name: string;
}

export interface DocumentType {
    name: string;
}

export interface Document {
    id: string;
    business_unit: BusinessUnit;
    status?: DocStatus;
    department: Department;
    sub_department_id: string;
    department_id: string;
    sub_department: SubDepartment;
    generated_name: any;
    document_level: DocumentLevel;
    document_sub_level: DocumentSubLevel;
    document_type: DocumentType;
    current_version_revision: any;
    document_type_id: string;
    document_change_nomenclature_id: string;
}