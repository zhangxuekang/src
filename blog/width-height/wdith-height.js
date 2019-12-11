const box = document.querySelector('.box');
const handle = document.querySelector('.handle');
handle.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', handleMove);
  window.addEventListener('mouseup', removeListener);
});
function handleMove(e) {
  const boxRect = box.getClientRects()[0];
  const { left: boxLeft, top: boxTop } = boxRect;
  const { pageX: eLeft, pageY: eTop } = e;
  if (eLeft > boxLeft) {
    box.style.width = `${eLeft + 5 - boxLeft}px`;
  } else {
    box.style.width = '0';
  }
  if (eTop > boxTop) {
    box.style.height = `${eTop + 5 - boxTop}px`;
  } else {
    box.style.height = '0';
  }
}
function removeListener() {
  window.removeEventListener('mousemove', handleMove);
  window.removeEventListener('mouseup', removeListener);
}
