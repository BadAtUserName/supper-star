import cabbageRollImg from './img/14690-cabbage-roll-casserole-DDMFS-4x3-743625f5aa594c6696527ca955023e0e.webp';
import herbButterChicken from './img/Crockpot-Herb-Butter-Chicken-and-Wild-Rice-1-448x448.png'
import salmonAndLentils from './img/salmon-lentils-mustard-herb-butter-6x4.jpg.webp.png'

export const RECIPES = [
  {
    id: 0,
    name: "Crockpot Herb Butter Chicken and Wild Rice",
    description: "An easy and delicious slow cooker recipe that makes weeknight cooking easy, cozy, and delicious!",
    prepTime: "15 mins",
    cookTime: "6 hrs",
    totalTime: "6 hrs 15 mins",
    servings: 6,
    ingredients: [
      "1 1/2 cups wild rice blend",
      "1 yellow onion, chopped",
      "1 tablespoon dried parsley",
      "2 carrots, cut into 1 inch pieces",
      "1 cup sliced cremini mushrooms",
      "1 cup chopped celery",
      "2 tablespoons extra virgin olive oil",
      "kosher salt and black pepper",
      "3 1/2 cups low sodium chicken broth",
      "2 pounds boneless chicken breasts or thighs",
      "2 teaspoons dried thyme",
      "1 teaspoon dried rosemary",
      "1 teaspoon paprika",
      "1/4 teaspoon cayenne pepper",
      "6 cloves garlic, smashed",
      "4 tablespoons salted butter",
      "8 leaves fresh sage",
      "1 parmesan rind (optional)"
    ],
    instructions: [
      "In the bowl of your crockpot, combine the wild rice, onion, carrots, mushrooms, celery, and dried parsley. Season well with salt and pepper. Add 1 tablespoon olive oil and toss. Pour over the chicken broth.",
      "In a bowl, toss the chicken with 1 tablespoon olive oil, thyme, rosemary, paprika, cayenne, and season with salt and pepper. Place the chicken in the crockpot. Add the garlic cloves. If you have one, add a parmesan rind. Cover and cook on low for 5-6 hours or on high for 2-3 hours.",
      "Before serving, preheat the broiler to high. Remove the chicken and garlic from the crockpot and place on a baking sheet. Arrange the butter and sage around the chicken and garlic, then broil 1-3 minutes, until crisp. Peel away the garlic skin, then chop, and mix with the butter on the sheet pan. Toss the chicken in the butter.",
      "To serve, fluff the rice with a fork and serve the chicken, rice, and veggies together. If there is any butter left on the pan, drizzle it over the chicken."
    ],
    image: herbButterChicken,
  },
  {
    id: 1,
    name: "Salmon with Lentils and Mustard-Herb Butter",
    description: "Mustard-herb butter gives a lemony pop to the meatiness of the fish, while French green lentils add a unique texture.",
    prepTime: "10 mins",
    cookTime: "40 mins",
    totalTime: "50 mins",
    servings: 4,
    ingredients: [
      "5 tablespoons unsalted butter, softened",
      "1 tablespoon chopped chives",
      "1 teaspoon chopped tarragon",
      "2 teaspoons grainy mustard",
      "2 teaspoons fresh lemon juice",
      "1 cup French green lentils",
      "4 cups water",
      "2 medium leeks, chopped",
      "1 tablespoon unsalted butter",
      "1/2 to 1 tablespoon fresh lemon juice",
      "4 (6-ounce) pieces skinless salmon fillet",
      "2 tablespoons unsalted butter"
    ],
    instructions: [
      "Make mustard-herb butter: Stir together all ingredients with 1/4 teaspoon each of salt and pepper.",
      "Cook lentils: Bring lentils, water, and 3/4 teaspoon salt to a boil in a heavy medium saucepan, then reduce heat and simmer, uncovered, until lentils are just tender, 20 to 25 minutes. Remove from heat and let stand 5 minutes. Reserve 1/2 cup cooking liquid, then drain lentils.",
      "While lentils cook, chop leeks, then wash. Cook leeks in butter in a heavy medium skillet over medium-low heat, stirring occasionally, until softened, 6 to 8 minutes.",
      "Add lentils with reserved cooking liquid to leeks along with 3 tablespoons mustard-herb butter and cook, stirring, until lentils are heated through and butter is melted. Add lemon juice and salt and pepper to taste. Remove from heat and keep warm, covered.",
      "Sauté salmon while leeks cook: Pat salmon dry and sprinkle with 1/2 teaspoon salt and 1/4 teaspoon pepper (total).",
      "Heat butter in a large nonstick skillet over medium-high heat until foam subsides, then sauté salmon, turning once, until golden and just cooked through, 6 to 8 minutes total.",
      "Serve salmon, topped with remaining mustard-herb butter, over lentils."
    ], 
    image: salmonAndLentils,
  },
  {
    id: 2,
    name: "Cabbage Roll Casserole",
    description: "My cabbage roll casserole has all the ingredients of stuffed cabbage rolls but is a lot easier to make!",
    prepTime: "20 mins",
    cookTime: "1 hr 20 mins",
    totalTime: "1 hr 40 mins",
    servings: 12,
    ingredients: [
      "2 pounds ground beef",
      "3 ½ pounds chopped cabbage",
      "1 (29 ounce) can tomato sauce",
      "1 cup chopped onion",
      "1 cup uncooked white rice",
      "1 teaspoon salt",
      "2 (14 ounce) cans beef broth"
    ],
    instructions: [
      "Preheat the oven to 350 degrees F (175 degrees C) and gather all ingredients.",
      "Heat a large skillet over medium-high heat. Cook and stir ground beef in the hot skillet until browned and crumbly, 5 to 7 minutes. Drain and discard grease.",
      "Combine cabbage, tomato sauce, onion, rice, and salt in a large mixing bowl. Stir in cooked ground beef. Pour mixture into a 9x13-inch baking dish, then pour beef broth over top.",
      "Cover and bake in the preheated oven for 1 hour.",
      "Stir, re-cover, and bake until cabbage is tender and rice is done, 20 to 30 minutes more.",
      "Serve hot and enjoy!"
    ],
    image: cabbageRollImg,
  },
  
];