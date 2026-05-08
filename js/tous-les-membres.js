/**
 * ============================================================
 *  OPValue+ — Agrégateur de membres
 *  Ce fichier centralise tous les profils individuels dans un
 *  tableau TOUS_LES_MEMBRES, utilisé par les pages du site.
 *
 *  INSTRUCTIONS :
 *  - Pour ajouter un membre : créez son fichier dans membres/
 *    et ajoutez-le dans le tableau ci-dessous.
 *  - Pour retirer un membre : supprimez sa ligne du tableau
 *    et retirez le <script> correspondant dans les pages HTML.
 * ============================================================
 */

// Chaque fichier membre (chargé avant celui-ci) définit MEMBRE_DATA.
// On les collecte ici via les scripts individuels.
// Approche : chaque fichier membre pousse ses données dans ce tableau.

const TOUS_LES_MEMBRES = [];

/**
 * Appelé par chaque fichier membre pour s'enregistrer
 */
function enregistrerMembre(data) {
  TOUS_LES_MEMBRES.push(data);
}
