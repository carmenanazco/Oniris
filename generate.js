const fs = require("fs");

// Leer JSON (puede ser un array o un objeto único, mejor guardarlo como array)
const posts = JSON.parse(fs.readFileSync("posts.json", "utf-8"));

// Plantilla para cada post individual
function createPostHTML(post) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${post.titulo} | Oniris</title>
  <meta name="description" content="${post.resumen}">
  <meta name="author" content="Oniris">
  <meta name="keywords" content="${post.keywords}">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="shortcut icon" href="../img/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <div class="container">
    <a href="../blog.html" class="btn btn-custom mt-3">
        <i class="bi bi-arrow-left-circle"></i>
        Volver al blog
    </a>
  </div>

  <section class="blog-post container py-5 text-light">
    <div class="container py-5">
      <h1 class="mb-3 display-5 fw-bold">${post.titulo}</h1>
      <img src="${post.imagen}" alt="${post.titulo} class="img-fluid rounded shadow mb-3">
      <p class="text-body-ligth"><em>Por Oniris • ${post.fecha}</em></p>
      <p class="text-body-ligth">${post.introduccion}</p>
    </div>

    <article id="contenido" class="content mx-auto container" style="max-width: 800px;">
      <h2 class="mb-3 fw-bold">${post.subtitulo}</h2>
      <p class="mb-3">${post.contenido}</p>
      <h2 class="mb-3 fw-bold">${post.subtitulo2}</h2>
      <p class="mb-3">${post.contenido2}</p>

    <blockquote id="mensaje" class="blockquote text-center my-4">
      <p class="mb-0">${post.mensaje}</p>
    </blockquote>

    <h3>🌟 Consejos prácticos</h3>
    <ul>
      ${post.consejos.map(c => `<li>${c}</li>`).join("")}
    </ul>    
    </article>

</section>

<Section>
  <div class="text-center mt-5">
      <a href="../index.html#ebooks" class="btn btn-custom btn-lg">
        ✨ Aprende más con nuestros Ebooks ✨
      </a>
    </div>
  <div class="text-center mt-5 share-buttons">
    <p class="fw-bold">✨ Comparte este artículo:</p>
    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.slug)}" id="share-facebook" class="btn btn-sm btn-outline-light me-2" target="_blank">Facebook</a>
    <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(post.slug)}&text=${encodeURIComponent(post.titulo)}" id="share-twitter" class="btn btn-sm btn-outline-light me-2" target="_blank">Twitter/X</a>
    <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(post.titulo + " " + post.slug)}" id="share-whatsapp" class="btn btn-sm btn-outline-light" target="_blank">WhatsApp</a>
  </div>
</Section>
</body>
</html>`;
}

// Plantilla del listado de blog
function createBlogHTML(posts) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Explora artículos sobre tarot, astrología, rituales y espiritualidad en el blog de Oniris.">
  <meta name="author" content="Oniris">
  <meta name="keywords" content="tarot, astrología, carta natal, casas astrológicas, tarot, significado de cartas, rituales de luna, Oniris">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="shortcut icon" href="../img/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="../css/style.css">
  <title>Blog de Astrología y Tarot | Oniris</title>
</head>
<body>

  <div class="container">
    <a href="./index.html" class="btn btn-custom mt-3">
      <i class="bi bi-arrow-left-circle"></i>
      Volver a Inicio
    </a>
  </div>

  <div class="container py-5">
    <h1 class="text-center mb-4 fw-bold">Blog de Astrología y Tarot ✨</h1>
    <p class="text-center">Artículos y guías de Astrología, Tarot y espiritualidad para tu camino interior ✨</p>
    <div id="blogContainer" class="row g-4">
    ${posts.map(p => `
      <div class="post col-md-4">
        <div class="card h-100 bg-dark text-light border-0 shadow">
          <a href="posts/${p.slug}.html">
            <img src="${p.imagen}" alt="${p.titulo}" class="card-img-top">
          </a>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.titulo}</h5>
            <p><em>${p.fecha}</em></p>
            <p class="card-text flex-grow-1">${p.resumen}</p>
            <a href="posts/${p.slug}.html" class="btn btn-custom mt-auto">Leer más</a>
          </div>
        </div>
      </div>
    `).join("")}
    
    
    </div>
  </div>

</body>
</html>`;
}

// Crear carpeta posts si no existe
if (!fs.existsSync("posts")) {
  fs.mkdirSync("posts");
}

// Generar cada post individual
posts.forEach(post => {
  const filePath = `posts/${post.slug}.html`;
  fs.writeFileSync(filePath, createPostHTML(post));
  console.log(`✅ Generado: ${filePath}`);
});

// Generar blog.html
fs.writeFileSync("blog.html", createBlogHTML(posts));
console.log("✅ Generado: blog.html");



