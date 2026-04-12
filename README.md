Cahier des charges Front-End — Site web RiseManager

1. Présentation du projet

1.1 Nom du projet

Site web marketing / commercial de RiseManager

1.2 Finalité du site

Créer un site web de présentation haut de gamme pour RiseManager, destiné à convertir les visiteurs en :

utilisateurs d’essai gratuit,
demandes de démonstration,
prospects qualifiés.
Le site doit présenter RiseManager comme une solution sérieuse, puissante et concrète pour les e-commerçants, avec un angle fort sur :

la gestion opérationnelle,
la gestion du stock,
le contrôle des équipes,
la logistique,
la rentabilité réelle,
l’adaptation au marché algérien.
1.3 Objectifs business

Le site doit permettre de :

donner une image premium et solide du produit,
expliquer clairement la proposition de valeur,
rassurer les visiteurs,
démontrer la supériorité de RiseManager face aux méthodes manuelles ou bricolées,
générer des conversions.
2. Cible du site

Le site s’adresse principalement à :

e-commerçants algériens,
boutiques e-commerce en croissance,
structures gérant du volume,
équipes de confirmation,
activités ayant besoin de suivre commandes, stock, logistique et finances,
vendeurs chaussures / vêtements / produits à variantes,
entreprises travaillant avec livraison, COD et retours.
3. Positionnement à transmettre

Le site doit transmettre les idées suivantes :

RiseManager n’est pas un simple outil,
RiseManager centralise toute l’activité,
RiseManager donne un contrôle réel,
RiseManager remplace les systèmes désorganisés,
RiseManager est pensé pour la réalité du terrain,
RiseManager permet de voir la rentabilité réelle.
3.1 Ton visuel recherché

premium,
technologique,
propre,
net,
fluide,
sérieux,
rassurant.
3.2 À éviter

design trop chargé,
design trop “startup générique”,
animations inutiles,
promesses vagues,
effet “joli mais vide”.
4. Périmètre du travail front-end

Le développeur front-end devra réaliser :

l’intégration complète du site,
les pages marketing principales,
la navigation responsive,
les animations légères,
les composants UI réutilisables,
les formulaires,
la compatibilité mobile / tablette / desktop,
l’optimisation de performance de base,
la préparation SEO technique de base,
la préparation tracking marketing.
5. Arborescence du site

Le site devra contenir au minimum les pages suivantes :

5.1 Pages principales

Accueil
Fonctionnalités
Tarifs
Écosystème Rise
Démo / Réserver une présentation
FAQ
Contact
5.2 Pages secondaires

Mentions légales
Politique de confidentialité
Conditions d’utilisation
5.3 Pages optionnelles recommandées

Landing page E-commerce débutant
Landing page Gros volume
Landing page Mode / Chaussures / Vêtements
Landing page Équipe / Confirmation / COD
6. Structure détaillée de la page d’accueil

6.1 Header

Objectif

Permettre une navigation claire, rapide, professionnelle, avec CTA visible en permanence.

Éléments à intégrer

logo RiseManager à gauche,
menu principal,
bouton CTA principal,
sélecteur de langue,
version mobile avec menu burger.
Menu principal

Accueil
Fonctionnalités
Tarifs
Écosystème
FAQ
Contact
Dropdown “Solutions” ou “Fonctionnalités”

Le menu devra pouvoir afficher un dropdown avec icônes et mini descriptions :

Gestion des commandes
Gestion de stock
Logistique
Confirmation
Suivi des équipes
Finances
Analytics
Blacklist
Dropdown “Écosystème”

RiseCart
RiseConfirm
FBR
RiseAcademy
RisePay (prévoir la structure même si non finalisé)
CTA header

Bouton principal :
Démarrer l’essai gratuit

Comportement attendu

header sticky au scroll,
fond semi-transparent avec blur,
réduction légère de hauteur au scroll,
état hover clair sur liens et boutons,
animation légère sur CTA.
Responsive

Desktop : menu horizontal complet
Tablette : menu simplifié
Mobile : burger menu + CTA visible
6.2 Hero Section

