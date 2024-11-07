

// Changement de l'introduction lorsque la taille de l'écran correspond à celle d'un ordinateur et actualisation de la page
let initialWidth = window.innerWidth;
function changeParagraphContent() {
    var width = window.innerWidth;
    var paragraph = document.getElementById('intro_content');
    if (width > 850) {
        paragraph.innerHTML =`<p>Dans un monde moderne en constante évolution, les maladies chroniques et infectieuses continuent 
        d'affecter un nombre croissant de personnes, impactant significativement la qualité de la vie des individus et des communautés.
        Face à l'augmentation des <a class="links" href="#mal_car">maladies cardiovasculaires</a>, des 
        <a class="links" href="#mal_inf">maladies infectieuses</a>, des <a class="links" href="#com_neo">complications néonatales</a>, 
        des <a class="links" href="#inf_res">infections respiratoires</a>,
        des <a class="links" href="#can">cancers</a>, du <a class="links" href="#dia">diabète</a> et des 
        <a class="links" href="#tro_dig">troubles digestifs</a>, une compréhension approfondie de ces affections est essentielle
        pour adopter des approches préventives et curatives efficaces. Ce site est conçu pour vous guider à travers les différentes 
        facettes de ces pathologies, en mettant l'accent sur la prévention, les symptômes et les traitements disponibles.  
        </p>
        
        <p>En plus des grandes maladies chroniques, nous explorons également des affections spécifiques souvent sous-estimées mais
        tout aussi invalidantes. La <a class="links" href="#sin">sinusite chronique</a>, les <a class="links" href="#hem">hémorroïdes</a>,
        les <a class="links" href="#her">hernies</a>, et l'<a class="links" href="#acn">acné</a>, bien que considérées
        comme mineures par certains, peuvent grandement affecter le quotidien de ceux qui en souffrent. De même, des pathologies
        comme la <a class="links" href="#alz">maladie  d'Alzheimer</a> représentent un véritable défi pour les familles et
        les systèmes de santé du monde entier, étant donner leur impact dévastateur sur la mémoire, les capacités cognitives et
        l'autonomie des personnes touchées.
        </p>

        <p>La prévention occupe une place importante dans la lutte contre ces maladies. Que ce soit à travers des modifications 
        des habitudes des vie, comme l'alimentation équilibrée, l'exercice physique régulier et la gestion du stress, ou par des 
        actions médicales préventives comme les dépistages réguliers et les vaccinations, chaque étape compte pour réduire les 
        risques de développer ces pathologies.</p>

        <p>Ce site ambitionne donc de fournir des informations fiables, des conseils pratiques et des ressources essentielles pour
        comprendre ces maladies et adopter des stratégies efficaces pour les prévenir et les gérer. Il est également important de
        reconnaître que la santé globale implique une responsabilité partagée entre l'individu et les professionnels de santé, et que chaque
        effort en matière de prévention et de traitement peut contribuer à améliorer la qualité de la vie à long terme.
        </p>`;    
    }
}
// Appel initial lorsque la page est chargée
changeParagraphContent();
// Mettre à jour le contenu en cas de redimentionnement de la fenêtre
window.addEventListener('resize', function() {
    // Actualisation de la page si la largeur change de manière significative par exemple plus de 100px
    if (Math.abs(window.innerWidth - initialWidth) > 100) {
    location.reload();
    }
});



// Script pour fermer le menu au clic hors de l'icône humberger a

// Récupération des éléménts
const menuButton = document.getElementById('menu_button');
const menuItems = document.getElementById('menu_items');
const body = document.body;
// Fonction pour afficher le menu déroulant et l'overlay en ajoutant la 'class="menu_open"' à la balise 'body'
function toggleMenu() {
    body.classList.toggle('menu_open');
}
// Fonction pour fermer le menu lorsqu'on clic en dehors du menu en retirant la 'class="menu_open"' à la balise 'body
function closeMenu(event) {
    if (! menuItems.contains(event.target) && ! menuButton.contains(event.target)) {
        document.body.classList.remove('menu_open');
    }
}
// Ajout d'un événement pour la fonction toggleMenu
menuButton.addEventListener('click', toggleMenu);
// Ajout d'un événement de clic sur le document pour détecter les clics hors du menu
document.addEventListener('click', closeMenu);

// Fonction pour fermer le menu lorsqu'on clique sur les éléments du menu principal
function closeMenuOnItemClick() {
    document.body.classList.remove('menu_open');
}
menuItems.querySelectorAll('li a').forEach(item => {
    item.addEventListener('click', closeMenuOnItemClick);
});