let RecipeIdArray = [];

window.onload = function(){
    $('.showHere').hide();
    $('.stayHidden').hide();
}

function getRecipeIdArray(){
    $('.RecipeIdList').each(function(){
        RecipeIdArray.push($(this).html());
    })
    console.log(RecipeIdArray);
    return RecipeIdArray;
}

function displayRecipe(num){
    let randomRecipeId = $.trim(RecipeIdArray[num]);
    let RecipeName = $('#id'+randomRecipeId).html();
    console.log(RecipeName);
    if (randomRecipeId){
        $('.showHere').show();
        $('.showRecipeHere').html(RecipeName);
    }
}

const runShuffle = () => {
    RecipeIdArray = [];
    getRecipeIdArray();
    let num = Math.floor(Math.random()* (RecipeIdArray.length));
    displayRecipe(num);
}

// Maybe This Will Work