Objectif

Faire comprendre immédiatement :

ce qu’est RiseManager,
pour qui,
quel problème il résout,
quelle action le visiteur doit faire.
Structure

Bloc gauche

H1
H2
CTA principal
CTA secondaire
liste rapide des bénéfices
mini trust signals
Bloc droit

visuel principal du dashboard RiseManager
mockup desktop + mobile
cartes flottantes animées
profondeur légère / parallaxe subtile
Texte recommandé

H1

Pilote ton e-commerce avec un vrai système. Pas avec des fichiers dispersés.

H2

RiseManager centralise commandes, stock, logistique, équipe et rentabilité dans une seule interface pensée pour le terrain algérien.

CTA

Démarrer l’essai gratuit
Voir une démo
Points de réassurance sous CTA

Sans carte bancaire
Mise en route rapide
Support basé en Algérie
Animation / comportement

entrée progressive du texte,
micro-animation sur les cartes flottantes,
parallaxe légère sur les visuels,
aucune animation lourde.
6.3 Section problème / douleur

Objectif

Faire ressentir le problème actuel du prospect avant de vendre la solution.

Titre

Beaucoup pilotent encore leur activité à l’aveugle.

Sous-titre

Commandes dispersées, stock approximatif, équipes peu suivies, marges floues, retours mal contrôlés.

Structure visuelle

Comparatif en deux colonnes :

Colonne 1 : Sans RiseManager

Style plus terne / noir et blanc / flou léger
Éléments à montrer :

fichiers Excel,
notes manuelles,
commandes mal suivies,
point d’interrogation sur la marge,
retours non maîtrisés,
équipe non mesurée.
Colonne 2 : Avec RiseManager

Style net / coloré / structuré
Éléments à montrer :

dashboard clair,
KPIs visibles,
stock à jour,
statut des commandes,
profit net clair,
équipes suivies.
Message de transition

Arrête de deviner ton activité. Commence à la mesurer proprement.

6.4 Section preuve / chiffres / impact visuel

Objectif

Installer immédiatement la crédibilité du produit.

Format

Bloc de 4 à 6 cartes statistiques.

Exemples de cartes

Commandes suivies
Variantes produit gérées
Temps gagné
Retours tracés
Agents suivis
Rentabilité calculée en temps réel
Comportement

animated counters au scroll,
apparition progressive,
chiffres lisibles sur mobile.
6.5 Section fonctionnalités principales

Cette section doit être développée sous forme de blocs visuels détaillés, pas comme une simple liste d’icônes.

6.5.1 Bloc : Gestion des commandes

Objectif

Montrer que RiseManager est le centre de contrôle des commandes.

Contenu fonctionnel à mettre en avant

liste des commandes,
filtres avancés,
recherche,
statuts,
assignation,
historique,
actions de masse,
notes,
suivi détaillé.
Message clé

Chaque commande a un statut, un historique et une logique.

Visuel attendu

Tableau de commandes avec :

statuts colorés,
filtres,
vue détail latérale,
champs de recherche.
6.5.2 Bloc : Gestion de stock 2.0

Objectif

Montrer la puissance sur les variantes et la précision.

Contenu fonctionnel

produits,
variantes,
tailles,
pointures,
couleurs,
stock disponible,
stock réservé,
stock en retour,
alertes stock faible,
mouvements de stock,
inventaire.
Message clé

Une variante n’est pas un détail. C’est une unité de vérité.

Cas concret à afficher

Exemple produit :

Basket modèle X
Pointure 42
Couleur noire
7 disponibles
2 réservées
1 retour attendu
6.5.3 Bloc : Logistique et retours

Objectif

Montrer que le système suit le réel terrain.

Contenu fonctionnel

préparation de commande,
scan barcode,
scan retour,
réception au dépôt,
statut retour reçu / non reçu,
réintégration stock,
historique logistique.
Message clé

Chaque scan met le système face à la réalité.

Concept visuel

Le scan de la vérité

Visuel attendu

Interface scan avec :

