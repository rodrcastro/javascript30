const inputs = document.querySelectorAll('.controls input');

function onChange(event) {
  const suffix = event.target.dataset.sizing || '' ;
  
  document.documentElement.style.setProperty(`--${event.target.name}`, `${event.target.value}${suffix}`)
}

inputs.forEach(element => {
  element.addEventListener('change', onChange);
  element.addEventListener('mousemove', onChange);
})