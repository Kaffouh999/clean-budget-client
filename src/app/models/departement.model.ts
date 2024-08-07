export interface DepartementDTO {
    id?: number;
    nom: string;
    description?: string;
    email?: string;
    telephone?: string;
    adresse?: string;
    localisation?: string;
    departementParent?: DepartementDTO;
}