code-barres,
statut colis,
horodatage,
nom agent,
dépôt concerné,
action effectuée.
6.5.4 Bloc : Suivi des équipes

Objectif

Montrer que les performances humaines sont mesurées.

Contenu fonctionnel

suivi agents,
volume traité,
taux de confirmation,
taux de livraison,
productivité,
erreurs,
classement,
suivi des actions.
Message clé

Tu ne pilotes pas une équipe au ressenti. Tu la pilotes avec des chiffres.

Visuel attendu

Dashboard équipe avec :

tableau classement agents,
KPI individuels,
historique performance.
6.5.5 Bloc : Blacklist / gestion du risque

Objectif

Créer un gros levier différenciant.

Contenu fonctionnel

historique client,
commandes passées,
retours,
incidents,
score de risque,
alerte avant validation,
notes internes.
Message clé

Bloque les clients à risque avant qu’ils ne te coûtent de l’argent.

Visuel attendu

Fiche client avec :

badge risque,
historique commandes,
drapeaux d’alerte,
statut blacklist / surveillance.
6.5.6 Bloc : Finances / profit net réel

Objectif

C’est une des parties les plus fortes commercialement. Elle doit être visuelle et pédagogique.

Titre

Chaque dinar a une destination. Chaque fuite doit être visible.

Contenu fonctionnel

chiffre d’affaires,
coût produit,
coût pub,
coût livraison,
frais livreur,
taxes / frais annexes,
profit net réel,
suivi encaissement.
Démonstration visuelle souhaitée

Animation de décomposition :
Vente
→ coût produit
→ publicité
→ livraison
→ frais annexes
= profit net réel

Arguments à afficher

Traçabilité totale
Audit des frais de livraison
Rentabilité en temps réel
Intégration des dépenses publicitaires
Vision réelle de la marge
Bloc spécial à prévoir

Audit des frais de livraison
Le site doit avoir un sous-bloc dédié à ce point.

6.5.7 Bloc : Analytics / pilotage

Objectif

Montrer la capacité de lecture stratégique.

Contenu fonctionnel

évolution des ventes,
confirmation,
livraison,
retour,
performance agents,
produits rentables,
sources publicitaires,
comparaisons par période.
Message clé

Ce que tu ne mesures pas finit toujours par te coûter cher.

Visuel attendu

Dashboard analytics avec :

graphiques,
cartes KPI,
filtres date,
comparatifs.
6.6 Section différenciation

Objectif

Expliquer clairement pourquoi RiseManager est différent.

Titre

Pourquoi RiseManager n’est pas un simple outil de gestion

Format

Grille de 4 à 6 blocs.

Éléments à mettre

pensé pour le marché algérien,
conçu pour le COD,
relie opérations + stock + équipe + finances,
suit le terrain réel,
support local,
construit pour des opérateurs, pas pour faire joli.
6.7 Section écosystème Rise

Objectif

Montrer que RiseManager s’intègre dans une vision plus large.

Format

Schéma ou bandeau de modules connectés.

Modules à afficher

RiseManager
RiseCart
RiseConfirm
FBR
RiseAcademy
RisePay
Message clé

Tu n’achètes pas juste un logiciel. Tu rentres dans une infrastructure.

6.8 Section cas d’usage

Objectif

Aider le visiteur à se reconnaître.

Cartes à prévoir

Débutant e-commerce
Boutique en croissance
Équipe de confirmation
Gros volume
Chaussures / vêtements
Activité avec beaucoup de retours
Contenu de chaque carte

problème type,
solution RiseManager,
bénéfice concret.
6.9 Section démo produit

Objectif

Montrer l’interface concrètement.

Formats acceptables

carrousel d’écrans,
tabs par module,
vidéo démo,
mockup interactif.
Écrans à prévoir

Dashboard
Commandes
Stock
Clients
Finances
Analytics
Blacklist
6.10 Section témoignages / réassurance

Objectif

Créer de la confiance.

Éléments à prévoir

témoignages clients,
logos clients,
résultats observés,
citations courtes.
Même si tout n’est pas rempli au début, le composant doit exister.

