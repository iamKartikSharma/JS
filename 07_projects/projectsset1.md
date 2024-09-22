# Project related to DOM

## project link


# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(a){
    console.log(a)
    console.log(a.target)
    if(a.target.id == 'grey'){
      body.style.backgroundColor = a.target.id;
    }
    if(a.target.id == 'yellow'){
      body.style.backgroundColor = a.target.id;
    }
    if(a.target.id == 'white'){
      body.style.backgroundColor = a.target.id;
    }
    if(a.target.id == 'blue'){
      body.style.backgroundColor = a.target.id;
    }
  });
});

```