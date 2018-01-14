
const pointerOffset = {
  x: 0,
  y: 0,
}

function domReady() {
  interact('section')
    .draggable({
      inertia: true,
      restrict: {
        // restriction: 'parent',
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      autoScroll: true,

      onstart: onDragStart,
      onmove: onDragMove,
      onend: onDragEnd,
    });
}

function onDragStart(event) {
  const target = event.target
  const x = event.pageX - (target.dataset.x || target.offsetLeft)
  const y = event.pageY - (target.dataset.y || target.offsetTop)
  pointerOffset.x = x
  pointerOffset.y = y
}

function onDragMove(event) {
  const target = event.target
  let x = event.pageX - (pointerOffset.x || 0)
  let y = event.pageY - (pointerOffset.y || 0)
  if (event.shiftKey) {
    if (Math.abs(x - target.dataset.x) < Math.abs(y - target.dataset.y)) {
      x = target.dataset.x
    } else {
      y = target.dataset.y
    }
  }
  target.style.webkitTransform = target.style.transform = `translate(${x}px,${y}px)`
}

function onDragEnd(event) {
  const target = event.target
  let x = event.pageX - (pointerOffset.x || 0)
  let y = event.pageY - (pointerOffset.y || 0)
  if (event.shiftKey) {
    if (Math.abs(x - target.dataset.x) < Math.abs(y - target.dataset.y)) {
      x = target.dataset.x
    } else {
      y = target.dataset.y
    }
  }
  target.style.WikiTransform = target.style.transform = `translate(${x}px,${y}px)`
  target.dataset.x = x;
  target.dataset.y = y;
}

document.addEventListener('DOMContentLoaded', domReady)