6.11 Section FAQ

Objectif

Lever les objections principales.

Format

Accordéon.

Questions à prévoir

Est-ce que RiseManager est adapté au marché algérien ?
Est-ce que je peux gérer plusieurs agents ?
Est-ce que le système gère les retours ?
Est-ce que je peux voir ma vraie rentabilité ?
Est-ce que RiseManager remplace Excel ?
Est-ce qu’il y a un essai gratuit ?
Est-ce qu’il y a un accompagnement ?
Est-ce que RiseManager fonctionne avec les autres services Rise ?
6.12 CTA final

Objectif

Fermer la page avec une intention de conversion.

Titre

Arrête de subir ton activité. Reprends le contrôle.

Boutons

Démarrer l’essai gratuit
Réserver une démo
Éléments de rassurance

mise en route rapide,
support local,
accompagnement,
essai sans engagement.
6.13 Footer

Contenu obligatoire

logo RiseManager,
description courte,
liens rapides,
liens écosystème,
contact,
réseaux sociaux,
mentions légales,
politique confidentialité,
conditions d’utilisation.
Trust signals

intégrations natives,
support basé en Algérie,
données sécurisées,
infrastructure sérieuse.
7. Page Fonctionnalités

7.1 Objectif

Détailler les modules du produit plus profondément que sur la home.

7.2 Structure attendue

hero court,
navigation secondaire ou sommaire,
section détaillée par module,
visuels ou mockups pour chaque module,
CTA intermédiaires,
CTA finale.
7.3 Modules à détailler

Commandes
Stock
Logistique
Confirmation
Clients
Équipe
Finances
Analytics
Blacklist
7.4 Structure d’un bloc module

Chaque module devra contenir :

le problème,
la solution proposée,
les bénéfices,
un visuel interface,
un CTA contextuel.
8. Page Tarifs

8.1 Objectif

Présenter clairement les offres et pousser à l’essai ou à la démo.

8.2 Structure attendue

titre clair,
sous-titre,
cartes tarifaires,
tableau comparatif,
sélecteur volume si nécessaire,
FAQ pricing,
CTA.
8.3 Composants à prévoir

pricing cards,
plan recommandé mis en avant,
toggle mensuel / annuel si utile,
tooltip explicatif,
tableau comparatif détaillé,
sélecteur du nombre de commandes.
8.4 Contraintes UX

lecture rapide,
montée en gamme claire,
aucune confusion entre plans.
9. Page Écosystème Rise

9.1 Objectif

Montrer l’interconnexion entre les solutions.

9.2 Structure

hero,
vue d’ensemble,
présentation de chaque module,
liens de connexion entre modules,
cas d’usage,
CTA.
10. Page Démo / Réservation

10.1 Objectif

Convertir les visiteurs chauds.

10.2 Contenu

texte de réassurance,
bénéfices d’une démo,
formulaire,
éventuellement prise de rendez-vous.
10.3 Champs du formulaire

nom
prénom
téléphone
entreprise
nombre de commandes mensuelles
outil actuel
besoin principal
10.4 Exigences UX

formulaire simple,
validation claire,
messages d’erreur visibles,
confirmation après envoi.
11. Page FAQ

11.1 Objectif

Réduire les objections.

11.2 Format

liste d’accordéons,
navigation simple,
possibilité de lien vers contact ou démo.
12. Page Contact

12.1 Contenu

formulaire,
coordonnées,
support,
localisation,
horaires si besoin.
13. Design system / UI

13.1 Identité visuelle

Le site doit avoir une identité premium et technologique.

13.2 Éléments à définir et respecter

couleurs principales,
couleurs secondaires,
couleurs d’état,
typographie,
rayons de bordure,
espacements,
ombres,
tailles de boutons,
styles de cartes.
13.3 Composants à créer

boutons primaire / secondaire / ghost,
cards,
badges,
dropdowns,
accordéons,
tabs,
tableaux,
formulaires,
counters,
modales,
toasts,
tooltips,
sliders / carrousels.
14. Responsive design

14.1 Compatibilité attendue

