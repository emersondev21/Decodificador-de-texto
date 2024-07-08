function validarTexto(texto) {
  // Expressão regular para permitir apenas letras minúsculas sem acentos
  const regex = /^[a-z\s]*$/;
  return regex.test(texto);
}

function criptografar() {
  let texto = document.getElementById('entrada').value;

  if (!validarTexto(texto)) {
    document.getElementById("textinho").textContent = "Por favor, use apenas letras minúsculas sem acentos ou caracteres especiais.";
    return;
  }

  let textoCriptografado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    document.getElementById("textinho").textContent = textoCriptografado;
    document.getElementById('resultado').value = textoCriptografado;
  // document.getElementById('divMensagem').style.display = "none";
}

function descriptografar() {
  let texto = document.getElementById('entrada').value;

  if (!validarTexto(texto)) {
    document.getElementById("textinho").textContent = "Por favor, use apenas letras minúsculas sem acentos ou caracteres especiais.";
    return;
  }

  let textoDescriptografado = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    document.getElementById("textinho").textContent = textoDescriptografado;
    document.getElementById('resultado').value = textoDescriptografado;
  // document.getElementById('divMensagem').style.display = "none";
}

function copiarTexto() {
  navigator.clipboard.writeText(document.getElementById("resultado").value)
}