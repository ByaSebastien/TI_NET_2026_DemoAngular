## Exercice : Cart (Input / Output)

### 1. Créer la page `Cart`

- Elle affiche la liste des produits, chacun avec un bouton « Ajouter au panier ».
- Elle contient le panier, sous forme de liste de `CartLine` (un modèle regroupant un produit et sa quantité).
- C'est elle qui gère l'état du panier.

### 2. Créer un sous-composant pour le panier

- Il reçoit la liste des `CartLine` en **input**.
- Pour chaque ligne, il affiche 3 boutons : `-`, `+` et `X`.
- Ces boutons émettent en **output** l'intention de l'utilisateur vers le composant parent (`Cart`) :
    - `-` diminue la quantité ;
    - `+` augmente la quantité ;
    - `X` supprime la ligne.

### 3. Règles métier

- Si la quantité tombe à 0 après un `-`, la ligne est supprimée.
- Si on ajoute un produit déjà présent dans le panier, on incrémente sa quantité au lieu de créer une nouvelle ligne.

### Bonus

- Afficher en permanence le montant total du panier, à l'aide d'un `computed()` (signal).
