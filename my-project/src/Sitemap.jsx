function Sitemap() {
  const sitemapContent = `
  <?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://www.mottaclean.com.br/</loc>
  <lastmod>2023-08-11T18:15:29+00:00</lastmod>
</url>

<url>
        <loc>https://www.mottaclean.com.br/servicos</loc>
        <lastmod>2023-08-11T18:15:29+00:00</lastmod>
    </url>
    <url>
        <loc>https://www.mottaclean.com.br/contatos</loc>
        <lastmod>2023-08-11T18:15:29+00:00</lastmod>
    </url>


</urlset>
  `;

  return (
    <pre>
      {sitemapContent}
    </pre>
  );
}

export default Sitemap;