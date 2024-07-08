function validarTexto(texto) {
  // Expressão regular para permitir apenas letras minúsculas sem acentos
  const regex = /^[a-z\s]*$/;
  return regex.test(texto);
}

function criptografar() {
  let texto = document.getElementById('entrada').value;

  if (!validarTexto(texto)) {
    alert("Por favor, use apenas letras minúsculas sem acentos ou caracteres especiais.");
    return;
  }

  let textoCriptografado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  document.getElementById('resultado').value = textoCriptografado;
}

function descriptografar() {
  let texto = document.getElementById('entrada').value;

  if (!validarTexto(texto)) {
    alert("Por favor, use apenas letras minúsculas sem acentos ou caracteres especiais.");
    return;
  }

  let textoDescriptografado = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  document.getElementById('resultado').value = textoDescriptografado;
}

function copiarTexto() {
  navigator.clipboard.writeText(document.getElementById('resultado').value).then(() => {
    alert("Texto copiado para a área de transferência.");
  }, () => {
    alert("Falha ao copiar o texto.");
  });
}
