function palindromsjekk(){
    event.preventDefault();
    let ordet = document.getElementById('input').value;
    let bokstaver = ordet.split('');
    let reverse_bokstaver = bokstaver.reverse();
    let reverse_ordet = reverse_bokstaver.join('')

    if (reverse_ordet === ordet){
        document.getElementById('output').value = "Dette er et palindrom!"
    }
    else{
        document.getElementById('output').value = "Dette er ikke et palindrom!"
    }
}