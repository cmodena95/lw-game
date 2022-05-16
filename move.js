function moveLeft(e) {
    console.log(e);
    if (e.keyCode == 37) {
      const style = getComputedStyle(wagon);
      let positionLeft = style.left;
      let positionTop = style.top;
      if (positionLeft == '0px') {
        console.log('stop');
      } else {
        wagon.style.left = parseInt(wagon.style.left) - 10 + "px";
      }
    }
  }
  function moveUp() {
    let style = getComputedStyle(wagon);
    let positionTop = style.top;
    if (positionTop == '160px') {
      console.log('stop');
    } else {
      wagon.style.top = parseInt(wagon.style.top) - 10 + "px";
    }
  }
  function moveRight() {
    wagon.style.left = parseInt(wagon.style.left) + 10 + "px";
    const style = getComputedStyle(wagon);
    let positionLeft = style.left;
    let positionTop = style.top;
    if (positionLeft == '670px') {
      document.addEventListener('keydown', diagonal);
    }
  }

  function moveDown() {
    let style = getComputedStyle(wagon);
    let positionTop = style.top;
    if (positionTop == '250px') {
      console.log('stop');
    } else {
      wagon.style.top = parseInt(wagon.style.top) + 10 + "px";
    }
  }



  var wagon = null;
  function init() {
      wagon = document.querySelector(".wagon");
      wagon.style.position = "absolute";
      wagon.style.left = "0px";
      wagon.style.top = "200px";
    }

  let step = 0;
  let stepy = 0;
  let stepx = 0;

  function flip(e) {
    let style = getComputedStyle(wagon);
    let positionLeft = style.left;
    wagon.style.transform = `translate(${stepx}px, ${stepy}px) scaleX(-1)`;
    console.log(positionLeft);
    // wagon.style.left = parseInt(wagon.style.left) - 5 + "px";
    // if (positionLeft == '830px') {
      document.addEventListener('keydown', moveLeft);
    // }
  }

  function diagonal(e) {
    let style = getComputedStyle(wagon);
    let positionLeft = style.left;
    let positionTop = style.top;
    console.log(`left: ${positionLeft}`);
    console.log(`top: ${positionTop}`);
    stepx = stepx + 1;
    stepy = stepy + 10;
    wagon.style.transform = `translate(${stepx}px, ${stepy}px)`;
    
    if (positionLeft == '820px') {
      document.addEventListener('keydown', flip);
    }
  }

  function getKeyAndMove(e) {
    e.view.event.preventDefault();
    var key_code = e.which || e.keyCode;
    switch (key_code) {
      case 37: //left arrow key
        moveLeft();
        break;
      case 38: //Up arrow key
        moveUp();
        break;
      case 39: //right arrow key
        moveRight();
        break;
      case 40: //down arrow key
        moveDown();
        break;
    }
  }

    // wagon = document.querySelector('.wagon');
    //   const style = getComputedStyle(wagon);
    //   let positionLeft = style.left;
    //   let positionTop = style.top;

  function moveLeft(e) {
    console.log(e);
    if (e.keyCode == 37) {
      const style = getComputedStyle(wagon);
      let positionLeft = style.left;
      let positionTop = style.top;
      if (positionLeft == '0px') {
        console.log('stop');
      } else {
        wagon.style.left = parseInt(wagon.style.left) - 10 + "px";
      }
    }
  }

  function moveUp() {
    let style = getComputedStyle(wagon);
    let positionTop = style.top;
    if (positionTop == '160px') {
      console.log('stop');
    } else {
      wagon.style.top = parseInt(wagon.style.top) - 10 + "px";
    }
  }

  function moveRight() {
    wagon.style.left = parseInt(wagon.style.left) + 10 + "px";
    const style = getComputedStyle(wagon);
    let positionLeft = style.left;
    let positionTop = style.top;
    if (positionLeft == '670px') {
      document.addEventListener('keydown', diagonal);
    }
  }

  function moveDown() {
    let style = getComputedStyle(wagon);
    let positionTop = style.top;
    if (positionTop == '250px') {
      console.log('stop');
    } else {
      wagon.style.top = parseInt(wagon.style.top) + 10 + "px";
    }
  }
  window.onload = init;






//   new move
function drive(e) {
    e.view.event.preventDefault();
    let positionLeft = getComputedStyle(wagon).left;
    let positionTop = getComputedStyle(wagon).top;
    if (positionTop == '200px') {
      road1(e);
    }
  }

  function road1(e) {
    position = getComputedStyle(wagon).transform;
    if (e.keyCode == 39 && position == 'matrix(-1, 0, 0, 1, 190, 190)') {
      console.log('stop');
    } else if (e.keyCode == 39) {
      let positionLeft = getComputedStyle(wagon).left;
      if (positionLeft == '660px') {
        diagonalRight();
      } else {
        moveRight();
      }
    } else if (e.keyCode == 37) {
      position = getComputedStyle(wagon).transform;
      if (position == 'matrix(-1, 0, 0, 1, 190, 190)') {
        document.addEventListener('keydown', road2);
      }
    }
  }


  function road2(e) {
    position = getComputedStyle(wagon).transform;
    positionTop = getComputedStyle(wagon).top;
    if (e.keyCode == 37 && position == 'matrix(-1, 0, 0, 1, -530, 430)' && positionTop == '400px') {
      wagon.style.transform = 'matrix(1, 0, 0, 1, -530, 430)';
      document.removeEventListener('keydown', road2);
      document.addEventListener('keydown', road3);
    } else if (e.keyCode == 37 && position == 'matrix(-1, 0, 0, 1, -530, 430)') {
      moveDown(e);
    } else if (e.keyCode == 37) {
      console.log('driving');
      stepx = stepx - 30;
      stepy = stepy + 10;
      wagon.style.transform = `translate(${stepx}px, ${stepy}px) scaleX(-1)`;
    }
  }

  function road3(e) {
    position = getComputedStyle(wagon).transform;
    if (e.keyCode == 39) {
      document.addEventListener('keydown', moveRight);
    }
  }


  // diagonals
//   let stepy = 0;
//   let stepx = 0;

  function diagonalRight(e) {
    stepx = stepx + 10;
    stepy = stepy + 10;
    wagon.style.transform = `translate(${stepx}px, ${stepy}px)`;

    let position = getComputedStyle(wagon).transform;
    if (position == 'matrix(1, 0, 0, 1, 190, 190)') {
      wagon.style.transform = `translate(${stepx}px, ${stepy}px) scaleX(-1)`;
    }
  }



  // moving
  function moveLeft(e) {
    let positionLeft = getComputedStyle(wagon).left;
    if (positionLeft == '0px') {
      console.log('stop');
    } else {
      wagon.style.left = parseInt(wagon.style.left) - 20 + "px";
    }
  }

  function moveRight(e) {
    wagon.style.left = parseInt(wagon.style.left) + 20 + "px";
  }

  function moveUp(e) {
    wagon.style.top = parseInt(wagon.style.top) - 20 + "px";
  }

  function moveDown(e) {
    wagon.style.top = parseInt(wagon.style.top) + 20 + "px";
  }

  window.onload = init;