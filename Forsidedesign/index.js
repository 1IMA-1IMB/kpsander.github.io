function scrollArticle(){
    if (document.getElementById('article1').style.display == 'flex'){
        document.getElementById('article1').style.display = 'none';
        document.getElementById('article2').style.display = 'flex';
    }
    else if(document.getElementById('article2').style.display == 'flex'){
        document.getElementById('article2').style.display = 'none';
        document.getElementById('article3').style.display = 'flex';
    }
    else{
        document.getElementById('article3').style.display = 'none';
        document.getElementById('article1').style.display = 'flex';
    }
}