mobile,
tablette,
desktop,
large desktop.
14.2 Exigences

aucun débordement horizontal,
textes lisibles,
boutons facilement cliquables,
tableaux adaptés,
menus adaptés,
carrousels utilisables au doigt,
espacement cohérent.
15. Animations et micro-interactions

15.1 Objectif

Donner de la vie sans nuire à la clarté ni à la performance.

15.2 Animations autorisées

fade-in au scroll,
hover sur cartes,
hover sur boutons,
animated counters,
transitions dropdown,
parallaxe légère hero,
transitions entre tabs,
animations discrètes sur mockups.
15.3 Interdictions

animations trop lentes,
effets 3D lourds,
mouvements excessifs,
scroll janky,
éléments qui gênent la lecture.
16. Performance

16.1 Exigences minimales

chargement rapide,
images optimisées,
lazy loading,
compression adaptée,
vidéos légères,
animations non bloquantes,
code propre.
16.2 Objectif

Le site doit donner une impression immédiate de fluidité et de maîtrise.

17. SEO technique

17.1 À prévoir sur toutes les pages

balise title,
meta description,
H1 unique,
hiérarchie H2/H3 propre,
URLs propres,
attributs alt sur images,
balises Open Graph,
structure sémantique correcte.
18. Tracking marketing

18.1 Le front doit être prêt à intégrer

Google Analytics
Meta Pixel
autres scripts marketing si besoin
18.2 Événements à prévoir

clic sur CTA hero,
clic sur CTA final,
ouverture formulaire,
soumission formulaire,
scroll important,
clics menu,
clics plans tarifaires,
interaction avec comparateurs,
interaction avec carrousel produit.
19. Accessibilité

19.1 Exigences minimales

contrastes corrects,
états focus visibles,
labels sur champs,
navigation clavier correcte,
boutons accessibles,
structure sémantique propre.
20. Contenus administrables facilement

Le front doit être conçu pour que les éléments suivants soient faciles à modifier :

titres,
sous-titres,
CTA,
chiffres,
témoignages,
logos,
tarifs,
FAQ,
captures produit.
21. Technologies / contraintes de développement

À adapter selon ta stack, mais le dev doit fournir un front :

propre,
modulaire,
maintenable,
facilement extensible.
Il faut privilégier :

composants réutilisables,
structure claire,
gestion propre des sections et variantes.
22. Livrables attendus

Le développeur front-end devra livrer :

le site responsive complet,
toutes les pages définies dans ce cahier des charges,
les composants UI réutilisables,
les animations intégrées,
les formulaires fonctionnels,
la version FR,
une structure prête pour version AR,
l’intégration SEO de base,
la structure tracking prête,
une base propre pour évolution future.
23. Critères de validation

Le projet front ne sera considéré comme validé que si :

le rendu est propre sur mobile et desktop,
les CTA sont bien visibles,
la navigation est fluide,
les sections sont cohérentes,
les animations restent légères,
le site charge vite,
les formulaires fonctionnent,
la hiérarchie visuelle est claire,
la proposition de valeur est compréhensible en moins de 10 secondes,
le site donne une impression premium et solide.
24. Recommandations stratégiques au dev

Le site ne doit pas être juste beau.
Il doit convertir.

L’ordre de lecture doit être :

comprendre le produit,
ressentir le problème,
voir la solution,
comprendre les bénéfices,
être rassuré,
passer à l’action.
25. Priorité de réalisation recommandée

Ordre conseillé pour le développement :

Phase 1

Header
Hero
Section problème
Section fonctionnalités principales
CTA final
Footer
Phase 2

Page Tarifs
Page Fonctionnalités
Page Démo
FAQ
Phase 3

Page Écosystème
Landing pages ciblées
Témoignages avancés
Optimisations de conversion
26. Conclusion

Le site RiseManager doit être conçu comme un véritable outil commercial, pas comme une simple vitrine.
Le front-end doit rendre la solution :

claire,
crédible,
désirable,
concrète,
orientée conversion.#   r i s e m a n a g e r  
 