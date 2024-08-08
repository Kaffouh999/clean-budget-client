import { Departement } from "./departement.model";

export interface Employe {
    id?: number;
    nom: string;
    prenom: string;
    numeroCIN?: string;
    age?: number; // Min 18, Max 100
    telephone?: string;
    poste?: string;
    email: string;
    supprime: boolean;
    departement?: Departement;
}