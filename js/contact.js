(() => {
  'use strict';
  const form = document.getElementById('frmcontacto');
  const status = document.getElementById('form-status');
  const messages = { nombre: 'Escribe tu nombre.', email: 'Escribe un correo válido, por ejemplo nombre@empresa.com.', mensaje: 'Cuéntanos qué necesitas realizar.' };
  const fields = ['nombre', 'email', 'mensaje'].map(name => form.elements.namedItem(name));
  function validate(field) {
    const valid = field.value.trim().length > 0 && field.validity.valid;
    field.setAttribute('aria-invalid', String(!valid));
    document.getElementById(field.name + '-error').textContent = valid ? '' : messages[field.name];
    return valid;
  }
  fields.forEach(field => field.addEventListener('input', () => {
    if (field.hasAttribute('aria-invalid')) validate(field);
    // A prepared message must never silently retain an earlier version of the fields.
    status.replaceChildren();
  }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const invalid = fields.filter(field => !validate(field));
    if (invalid.length) { status.textContent = 'Revisa los campos indicados para continuar.'; invalid[0].focus(); return; }
    const [nombre, email, mensaje] = fields.map(field => field.value.trim());
    const text = `Hola Arkyproyectos SAC, mi nombre es ${nombre} (${email}). Deseo realizar la siguiente consulta: ${mensaje}`;
    const whatsapp = 'https://api.whatsapp.com/send?phone=51970969372&text=' + encodeURIComponent(text);
    const mail = 'mailto:arkyproyectosac@hotmail.com?subject=' + encodeURIComponent('Consulta web de ' + nombre) + '&body=' + encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\n${mensaje}`);
    const result = document.createElement('div'); result.className = 'form-result';
    const title = document.createElement('h3'); title.textContent = 'Tu mensaje está preparado.';
    const note = document.createElement('p'); note.textContent = 'Confirma el envío en WhatsApp. Si la ventana no se abre, usa el enlace de abajo o continúa por correo. Conservamos lo que escribiste.';
    const actions = document.createElement('div'); actions.className = 'form-actions';
    const wa = document.createElement('a'); wa.href = whatsapp; wa.target = '_blank'; wa.rel = 'noopener noreferrer'; wa.textContent = 'Abrir WhatsApp ↗';
    const emailLink = document.createElement('a'); emailLink.href = mail; emailLink.textContent = 'Continuar por correo ↗';
    actions.append(wa, emailLink); result.append(title, note, actions); status.replaceChildren(result);
    window.open(whatsapp, '_blank', 'noopener,noreferrer');
  });
  const mapStatus = document.getElementById('map-status');
  if (!window.L) { mapStatus.textContent = 'No se pudo cargar el mapa. Puedes abrir la ubicación con el enlace de abajo.'; return; }
  try {
    const map = L.map('map', { scrollWheelZoom: false }).setView([-18.043010, -70.251676], 16);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' });
    tiles.on('tileerror', () => { mapStatus.textContent = 'Algunas partes del mapa no se pudieron cargar. Puedes abrir la ubicación con el enlace de abajo.'; });
    tiles.addTo(map);
    L.marker([-18.043010, -70.251676], {alt:'Oficina de Arkyproyectos SAC'}).addTo(map).bindPopup('<b>Arkyproyectos SAC</b><br>Mza. C Lote 10, Asc. 1 de Mayo<br>Tacna, Perú');
  } catch (_) { mapStatus.textContent = 'No se pudo mostrar el mapa. Puedes abrir la ubicación con el enlace de abajo.'; }
})();
