export interface DocNumberingSystem {
    name_format: string;
    name_separator: string;
    version_initial_value: string;
    version_increment_value: number;
    revision_initial_value: string;
    revision_increment_value: number;
}