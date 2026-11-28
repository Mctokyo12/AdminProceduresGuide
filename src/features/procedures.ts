import type { Procedure } from '@/types/procedure';
import{
  ImportContacts,
  Policy,
  ErrorOutline,
  AssignmentInd,
} from 'google-material-icons/outlined';

import {IdCard} from 'lucide-react-native';

export const procedures: Procedure[] = [
  {
    id: 'birth-certificate',
    title: 'Acte de naissance',
    icon: AssignmentInd,
    category: 'État civil',
    cost: 'Gratuit',
    duration: 'Immédiat à 72h',
    location: 'Centre d’état civil',
    requirements: ['Déclaration', 'Pièces du déclarant'],
    steps: ['Déclarer', 'Vérifier', 'Retirer'],
    sources: ['BUNEC', 'Mairie'],
    verifiedAt: '2025-01-05',
    version: '2025.1',
  },
  {
    id: 'national-id',
    title: 'Carte nationale d’identité',
    icon: IdCard,
    category: 'Identité',
    cost: '2 800 FCFA',
    duration: '15 à 30 jours',
    location: 'Délégation départementale',
    requirements: ['Acte de naissance', 'Photo', 'Fiche de signalement'],
    steps: ['Pré-enrôler', 'Prendre rendez-vous', 'Retirer'],
    sources: ['DGSN'],
    verifiedAt: '2025-02-12',
    version: '2025.1',
  },
  {
    id: 'passport',
    title: 'Passeport ordinaire',
    icon: ImportContacts,
    category: 'Voyage',
    cost: '110 000 FCFA',
    duration: '48 heures',
    location: 'Centre d’enrôlement',
    requirements: ['CNI', 'Acte de naissance', 'Imprimé'],
    steps: ['Pré-enrôler', 'Payer', 'Enrôler'],
    sources: ['Police DGSN'],
    verifiedAt: '2025-02-10',
    version: '2025.1',
  },
];
