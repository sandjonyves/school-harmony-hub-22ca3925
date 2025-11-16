import React, { useState } from 'react';
import { FileText, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

type GenerationType = 'annee' | 'classe' | 'eleve';

export const BulletinsPage: React.FC = () => {
  const [generationType, setGenerationType] = useState<GenerationType>('classe');

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Génération des Bulletins</h2>

      <div className="bg-card rounded-lg shadow-sm border p-6">
        {/* Type de génération */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-3">
            Type de génération
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => setGenerationType('annee')}
              className={`px-4 py-2 rounded-md transition-colors ${
                generationType === 'annee'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Par année scolaire
            </button>
            <button
              onClick={() => setGenerationType('classe')}
              className={`px-4 py-2 rounded-md transition-colors ${
                generationType === 'classe'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Par classe
            </button>
            <button
              onClick={() => setGenerationType('eleve')}
              className={`px-4 py-2 rounded-md transition-colors ${
                generationType === 'eleve'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Pour un élève
            </button>
          </div>
        </div>

        {/* Filtres */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Année scolaire
            </label>
            <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground">
              <option>2024-2025</option>
              <option>2023-2024</option>
              <option>2022-2023</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Trimestre
            </label>
            <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground">
              <option>Trimestre 1</option>
              <option>Trimestre 2</option>
              <option>Trimestre 3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Classe
            </label>
            <select 
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              disabled={generationType === 'annee'}
            >
              <option>Toutes les classes</option>
              <option>CM2 A</option>
              <option>CM2 B</option>
              <option>CM1 A</option>
              <option>CE2 A</option>
            </select>
          </div>
        </div>

        {/* Sélection élève si nécessaire */}
        {generationType === 'eleve' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Sélectionner un élève
            </label>
            <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground">
              <option value="">Choisir un élève...</option>
              <option>Kamga Jean - CM2 A</option>
              <option>Ngo Bik Marie - CE2 B</option>
              <option>Fouda Paul - CM1 A</option>
            </select>
          </div>
        )}

        {/* Description selon le type */}
        <div className="bg-muted/30 border border-border rounded-md p-4 mb-6">
          <p className="text-sm text-muted-foreground">
            {generationType === 'annee' && (
              <>
                <strong>Génération par année :</strong> Tous les bulletins de toutes les classes pour l'année scolaire sélectionnée seront générés.
              </>
            )}
            {generationType === 'classe' && (
              <>
                <strong>Génération par classe :</strong> Les bulletins de tous les élèves de la classe sélectionnée seront générés pour le trimestre choisi.
              </>
            )}
            {generationType === 'eleve' && (
              <>
                <strong>Génération individuelle :</strong> Le bulletin de l'élève sélectionné sera généré pour le trimestre choisi.
              </>
            )}
          </p>
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-3">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <FileText className="w-4 h-4 mr-2" />
            Générer les bulletins (PDF)
          </Button>
          <Button variant="outline" className="border-stats-green text-stats-green hover:bg-stats-green/10">
            <Eye className="w-4 h-4 mr-2" />
            Aperçu
          </Button>
        </div>
      </div>
    </div>
  );
};
