# manatime_test

Ce site Web de gestion de données permet d'ajouter des données dynamiquement à un tableau et de les afficher de manière cohérente. Le formulaire d'ajout de données suit certaines contraintes et propose des fonctionnalités spécifiques pour garantir l'intégrité des données.

En comparaison, Vercel est une plateforme d'hébergement offrant des fonctionnalités plus avancées que GitHub Pages. Elle inclut notamment la prise en charge d'applications web dynamiques. Vercel se distingue par son environnement de déploiement automatisé et continu, en faisant un choix adapté aux projets plus complexes. De plus, Vercel propose des options de personnalisation plus avancées pour vos environnements de développement. Il convient aussi bien aux projets statiques qu'aux projets dynamiques.

Il est essentiel de noter que Vercel peut être utilisé en collaboration avec des dépôts GitHub, vous permettant d'héberger votre projet sur GitHub tout en utilisant Vercel pour le déploiement. Cette combinaison offre les avantages des deux services

1. Le formulaire d'ajout de données du site permet de choisir un utilisateur parmi une liste déroulante prédéfinie, de saisir une catégorie avec une mise en évidence en orange pour "Congés payés" et en violet pour toute autre catégorie, de sélectionner une période avec affichage de l'année uniquement dans le tableau, et d'entrer un nombre entier pour le solde, automatiquement converti en 0 en cas de valeur négative

2. Le site Web stocke temporairement les données en utilisant le localStorage, permettant de conserver les informations localement sur le navigateur, assurant que vos données restent enregistrées sur votre appareil même après avoir quitté le site ou actualisé la page

3.Le site offre des fonctionnalités pour la gestion des données. Vous pouvez ajouter de nouvelles données en remplissant le formulaire et en cliquant sur le bouton "Ajouter". Le site effectue une vérification pour garantir qu'une clé unique est formée par l'utilisateur, la catégorie et la période avant d'intégrer les données au tableau. Si vous créez un nouvel utilisateur et qu'une clé identique existe déjà, une alerte s'affichera pour vous en avertir. De plus, chaque ligne du tableau est accompagnée d'un bouton rouge qui permet la suppression de la ligne correspondante, facilitant ainsi la gestion de vos données.

4. Design : L'ajout d'un bouton en bas à droite de l'application pour afficher le formulaire d'ajout a été effectué en respectant les directives de taille correspondant à la résolution de l'écran (1920x1080). Parallèlement, l'intégration d'ESLint, un outil de linting (analyse statique de code), a été réalisée pour garantir la qualité du code du projet en s'assurant de sa conformité aux normes et aux règles de style prédéfinies.
