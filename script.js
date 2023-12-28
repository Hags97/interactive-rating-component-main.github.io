document.addEventListener('DOMContentLoaded', function()
{
    let scores = document.querySelectorAll('.sc');
    let selectedScore;

    scores.forEach(score =>{
        score.addEventListener('click', function(){
            scores.forEach(score => score.classList.remove('selected'));
            this.classList.add('selected');
            
        });
    });

    let btn = document.querySelector('.btn');
    btn.addEventListener('click', function(){
        let selectedElement = document.querySelector('.sc.selected');
        if(selectedElement)
        {
            selectedScore = selectedElement.textContent;

            document.querySelector('.container').style.display = 'none';
            document.querySelector('.thanks').style.display = 'flex';
            document.querySelector('.selected-score').innerHTML = selectedScore;
        }
        else{
            alert('Please select a score before submitting');
        }
        
    })
});