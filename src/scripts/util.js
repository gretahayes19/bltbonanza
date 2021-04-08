export const isBread = (ingredient) => {
    return ingredient.ingredient?.currentSrc.includes("bread");
}

export const BREAD = new Image();
BREAD.src = './dist/images/bread.png'
export const MAYOFLAT = new Image();
MAYOFLAT.src = './dist/images/mayoflat.png'

export const keys = {
    leftPressed: false,
    rightPressed: false
}
